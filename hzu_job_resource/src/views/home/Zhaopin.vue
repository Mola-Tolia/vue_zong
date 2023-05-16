<template>
  <div class="Zhaopin">
    <div class="mainlyContent">
      <router-link
        v-for="(item, index) in items"
        :key="index"
        :to="{
          name: 'detail',
          params: {
            item: item,
            isHome: true,
          },
        }"
      >
        <zhaopin-item :item="item" />
      </router-link>
      <router-view />
    </div>
  </div>
</template>

<script>
import ZhaopinItem from "../../components/home/ZhaopinItem.vue";
export default {
  name: "Zhaopin",
  components: { ZhaopinItem },
  data() {
    return {
      items: [
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
    };
  },
};
</script>

<style>
.mainlyContent {
  position: absolute;
  top: 175px;
  left: 10%;
  width: 60%;
  min-width: 400px;
  background-color: rgba(237, 109, 70, 0);
  border-radius: 10px;
}
.mainlyContent a:nth-child(odd) .ZhaopinItem .item {
  color: rgb(237, 109, 70);
  background-color: rgb(224, 223, 198);
  border: 1px solid rgb(237, 109, 70);
}
.mainlyContent a:nth-child(even) .ZhaopinItem .item {
  color: rgb(224, 223, 198);
  background-color: rgb(237, 109, 70);
  border: 1px solid rgb(224, 223, 198);
}
a:not(:first-child):hover + a .ZhaopinItem .item {
  animation: avoidMoveDown 0.3s linear forwards;
}
@keyframes avoidMoveDown {
  0% {
    margin-top: 20px;
  }
  50% {
    margin-top: 17.5px;
  }
  100% {
    margin-top: 15px;
  }
}
</style>