<template>
  <div class="Wszl">
    <div class="img">
      <img src="../../assets/favicon.png" />
    </div>
    <div id="box">
      <form action="javascript:;" method="post">
        <div class="zt">
          <span class="zt1">欢迎来到惠学</span>
          <span class="zt2">请填写你的基本信息，完成账号创建</span>
        </div>
        <br /><br />

        <div class="xx">
          <div class="zt">
            <span class="zt3">姓名</span>
            <input
              type="text"
              v-model.trim="userInfo.admin"
              placeholder="请填写真实姓名，用于投递简历"
            />
          </div>

          <div class="zt">
            <span class="zt3">性别</span>
            <div class="xxx">
              <button @click="dj1" :class="djc"><span>男</span></button>
              <button @click="dj2" :class="djc1"><span>女</span></button>
            </div>
          </div>

          <div class="zt">
            <span class="zt3">出生年月</span>
            <input
              type="text"
              v-model.trim="userInfo.day"
              placeholder="请填写出生年月"
            />
          </div>

          <div class="zt">
            <span class="zt3">学院</span>
            <select v-model="userInfo.xy">
              <option value="" disabled selected hidden>请选择</option>
              <option value="jsj">计算机学院</option>
              <option value="zf">政法学院</option>
              <option value="fz">服装学院</option>
              <option value="hx">化学学院</option>
              <option value="order">...</option>
              <br /><br />
            </select>
          </div>

          <div class="zt">
            <span class="zt3">所在年级</span>
            <input
              type="text"
              v-model="userInfo.nj"
              placeholder="例如: 2020"
            />
          </div>

          <div class="zt">
            <span class="zt3">专业</span>
            <input
              type="text"
              v-model="userInfo.zy"
              placeholder="例如：软件工程"
            />
          </div>

          <div class="zt">
            <span class="zt3">邮箱</span>
            <input
              type="text"
              v-model="userInfo.yx"
              placeholder="例如：请填写邮箱地址"
            />
          </div>

          <div class="zt">
            <span class="zt3">学号</span>
            <input
              type="text"
              v-model="userInfo.xh"
              placeholder="请填写真实学号"
            />
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
  name: "Wszl",
  data() {
    return {
      userInfo: {
        admin: "",
        pswd: "",
        sex: "",
        nj: "",
        xy: "",
        day: "",
        yx: "",
        xh: "",
      },
      xb1: "",
      xb2: "",
      xbn: false,
      xbnv: false,
      djc: "",
      djc1: "",
    };
  },
  methods: {
    dj1() {
      this.xbn = !this.xbn;
      if (this.xbnv) this.xbnv = !this.xbnv;
      if (this.xbn) {
        this.djc1 = "";
        this.djc = "djc";
        this.userInfo.sex = "男";
      }
    },
    dj2() {
      this.xbnv = !this.xbnv;
      if (this.xbn) this.xbn = !this.xbn;
      if (this.xbnv) {
        this.djc = "";
        this.djc1 = "djc";
        this.userInfo.sex = "女";
      }
    },
    an() {
      console.log(JSON.stringify(this.userInfo));
    },
    turnBack(){
      this.$bus.$emit('resetErp')
    }
  },
};
</script>

<style scoped>
.Wszl {
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
  flex-direction: column;
  display: flex;
  width: 300px;
}
.xx {
  width: 700px;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
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
.xxx {
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}
.an {
  margin-top: 50px;
  margin-left: 500px;
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