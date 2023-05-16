<template>
  <div class="Login">
    <div class="closebtn" @click="closebtn"><i class="material-icons">close_fullscreen</i></div>
    <div class="contentBox">
      <form action="/" method="post">
        <div class="accountBox">
          <span>账号</span>
          <input type="text" placeholder="请输入账号" v-model="account"/>
        </div>
        <div class="passwordBox">
          <span>密码</span>
          <input :type="inputType" placeholder="请输入密码" v-model="password"/>
          <div class="displayEye"><i class="material-icons" @click="isvisible = !isvisible">{{visibleIcon}}</i></div>
        </div>
        <input ref="login" type="submit" value="登录" />
      </form>
      <a @click="registerPage(1)">公司注册</a>
      <a @click="registerPage(2)">学生注册</a>
      <Gszc v-if="enterRegisterPage === 1"/>
      <Wszl v-if="enterRegisterPage === 2"/>
    </div>
  </div>
</template>

<script>
import Gszc from './login/Gszc'
import Wszl from './login/Wszl'
export default {
  name: "Login",
  components:{Gszc,Wszl},
  data() {
    return {
      account:'',
      password:'',
      turnLoginColor:false,
      isvisible:false,
      inputType:'password',
      visibleIcon:'visibility_off',
      enterRegisterPage:0
    };
  },
  watch:{
    account(value){
      if(value !== ''&&this.password !== ''){
        this.turnLoginColor = true
      }else{
        this.turnLoginColor = false
      }
    },
    password(value){
      if(value !== ''&&this.account !== ''){
        this.turnLoginColor = true
      }else{
        this.turnLoginColor = false
      }
    },
    turnLoginColor(value){
      if(value){
        this.$refs.login.style.setProperty('background-color','rgb(237, 109, 70)')
        this.$refs.login.style.setProperty('cursor','url(' + require('../assets/pointer.png') + '),pointer')
      }else{
        this.$refs.login.style.setProperty('background-color','rgb(234, 141, 113')
        this.$refs.login.style.setProperty('cursor','url(' + require('../assets/forbid.png') + '),pointer')
      }
    },
    isvisible(value){
      if(value){
        this.inputType = 'text'
        this.visibleIcon = 'visibility'
      }else{
        this.inputType = 'password'
        this.visibleIcon = 'visibility_off'
      }
    }
  },
  methods: {
    closebtn() {
      this.$bus.$emit('cloLogBox')
    },
    registerPage(n){
      this.enterRegisterPage = n
      this.$bus.$on('resetErp',() => {
        this.enterRegisterPage = 0
      })
    }
  },
};
</script>

<style scoped>
.Login {
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
}
.Login > .contentBox {
  position: relative;
  width: 600px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Login > .contentBox > a {
  position: absolute;
  display: inline-block;
  text-decoration: none;
  color: white;
  background-color: rgb(237, 109, 70);
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin: 0 10px 10px 0;
  border-radius: 5px;
}
.Login > .contentBox > a:nth-last-child(1) {
  bottom: 10px;
  right: 10px;
}
.Login > .contentBox > a:nth-last-child(2) {
  bottom: 10px;
  right: 120px;
}
.closebtn {
  position: absolute;
  width: 30px;
  height: 30px;
  /* border: 2px solid white;
  background-color: rgb(237, 109, 70);
  color: white; */
  /* rgb(224, 223, 198) */
  border: 1px solid black;
  background-color: black;
  color: white; 
  top: 50%;
  left: 50%;
  transform: translate(320px, -200px);
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  transition: 0.5s;
}
.closebtn:hover{
  border: 1px solid white;
  background-color: rgb(237, 109, 70);
}
.closebtn i{
  position: absolute;
  top: 3px;
  left: 0;
  right: 0;
}
form {
  width: 300px;
  height: 100px;
  border: 1px solid rgb(146, 146, 146);
  border-radius: 10px;
  /* padding: 10px; */
}
.accountBox {
  border-bottom: 1px solid rgb(146, 146, 146);
  padding: 0 10px;
  height: 50%;
  box-sizing: border-box;
}
.accountBox > span {
  display: inline-block;
  width: 20%;
}
.accountBox > input {
  width: 80%;
  box-sizing: border-box;
  height: 100%;
  border: none;
  outline: none;
}
.accountBox > input::-webkit-input-placeholder {
  font-size: 15px;
  color: rgb(190, 190, 190);
}
.passwordBox {
  position: relative;
  padding: 0 10px;
  height: 50%;
  box-sizing: border-box;
}
.passwordBox > span {
  position: absolute;
  top: 0;
  display: inline-block;
  width: 20%;
  height: 100%;
  line-height: 50px;
}
.passwordBox > input {
  position: absolute;
  display: inline-block;
  width: 70%;
  box-sizing: border-box;
  height: 100%;
  left: 20%;
  border: none;
  outline: none;
  padding-left: 6px;
}
.passwordBox > input::-webkit-input-placeholder {
  font-size: 15px;
  color: rgb(190, 190, 190);
}
.displayEye {
  position: absolute;
  display: inline-block;
  width: 10%;
  height: 100%;
  right: 0;
}
.displayEye i {
  user-select: none;
  position: absolute;
  top: 13px;
  cursor: pointer;
}
input[type="submit"][value="登录"] {
  width: 200px;
  height: 40px;
  margin: 10px 0 0 50px;
  border: none;
  background-color: rgb(234, 141, 113);
  color: white;
  border-radius: 5px;
  cursor: url('../assets/forbid.png'),pointer;
}
</style>