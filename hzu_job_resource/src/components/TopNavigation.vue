<template>
  <div class="topNavigation">
    <ul id="topIcon">
      <li class="solveErr2">
        <router-link to="/home" @click.native="changeback"> </router-link>
      </li>
      <li class="solveErr2 solveErr3">
        <input type="text" />
        <a href="javasript:;"><i class="material-icons">search</i></a>
      </li>
      <li class="solveErr solveErr2">
        <a v-if="isLogin == false">
          登录
          <div class="loginbox">
            <div class="logining">
              <a class="abc" @click="loginBox">立即登录</a>
            </div>
            <div>
              首次使用？
              <span>
                <a class="toRegister" @click="loginBox">
                  马上注册
                </a>
              </span>
            </div>
          </div>
          <div class="triangle"></div>
        </a>
        <a v-if="isLogin == true">
          个人
          <div class="personalCenter">
            <router-link to="/personalCenter">个人中心</router-link>
          </div>
          <div class="triangle"></div>
        </a>
      </li>
      <li class="solveErr solveErr2">
        <router-link class="default_pointer" to="/browse_history"> 历史 </router-link>
      </li>
      <li class="solveErr solveErr2">
        <router-link class="default_pointer" to="/collection" @click.native="change">
          在看
        </router-link>
      </li>
      <li class="solveErr2">
        <a>
          发布
          <div class="fb1">
            <router-link to="/publish/sxfb" @click.native="BTT(1)">招聘</router-link>
          </div>
          <div class="fb2">
            <router-link to="/publish/jzfb" @click.native="BTT(2)">兼职</router-link>
          </div>
          <div class="fb3">
            <router-link to="">求助</router-link>
          </div>
          <div class="fb4"></div>
        </a>
      </li>
    </ul>
    <router-view />
    <login v-if="isEnterLoginBox === true"/>
  </div>
</template>

<script>
import Login from '../views/Login.vue'
export default {
  name: "topNavigation",
  components:{Login},
  data() {
    return {
      ulImage: "",
      isLogin: 0,
      isEnterLoginBox:false
    };
  },
  methods: {
    change() {
      document.body.style.setProperty(
        "animation",
        "colorChange 2s ease forwards"
      );
      sessionStorage.setItem("background-position", "100% 0");
    },
    changeback() {
      document.body.style.setProperty(
        "animation",
        "colorChangeB 2s ease forwards"
      );
      sessionStorage.setItem("background-position", "0% 0");
      this.$bus.$emit("resetRoute");
    },
    loginBox(){
      this.isEnterLoginBox = true
      this.$bus.$on('cloLogBox',() => {
        this.isEnterLoginBox = false
      })
    },
    BTT(n){
      this.$bus.$emit('backToTop',n)
    }
  },
  mounted() {
    document.body.style.setProperty(
      "background-position",
      sessionStorage.getItem("background-position")
    );
  },
};
</script>

<style>
.abc {
  text-decoration: none;
  color: white;
  cursor: url("../assets/default_pointer.png"), pointer;
}
body {
  background: linear-gradient(
    90deg,
    rgb(224, 223, 198) 0%,
    rgb(237, 109, 70) 25%,
    rgb(237, 109, 70) 75%,
    rgb(224, 223, 198) 100%
  );
  background-size: 200%;
  background-position: 0% 100%;
  /* animation: colorChange 3s ease forwards; */
  /* infinite 循环*/
  /* reverse 倒放*/
}
@keyframes colorChange {
  100% {
    background-position: 100% 0;
  }
}
@keyframes colorChangeB {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0% 0;
  }
}
#topIcon {
  user-select: none;
  background-image: url("../assets/topicon1.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0;
  position: fixed;
  top: 0;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  min-width: 1040px;
  height: 150px;
  z-index: 1;
  left: 0;
  display: inline-table;
}
ul .solveErr2 {
  position: relative;
  display: flex;
  justify-content: center;
  align-content: flex-end;
  margin: 0;
  float: left;
  height: 100px;
  line-height: 50px;
}
ul li:nth-child(3) > a,
ul li:nth-child(4) a,
ul li:nth-child(5) a {
  border: 1px solid rgb(224, 223, 198);
}
ul li:nth-child(1) {
  width: 150px;
}
ul .solveErr3 {
  width: calc(100% - 540px);
  min-width: 500px;
}
ul li:nth-child(6) {
  width: 150px;
}
/* #configBox {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 40%;
  top: 12.5px;
  padding: 0;
  max-width: 600px;
} */
ul li:nth-child(2) a {
  position: absolute;
  width: 50px;
  height: 40px;
  top: 12.5px;
  transform: translateX(200px);
  left: 50%;
  border-radius: 0 10px 10px 0;
  background-color: rgb(237, 109, 70);
}
ul li:nth-child(2) a i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
ul li:nth-child(2) a:hover {
  background-color: rgb(244, 134, 101);
  transition: 0.3s;
}
ul li:nth-child(2) a:hover i {
  color: black;
  transition: 0.3s;
  user-select: none;
}
ul > .solveErr {
  width: 80px;
}
ul li:nth-child(3) > a {
  cursor: url(../assets/cursor_default.png), default;
}
ul li:nth-child(3) > a div.loginbox {
  position: absolute;
  display: none;
  top: 55px;
  width: 200px;
  height: 100px;
  left: 50%;
  border-radius: 10px;
  transform: translateX(-50%);
  background-color: white;
}
ul li:nth-child(3) > a div.loginbox div:first-child {
  cursor: url("../assets/default_pointer.png"), pointer;
  height: 40%;
  width: 80%;
  margin-left: 10%;
  margin-top: 5%;
  border-radius: 5px;
  background-color: rgb(237, 109, 70);
  color: white;
  line-height: 40px;
}
ul li:nth-child(3) > a div.loginbox div:first-child:hover {
  background-color: rgb(244, 134, 101);
}
ul li:nth-child(3) > a div.loginbox div:last-child {
  height: 40%;
  color: black;
}
ul li:nth-child(3) > a div.loginbox div:last-child span {
  color: rgb(237, 109, 70);
}
ul li:nth-child(3) > a div.loginbox div:last-child span:hover {
  text-decoration: underline;
}
ul li:nth-child(3) > a div.loginbox div:last-child span a {
  text-decoration: none;
  cursor: url("../assets/default_pointer.png"), pointer;
}
ul li:nth-child(3) > a div.triangle {
  position: absolute;
  display: none;
  width: 0;
  height: 0;
  left: 50%;
  transform: translateX(-50%);
  border-style: solid;
  border-color: transparent transparent white transparent;
  border-width: 0 20px 7.5px 20px;
  top: 47.5px;
}
ul li:nth-child(3) > a:hover div {
  display: block;
}
ul li:nth-child(1) a {
  position: absolute;
  background-image: url("../assets/favicon.png");
  background-size: 80px 80px;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0);
  top: -5px;
  left: 20px;
  width: 100px;
  height: 100px;
}
ul li:nth-child(1) a:hover {
  cursor: url("../assets/default_pointer.png"), pointer;
}
ul li:last-child a {
  width: 100px;
  border-radius: 5px;
  background-color: rgb(237, 109, 70);
}
ul li:last-child a div.fb1 {
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
  position: absolute;
  display: none;
  left: 50%;
  transform: translateX(-50%);
  top: 55px;
  width: 100px;
  height: 50px;
  font-size: 15px;
  background-color: rgb(224, 223, 198);
  color: rgb(237, 109, 70);
  text-align: center;
  border: 2px solid rgb(224, 223, 198);
}
ul li:last-child a div.fb1:hover {
  background-color: rgb(237, 109, 70);
  color: rgb(224, 223, 198);
  font-size: 17px;
}
/* ul li:last-child a div.fb1:hover ~ div.fb4 { */
/* border-color: transparent transparent rgb(224, 223, 198); */
/* } */
ul li:last-child a div.fb2 {
  box-sizing: border-box;
  position: absolute;
  display: none;
  left: 50%;
  transform: translateX(-50%);
  top: 105px;
  width: 100px;
  height: 50px;
  font-size: 15px;
  background-color: rgb(224, 223, 198);
  color: rgb(237, 109, 70);
  text-align: center;
  border: 2px solid rgb(224, 223, 198);
}
ul li:last-child a div.fb2:hover {
  background-color: rgb(237, 109, 70);
  color: rgb(224, 223, 198);
  font-size: 17px;
}
ul li:last-child a div.fb3 {
  box-sizing: border-box;
  position: absolute;
  display: none;
  left: 50%;
  transform: translateX(-50%);
  top: 155px;
  width: 100px;
  height: 50px;
  font-size: 15px;
  background-color: rgb(224, 223, 198);
  color: rgb(237, 109, 70);
  text-align: center;
  border-radius: 0 0 5px 5px;
  border: 2px solid rgb(224, 223, 198);
}
ul li:last-child a div.fb3:hover {
  background-color: rgb(237, 109, 70);
  color: rgb(224, 223, 198);
  font-size: 17px;
}
ul li:last-child a div.fb4 {
  position: absolute;
  display: none;
  width: 0;
  height: 0;
  left: 50%;
  transform: translateX(-50%);
  border-style: solid;
  border-color: transparent transparent rgb(224, 223, 198) transparent;
  border-width: 0 20px 7.5px 20px;
  top: 47.5px;
}
ul li:last-child a:hover div {
  display: block;
}
ul li:last-child a > div > a {
  display: inline-block;
  color: rgb(237, 109, 70);
  background-color: rgba(255, 255, 255, 0);
  text-decoration: none;
  width: 100%;
  height: 100%;
}
ul li:last-child a > div:hover > a {
  color: rgb(224, 223, 198);
}
ul li > a {
  position: relative;
  background-color: rgb(237, 109, 70);
  text-decoration: none;
  display: inline-block;
  height: 45px;
  width: 45px;
  top: 10px;
  font-size: 15px;
  text-align: center;
  line-height: 50px;
  color: white;
  border-radius: 50%;
}
ul li input {
  pointer-events: painted;
  position: relative;
  opacity: 0.9;
  top: 12.5px;
  width: 500px;
  height: 40%;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0 5px;
  font-size: 20px;
  outline: none;
}
.toRegister {
  color: rgb(237, 109, 70);
}
.personalCenter {
  cursor: default;
  position: absolute;
  display: none;
  top: 55px;
  width: 200px;
  left: 50%;
  border-radius: 10px;
  transform: translateX(-50%);
  background-color: white;
}
.personalCenter a {
  cursor: pointer;
  display: block;
  background-color: rgb(237, 109, 70);
  border-radius: 8px;
  margin: 10px;
  text-decoration: none;
  color: white;
}
.default_pointer{
  cursor: url('../assets/default_pointer.png'),pointer;
  }
</style>