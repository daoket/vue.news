<template>
  <footer class="foot">
    <img src="../../assets/head/logo.png"/>
    <div class="email">
      <p>联系我：wt_niu@163.com</p>
      <a href="https://github.com/daoket/vue.news"><p>Fork me on GitHub</p></a>
    </div>
  </footer>
</template>

<style lang="stylus">
.foot{
  height: 100px;
  background-color: #262627;
  display: flex;
  color: #fff;
  justify-content: space-around;
  align-items: center;
  img{
    height: 20px;
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
