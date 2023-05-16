<template>
  <div class="QiuzhuItem">
    <div class="help_item">
      <img />
      <p class="description">123456789101251155313</p>
      <p class="paidOrNot">1234568522222225555544444</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "QiuzhuItem",
};
</script>

<style>
.help_item {
  float: left;
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: rgb(244, 134, 101);
  box-shadow: 3px 3px 10px rgb(177, 55, 18);
  margin: 20px 0 20px 20px;
}
.help_item img {
  background-image: url("../../assets/topicon.png");
  background-size: 150px 100px;
  object-fit: cover;
  background-repeat: no-repeat;
  width: 150px;
  height: 100px;
  margin: 10px 25px;
}
.help_item p {
  margin: 10px 10px;
  background-color: rgb(224, 223, 198);
  border-radius: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(177, 55, 18);
}
</style>