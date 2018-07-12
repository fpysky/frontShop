<template>
    <div class="banner-box">
        <form class="main-form" autocomplete="off" @submit.prevent="register" method="post">
            <div class="form-group">
                <h4 style="text-align:center;">注册</h4>
            </div>
            <div v-if="!success">
                <div class="alert alert-danger" v-if="error && errors.errors">
                    <span class="help-block" v-if="error && errors.errors">{{ errors.errors[0] }}</span>
                </div>
                <div class="form-group" v-bind:class="{ 'has-error': error && errors.name }">
                    <input type="text" id="name" class="form-control" placeholder="用户名" v-model="name" required>
                    <span class="help-block" v-if="error && errors.name">{{ errors.name[0] }}</span>
                </div>
                <div class="form-group" v-bind:class="{ 'has-error': error && errors.email }">
                    <input type="email" id="email" class="form-control" placeholder="邮箱" v-model="email" required>
                    <span class="help-block" v-if="error && errors.email">{{ errors.email[0] }}</span>
                </div>
                <div class="form-group" v-bind:class="{ 'has-error': error && errors.password }">
                    <input type="password" id="password" class="form-control" placeholder="密码" v-model="password" required>
                    <span class="help-block" v-if="error && errors.password">{{ errors.password[0] }}</span>
                </div>
                <div class="form-group" v-bind:class="{ 'has-error': error && errors.geetest_challenge }">
                    <div id="gt"></div>
                    <span class="help-block" v-if="error && errors.geetest_challenge">{{ errors.geetest_challenge[0] }}</span>
                </div>
                <button type="submit"  class="fullBtnBlue">提交</button>
            </div>
            <div class="alert alert-success" v-if="success">
                <p>注册完成，去<router-link :to="{name:'login'}">登录</router-link></p>
            </div>
        </form>
    </div>
</template>
<script>
    import gtInit from '../gt'
    export default {
        data(){
            return {
                name: '',
                email: '',
                password: '',
                error: false,
                errors: {},
                success: false,
                geetest_challenge: '',
                geetest_validate: '',
                geetest_seccode: '',
                geetest_status:false,
            };
        },
        mounted(){
            this.initGt();
        },
        methods: {
            initGt(){
                let app = this;
                document.getElementById('gt').innerHTML = '';
                app.geetest_challenge = '';
                app.geetest_validate = '';
                app.geetest_seccode = '';
                this.getGt(function(gt){
                gt.appendTo('#gt');
                gt.onSuccess(func => {
                    app.geetest_challenge = document.getElementsByTagName('input')['geetest_challenge'].value;
                    app.geetest_validate = document.getElementsByTagName('input')['geetest_validate'].value;
                    app.geetest_seccode = document.getElementsByTagName('input')['geetest_seccode'].value;
                    app.register();
                });
                gt.onError(func => {});
                });
            },
            getGt(func){
                this.$http.post('geetest_api_v1',{}).then(res => {
                let data = res.data;
                this.geetest_status = data.status;
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
            register(){
                var app = this
                this.$auth.register({
                    params: {
                        name: app.name,
                        email: app.email,
                        password: app.password,
                        geetest_challenge: app.geetest_challenge,
                        geetest_validate: app.geetest_validate,
                        geetest_seccode: app.geetest_seccode,
                        geetest_status: app.geetest_status
                    }, 
                    success: function () {
                        app.success = true
                    },
                    error: function (resp) {
                        app.error = true;
                        app.errors = resp.response.data.errors;
                        app.initGt();
                    },
                    redirect: null
                });                
            }
        }
    }
</script>
<style>
#email{
    width:300px;
  }
  #password{
    width:300px;
  }
 .banner-box{
    position: relative;
    overflow: hidden;
    min-height: 750px;
    max-height: 1080px;
    background: linear-gradient(to bottom, #101012, #1A1A1C, #151517);
    background: #f8fcff;
    background: linear-gradient(to bottom, #f8fcff, #f8fcff, #f8fcff);
 }
 .banner-box .main-form{
    position: absolute;
    top: 25%;
    right: 18%;
    background-color: #FFF;
    padding: 35px 35px 10px;
    border-radius: 2px;
    min-height:300px;
    min-width:300px;
 }
 .main-form .fullBtnBlue{
    width: 300px;
    display: block;
    height: 46px;
    font-size: 14px;
    line-height: 46px;
    text-align: center;
    margin-bottom: 10px;
    outline: none;
    cursor: pointer;
    background-color: #32a5e7;
    color: #fff;
    border:none;
    border-radius: 2px;
 }
</style>
