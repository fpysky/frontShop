<template>
    <div id="login">
        <div class="ucSimpleHeader" id="header">
            <a href="/" class="meizuLogo"><img style="vertical-align: middle;" src="@/assets/logo.png" alt=""></a>
        </div>
        <div class="banner-box" :style="{background:'url('+ loginBackground +') no-repeat center'}">
            <div class="login-form animated bounceInRight fast">
                <el-form :model="ruleForm" ref="ruleForm" label-width="0px" style="text-align:center;">
                    <div class="login-form-title">
                        <span>账号登陆</span>
                    </div>
                    <el-form-item prop="username">
                        <el-input placeholder="用户名" v-model="ruleForm.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input placeholder="密码" type="password" v-model="ruleForm.password"></el-input>
                    </el-form-item>
                    <div style="margin-bottom:22px;">
                        <div id="captcha" ref="captcha">
                            <p id="wait" v-if="isloading" class="show">正在加载验证码......</p>
                        </div>
                    </div>
                    <el-button :loading="loading" style="width:100%;" type="primary" @click="handleLogin">登陆</el-button>
                    <hr>
                    <a @click.prevent="goGithubLogin" href="" title="可以通过GitHub登陆哟~"><img style="width:30px;height:30px;" src="@/assets/github.png" alt=""></a>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import flymeUrl from "@/assets/flyme.png"
import baseUrl from "@/assets/base.png"
import loginBackground from "@/assets/login-background.jpg"
import logo from "@/assets/logo.png"
import '@/gt'
import { geetest_api_v1, valiGeet } from '@/api/login'
import 'animate.css'
import { setToken } from '@/utils/auth'
export default {
    data(){
        return {
            flymeUrl:flymeUrl,
            baseUrl:baseUrl,
            loginBackground:loginBackground,
            logo:logo,
            ruleForm:{
                username:'',
                password:'',
            },
            isloading:false,
            isValidate:false,
            loading:false
        }
    },
    created(){
        this._initGeetest()
        if(this.$route.query.accessToken){
            this.$store.dispatch('LoginByThirdparty', {accessToken:this.$route.query.accessToken}).then(() => {
                window.location.href = '/'
            }).catch(error => {
                console.log(error) 
            })
        } 
    },
    methods:{
        goGithubLogin(){
            window.location.href = process.env.BASE_API + 'api/login/github'
        },
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
                    this.ruleForm.username = this.ruleForm.username.trim()
                    this.ruleForm.password = this.ruleForm.password.trim()
                    this.ruleForm.grant_type = 'password'
                    this.ruleForm.client_id = 2
                    this.ruleForm.client_secret = 'CHCZspEuFcwHwFaEdJzzmSavfNWVVtpRxbkaMgzi'
                    this.ruleForm.scope = ''
                    this.ruleForm.provider = 'users'
                    this.loading = true
                    this.$store.dispatch('LoginByUsername', this.ruleForm).then(() => {
                        this.loading = false
                        this.$router.go(-1)
                    }).catch(error => {
                        console.log(error)
                        this.loading = false
                        this.$message.warning('用户名或密码错误')
                        this._initGeetest()
                        this.isValidate = false
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
    /* background: url(@/assets/login-background.jpg) no-repeat center; */
    background-size: contain;
}
.login-form{
    width:280px;
    min-height:300px;
    position:absolute;
    top:15%;
    left:62%;
    background-color:#fff;
    padding:0 26px 10px 26px;
}
.login-form-title span{
    display: block;
    font-size: 18px;
    text-align: center;
    padding:16px 0;
}
.el-form-item--medium{
    margin:15px 0;
}
hr {
    margin-top: 15px;
    margin-bottom: 10px;
    border: 0;
    border-top: 1px solid #eeeeee;
}
</style>
