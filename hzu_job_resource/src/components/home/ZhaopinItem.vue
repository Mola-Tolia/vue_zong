<template>
  <div class="ZhaopinItem" @click="record">
      <div class="item">
        <div class="left">
          <p>{{ item.jobName }}</p>
          <p><span>{{item.salary}}</span><span>{{item.area}}</span></p>
          <p>
            <span v-for="(tag,index) in item.tags" :key="index">
              {{ tag }}
            </span>
          </p>
        </div>
        <div class="right">
          <p>公司名称：{{ item.company }}</p>
          <p>公司类型：{{ item.companyType }}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ZhaopinItem",
  props:['item'],
  data () {
      return {
        recordZP: JSON.parse(localStorage.getItem('recordZP')) || [],
        recordZPDateTime: JSON.parse(localStorage.getItem('recordZPDateTime')) || []
      }
  },
  methods:{
    record(){
      this.recordZP = JSON.parse(localStorage.getItem('recordZP')) || []
      this.recordZPDateTime = JSON.parse(localStorage.getItem('recordZPDateTime')) || []
      this.recordZP.map((item,index,self) => {
        if(item === this.item.id){
          this.recordZP.splice(index,1)
          this.recordZPDateTime.splice(index,1)
        }
      })
      this.recordZP.unshift(this.item.id)
      let str = new Date()
      let ymd = str.toLocaleString().split(' ')[0] + ' '
      let hms = str.toLocaleString().split('午')[1]
      hms = str.getHours() + ':' + hms.split(':')[1] + ':' + hms.split(':')[2]
      str = ymd + hms
      this.recordZPDateTime.unshift(str)
      localStorage.setItem('recordZP',JSON.stringify(this.recordZP))
      localStorage.setItem('recordZPDateTime',JSON.stringify(this.recordZPDateTime))
    }
  }
};
</script>

<style scoped>
.item {
  cursor: url('../../assets/default_pointer.png'),pointer;
  box-sizing: border-box;
  margin: 20px 5%;
  padding: 10px;
  width: 90%;
  height: 120px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgb(177, 55, 18);
}
.item:hover {
  animation: jumpbigger 0.3s linear forwards;
}
@keyframes jumpbigger {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
    width: 91%;
    height: 122.5px;
    margin: 17.5px 4.5%;
  }
  100% {
    transform: translateY(0px);
    width: 92%;
    height: 125px;
    margin: 15px 4%;
  }
}
.item .left {
  float: left;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.item .left p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item .left p span:first-child {
  margin-right: 20px;
}
.item .right {
  float: right;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>