<template>
  <div>
    <div id="box">
      <span class="zt1">个人资料</span> <br /><br />
      <i class="fa-solid fa-user-tie" style="color: #e10b33"></i>
      <span class="zt3">基本信息</span>
      <hr
        style="height: 5px; border: none; border-top: 1px dashed #e7e7e7"
        width="600px"
      />
      <br /><br />

      <div class="nr">
        <div class="nr2">
          <img src="../../assets/favicon.png" />
          <input type="file" style="margin-left: -10px" />
        </div>

        <div class="nr1">
          <span class="zt2">姓名：</span>
          <input type="text" v-model="userData.username" placeholder="jbl" />
        </div>

        <div class="nr1">
          <span class="zt2">用户名：</span>
          <input type="text" v-model="userData.username" placeholder="jbl" />
        </div>

        <div class="nr1">
          <span class="zt2">性别：</span>
          <div class="xbnn">
            <button class="bt1" @click="dj1" :class="djc" style="margin-left: -10px;">
              <span>
                <i class="fa-solid fa-mars"></i>
                男</span>
            </button>
            <button class="bt1" @click="dj2" :class="djc1">
              <span>
                <i class="fa-solid fa-venus"></i>
                女</span>
            </button>
          </div>
        </div>

        <div class="nr1">
          <span class="zt2">出生日期：</span>
          <!-- <input type="text" v-model="userData.day" placeholder="jbl" value-format="yyyy-MM-dd HH:mm:ss" /> -->
          <div class="date-box">
                    <el-date-picker
                        v-model="userData.day"
                        type="date"
                        placeholder="jbl"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        class="day"
                    />
                </div>
        </div>

        <div class="nr1 dj">
          <span class="zt2" @click="sj">手机：</span>
          <div class="wip">{{ userData.phone | phoneyc }}</div>
        </div>

        <div class="nr1 dj">
          <span class="zt2" @click="yxdz">邮箱地址：</span>
          <div class="wip">{{ userData.yx | yxyc }}</div>
        </div>

        <div class="nr1">
          <span class="zt2">密码：</span>
          <input type="text" v-model="userData.pswd" placeholder="jbl" />
        </div>

        <div class="nr1">
          <span class="zt2">学院：</span>
          <input
            type="text"
            v-model="userData.xy"
            placeholder="jbl"
            readonly="readonly"
            />
        </div>

        <div class="nr1">
          <span class="zt2">专业：</span>
          <input
            type="text"
            v-model="userData.zy"
            placeholder="jbl"
            readonly="readonly"
          />
        </div>

        <div class="nr1">
          <span class="zt2">学号：</span>
          <input
            type="text"
            v-model="userData.xh"
            placeholder="jbl"
            readonly="readonly"
          />
        </div>

        <div class="nr1">
          <span class="zt2">年级：</span>
          <input
            type="text"
            v-model="userData.nj"
            placeholder="jbl"
            readonly="readonly"
          />
        </div>
      </div>

      <div class="changephone cj" :class="dis">
        <div class="cha">
          <span class="zt4">资料修改</span>
          <button class="an1" @click="qx">
            <i class="fa-solid fa-x"></i>
          </button>
          <hr
            style="height: 5px; border: none; border-top: 1px dashed #e7e7e7"
            width="100%"
          />
          <span class="zt5"
            >你当前绑定的手机号码是{{ userData.phone | phoneyc }}</span
          >

          <div class="nr1" style="margin: 10px 40px">
            <span class="zt6">新手机号</span>
            <input
              type="text"
              v-model="newphone"
              placeholder="请输入手机号码"
            />
          </div>

          <div class="nr1" style="margin: 10px 40px">
            <span class="zt6">验证码</span>
            <input class="ip1" type="text" />
            <button>发送验证码</button>
          </div>

          <button class="bt2" @click="bc">保存</button>
        </div>
      </div>

      <div class="changephone cj1" :class="dis2">
        <div class="cha" :class="dis2">
          <span class="zt4">资料修改</span>
          <button class="an1" @click="qx1">
            <i class="fa-solid fa-x"></i>
          </button>
          <hr
            style="height: 5px; border: none; border-top: 1px dashed #e7e7e7"
            width="100%"
          />
          <span class="zt5"
            >你当前绑定的邮箱账户为{{ userData.yx | yxyc }}</span
          >

          <div class="nr1" style="margin: 10px 40px">
            <span class="zt6">新邮箱</span>
            <input type="email" v-model="newyx" placeholder="请输入邮箱地址" />
          </div>

          <div class="nr1" style="margin: 10px 40px">
            <span class="zt6">验证码</span>
            <input class="ip1" type="text" />
            <button>发送验证码</button>
          </div>

          <button class="bt2" @click="xg">修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    name:'Grzl',
        data(){
            return{
                userData:{
                    username:'',
                    day:'',
                    sex:'',
                    phone:'15992025055',
                    pswd:'',
                    xy:'',
                    zy:'',
                    yx:'2603403053@qq.com',
                    xh:'',
                    nj:'',
                    xh:''
                },                
                xbn: true,
                xbnv: false,
                dis:'dis',
                dis2:'dis',
                djc:'djc',
                djc1:'',
                newphone:'',
                newyx:''
            }
        },
        methods: {
            dj1(){
                this.xbn = !this.xbn
                if(this.xbnv) this.xbnv = !this.xbnv
                if(this.xbn){
                    this.djc1 = ''
                    this.djc = 'djc'
                    this.userData.sex = '男'
                }
            },
            dj2(){
                this.xbnv = !this.xbnv
                if(this.xbn) this.xbn = !this.xbn
                if(this.xbnv){
                    this.djc = ''
                    this.djc1 = 'djc'
                    this.userData.sex = '女'
                }
            },
            sj(){
                this.dis = ''
            },
            qx(){
                this.dis = 'dis'
                
            },
            yxdz(){
                this.dis2 = ''
            },
            qx1(){
                this.dis2 = 'dis'
            },
            bc(){
                let reg = new RegExp(/^1\d{10}/)
                if(reg.test(this.newphone))this.userData.phone = this.newphone
                this.dis = 'dis'
            },
            xg(){
                this.userData.yx = this.newyx
                this.dis2 = 'dis'
            }
                
        },
        filters:{
            phoneyc(value){   
                let str = value
                let arr = []
                for (let i = 0; i < str.length; i++) {
                    arr.push(str[i])
                }
                arr.splice(3, 4, '****')
                let b = ''
                arr.forEach( a => {
                    b += String(a)
                });
                return b
            },
            yxyc(value){   
                let str = value
                let arr = []
                for (let i = 0; i < str.length; i++) {
                    arr.push(str[i])
                }
                arr.splice(6, 4, '****')
                let c = ''
                arr.forEach( a => {
                    c += String(a)
                });
                return c
            }
        }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
hr {
  display: inline-block;
}
#box {
  position: absolute;
  width: 850px;
  height: 800px;
  left: 0;
  right: 0;
  margin:0 auto;
  margin-top: 195px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 20px, 20px, 20px, #f5f5f5;
  padding-left: 50px;
  padding-top: 30px;
}
.zt1 {
  font-size: 25px;
  color: #e10b33;
}
.nr {
  display: flex;
  flex-direction: column;
  height: 620px;
  justify-content: space-between;
}
img {
  width: 150px;
  border: 1px black solid;
}
.nr1 {
  display: flex;
  width: 390px;
  justify-content: space-between;
}
input {
  width: 300px;
  height: 35px;
  border: 0px;
  border-radius: 7px;
  padding-left: 10px;
  font-size: 15px;
}
.zt2 {
  line-height: 35px;
  font-size: 15px;
}
.bt1 {
  width: 140px;
  background-color: #ffffff;
  border-radius: 7px;
}
.nr2 {
  display: flex;
  flex-direction: column;
}
.changephone {
  width: 100%;
  position: fixed;
  overflow: auto;
  position: absolute;
  background-color: #5e5858b4;
  height: 200%;
  clear: both;
  content: "";
  display: table;
  left: 0;
  top: 0;
  /* display: none; */
}
.zt4 {
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
}
.an1 {
  border: 0;
  float: right;
  background-color: #ffffff;
  font-size: 20px;
  line-height: 40px;
  margin-right: 20px;
  cursor: pointer;
}
.cha {
  width: 500px;
  position: fixed;
  left: 30%;
  top: 30%;
  background-color: #ffffff;
  height: 300px;
}
.zt5 {
  font-size: 10px;
  display: block;
  width: 100%;
  text-align: center;
}
.zt6 {
  font-size: 15px;
  font-weight: bold;
  line-height: 35px;
}
.ip1 {
  width: 190px;
}
.bt2 {
  width: 100px;
  height: 35px;
  margin-left: 200px;
  margin-top: 35px;
  background-color: #12b45b;
  color: #ffffff;
}
.dj {
  cursor: pointer;
}
.dis {
  display: none;
}
.cj {
  z-index: 99;
}
.cj1 {
  z-index: 999;
}
.ip2 {
  width: 300px;
  height: 35px;
  border: 0px;
  border-radius: 7px;
  padding-left: 10px;
  font-size: 15px;
}
.djc {
  background-color: #e10b33;
  color: #ffffff;
}
.wip {
  width: 300px;
  height: 35px;
  border: 0px;
  border-radius: 7px;
  padding-left: 10px;
  font-size: 15px;
  line-height: 35px;
}
.date-box > .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
  border: 0px;
}
.day > .el-input__inner {
  width: 300px;
  height: 35px;
  border-radius: 7px;
  border: 0px;
}
.xbnn{
  width: 300px;
  display: flex;
  justify-content: space-between;
}
</style>