<template>
  <div class="browse_history">
    <div class="lastTime">
      <p @click="lastTime(1)">一天内</p>
      <p @click="lastTime(3)">三天内</p>
      <p @click="lastTime(5)">五天内</p>
      <p @click="lastTime(7)">一周内</p>
      <p @click="lastTime(15)">半月内</p>
      <p @click="lastTime(31)">一个月内</p>
      <p @click="lastTime(120)">一个季度内</p>
      <p @click="lastTime(183)">半年内</p>
      <p @click="lastTime(365)">一年内</p>
      <p @click="lastTime(99999)">更久以前</p>
    </div>
    <div class="browseType">
      <button ref="drawer1" @click="turnColType(1,$event)">招<br />聘</button>
      <button ref="drawer2" @click="turnColType(2,$event)">兼<br />职</button>
      <button ref="drawer3" @click="turnColType(3,$event)">求<br />助</button>
    </div>
    <div class="filterContent">
      <browse-item
        v-for="(item, index) in filterData"
        :key="index"
        :i="index"
        :item="item"
        :colType="colType"
        :dateTime="dateTime[index]"
      />
    </div>
  </div>
</template>

<script>
import BrowseItem from "../components/browse/BrowseItem.vue";
export default {
  name: "browse_history",
  components: {
    BrowseItem,
  },
  data() {
    return {
      colType: 1,
      colData: [],
      filterData: [],
      ct1: [],
      ct2: [],
      ct3: [],
      dateTime:[]
    };
  },
  watch: {
    colType: {
      immediate: true,
      handler(n) {
        this.getData(n)
        switch(n){
          case 1:{this.dateTime = JSON.parse(localStorage.getItem("recordZPDateTime"));break}
          case 2:{this.dateTime = JSON.parse(localStorage.getItem("recordJZDateTime"));break}
          case 3:{this.dateTime = JSON.parse(localStorage.getItem("recordQZDateTime"));break}
        }
      },
    },
    ct1: {
      deep: true,
      immediate: true,
      handler(n) {
        this.filterData = this.colData = n;
      },
    },
  },
  methods: {
    getData(n){
      switch (n) {
          case 1: {
            this.filterData = this.colData = this.ct1;
            break;
          }
          case 2: {
            this.filterData = this.colData = this.ct2;
            break;
          }
          case 3: {
            this.filterData = this.colData = this.ct3;
            break;
          }
        }
    },
    turnColType(v,e) {
      this.colType = v;
      this.getData(v)
      this.$refs.drawer1.style.setProperty('width','100%')
      this.$refs.drawer2.style.setProperty('width','100%')
      this.$refs.drawer3.style.setProperty('width','100%')
      e.target.style.width = '120%'
    },
    lastTime(n) {
      let dateTime =
        this.colType === 1
          ? JSON.parse(localStorage.getItem("recordZPDateTime"))
          : this.colType === 2
          ? JSON.parse(localStorage.getItem("recordJZDateTime"))
          : JSON.parse(localStorage.getItem("recordQZDateTime"));
      this.filterData = this.colData.filter((ct, index) => {
        return new Date() - new Date(dateTime[index]) < 1000 * 60 * 60 * 24 * n
      });
    },
    getBh(_this, value, n) {
      let r;
      switch (n) {
        case 1: {
          r = JSON.parse(localStorage.getItem("recordZP"));
          break;
        }
        case 2: {
          r = JSON.parse(localStorage.getItem("recordJZ"));
          break;
        }
        case 3: {
          break;
        }
      }
      let ct = [];
      r.forEach((i) => {
        value.filter((item) => {
          if (item.id === i) {
            ct.push(item);
          }
        });
      });
      switch (n) {
        case 1: {
          _this.ct1 = ct;
          break;
        }
        case 2: {
          _this.ct2 = ct;
          break;
        }
        case 3: {
          _this.ct3 = ct;
          break;
        }
      }
    },
  },
  mounted() {
    this.$bus.$emit("PraBh", this.getBh, this, 1);
    this.$bus.$emit("PtjBh", this.getBh, this, 2);
  },
};
</script>

<style scoped>
.browse_history {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  top: 195px;
  width: 100%;
}
.lastTime {
  z-index: 1;
  position: relative;
  width: 150px;
  box-shadow: -5px 10px 40px 5px rgb(127, 51, 28);
  animation: moveRight 0.5s cubic-bezier(0, 0.1, 0.1, 1);
}
.lastTime > p {
  width: 100%;
  height: 40px;
  background-color: rgb(237, 109, 70);
  box-sizing: border-box;
  text-align: center;
  line-height: 40px;
}
.lastTime > p:hover{
  background-color: rgb(237, 135, 104);
}
.lastTime > p:active{
  background-color: rgb(199, 114, 89);
}
.browseType {
  /* z-index: 1; */
  position: relative;
  width: 50px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0 10px 10px 0;
  box-shadow: 5px 10px 40px 5px rgb(127, 51, 28);
  animation: moveRight 0.5s cubic-bezier(0, 0, 0.6, 1);
}
.browseType > button {
  height: 33.33%;
  border: none;
  background-color: rgb(224, 223, 198);
}
.browseType > button:first-child {
  border-bottom: 1px solid rgb(127, 51, 28);
  border-radius: 0 10px 0 0;
  width: 120%;
}
.browseType > button:last-child {
  border-top: 1px solid rgb(127, 51, 28);
  border-radius: 0 0 10px;
}
.filterContent {
  position: relative;
  width: calc(100% - 220px);
}
@keyframes moveRight {
  from {
    transform: translateX(-75px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>