<template>
  <div class="Publish">
    <router-view />
    <div class="publishType">
      <router-link @click.native="backToTop(1)" to="/publish/sxfb">实习</router-link><br />
      <router-link @click.native="backToTop(2)" to="/publish/jzfb">兼职</router-link><br />
      <!-- <router-link to="/publish/qzfb">求助</router-link> -->
      <a>求助</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Publish",
  data () {
      return {
          a:this.$store.state.backToTop
      }
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
  methods: {
    backToTop(n){
      if(n !== this.$store.state.n){
        this.a()
        this.$store.commit("alterN",n)
      }
      // let topDistance = window.pageYOffset
      // scrollBy(0, -20)
      // let scrolldelay = setTimeout(this.backToTop, 1)
      // if (topDistance === 0) {
      //   clearTimeout(scrolldelay);
        // scrolldelay = null;
      // }
    }
  },
  mounted () {
      // setInterval(() => {
      //   console.log(document.documentElement.scrollTop)
      //   console.log(window.pageYOffset)
      //   console.log(document.body.scrollTop)
      // },50)
      this.$bus.$on('backToTop',this.backToTop)
  }
};
</script>

<style>
.Publish {
  width: 100%;
  display: flex;
}
.Publish > a{
  margin-top: 195px;
}
.publishType {
  position: sticky;
  display: inline-block;
  top: 195px;
  left: 50px;
  width: 100px;
  height: 200px;
}
.publishType > a {
  display: inline-block;
  width: 100px;
  height: 33.33%;
  cursor: pointer;
  margin-left: 50px;
  background-color: rgb(237, 109, 70);
  border: 1px solid rgb(224, 223, 198);
  text-decoration: none;
  text-align: center;
  line-height: 66.66px;
  color: rgb(224, 223, 198);
  cursor: url('../assets/default_pointer.png'),pointer;
}
.publishType > a.router-link-exact-active{
  background-color: rgb(224, 223, 198);
  color: rgb(237, 109, 70);
}
.publishType > a:first-child{
  border-radius: 5px 5px 0 0;
  border-bottom: none;
}
.publishType > a:last-child{
  border-radius: 0 0 5px 5px;
  border-top: none;
}
</style>