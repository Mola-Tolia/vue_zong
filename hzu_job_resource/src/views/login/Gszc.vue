<template>
  <div class="body1">
    <div class="img">
      <img src="../../assets/favicon.png" />
    </div>
    <div id="box">
      <form action="javascript:;" method="post">
        <div class="zt">
          <span class="zt1">欢迎来到惠学</span>
          <span class="zt2">请填写基本信息，完成公司注册创建</span>
        </div>
        <br /><br />

        <div class="xx">
          <div class="zt">
            <span class="zt3">公司全称</span>
            <input
              type="text"
              v-model.trim="gsInfo.name"
              placeholder="请输入您所属公司营业执照上的公司名称"
            />
          </div>

          <div class="zt">
            <span class="zt3">公司性质</span>
            <div class="xxx">
              <button @click="dj1" :class="xz1"><span>民营</span></button>
              <button @click="dj2" :class="xz2"><span>国企</span></button>
            </div>
          </div>

          <div class="zt">
            <span class="zt3">公司简称</span>
            <input
              type="text"
              v-model.trim="gsInfo.jc"
              placeholder="请输入公司简称"
            />
          </div>

          <div class="zt">
            <span class="zt3">公司联系人</span>
            <input
              type="text"
              v-model.trim="gsInfo.lxr"
              placeholder="请输入公司联系人姓名"
            />
          </div>

          <div class="zt">
            <span class="zt3">手机号码</span>
            <input
              type="text"
              v-model.trim="gsInfo.phone"
              placeholder="请输入手机号码"
            />
          </div>

          <div class="zt">
            <span class="zt3">邮箱地址</span>
            <input
              type="text"
              v-model.trim="gsInfo.yx"
              placeholder="请输入邮箱地址"
            />
          </div>

          <div class="zt">
            <span class="zt3">公司行业</span>
            <select v-model="gsInfo.hy">
              <option value="" disabled selected hidden>所在行业</option>
              <option value="hlw">互联网/IT/电子/通信</option>
              <option value="gg">广告/传媒/文化/体育</option>
              <option value="jr">金融</option>
              <option value="zy">制药/医疗</option>
              <option value="jt">交通/物流/贸易/零售</option>
              <option value="zyfw">专业服务</option>
              <option value="fdc">房地产/建筑</option>
              <option value="qc">汽车</option>
              <option value="jx">机械/制造</option>
              <option value="xfp">消费品</option>
              <option value="fwy">服务业</option>
              <option value="ny">能源/化工/环保</option>
              <option value="order">政府/非盈利机构/其他</option>
            </select>
          </div>

          <div class="zt">
            <span class="zt3">人员规模</span>
            <select v-model="gsInfo.gm">
              <option value="" disabled selected hidden>请选择人员规模</option>
              <option value="zreo">0-20人</option>
              <option value="es">20-99人</option>
              <option value="yb">100-499人</option>
              <option value="wb">500-999人</option>
              <option value="yq">1000-9999人</option>
              <option value="yw">一万人以上</option>
            </select>
          </div>
        </div>
        <span class="turnBack" @click="turnBack">返回</span>
        <button class="an" @click="an">完成提交</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gszc",
  data() {
    return {
      gsInfo: {
        name: "",
        jc: "",
        yx: "",
        lxr: "",
        phone: "",
        xz: "",
        hy: "",
        gm: "",
      },
      xz1: "",
      xz2: "",
      my: false,
      gq: false,
    };
  },
  methods: {
    dj1() {
      this.my = !this.my;
      if (this.gq) this.xbnv = !this.gq;
      if (this.my) {
        this.xz2 = "";
        this.xz1 = "djc";
        this.gsInfo.xz = "民营";
      }
    },
    dj2() {
      this.gq = !this.gq;
      if (this.my) this.my = !this.my;
      if (this.gq) {
        this.xz1 = "";
        this.xz2 = "djc";
        this.gsInfo.xz = "国企";
      }
    },
    an() {
      console.log(JSON.stringify(this.gsInfo));
    },
    turnBack(){
      this.$bus.$emit('resetErp')
    }
  },
};
</script>

<style scoped>
.body1 { 
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-content: center;
}
#box {
  width: 750px;
  height: 500px;
  margin: 100px auto;
  background-color: #ffffff;
  padding-left: 50px;
  padding-top: 50px;
  border-radius: 10px;
  box-shadow: 20px, 20px, 20px, #f5f5f5;
}
.zt1 {
  font-size: 20px;
  display: flex;
  font-family: "SimHei";
  font-weight: bolder;
}
.zt2 {
  font-size: 3px;
  display: flex;
  padding-top: 10p;
  color: #999999;
}
.zt {
  /* flex-wrap: wrap; */
  flex-direction: column;
  display: flex;
  width: 300px;
}
img {
  width: 100%;
}
.img {
  width: 150px;
  position: absolute;
  left: 150px;
  top: 30px;
}
.xx {
  width: 700px;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  /* padding-left: 50px; */
  justify-content: space-between;
  align-content: space-between;
  height: 300px;
}
input {
  width: 300px;
  height: 35px;
  border-radius: 7px;
  padding-left: 10px;
}
.zt3 {
  color: #666666;
}
.xxx {
  flex-direction: row;
  display: flex;
  /* padding-left: 50px; */
  justify-content: space-between;
}
button {
  width: 120px;
  height: 35px;
  background-color: #ffffff;
  border-radius: 7px;
  color: #666666;
}
select {
  width: 305px;
  height: 35px;
  background-color: #ffffff;
  border-radius: 7px;
}
.an {
  margin-top: 50px;
  margin-left: 500px;
}
.djc {
  background-color: #e10b33;
  color: #ffffff;
}
.turnBack{
  border: 1px solid black;
  border-radius: 5px;
  width: 120px;
  display: inline-block;
  position: absolute;
  bottom: 0;
  height: 35px;
  text-align: center;
  line-height: 35px;
  cursor: pointer;
}
form{
  position: relative;
}
</style>