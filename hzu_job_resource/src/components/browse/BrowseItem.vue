<template>
  <div class="BrowseItem">
    <div class="package" ref="BrowseItem" @click="setIsAppear">
      <div class="inlineBlock">{{ item.jobName }}</div>
      <div class="inlineBlock">
        {{ item.company }}&nbsp;&nbsp;
        {{ item.area }}
      </div>
      <div class="inlineBlock">
        {{ item.salary }}
      </div>
      <div class="inlineBlock">
        {{ this.calculateDateTime }}
      </div>
    </div>
    <zp-detail
      v-if="isAppear == 1"
      :item="item"
      @resetIsAppear="resetIsAppear"
    />
    <jz-detail
      v-if="isAppear == 2"
      :item="item"
      @resetIsAppear="resetIsAppear"
    />
  </div>
</template>

<script>
import JzDetail from "../../views/home/detail/JzDetail.vue";
import ZpDetail from "../../views/home/detail/ZpDetail.vue";
export default {
  name: "BrowseItem",
  components: { JzDetail, ZpDetail },
  props: ["item", "colType", "i","dateTime"],
  data() {
    return {
      isAppear: 0,
    };
  },
  computed:{
    calculateDateTime(){
      return this.dateTime
    }
  },
  methods: {
    setIsAppear() {
      this.isAppear = this.colType;
    },
    resetIsAppear() {
      this.isAppear = 0;
    },
  },
  mounted() {
    console.log(new Date())
    this.$refs.BrowseItem.style.setProperty(
      "animation-delay",
      this.i * 0.15 + "s"
    );
  },
};
</script>

<style scoped>
.BrowseItem {
  margin: 0 10px 10px 30px;
  height: 100px;
  min-width: 380px;
  border-radius: 10px;
}
.BrowseItem .package {
  opacity: 0;
  background-color: rgb(237, 109, 70);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  box-shadow: 10px 20px 60px 0px rgb(127, 51, 28);
  animation: moveRight 0.5s ease forwards;
}
.BrowseItem .package .inlineBlock {
  height: 100px;
  width: 24%;
  display: flex;
  align-items: center;
}
@keyframes moveRight {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>