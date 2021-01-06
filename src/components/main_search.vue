<template>
  <div>
 <ul class="ul_nav">
      <li>
        <router-link to="">首页</router-link>
      </li>
      <li>
        <router-link to="">购物车</router-link>
      </li>
      <li>
        <router-link to="">收藏夹</router-link>
      </li>
      <li>
        <router-link to="">我的订单</router-link>
      </li>
    </ul>
    <div class="div_nav2" style="position: absolute;top: -5px;left: 70%;">
      <div class="div1" style="position: relative;top: 25px;"> </div>
      <div v-if="userinfo==''" class="div2" style="position: relative;top: -7px;text-align: center;">
        <router-link to="" style="color:#3d405b; text-decoration: none;">注册</router-link>
      </div>
      <div v-else class="div2" style="position: relative;top: -7px;text-align: center;">
        <a href="" style="color:#3d405b; text-decoration: none;">退出</a>
      </div>
      <div v-if="userinfo==''" class="div3" style="position: relative;top: -7px;text-align: center;">
        <router-link to="" style="color:#fffffc; text-decoration: none;">登录</router-link>
      </div>
      <div v-else class="div3" style="position: relative;top: -7px;text-align: center;" >
        <a href="http://127.0.0.1:8081/person" style="color:#fffffc; text-decoration: none;" target="_blank">{{userinfo.logname}}</a>
      </div>
    </div>




  </div>
</template>

<script >
  export default{
    data:function(){
      return{
          userinfo:"",
      }
    },

     
  }
</script>

<style scoped="">
  .div1{
    width: 60px;
    height: 60px;
    background-color: #9d8189;
    border-radius: 50px;
    margin-right: 20px;
  }
  .div2{
    width: 80px;
    height: 40px;
    background-color: #fffffc;
    margin-right: 5px;
    border-radius: 20px;

  }
  .div3{
    width: 80px;
    height: 40px;
    background-color:#9d8189 ;
    border-radius: 20px;

  }


  .div_nav2{
    font-size: 15px;
    font-weight: 600;
  }
  .div_nav2 a{
    position: relative;
    top: 9px;  }


  .div_nav2 div{
    display: inline-block;
  }

   li {
    display: inline-block;
    padding: 40px 20px;
    list-style-type: none;
    font-size: 15px;
    font-weight: 600;

  }
   li a{
    color: #9d8189;
     text-decoration: none;

  }
  .ul_nav li a:hover{
    color: #ffb5a7;

  }
  .ul_nav2 li a:hover{
    color: #ffb5a7;

  }
  .ul_nav{
    margin-left: 250px;
  }




</style>

