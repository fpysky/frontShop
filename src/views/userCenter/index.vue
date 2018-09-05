<template>
    <div>
        <Header></Header>
        <div class="store-wrap">
        <div class="crumbs">
            <a href="//store.meizu.com">首页 &gt;&nbsp;</a>
            <a href="//me.meizu.com/member/index" class="active">我的商城</a>
        </div>
        <div class="main clearfix">
        <div class="left-nav f-fl">
            <div class="nav-main">
                <a href="javascript:;" class="type-title"><i class="iconfont icon-orderCenter"></i>订单中心</a>
                <a href="//ordercenter.meizu.com/list/index.html" class="ml " data-mtype="store_mc_order_me" data-mdesc="我的订单">我的订单</a>
                <a href="//mcycle.meizu.com/repo/order/list" class="ml " data-mtype="store_mc_order_mcycle" data-mdesc="我的回购单">我的回购单</a>
                <a href="javascript:;" class="type-title"><i class="iconfont icon-selfCenter"></i>个人中心</a>
                <a href="/address" class="ml " data-mtype="store_mc_me_address" data-mdesc="地址管理">地址管理</a>
                <a href="//me.meizu.com/member/favorite/index" class="ml " data-mtype="store_mc_me_favorite" data-mdesc="我的收藏">我的收藏</a>
                <a href="//me.meizu.com/member/message/index" class="ml " data-mtype="store_mc_me_msg" data-mdesc="消息提醒">消息提醒</a>
                <a href="//me.meizu.com/member/advice/index" class="ml " data-mtype="store_mc_me_suggest" data-mdesc="建议反馈">建议反馈</a>
                <a href="javascript:;" class="type-title"><i class="iconfont icon-moneyCenter"></i>资产中心</a>
                <a href="//me.meizu.com/member/coupon/index" class="ml " data-mtype="store_mc_assets_coupon" data-mdesc="我的优惠券">我的优惠券</a>
                <a href="//me.meizu.com/member/redenvelop/index" class="ml " data-mtype="store_mc_assets_redpacket" data-mdesc="我的红包">我的红包</a>
                <a href="//mcycle.meizu.com/page/balance_log" class="ml " data-mtype="store_mc_assets_mcycleticket" data-mdesc="我的回购金">我的回购金</a>
                <a href="javascript:;" class="type-title"><i class="iconfont icon-serverCenter"></i>服务中心</a>
                <a href="//ordercenter.meizu.com/refund/index.html" class="ml " style="width: 105px" data-mtype="store_mc_service_refund" data-mdesc="退款退换货跟踪">退款/退换货跟踪</a>
                <a href="//me.meizu.com/member/service/recovery" class="ml " data-mtype="store_mc_service_recovery" data-mdesc="以旧换新">以旧换新</a>
            </div>
        </div>
            <div class="right-content f-fr">
                <div class="index-main">
                    <div class="top clearfix">
                        <div class="information clearfix f-fl">
                            <div class="pic f-fl">
                                    <img src="//image-res.mzres.com/image/uc/80f8d55d49464e3e90d72f6679cbf970z?t=1530512117000" alt="">
                            </div>
                            <div class="name f-fl">
                                <span>{{name}}</span>
                                <span>welcome back!!!</span>
                            </div>
                            <div class="info f-fl">
                                <ul>
                                    <li>Flyme账号：<span></span></li>
                                    <li>绑定手机号：<span>1562****785</span></li>
                                    <li class="emailText">绑定邮箱：<span>未绑定</span></li>
                                </ul>
                                <a class="edit" href="https://member.meizu.com/uc/webjsp/member/detail" target="_blank">修改个人信息 &gt;</a>
                            </div>
                        </div>
                        <!-- <div class="backCouponNum f-fl">
                            <p>回购金：<span>¥0</span></p>
                        </div> -->
                    </div>

                    <div class="bottom clearfix">
                        <!-- <div class="orderState f-fl">
                            <div class="title clearfix">
                                <span class="f-fl">订单状态</span>
                                <a class="detail f-fr" href="//ordercenter.meizu.com/list/index.html" data-mtype="store_mc_orderstatus_all" data-mdesc="查看全部订单">查看全部订单 &gt;</a>
                            </div>
                            <div class="content">
                                <div class="waitPay clearfix">
                                    <span class="f-fl cercl">
                                    <i class="iconfont icon-waitingPay"></i>
                                    </span>
                                    <div class="text f-fl">
                                        <p>待付款订单：<span class="num">0</span></p>
                                        <a class="detail" href="//ordercenter.meizu.com/list/index.html?type=0" data-mtype="store_mc_orderstatus_1" data-mdesc="待付款订单">查看全部待付款订单 &gt;</a>
                                    </div>
                                </div>
                                <div class="waitDeliver clearfix">
                                    <span class="f-fl cercl">
                                    <i class="iconfont icon-waitingDeliver"></i>
                                    </span>
                                    <div class="text f-fl">
                                        <p>待发货订单：<span class="num">0</span></p>
                                        <a class="detail" href="//ordercenter.meizu.com/list/index.html?type=1" data-mtype="store_mc_orderstatus_2" data-mdesc="待发货订单">查看全部待发货订单 &gt; </a>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div class="message f-fl">
                            <div class="title clearfix">
                                <span class="f-fl">活动消息</span>
                                <a class="f-fr detail" href="//me.meizu.com/member/message/index" data-mtype="store_mc_msg_all" data-mdesc="查看全部消息">查看全部消息 &gt;</a>
                            </div>
                            <div id="tableList" class="list J_no_data"><span>您暂无此类消息提醒！</span></div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import Header from '@/views/layout/Header'
import { mapGetters } from 'vuex'
export default {
    name:'index',
    components: {
        Header
    },
    computed: {
        ...mapGetters([
        'sidebar',
        'name',
        'avatar'
        ])
    },
    data(){
        return {

        }
    },
    created(){
    },
    methods:{
        
    }
}
</script>
<style scoped>
.store-wrap {
    width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
}
.crumbs {
    margin: 10px 0 24px;
    width: 100%;
}
.crumbs a {
    display: inline-block;
    text-decoration: none;
    color: #666;
}
.main {
    margin-bottom: 40px;
}
.clearfix {
    zoom: 1;
}
.main .left-nav {
    font-size: 14px;
    color: #666;
    width: 15%;
    min-height: 580px;
}
.left-nav, .right-content {
    font-size: 14px;
    color: #666;
}
.f-fl {
    float: left!important;
}
.main .nav-main {
    margin-top: 10px;
    background: #fafafc;
    padding: 0 0 54px 20px;
}
.main .left-nav {
    font-size: 14px;
    color: #666;
    width: 15%;
    min-height: 580px;
}
.main .left-nav .type-title:first-child {
    line-height: 14px;
    padding: 15px 0 20px;
}
.main .left-nav .type-title {
    line-height: 56px;
    font-weight: bolder;
    cursor: default;
}
.main .left-nav a {
    display: block;
    color: #666;
    text-decoration: none;
    line-height: 34px;
    width: 85px;
}
.main .left-nav .type-title .iconfont {
    font-size: 17px!important;
    padding-right: 5px;
}
.iconfont {
    font-family: iconfont!important;
    font-size: 16px;
    font-weight: 400;
}
.buy-font, .iconfont, .title-font {
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: .2px;
    -moz-osx-font-smoothing: grayscale;
}
.right-content {
    width: 83%;
    display: inline-block;
}
.left-nav, .right-content {
    font-size: 14px;
    color: #666;
}
.f-fr {
    float: right!important;
}
.index-main {
    color: #666;
    margin-top: 29px;
    width: 100%;
}
.index-main .bottom {
    width: 100%;
    margin-top: 20px;
}
.index-main .information {
    width: 66%;
    border: 1px solid #f3f3f3;
    border-right: 0;
    padding: 28px 3.5%;
}
f-fl {
    float: left!important;
}
.index-main .information .pic {
    padding-right: 30px;
}
.index-main .information .name {
    min-width: 170px;
    max-width: 220px;
    padding-right: 30px;
}
.f-fl {
    float: left!important;
}
img {
    border-style: none;
    vertical-align: top;
}
.index-main .information img {
    width: 119px;
    height: 119px;
    padding: 5px;
    border: 5px solid #fafafc;
}
.index-main .information .name span:first-child {
    font-size: 20px;
    color: #666;
    margin: 10px auto;
}
.index-main .information .name span {
    display: block;
    color: #999;
}
.index-main .information .info ul {
    margin-top: 5px;
}
h1, li, ul, ​ div {
    margin: 0;
    padding: 0;
}
.index-main .information .info a {
    display: block;
    margin-top: 15px;
    color: #999;
    text-decoration: none;
}
.index-main .information .info ul li {
    color: #999;
    line-height: 32px;
}
.index-main .information .info ul li span {
    color: #666;
    margin-left: 10px;
}
.index-main .information .info ul li {
    color: #999;
    line-height: 32px;
}
.index-main .bottom {
    width: 100%;
    margin-top: 20px;
}
.index-main .bottom .orderState {
    width: 57%;
    border: 1px solid #f3f3f3;
    margin-right: 2%;
}
.f-fl {
    float: left!important;
}
.index-main .bottom .title {
    background: #fafafc;
    line-height: 38px;
    border-bottom: 1px solid #f3f3f3;
}
.index-main .bottom .title span {
    margin-left: 18px;
}
.index-main .bottom .title .detail {
    color: #999;
    margin-right: 18px;
    text-decoration: none;
}
.index-main .bottom .orderState .content {
    padding: 38px 75px;
}
.index-main .bottom .orderState .content .waitPay {
    margin-bottom: 30px;
}
.index-main .bottom .orderState .content .waitPay .cercl {
    background: #f56313;
}
.index-main .bottom .orderState .content .cercl {
    width: 90px;
    height: 90px;
    display: block;
    border-radius: 45px;
}
.index-main .bottom .orderState .content .iconfont {
    color: #fff;
    text-align: center;
    display: block;
    width: 90px;
    height: 90px;
    line-height: 83px;
    font-size: 48px;
}
.iconfont {
    font-family: iconfont!important;
    font-size: 16px;
    font-weight: 400;
}
.buy-font, .iconfont, .title-font {
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: .2px;
    -moz-osx-font-smoothing: grayscale;
}
.index-main .bottom .orderState .content .waitDeliver .cercl {
    background: #00c3f5;
}
.index-main .bottom .orderState .content .cercl {
    width: 90px;
    height: 90px;
    display: block;
    border-radius: 45px;
}
.index-main .bottom .orderState .content .iconfont {
    color: #fff;
    text-align: center;
    display: block;
    width: 90px;
    height: 90px;
    line-height: 83px;
    font-size: 48px;
}
.iconfont {
    font-family: iconfont!important;
    font-size: 16px;
    font-weight: 400;
}
.index-main .bottom .orderState .content .text {
    margin: 15px 0 0 35px;
    line-height: 30px;
}
.index-main .bottom .orderState .content p {
    font-size: 18px;
}
dd, dl, dt, h1, h2, h3, h4, h5, h6, ol, p, ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-weight: 400;
}
.index-main .bottom .orderState .content .text .detail {
    text-decoration: none;
    color: #999;
}
.index-main .bottom .orderState .content .waitDeliver .num {
    color: #00c3f5;
}
.index-main .bottom .orderState .content p {
    font-size: 18px;
}
.index-main .bottom .message {
    width: 39%;
    border: 1px solid #f3f3f3;
}
.index-main .bottom .title {
    background: #fafafc;
    line-height: 38px;
    border-bottom: 1px solid #f3f3f3;
}
.index-main .bottom .title span {
    margin-left: 18px;
}
.index-main .bottom .title .detail {
    color: #999;
    margin-right: 18px;
    text-decoration: none;
}
#tableList {
    min-height: 300px;
}
.index-main .bottom .message .list {
    margin: 50px 15px;
    height: 186px;
    min-height: 186px!important;
}
.index-main .J_no_data {
    width: 94%;
    /* background: url(../img/noData-31ec95ea89.png) center 92px no-repeat; */
    background-size: 70%;
    text-align: center;
}
.J_no_data {
    margin-top: 130px;
    width: 100%;
    height: 200px;
    /* background: url(../img/noData-31ec95ea89.png) center 60px no-repeat; */
}
.index-main .J_no_data span {
    display: block;
    padding-top: 33px;
}
</style>
