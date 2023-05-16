<template>
  <div class="ZpDetail">
    <div class="detailContent">
      <div class="closebtn" @click="closebtn">
        <i class="material-icons">clear</i>
      </div>
      <div class="contentBox">
        <div class="detail_1">
          <p class="subheading">
            职位信息
            <i class="material-icons ii" @click="favorite = !favorite">{{favoriteIcon}}</i>
          </p>
          <div class="list">
            <p>任职资格</p>
            <p>1.{{ item.eduRequirements }}</p>
            <p>2.{{ item.expRequirements }}</p>
          </div>
          <div>
            <p><span>职能类别：{{ item.jobType }}&nbsp;&nbsp;{{ item.jobName }}</span></p>
            <p><span>薪资：{{ item.salary }}</span></p>
            <p><span>工作描述：{{ item.jobDetails }}</span></p>
            <p class="tags"><span v-for="(tag,index) in item.tags" :key="index">{{tag}}&nbsp;&nbsp;</span></p>
          </div>
        </div>
        <div class="detail_2">
          <p class="subheading">工作地址</p>
          <div>
            <p>上班地址：<span>{{ item.area }}</span></p>
          </div>
        </div>
        <div class="detail_3">
          <p class="subheading">公司信息</p>
          <div>
            <p>
              <span>{{ item.company }}&nbsp;&nbsp;</span>
              <span>类型：{{ item.companyType }}</span>
            </p>
            <p>联系方式：{{ item.phone }}</p>
            <p>{{ item.companyDetails }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZpDetail",
  props: ["item","isHome"],
  data () {
      return {
          favorite:false,
          favoriteIcon:'favorite_border',
      }
  },
  watch:{
    favorite(v){
      if(v){
        this.favoriteIcon = 'favorite'
        let c = JSON.parse(localStorage.getItem('collectionZP')) || []
        if(!c.includes(this.item.id)){
          c.unshift(this.item.id)
          localStorage.setItem('collectionZP',JSON.stringify(c))
        }
      }else{
        this.favoriteIcon = 'favorite_border'
        let c = JSON.parse(localStorage.getItem('collectionZP'))
        c = c.filter((i) => {
          return i !== this.item.id
        })
        localStorage.setItem('collectionZP',JSON.stringify(c))
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
  mounted() {
    this.favorite = JSON.parse(localStorage.getItem('collectionZP').includes(this.item.id))
  },
};
</script>

<style scoped>
.collection-enter-active{
  animation: collect 0.5s linear;
}
@keyframes collect {
  50%{
    font-size: 50px;
    transform: translate(10px,-10px);
  }
}
.detailContent {
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
.detailContent .closebtn {
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
.detailContent .closebtn i {
  background-color: black;
  color: white;
  font-size: 50px;
  user-select: none;
  transition: 0.5s;
}
.detailContent .closebtn:hover i {
  background-color: white;
  color: black;
  animation: clobtn_rot 1.5s ease;
}
.detailContent .contentBox {
  /* position: absolute; */
  height: 600px;
  width: 800px;
  background-color: rgb(255, 255, 255);
  border: 20px solid white;
  border-radius: 10px;
  padding: 30px;
  box-sizing: border-box;
  overflow: auto;
}
.detailContent .contentBox .detail_1 {
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  border-top: 1px solid rgb(160, 160, 160);
  border-bottom: 1px solid rgb(160, 160, 160);
}
.detailContent .contentBox .detail_1 .list {
  margin-bottom: 5px;
}
.detailContent .contentBox .subheading {
  position: relative;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
}
.ii{
  user-select: none;
  position: absolute;
  right: 0;
  color: rgb(237, 109, 70);
  font-size: 30px;
}
.detailContent .contentBox div {
  padding: 0 10px;
  box-sizing: border-box;
}
.detailContent .contentBox .detail_2 {
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(160, 160, 160);
}
.detailContent .contentBox .subheading {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
}
.detailContent .contentBox div {
  padding: 0 10px;
  box-sizing: border-box;
}
.detailContent .contentBox .detail_3 {
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(160, 160, 160);
}
.detailContent .contentBox .subheading {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
}
.detailContent .contentBox div {
  padding: 0 10px;
  box-sizing: border-box;
}
.detailContent .contentBox::-webkit-scrollbar {
  border-radius: 10px;
  width: 20px;
  background-color: #f6f6f6;
}
.detailContent .contentBox::-webkit-scrollbar-button {
  width: 20px;
  height: 20px;
  background-color: rgb(224, 223, 198);
}
.detailContent .contentBox::-webkit-scrollbar-button:start:vertical {
  border-radius: 50% 50% 0 0;
  border-bottom: 1px solid #d2d2d2;
}
.detailContent .contentBox::-webkit-scrollbar-button:start:horizontal {
  border-radius: 50% 0 0 50%;
  border-right: 1px solid #d2d2d2;
}
.detailContent .contentBox::-webkit-scrollbar-button:end:vertical {
  border-radius: 0 0 50% 50%;
  border-top: 1px solid #d2d2d2;
}
.detailContent .contentBox::-webkit-scrollbar-button:end:horizontal {
  border-radius: 0 50% 50% 0;
  border-left: 1px solid #d2d2d2;
}
.detailContent .contentBox::-webkit-scrollbar-thumb {
  width: 20px;
  height: 0;
  background-color: rgb(224, 223, 198);
}
.detail_3 > div > p{
  margin-bottom: 10px;
}
.detail_3 > div > p:last-child{
  text-indent: 32px;
}
.tags{
  margin-top: 5px;
}
@keyframes clobtn_rot {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>