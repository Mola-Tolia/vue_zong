<template>
  <div class="home">
    <keep-alive>
      <router-view />
    </keep-alive>
    <div class="classification">
      <router-link to="/home/zhaopin" @click.native="turn(0, $event)">
        <span :class="doubleLine[0]"></span>
        <i class="material-icons" :class="fontColor[0]">work</i>
        <p :class="fontColor[0]">招聘</p>
        <span :class="doubleLine[0]"></span>
      </router-link>
      <router-link :to="`/home/jianzhi?items=${JSON.stringify(JZItems)}`" @click.native="turn(1, $event)">
        <span :class="doubleLine[1]"></span>
        <i class="material-icons" :class="fontColor[1]">more_time</i>
        <p :class="fontColor[1]">兼职</p>
        <span :class="doubleLine[1]"></span>
      </router-link>
      <router-link to="/home/qiuzhu" @click.native="turn(2, $event)">
        <span :class="doubleLine[2]"></span>
        <i class="material-icons" :class="fontColor[2]">connect_without_contact</i>
        <p :class="fontColor[2]">求助</p>
        <span :class="doubleLine[2]"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      doubleLine: JSON.parse(sessionStorage.getItem("doubleLine")) || [
        "doubleLine",
      ],
      fontColor: JSON.parse(sessionStorage.getItem("fontColor")) || [
        "fontColor",
      ],
      n: 1,
      ZPItems: [
        {
          id: 1,
          company: "鹅厂",
          companyType: "xxx",
          jobType: "软件工程师",
          jobName: "高级前端开发工程师",
          area: "广东省深圳市龙华区",
          salary: "6000~8000元",
          eduRequirements: "本科",
          expRequirements: "至少写过两个项目",
          jobDetails: "xxxxxxxxxyyyyyyyy",
          companyDetails: "yyyyxxxx",
          tags: ["双休", "五险一金"],
          phone: "13333333333",
        },
        {
          id: 2,
          company: "华为",
          companyType: "yyy",
          jobType: "硬件工程师",
          jobName: "高级逻辑电路设计工程师",
          area: "上海市黄埔区",
          salary: "8000~12000元",
          eduRequirements: "本科",
          expRequirements: "至少写过三个项目",
          jobDetails: "aaaaabbbbb",
          companyDetails: "aabb",
          tags: ["双休", "八险一金"],
          phone: "18888888888",
        },
        {
          id: 3,
          company: "小米",
          companyType: "yyy",
          jobType: "硬件工程师",
          jobName: "高级逻辑电路设计工程师",
          area: "上海市黄埔区",
          salary: "8000~12000元",
          eduRequirements: "本科",
          expRequirements: "至少写过三个项目",
          jobDetails: "aaaaabbbbb",
          companyDetails: "aabb",
          tags: ["双休", "八险一金"],
          phone: "18888888888",
        },
        {
          id: 4,
          company: "阿里巴巴",
          companyType: "yyy",
          jobType: "硬件工程师",
          jobName: "高级逻辑电路设计工程师",
          area: "上海市黄埔区",
          salary: "8000~12000元",
          eduRequirements: "本科",
          expRequirements: "至少写过三个项目",
          jobDetails: "aaaaabbbbb",
          companyDetails: "aabb",
          tags: ["双休", "八险一金"],
          phone: "18888888888",
        },
        {
          id: 5,
          company: "字节跳动",
          companyType: "yyy",
          jobType: "硬件工程师",
          jobName: "高级逻辑电路设计工程师",
          area: "上海市黄埔区",
          salary: "8000~12000元",
          eduRequirements: "本科",
          expRequirements: "至少写过三个项目",
          jobDetails: "aaaaabbbbb",
          companyDetails: "aabb",
          tags: ["双休", "八险一金"],
          phone: "18888888888",
        },
      ],
      JZItems: [
        {
          id: 1,
          jobName: "餐厅服务员",
          payMethod: "小时计费",
          salary: "20/时",
          area: "深圳市福田区",
          dataTime: "2023-4-23",
          contactWay: "136526581692",
          organization: "个人",
          detail: "aaaaa",
          jobType:"写作和服务"
        },
        {
          id: 2,
          jobName: "打字员",
          payMethod: "小时计费",
          salary: "30/时",
          area: "广州市天河区",
          dataTime: "2023-3-15",
          contactWay: "17325161913",
          organization: "企业",
          detail: "bbbbb",
          jobType:"写作和服务"
        },
        {
          id: 3,
          jobName: "陪聊陪玩",
          payMethod: "小时计费",
          salary: "50/时",
          area: "深圳市龙岗区",
          dataTime: "2023-4-06",
          contactWay: "1394737616@qq.com",
          organization: "个人",
          detail: "ccccc",
          jobType:"影音视频服务"
        },
        {
          id: 4,
          jobName: "志愿者",
          payMethod: "小时计费",
          salary: "25/时",
          area: "深圳市龙岗区",
          dataTime: "2022-4-06",
          contactWay: "1394737616@qq.com",
          organization: "政府组织",
          detail: "ddddd",
          jobType:"others"
        },
        {
          id: 5,
          jobName: "广场演讲",
          payMethod: "全款",
          salary: "500元",
          area: "深圳市龙岗区",
          dataTime: "2024-4-06",
          contactWay: "1394737616@qq.com",
          organization: "企业",
          detail: "eeeee",
          jobType:"others"
        },
      ],
    };
  },
  methods: {
    turn(num, e) {
      this.doubleLine = [];
      this.doubleLine[num] = "doubleLine";
      this.fontColor = [];
      this.fontColor[num] = "fontColor";
    },
    sendZPInfo(_function, _this, n) {
      _function(_this, this.ZPItems, n);
    },
    sendJZInfo(_function, _this, n) {
      _function(_this, this.JZItems, n);
    },
  },
  watch: {
    doubleLine: {
      deep: true,
      handler(value) {
        sessionStorage.setItem("doubleLine", JSON.stringify(value));
      },
    },
    fontColor: {
      deep: true,
      handler(value) {
        sessionStorage.setItem("fontColor", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("resetRoute", () => {
      this.turn(0);
    });
    this.$bus.$on("PraBh", this.sendZPInfo);
    this.$bus.$on("PtjBh", this.sendJZInfo);
  },
  beforeRouteLeave(to, from, next) {
    sessionStorage.setItem("jobType", JSON.stringify(""));
    sessionStorage.setItem("salaryType", JSON.stringify(""));
    sessionStorage.setItem("areaType", JSON.stringify(""));
    next();
  },
};
</script>

<style>
.classification {
  position: fixed;
  top: 175px;
  right: 10%;
  width: 15%;
  min-width: 100px;
  height: 225px;
  background-color: rgb(224, 223, 198);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 3px 3px 10px rgb(177, 55, 18);
}
/* .classification a:first-child {
  color: rgb(237, 109, 70);
} */
.doubleLine {
  background-color: rgb(237, 109, 70);
}
.fontColor {
  color: rgb(237, 109, 70);
}
.classification a {
  text-decoration: none;
  color: black;
  position: relative;
  height: 33.33%;
  border-bottom: 1px solid rgb(154, 154, 154);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.classification a span:first-child {
  border-left: 1px solid rgb(224, 223, 198);
}
.classification a span:last-child {
  border-right: 1px solid rgb(224, 223, 198);
}
.classification a:hover span {
  background-color: rgb(237, 109, 70);
  transition: 0.5s;
}
.classification a i {
  user-select: none;
}
.classification a span {
  position: absolute;
  width: 5px;
  height: 80%;
}
.classification a span:first-child {
  left: 0;
}
.classification a span:last-child {
  right: 0;
}
</style>