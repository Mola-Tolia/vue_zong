<template>
  <div class="JianzhiItem" @click="record">
    <div class="jianzhi_item">
      <span>{{item.jobName}}</span>
      <span>{{item.salary}}</span>
      <span>{{item.area}}</span>
      <span>{{item.dataTime}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'JianzhiItem',
  props:['item'],
  data () {
      return {
        recordJZ: JSON.parse(localStorage.getItem('recordJZ')) || [],
        recordJZDateTime: JSON.parse(localStorage.getItem('recordJZDateTime')) || []
      }
  },
  methods:{
    record(){
      this.recordJZ = JSON.parse(localStorage.getItem('recordJZ')) || []
      this.recordJZDateTime = JSON.parse(localStorage.getItem('recordJZDateTime')) || []
      this.recordJZ.map((item,index,self) => {
        if(item === this.item.id){
          this.recordJZ.splice(index,1)
          this.recordJZDateTime.splice(index,1)
        }
      })
      this.recordJZ.unshift(this.item.id)
      let str = new Date()
      let ymd = str.toLocaleString().split(' ')[0] + ' '
      let hms = str.toLocaleString().split('午')[1]
      hms = str.getHours() + ':' + hms.split(':')[1] + ':' + hms.split(':')[2]
      str = ymd + hms
      this.recordJZDateTime.unshift(str)
      localStorage.setItem('recordJZ',JSON.stringify(this.recordJZ))
      localStorage.setItem('recordJZDateTime',JSON.stringify(this.recordJZDateTime))
    }
  }
};
</script>

<style>
.jianzhi_item {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid rgb(224, 223, 198);
  border-right: 1px solid rgb(224, 223, 198);
  color: rgb(224, 223, 198);
  margin-bottom: 20px;
  height: 30px;
  transition: 0.1s;
}
.jianzhi_item span{
  width: 20%;
  text-align: center;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap; 
}
.jianzhi_item:hover {
  border-bottom: 1px solid rgb(255, 255, 167);
  color: rgb(255, 255, 167);
}
</style>