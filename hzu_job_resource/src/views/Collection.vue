<template>
  <div class="collection">
    <div id="selectColType">
      <label for="ct1">招聘</label>
      <input id="ct1" type="radio" name="colType" :value=1 v-model="colType"/>
      <label for="ct2">兼职</label>
      <input id="ct2" type="radio" name="colType" :value=2 v-model="colType"/>
      <label for="ct3">求助</label>
      <input id="ct3" type="radio" name="colType" :value=3 v-model="colType"/>
    </div>
    <collection-item v-for="(item,index) in colData" :key="index" :i="index" :item="item" :colType="colType"/>
  </div>
</template>

<script>
import CollectionItem from "../components/collection/CollectionItem.vue";
export default {
  name: "collection",
  components: { CollectionItem },
  data () {
      return {
        colType:1,
        colData:[],
        ct1:[],
        ct2:[],
        ct3:[
          {id:'001',name:'Lemul',age:20},
          {id:'002',name:'Lemul',age:20},
          {id:'003',name:'Lemul',age:20},
          {id:'004',name:'Lemul',age:20},
        ],
      }
  },
  watch:{
    colType:{
      deep:true,
      immediate: true,
      handler(value){
        switch(value){
          case 1:{
            this.colData = this.ct1
            break
          }
          case 2:{
            this.colData = this.ct2
            break
          }
          case 3:{
            this.colData = this.ct3
            break
          }
        }
      }
    },
    ct1:{
      deep:true,
      immediate: true,
      handler(n){
        this.colData = n
      }
    }
  },
  methods: {
      getCol(_this,value,n){
        let r
        switch(n){
          case 1:{r = JSON.parse(localStorage.getItem('collectionZP')); break}
          case 2:{r = JSON.parse(localStorage.getItem('collectionJZ')); break}
          case 3:{; break}
        }
        let ct = []
        r.forEach((i) => {
          value.filter(item => {
            if(item.id === i){
              ct.push(item)
            }
          })
        })
        switch(n){
          case 1:{_this.ct1 = ct; break}
          case 2:{_this.ct2 = ct; break}
          case 3:{_this.ct3 = ct; break}
        }
      }
  },
  mounted () {
    this.$bus.$emit('PraBh',this.getCol,this,1)
    this.$bus.$emit('PtjBh',this.getCol,this,2)
  }
}
</script>

<style scoped>
.collection {
  position: absolute;
  top: 195px;
  width: 74%;
  left: 13%;
}
#selectColType{
  margin: 10px 15%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-width: 360px;
  box-sizing: border-box;
}
[name="colType"]{
  display: none;
}
label{
  background-color: rgb(237, 109, 70);
  color: rgb(224, 223, 198);
  box-shadow: 1px 1px 5px 1px rgb(189, 60, 21, 0.8);
  width: 25%;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  border-radius: 10px;
}
label:hover{
  background-color: rgb(224, 223, 198);
  color: rgb(237, 109, 70);
  transform: translateY(-3px);
  box-shadow: 1px 4px 5px 1px rgb(189, 60, 21, 0.8);
  transition: 0.5s;
}
.CollectionItem:nth-child(4n+2){
  background-image: linear-gradient(180deg,rgb(246,173,122),rgb(255,211,141));
}
.CollectionItem:nth-child(4n+3){
  background-image: linear-gradient(180deg,rgb(255,211,141),rgb(254,255,178));
}
.CollectionItem:nth-child(4n+4){
  background-image: linear-gradient(0deg,rgb(255,211,141),rgb(254,255,178));
}
.CollectionItem:nth-child(4n+5){
  background-image: linear-gradient(0deg,rgb(246,173,122),rgb(255,211,141));
}
</style>