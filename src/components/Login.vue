<template>
    <div>
        <div class="alert alert-danger" v-if="error">
            <p v-text="errors"></p>
        </div>
        <form autocomplete="off" @submit.prevent="login" method="post">
            <div class="form-group">
                <label for="email">邮箱</label>
                <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">密码</label>
                <input type="password" id="password" class="form-control" v-model="password" required>
            </div>
            <div class="form-group">
                <div id="gt"></div>
            </div>
            <button type="submit" class="btn btn-default">登录</button>
        </form>
    </div>
</template>
<script>
  import gtInit from '../gt'
  export default {
    data(){
      return {
        email: null,
        password: null,
        error: false,
        errors: {}
      }
    },
    created(){
      this.getGt(function(gt){
        gt.appendTo('#gt');
      });
    },
    mounted(){
      // console.log(gtInit);
    },
    methods: {
      getGt(func){
        this.$http.post('geetest_api_v1',{}).then(res => {
          console.log(res);
          let data = res.data;
          console.log(data,'aa');
          initGeetest({
              // 以下 4 个配置参数为必须，不能缺少
              gt: data.gt,
              challenge: data.challenge,
              offline: !data.success, // 表示用户后台检测极验服务器是否宕机
              new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机

              product: "float", // 产品形式，包括：float，popup
              width: "300px"
          }, func);
        }).catch(error => {
          console.log(JSON.stringify(error))
        });
      },
      login(){
        var app = this
        this.$auth.login({
            params: {
              email: app.email,
              password: app.password
            }, 
            success: function () {},
            error: function (resp) {
              app.error = true;
              app.errors = resp.response.data.error;
            },
            rememberMe: true,
            redirect: '/dashboard',
            fetchUser: true,
        });       
      },
    }
  } 
</script>