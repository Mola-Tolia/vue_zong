<template>
  <div class="CollectionItem" ref="setAnimation">
    <div class="package" @click="setIsAppear">
      <div class="itemLeft inpackage">{{ item.jobName }}</div>
      <div class="itemMiddle inpackage">{{ item.area }}</div>
      <div class="itemRight inpackage">{{ item.salary }}</div>
    </div>
    <zp-detail v-if="isAppear == 1" :item="item" @resetIsAppear="resetIsAppear" />
    <jz-detail v-if="isAppear == 2" :item="item" @resetIsAppear="resetIsAppear" />
  </div>
</template>

<script>
import JzDetail from "../../views/home/detail/JzDetail.vue";
import ZpDetail from "../../views/home/detail/ZpDetail.vue";
export default {
  name: "CollectionItem",
  props: ["item", "colType","i"],
  components: { JzDetail, ZpDetail },
  data() {
    return {
      isAppear: 0,
      time:null
    };
  },
  watch:{
    colType(){
      this.$forceUpdate
      // console.log(this)
    }
  },
  methods: {
    setIsAppear() {
      this.isAppear = this.colType;
    },
    resetIsAppear() {
      this.isAppear = 0;
    },
    executeAnimation(){
      document.styleSheets[7].insertRule(
        `@keyframes bambooSlip_${this.i} {
          0%{
            opacity: 0;
            transform: translateY(-${this.i * 100}px);
          }100%{
            opacity: 1;
            transform: translateY(0px);
          }
        }`,
        document.styleSheets[7].cssRules.length
      );
      this.time = setTimeout(() => {this.$refs.setAnimation.style.setProperty('opacity','1')},300 * (this.i?1:0) + this.i * 10)
      this.$refs.setAnimation.style.setProperty('animation','bambooSlip_' + this.i + ' 0.3s ease-out ' + this.i * 0.01 + 's')
    }
  },
  mounted() {
    this.executeAnimation()
  },
  beforeDestroy(){
    clearTimeout(this.time)
  }
};
</script>

<style>
.CollectionItem {
  opacity: 0;
  position: relative;
  height: 100px;
  border-radius: 10px;
  margin: 20px 0;
  border-width: 10px;
  color: rgb(237, 109, 70);
  box-shadow: 1px 1px 5px rgb(178, 104, 74);
  padding: 10px;
  box-sizing: border-box;
  min-width: 510px;
}
.CollectionItem .itemLeft {
  width: 200px;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
}
.CollectionItem .itemMiddle {
  height: 100%;
  min-width: calc(100% - 350px);
  float: left;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
}
.CollectionItem .itemRight {
  width: 150px;
  height: 100%;
  float: right;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
}
.CollectionItem > .package > .inpackage {
  padding: 0 10px;
  box-sizing: border-box;
}
.package {
  width: 100%;
  height: 100%;
}
</style>