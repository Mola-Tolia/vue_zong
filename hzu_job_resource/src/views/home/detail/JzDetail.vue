<template>
  <div class="JzDetail">
    <div class="JzDetail">
        <div class="closebtn" @click="closebtn">
            <i class="material-icons">clear</i>
        </div>
        <div class="contentBox">
            <h2>
              {{item.jobName}}
              <span>发布时间：{{item.dataTime}}</span>
              <i class="material-icons" @click="favorite = !favorite">{{favoriteIcon}}</i>
            </h2>
            <div class="bar_1">
                <p>{{ item.payMethod }}</p>
                <p>{{item.salary}}</p>
            </div>
            <div class="bar_2">
                <p class="area">地点</p>
                <p>{{item.area}}</p>
            </div>
            <div class="bar_3">
                <div>
                    <img />
                    <p>{{ item.detail }}</p>
                </div>
            </div>
            <div class="bar_4">
                <p>联系方式：{{item.contactWay}}</p>
            </div>
            <div class="bar_5">
                <p>性质：{{ item.organization }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JzDetail",
  props: ["item","isHome"],
  data () {
      return {
          favorite:false,
          favoriteIcon:'favorite_border'
      }
  },
  watch:{
    favorite(v){
      if(v){
        this.favoriteIcon = 'favorite'
        let c = JSON.parse(localStorage.getItem('collectionJZ')) || []
        if(!c.includes(this.item.id)){
          c.unshift(this.item.id)
          localStorage.setItem('collectionJZ',JSON.stringify(c))
        }
      }else{
        this.favoriteIcon = 'favorite_border'
        let c = JSON.parse(localStorage.getItem('collectionJZ'))
        c = c.filter((i) => {
          return i !== this.item.id
        })
        localStorage.setItem('collectionJZ',JSON.stringify(c))
      }
    }
  },
  methods: {
    closebtn() {
      if(this.isHome){
        this.$router.back()
      }else{
        this.$emit('resetIsAppear');
      }
    },
  },
  mounted () {
    this.favorite = JSON.parse(localStorage.getItem('collectionJZ').includes(this.item.id))
  }
};
</script>

<style scoped>
.JzDetail {
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
}
.JzDetail .closebtn {
  position: absolute;
  width: 49px;
  height: 50px;
  left: 50%;
  top: 50%;
  transform: translate(410px, -300px);
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.JzDetail .closebtn i {
  background-color: black;
  color: white;
  font-size: 50px;
  user-select: none;
  transition: 0.5s;
}
.JzDetail .closebtn:hover i {
  background-color: white;
  color: black;
  animation: clobtn_rot 1.5s ease;
}
.JzDetail .contentBox {
  position: absolute;
  height: 600px;
  width: 800px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 30px;
  box-sizing: border-box;
  border: 10px solid white;
  overflow: auto;
}
.JzDetail .contentBox h2 {
  position: relative;
  border-bottom: 1px solid rgb(190, 190, 190);
  padding-bottom: 10px;
  font-weight: 500;
}
.JzDetail .contentBox h2 span{
  color: #a5a5a5;
  font-size: 10px;
  padding: 0;
  margin-left: 10px;

}
.JzDetail .contentBox h2 > i{
  user-select: none;
  position: absolute;
  right: 0;
  color: rgb(237, 109, 70);
  font-size: 30px;
}
.JzDetail .contentBox > div {
  padding: 10px 20px;
  border-bottom: 1px solid rgb(190, 190, 190);
}
.JzDetail .contentBox .bar_1 {
  height: 80px;
}
.JzDetail .contentBox .bar_1 p:first-child {
  float: left;
  width: 100px;
  height: 80px;
  box-sizing: border-box;
  padding: 2px 5px;
}
.JzDetail .contentBox .bar_1 p:last-child {
  float: left;
  margin-left: 20px;
  width: 100px;
  height: 80px;
  box-sizing: border-box;
  padding: 2px 5px;
}
.JzDetail .contentBox .bar_2 .area{
  font-size: 18px;
}
.JzDetail .contentBox .bar_2 p {
  height: 10px;
  box-sizing: border-box;
  padding: 2px 5px;
}
.JzDetail .contentBox .bar_3 div {
  height: 200px;
  box-sizing: border-box;
  padding: 2px 5px;
}
.JzDetail .contentBox .bar_3 img {
  float: left;
  width: 100px;
  height: 100px;
  margin: 5px;
}
.JzDetail .contentBox .bar_3 p {
  float: left;
  margin: 5px;
}
.JzDetail .contentBox .bar_4 p {
  line-height: 20px;
  box-sizing: border-box;
  padding: 2px 5px;
}
.JzDetail .contentBox .bar_5 p {
  height: 100px;
  box-sizing: border-box;
  padding: 2px 5px;
}
.JzDetail .contentBox::-webkit-scrollbar {
  border-radius: 10px;
  width: 20px;
  background-color: #f6f6f6;
}
.JzDetail .contentBox::-webkit-scrollbar-button {
  width: 20px;
  height: 20px;
  background-color: rgb(224, 223, 198);
}
.JzDetail .contentBox::-webkit-scrollbar-button:start:vertical {
  border-radius: 50% 50% 0 0;
  border-bottom: 1px solid #d2d2d2;
}
.JzDetail .contentBox::-webkit-scrollbar-button:start:horizontal {
  border-radius: 50% 0 0 50%;
  border-right: 1px solid #d2d2d2;
}
.JzDetail .contentBox::-webkit-scrollbar-button:end:vertical {
  border-radius: 0 0 50% 50%;
  border-top: 1px solid #d2d2d2;
}
.JzDetail .contentBox::-webkit-scrollbar-button:end:horizontal {
  border-radius: 0 50% 50% 0;
  border-left: 1px solid #d2d2d2;
}
.JzDetail .contentBox::-webkit-scrollbar-thumb {
  width: 20px;
  height: 0;
  background-color: rgb(224, 223, 198);
}
p{
  margin: 20px 0;
}
</style>