<template>
    <div id="register">
        <div class="ucSimpleHeader" id="header">
            <a href="/" class="meizuLogo"><img style="vertical-align: middle;" src="@/assets/logo.png" alt=""></a>
        </div>
        <div class="banner-box" :style="{background:'url('+ loginBackground +') no-repeat center'}">
            <div class="login-form animated bounceInRight fast">
                <el-form :model="ruleForm" ref="ruleForm" label-width="0px" style="text-align:center;">
                    <div class="login-form-title">
                        <p>注册</p>
                    </div>
                    <el-form-item prop="name">
                        <el-input placeholder="用户名" v-model="ruleForm.name"></el-input>
                        <span v-if="isError && errors.name" class="errorMessage">温馨提示：{{errors.name[0]}}</span>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input placeholder="密码" type="password" v-model="ruleForm.password"></el-input>
                        <span v-if="isError && errors.password" class="errorMessage">温馨提示：{{errors.password[0]}}</span>
                    </el-form-item>
                    <el-form-item prop="checkPwd">
                        <el-input placeholder="确认密码" type="password" v-model="ruleForm.checkPwd"></el-input>
                    </el-form-item>
                    <div style="margin-bottom:22px;">
                        <div id="captcha" ref="captcha">
                            <p id="wait" v-if="isloading" class="show">正在加载验证码......</p>
                        </div>
                    </div>
                    <el-button :loading="loading" style="width:100%;" type="primary" @click="handleLogin">注册</el-button>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import flymeUrl from "@/assets/flyme.png"
import baseUrl from "@/assets/base.png"
import loginBackground from "@/assets/login-background.jpg"
import '@/gt'
import { geetest_api_v1, valiGeet, register } from '@/api/login'
import 'animate.css'
export default {
    name:'register',
    data(){
        return {
            flymeUrl:flymeUrl,
            baseUrl:baseUrl,
            loginBackground:loginBackground,
            ruleForm:{
                name:'',
                password:'',
            },
            isloading:false,
            isValidate:false,
            loading:false,
            isError:false,
            errors:{}
        }
    },
    created(){
        this._initGeetest()
    },
    methods:{
        _initGeetest(){
            let _this = this
            this.initGeetest(function(captchaObj){
                //验证成功
                captchaObj.onSuccess(function () {
                    _this.isdisabled = true;
                    _this.value = "正在登录中...";
                    _this.loading = true;
                    let validate = captchaObj.getValidate();
                    if (!validate) {
                        _this.$Message.error("请先完成验证");
                        return;
                    } 
                    let params = {
                    geetest_challenge : validate.geetest_challenge,
                    geetest_seccode : validate.geetest_seccode,
                    geetest_validate : validate.geetest_validate,
                    geetest_status : _this.status
                    }
                    _this.valiGeet(params)
                });
                captchaObj.onError(function () {
                    _this.$refs.captcha.innerHTML = ''
                    _this.isdisabled = false
                    _this.value = '登录'
                });
                captchaObj.onReady(function () {
                    _this.isdisabled = true
                    _this.value = "请完成验证";
                });
                _this.$refs.captcha.innerHTML = ''
                captchaObj.appendTo("#captcha");
            })
        },
        valiGeet(params){
            valiGeet(params).then(res => {
                this.isValidate = true
                this.handleLogin()
            });
        },
        initGeetest(obj){
            geetest_api_v1().then(res => {
                var data = res.data;
                this.status = data.status;
                initGeetest({
                    // 以下 4 个配置参数为必须，不能缺少
                    gt: data.gt,
                    challenge: data.challenge,
                    offline: !data.success, // 表示用户后台检测极验服务器是否宕机
                    new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机

                    product: "float", // 产品形式，包括：float，popup
                    width: "100%"
                }, obj);
            })
        },
        handleLogin(){
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    if(!this.isValidate){
                        this.$message.warning('请滑动以完成验证')
                        return
                    }
                    this.ruleForm.name = this.ruleForm.name.trim()
                    this.ruleForm.password = this.ruleForm.password.trim()
                    if(this.ruleForm.password != this.ruleForm.checkPwd){
                        this.$message.warning('两次输入密码不一致')
                        this.loading = false
                        this._initGeetest()
                        this.isValidate = false
                        return
                    }
                    this.loading = true
                    this.isError = false
                    this.errors = {}
                    register(this.ruleForm).then(res => {
                        this.$message.success('ok注册成功了')
                        let sendData = {
                            grant_type : 'password',
                            client_id : 2,
                            client_secret : 'CHCZspEuFcwHwFaEdJzzmSavfNWVVtpRxbkaMgzi',
                            scope : '',
                            provider : 'users',
                            username : this.ruleForm.name,
                            password : this.ruleForm.password
                        }
                        this.$store.dispatch('LoginByUsername', sendData).then(() => {
                            this.loading = false
                            this.$router.push({ path: '/' })
                        }).catch(error => {})
                    }).catch(error => {
                        this.loading = false
                        this._initGeetest()
                        this.isValidate = false 
                        this.isError = true
                        this.errors = error.response.data.errors 
                    })
                    
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
}
</script>
<style scoped>
.ucSimpleHeader {
    height: auto;
}
.ucSimpleHeader {
    margin: 0 auto;
    position: relative;
    max-width: 1200px;
}
div, h1, h2, h3, h4, p, form, label, input, textarea, img, span, dl, ul, li {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
}
.meizuLogo {
    height: 100%;
    width: 200px;
    overflow: hidden;
    display: block;
    padding:10px 0;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.meizuLogo i {
    width: 100%;
    height: 100%;
    display: block;
    _background-image: none;
    _margin-left: -2px;
    _margin-top: -4px;
}
.i_icon {
    display: inline-block;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.banner-box {
    position: relative;
    overflow: hidden;
    min-height: 750px;
    max-height: 1080px;
    background: linear-gradient(to bottom, #101012, #1A1A1C, #151517);
    background: #f8fcff;
    background: linear-gradient(to bottom, #f8fcff, #f8fcff, #f8fcff);
}
.banner-box:before {
    position: absolute;
    content: ' ';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: url(//uc-res.mzres.com/resources/uc/wlogin/member/images/banner.jpg) no-repeat center; */
    background-size: contain;
}
.login-form{
    width:280px;
    min-height:300px;
    position:absolute;
    top:20%;
    left:60%;
    background-color:#fff;
    padding:0 26px 26px 26px;
}
.login-form-title p{
    display: block;
    font-size: 18px;
    text-align: center;
    padding:16px 0;
}
.el-form-item--medium{
    margin:15px 0;
}
.errorMessage{
    color:#F56C6C;
    font-size:8px;
    line-height:18px;
    display:inline-block;
    width:100%;
    text-align:left;
}
</style>
