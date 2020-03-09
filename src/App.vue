<template>
  <div id="app">
    <router-view/>

    <!-- <div class="menu">
      <ul class="menu-ul">
        <li class="menu-item"></li>
        <li class="menu-item"></li>
        <li class="menu-item"></li>
        <li class="menu-item"></li>
        <li class="menu-item"></li>
      </ul>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less">

.menu{
  width: 100%;
  height: 44px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  background: #fff;
  z-index: 1000;
  .menu-ul{
    margin: 0;
    padding: 0;
    width: 100%;
    .menu-item{
      display: inline-block;
      width: 20%;
      height: 44px;
      float: left;
    }
  } 
}
</style>
