<template>
  <div class="Qiuzhu">
    <div class="resource">
      <qiuzhu-item/>
      <qiuzhu-item/>
      <qiuzhu-item/>
      <qiuzhu-item/>
      <qiuzhu-item/>
      <qiuzhu-item/>
      <qiuzhu-item/>
      <qiuzhu-item/>
      <qiuzhu-item/>
    </div>
  </div>
</template>

<script>
import QiuzhuItem from '../../components/home/QiuzhuItem.vue'
export default {
  name: "Qiuzhu",
  components: {QiuzhuItem},
  mounted () {
  }
};
</script>

<style>
.resource {
  position: absolute;
  top: 175px;
  left: 10%;
  width: 60%;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 10px;
  padding: 5px;
}
</style>