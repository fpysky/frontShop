<template>
    <div class="store-wrap">
        <div class="crumbs">
            <a href="/">首页 &gt;&nbsp;</a>
            <a href="/" class="active">我的商城</a>
        </div>
        <div class="main clearfix">
            <div class="left-nav f-fl">
                <div class="nav-main">
                    <a href="javascript:;" class="type-title"><i class="iconfont icon-orderCenter"></i>订单中心</a>
                    <a href="" class="ml " data-mtype="store_mc_order_me" data-mdesc="我的订单">我的订单</a>
                    <a href="/" class="ml " data-mtype="store_mc_order_mcycle" data-mdesc="我的回购单">我的回购单</a>
                    <a href="/" class="ml " data-mtype="store_mc_order_insurance" data-mdesc="我的意外保">我的意外保</a>
                    <a href="javascript:;" class="type-title"><i class="iconfont icon-selfCenter"></i>个人中心</a>
                    <a href="/userCenterUserAddress" class="ml " data-mtype="store_mc_me_address" data-mdesc="地址管理">地址管理</a>
                    <a href="/" class="ml " data-mtype="store_mc_me_favorite" data-mdesc="我的收藏">我的收藏</a>
                    <a href="/" class="ml " data-mtype="store_mc_me_msg" data-mdesc="消息提醒">消息提醒</a>
                    <a href="/" class="ml " data-mtype="store_mc_me_suggest" data-mdesc="建议反馈">建议反馈</a>
                    <a href="javascript:;" class="type-title"><i class="iconfont icon-moneyCenter"></i>资产中心</a>
                    <a href="/" class="ml " data-mtype="store_mc_assets_coupon" data-mdesc="我的优惠券">我的优惠券</a>
                    <a href="/" class="ml " data-mtype="store_mc_assets_redpacket" data-mdesc="我的红包">我的红包</a>
                    <a href="/" class="ml " data-mtype="store_mc_assets_mcycleticket" data-mdesc="我的回购金">我的回购金</a>
                    <a href="javascript:;" class="type-title"><i class="iconfont icon-serverCenter"></i>服务中心</a>
                    <a href="/" class="ml " style="width: 105px" data-mtype="store_mc_service_refund" data-mdesc="退款退换货跟踪">退款/退换货跟踪</a>
                    <a href="/" class="ml " data-mtype="store_mc_service_insurance" data-mdesc="补办意外保">意外保</a>
                    <a href="/" class="ml " data-mtype="store_mc_service_recovery" data-mdesc="以旧换新">以旧换新</a>
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
                                <span v-text="$auth.user().name"></span>
                                <span>欢迎您回来！</span>
                            </div>
                            <div class="info f-fl">
                                <ul>
                                    <li>商城账号：<span v-text="$auth.user().email"></span></li>
                                    <li>绑定邮箱：<span v-text="$auth.user().email"></span></li>
                                </ul>
                                <a class="edit" href="https://member.meizu.com/uc/webjsp/member/detail" target="_blank">修改个人信息 &gt;</a>
                            </div>
                        </div>
                        <div class="backCouponNum f-fl">
                            <p>回购金：<span>¥0</span></p>
                        </div>
                    </div>

                    <div class="bottom clearfix">
                        <div class="orderState f-fl">
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
                        </div>
                        <div class="message f-fl">
                            <div class="title clearfix">
                                <span class="f-fl">活动消息</span>
                                <a class="f-fr detail" href="//me.meizu.com/member/message/index" data-mtype="store_mc_msg_all" data-mdesc="查看全部消息">查看全部消息 &gt;</a>
                            </div>
                            <div id="tableList" class="list">
                                <ul>
                                    <li class="clearfix">
                                        <p class="f-fl time">
                                            <input type="hidden" class="_timeFull" value="1530871200000">
                                            <span class="fullTime">2018-07-06</span>
                                            <span class="firstMounth">07-06</span>
                                            <span class="smallTime">18:00</span>
                                        </p>
                                        <p class="f-fl content">
                                            <a href="https://mpoints.mall.meizu.com/world-cup/index" target="_blank"><i class="contentNum">竞猜比赛 赢金豆 瓜分10万大奖，最高可赢10000元；更有魅蓝 6T...</i><span class="detail"> 点击查看详细 &gt;</span></a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    ul{
        margin:0;
        padding:0;
    }
    li{
        list-style-type: none;
    }
    .clearfix{
        zoom: 1;
    }
    .store-wrap{
        width: 1240px;
        margin: 0 auto;
        padding: 0 20px;
    }
    .store-wrap .crumbs{
        margin: 10px 0 24px;
        width: 100%;
    }
    .store-wrap .main{
        margin-bottom: 40px;
    }
    .store-wrap .main .left-nav{
        font-size: 14px;
        color: #666;
        width: 15%;
        min-height: 580px;
    }
    .store-wrap .main .left-nav .nav-main{
        margin-top: 10px;
        background: #fafafc;
        padding: 0 0 54px 20px;
    }
    .store-wrap .main .left-nav .type-title:first-child {
        line-height: 14px;
        padding: 15px 0 20px;
    }
    .store-wrap .main .left-nav .type-title {
        line-height: 56px;
        font-weight: bolder;
        cursor: default;
    }
    .store-wrap .main .left-nav a {
        display: block;
        color: #666;
        text-decoration: none;
        line-height: 34px;
        width: 85px;
    }
    .store-wrap .main .right-content {
        width: 83%;
        display: inline-block;
    }
    .store-wrap .main .left-nav, .store-wrap .main .right-content {
        font-size: 14px;
        color: #666;
    }
    .f-fr {
        float: right!important;
    }
    .store-wrap .main .right-content .index-main{
        color: #666;
        margin-top: 29px;
        width: 100%;
    }
    .store-wrap .main .right-content .index-main .information {
        width: 66%;
        border: 1px solid #f3f3f3;
        border-right: 0;
        padding: 28px 3.5%;
    }
    .f-fl {
        float: left!important;
    }
    .store-wrap .main .right-content .index-main .backCouponNum {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADICAMAAADbV3Q6AAAClFBMV…WdLsdUWAa2FN/2o7VQBuH/+LnrWXEKyUCSHH7an5WA4l9j4yXPxgzOawAAAABJRU5ErkJggg==) left center no-repeat;
        width: 26%;
        height: 200px;
    }
    .index-main .backCouponNum p {
        margin: 40px 0 0 60px;
    }
    .index-main .backCouponNum p span {
        color: #999;
        margin-left: 10px;
    }
    .store-wrap .main .right-content .index-main .information .pic {
        padding-right: 30px;
    }
    .store-wrap .main .right-content .index-main .information .name {
        min-width: 170px;
        max-width: 220px;
        padding-right: 30px;
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
    .store-wrap .main .right-content .index-main .information .info a {
        display: block;
        margin-top: 15px;
        color: #999;
        text-decoration: none;
    }
    .index-main .information .info ul {
        margin-top: 5px;
    }
    .index-main .information .info ul li {
        color: #999;
        line-height: 32px;
    }
    .index-main .information .info ul li span {
        color: #666;
        margin-left: 10px;
    }
    .store-wrap .main .right-content .index-main .bottom {
        width: 100%;
        margin-top: 20px;
    }
    .store-wrap .main .right-content .index-main .bottom .orderState {
        width: 57%;
        border: 1px solid #f3f3f3;
        margin-right: 2%;
    }
    .store-wrap .main .right-content .index-main .bottom .message {
        width: 39%;
        border: 1px solid #f3f3f3;
    }
    .index-main .bottom .title {
        background: #fafafc;
        line-height: 38px;
        border-bottom: 1px solid #f3f3f3;
    }
    .index-main .bottom .message .list {
        margin: 50px 15px;
        height: 186px;
        min-height: 186px!important;
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
    .index-main .information img {
        width: 119px;
        height: 119px;
        padding: 5px;
        border: 5px solid #fafafc;
    }
</style>
