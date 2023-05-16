<template>
  <div class="app">
    <Top-navigation />
  </div>
</template>

<script>
import TopNavigation from "./components/TopNavigation";
import Jzfb from "./views/publish/Jzfb.vue";
export default {
  name: "app",
  components: { TopNavigation, Jzfb },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  cursor: url("./assets/cursor_default.png"), auto;
}
body {
  width: 100vmax;
  height: 1px;
  min-width: 600px;
  overflow: overlay;
  cursor: url("./assets/cursor_default.png"), auto;
}
/* body::-webkit-scrollbar {
  z-index: 2;
  position: absolute;
  border-radius: 10px;
  width: 10px;
  background-color: #f6f6f6;
  transition: 0.1s;
}
body::-webkit-scrollbar:active {
  width: 20px;
}
body::-webkit-scrollbar-button {
  width: 20px;
  height: 20px;
  background-color: rgb(224, 223, 198);
}
body::-webkit-scrollbar-button:start:vertical {
  border-radius: 50% 50% 0 0;
  border-bottom: 1px solid #d2d2d2;
}
body::-webkit-scrollbar-button:start:horizontal {
  border-radius: 50% 0 0 50%;
  border-right: 1px solid #d2d2d2;
}
body::-webkit-scrollbar-button:end:vertical {
  border-radius: 0 0 50% 50%;
  border-top: 1px solid #d2d2d2;
}
body::-webkit-scrollbar-button:end:horizontal {
  border-radius: 0 50% 50% 0;
  border-left: 1px solid #d2d2d2;
}
body::-webkit-scrollbar-thumb {
  width: 20px;
  height: 0;
  background-color: rgb(224, 223, 198);
} */
 .date-box > .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 146px;
}
.day > .el-input__inner {
  width: 313px;
  height: 40px;
  border-radius: 7px;
  border: 2px solid black;
}
select {
  width: 315px;
  height: 38px;
  padding-left: 10px;
  background-color: #ffffff;
  border-radius: 7px;
  color: #666666;
}
</style>
