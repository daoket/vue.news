<template>
  <footer class="foot">
    <img src="../assets/head/logo-baijia.png"/>
    <div class="email">
      <p>联系我们：Baijia@baidu.com</p>
      <p>百度新闻独家出品</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      imgs: []
    }
  }
}
</script>

<style lang="stylus">
.foot{
  height: 100px;
  background-color: #262627;
  display: flex;
  color: #fff;
  justify-content: space-around;
  align-items: center;
  img{
    height: 40px;
    margin-left: 10%;
    padding-right: 5%;
    border-right: 1px solid #666;
  }
  .email{
    font-size: 13px;
    p{
      margin: 10px 0;
    }
  }
}
</style>
