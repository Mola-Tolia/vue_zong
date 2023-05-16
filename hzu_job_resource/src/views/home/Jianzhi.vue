<template>
  <div class="Jianzhi">
    <div class="jianzhi">
      <div class="classify">
        <div>
          <span>类型</span>
          <p>
            <label
              :class="st.selectedType"
              v-for="(st, index) in salaryType"
              :key="index"
              :for="st.name"
            >
              {{ st.name }}
              <input :id="st.name" type="checkbox" v-model="st.selected" />
            </label>
          </p>
        </div>
        <div>
          <span>种类</span>
          <p>
            <label
              :class="jt.selectedType"
              v-for="(jt, index) in jobType"
              :key="index"
              :for="jt.name"
            >
              {{ jt.name }}
              <input :id="jt.name" type="checkbox" v-model="jt.selected" />
            </label>
          </p>
        </div>
        <div>
          <span>区域</span>
          <p>
            <label
              :class="at.selectedType"
              v-for="(at, index) in area"
              :key="index"
              :for="at.name"
            >
              {{ at.name }}
              <input :id="at.name" type="checkbox" v-model="at.selected" />
            </label>
          </p>
        </div>
      </div>
      <div class="jianzhi_items">
        <p>
          <label :class="sortTypeCss[1]" for="newly">
            <input id="newly" name="sort" type="radio" :value=1 v-model="sortType"/>最新发布
          </label>
          <label :class="sortTypeCss[2]" for="highly">
            <input id="highly" name="sort" type="radio" :value=2 v-model="sortType"/>工资最高
          </label>
        </p>
        <router-link
          v-for="item in sortItems"
          :key="item.id"
          :to="{
            name: 'detail2',
            params: { item, isHome },
          }"
        >
          <jianzhi-item :item="item" />
        </router-link>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import JianzhiItem from "../../components/home/JianzhiItem.vue";
export default {
  name: "Jianzhi",
  props: ["items"],
  data() {
    return {
      sortItems:[],
      filterItems: this.items,
      jobFilter: this.items,
      salaryFilter: this.items,
      areaFilter: this.items,
      isHome: true,
      jobType: JSON.parse(sessionStorage.getItem("jobType")) || [
        {
          name: "品牌设计",
          selected: false,
          selectedType: "",
        },
        {
          name: "网站建设服务",
          selected: false,
          selectedType: "",
        },
        {
          name: "策划",
          selected: false,
          selectedType: "",
        },
        {
          name: "写作和服务",
          selected: false,
          selectedType: "",
        },
        {
          name: "影音视频服务",
          selected: false,
          selectedType: "",
        },
        {
          name: "摄影拍摄",
          selected: false,
          selectedType: "",
        },
        {
          name: "家教",
          selected: false,
          selectedType: "",
        },
        {
          name: "others",
          selected: false,
          selectedType: "",
        },
      ],
      salaryType: JSON.parse(sessionStorage.getItem("salaryType")) || [
        {
          name: "全款",
          selected: false,
          selectedType: "",
        },
        {
          name: "小时计费",
          selected: false,
          selectedType: "",
        },
      ],
      area: JSON.parse(sessionStorage.getItem("areaType")) || [],
      sortType:1,
      sortTypeCss:[]
    };
  },
  components: { JianzhiItem },
  watch: {
    jobType: {
      deep: true,
      handler(items) {
        this.watchType(items, "jobType");
        this.filterData(items, 1);
        this.calculateIntersection();
      },
    },
    salaryType: {
      deep: true,
      handler(items) {
        this.watchType(items, "salaryType");
        this.filterData(items, 2);
        this.calculateIntersection();
      },
    },
    area: {
      deep: true,
      handler(items) {
        this.watchType(items, "areaType");
        this.filterData(items, 3);
        this.calculateIntersection();
      },
    },
    filterItems:{
      immediate:true,
      handler(v){
        this.sortItems = v
        this.sortBySalary(v)
      }
    },
    sortType:{
      immediate:true,
      handler(v){
        this.sortTypeCss = []
        this.sortTypeCss[v] = 'sortType'
        this.sortBySalary(this.filterItems)
      }
    }
  },
  methods: {
    watchType(items, section) {
      items.forEach((item) => {
        if (item.selected) {
          item.selectedType = "selectedType";
        } else {
          item.selectedType = "";
        }
      });
      sessionStorage.setItem(section, JSON.stringify(items));
    },
    filterData(items, n) {
      let a = false;
      let DF = this.items;
      items.forEach((item) => {
        if (!item.selected) {
          DF = DF.filter((i) => {
            switch (n) {
              case 1: {
                return i.jobType !== item.name;
              }
              case 2: {
                return i.payMethod !== item.name;
              }
              case 3: {
                return (
                  i.area.substring(0, i.area.indexOf("市") + 1) !== item.name
                );
              }
            }
          });
        } else {
          a = true;
        }
      });
      switch (n) {
        case 1: {
          this.jobFilter = a ? DF : this.items;
          break;
        }
        case 2: {
          this.salaryFilter = a ? DF : this.items;
          break;
        }
        case 3: {
          this.areaFilter = a ? DF : this.items;
          break;
        }
      }
    },
    calculateIntersection() {
      this.filterItems = this.jobFilter
        .filter((jf) => {
          let j = false;
          this.salaryFilter.forEach((sf) => {
            j = jf.id === sf.id ? true : j;
          });
          return j;
        })
        .filter((i) => {
          let j = false;
          this.areaFilter.forEach((af) => {
            j = i.id === af.id ? true : j;
          });
          return j;
        });
    },
    sortBySalary(items){
      let i = items.slice(0)
      i.sort((a,b) => {
        if(this.sortType === 2){
          return parseInt(b.salary) - parseInt(a.salary)
        }else if(this.sortType === 1){
          return parseInt(a.dataTime.split('-').join('')) - parseInt(b.dataTime.split('-').join(''))
        }
      })
      this.sortItems = i
    }
  },
  mounted() {
    this.items.forEach((item) => {
      let isExist = false;
      let i = item.area;
      i = i.substring(0, i.indexOf("市") + 1);
      this.area.forEach((a) => {
        if (a.name.indexOf(i) !== -1) isExist = true;
      });
      if (!isExist) {
        this.area.push({
          name: i,
          selected: false,
          selectedtype: "",
        });
      }
    });
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.jianzhi {
  position: absolute;
  top: 175px;
  left: 13%;
  width: 54%;
  border-radius: 10px;
}
.jianzhi .classify {
  margin: 20px 0;
  width: 100%;
  background-color: rgb(224, 223, 198);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 30px;
}
.jianzhi .classify div {
  margin: 10px 0;
  width: 100%;
  min-height: 40px;
  box-sizing: border-box;
  padding: 10px;
  border-bottom: 1px solid rgb(237, 109, 70);
  border-left: 1px solid rgb(237, 109, 70);
}
.jianzhi .classify div > span {
  color: rgb(177, 55, 18);
  float: left;
}
.jianzhi .classify div > p {
  color: rgb(237, 109, 70);
}
.jianzhi .classify div > p > label {
  margin-left: 10px;
  border-radius: 5px;
  padding: 5px;
}
.jianzhi .classify div > p > label input {
  display: none;
}
.selectedType {
  background-color: rgba(250, 189, 172, 0.5);
}
.jianzhi .jianzhi_items {
  margin: 20px 0;
  width: 100%;
  background-color: rgb(237, 109, 70);
  padding: 30px;
  border-radius: 5px;
  box-sizing: border-box;
}
.jianzhi .jianzhi_items p {
  position: relative;
  height: 40px;
  margin: 20px 0;
}
.jianzhi .jianzhi_items p label {
  position: absolute;
  margin-top: 4px;
  line-height: 32px;
  width: 100px;
  text-align: center;
  border-radius: 5px;
  /* background-color: rgb(224, 223, 198); */
  color: rgb(255, 255, 167);
}
.jianzhi .jianzhi_items p label > input {
  display: none;
}
.sortType{
  background-color: rgb(177, 55, 18);
}
.jianzhi .jianzhi_items p label:last-child {
  left: 120px;
}
</style>