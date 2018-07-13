<template>
    <div>
        <div class="header-wrap">
            <div class="header-logo" id="header-logo">
                <a href="/" class="header-logo-img"></a>
            </div>
            <div class="header-user" id="header-user">
                <div class="header-user-img">
                    <!-- <router-link v-if="$auth.check()" v-text="$auth.user().name" :to="{ name: 'userCenter' }"></router-link> -->
                    <img class="header-user-avatar" src="./assets/header-user-avatar.jpg" alt="">
                </div>
                <div class="header-user-box"></div>
                <!-- 登陆前 -->
                <div v-if="!$auth.check()" class="header-user-trigger" id="header-user-trigger">
                    <ul class="header-user-dropdown">
                        <li><router-link :to="{ name: 'login' }">立即登录</router-link></li>
                        <li><router-link :to="{ name: 'register' }">立即注册</router-link></li>
                        <li><a href="">我的订单</a></li>
                        <li><a href="">M码通道</a></li>
                    </ul>
                </div>
                <!-- 登陆后 -->
                <div v-if="$auth.check()" class="header-user-trigger" id="header-user-trigger">
                    <ul class="header-user-dropdown">
                        <li><router-link :to="{ name: 'userCenterIndex' }">个人中心</router-link></li>
                        <li><router-link :to="{ name: 'register' }">我的订单</router-link></li>
                        <li><a href="">M码通道</a></li>
                        <li><a href="#" @click.prevent="$auth.logout()">退出登陆</a></li>
                    </ul>
                </div>
            </div>
            <div class="header-search">
                <input type="text" data-keyword="魅蓝 6T" placeholder="魅蓝 6T">
                <a class="meizu-header-icon-search" data-mtype="gw_public_yt_search" href="?click=gw_public_yt_search"></a>
            </div>
            <ul class="header-link">
                <li><a href="">魅族商城</a></li>
                <li><a href="">魅族手机</a></li>
                <li><a href="">魅蓝手机</a></li>
                <li><a href="">数码配件</a></li>
                <li><a href="">影音娱乐</a></li>
                <li><a href="">家居生活</a></li>
                <li><a href="">服务</a></li>
                <li><a href="">专卖店</a></li>
                <li><a href="">Flyme</a></li>
                <li><a href="">社区</a></li>
            </ul>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import $ from 'jQuery'
export default {
    mounted(){
        this.headerUserTrigger();
    },
    methods:{
        headerUserTrigger(){
            $('#header-user').hover(function(){
                $('#header-user-trigger').show(400);
            },function(){
                $('#header-user-trigger').hide(400);
            });
        },
    },
}
</script>
<style>
    a,a:hover{
        text-decoration: none;
    }
    .header-wrap{
        width:68%;
        height:82px;
        margin:0 auto;
    }
    .header-wrap .header-logo{
        display:inline;
        float:left;
        padding:28px 0;
    }
    .header-wrap .header-logo .header-logo-img{
        display: block;
        width: 140px;
        height: 25px;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url(./assets/header-logo.png);
    }
    .header-wrap .header-user{
        display: inline;
        float: right;
        padding: 32px 12px 0 15px;
        text-align: right;
        font-size: 12px;
        position: relative;
        z-index: 105;
    }
    .header-wrap .header-user .header-user-img{
        position: relative;
        cursor: pointer;
        z-index: 3;
    }
    .header-wrap .header-user .header-user-img .header-user-avatar{
        width: 29px;
        height: 29px;
        margin-top: -5px;
    }
    .header-wrap .header-user .header-user-box{
        border-bottom: 0;
        position: absolute;
        height: 78px;
        width: 60px;
        top: 0;
        right: 0;
        z-index: 2;
    }
    .header-wrap .header-user .header-user-trigger{
        display:none;
    }
    .header-wrap .header-user .header-user-trigger .header-user-dropdown{
        position: absolute;
        right: 0;
        z-index: 1;
        width: 98px;
        background-color: #fff;
        top: 64px;
        left: 50%;
        border-radius: 2px;
        box-sizing: border-box;
        text-align: center;
        padding: 15px 0;
        margin-left: -48px;
        box-shadow: 0 0 5px rgba(0,0,0,.1);
    }
    .header-wrap .header-user .header-user-trigger .header-user-dropdown:after{
        top:-5px;
        border-bottom-color: #fff;
    }
    .header-wrap .header-user .header-user-trigger .header-user-dropdown li:first-child{
        margin-top: 0 !important;
    }
    .header-wrap .header-user .header-user-trigger .header-user-dropdown li:last-child{
        margin-bottom: 0 !important;
    }
    .header-wrap .header-user .header-user-trigger .header-user-dropdown li{
        font-size: 12px;
        display: block;
        margin: 15px auto;
        list-style: none;
        padding: 0;
    }
    .header-wrap .header-link{
        display: inline;
        float: right;
        overflow: hidden;
        white-space: nowrap;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .header-wrap .header-link li{
        display: inline;
        float: left;
    }
    .header-wrap .header-link li a{
        display: block;
        padding: 31px 20px 30px;
        line-height: 21px;
        font-size: 14px;
        transition: color .1s linear;
        color: #515151;
        text-decoration: none;
    }
    .header-wrap .header-search{
        position: relative;
        float: right;
        margin: 26px 5px 0 10px;
        width: 170px;
        height: 30px;
        line-height: 29px;
        font-size: 12px;
        border-radius: 2px;
        border: 1px solid #ddd;
    }
    .header-wrap .header-search a{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        display: block;
        width: 36px;
        height: 32px;
        background-image: url(./assets/search-logo.png);
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
    }
</style>

