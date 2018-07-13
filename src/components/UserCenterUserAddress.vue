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
                    <a href="/" class="ml " data-mtype="store_mc_me_address" data-mdesc="地址管理">地址管理</a>
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
                <div class="address-main">
                    <div class="main">
                        <div class="row" style="margin-bottom:20px;">
                            <span class="title rollit">新增收货地址</span>
                            <span class="gray">（您目前已有地址<i class="already">0</i>个，最多还可以增加<i class="settle">10</i>个）</span>
                        </div>
                        <div>
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px">
                                <el-form-item label="收货人姓名:" prop="name">
                                    <el-input style="width:300px;" v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="收货人手机号:" prop="mobile">
                                    <el-input style="width:300px;" v-model="ruleForm.mobile"></el-input>
                                </el-form-item>
                                <el-form-item label="收货人地址:" prop="address">
                                    <el-cascader style="width:300px;"
                                        :options="city_arr"
                                        v-model="ruleForm.address"
                                        @change="handleChange">
                                    </el-cascader>
                                </el-form-item>
                                <el-form-item label="详细地址:" prop="addressDetail">
                                    <el-input style="width:300px;" v-model="ruleForm.addressDetail"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import city_arr from './../city-data.js'
export default {
    data(){
        return {
            city_arr:city_arr,
            ruleForm:{
                name:'',
                address:[],
                addressDetail:'',
                mobile:'',
            },
            rules:{}
        };
    },
    created(){
        // console.log(this.city_arr,'aaa');
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        handleChange(value) {
            console.log(value);
        },
    },
}
</script>
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
    .f-fl {
        float: left!important;
    }
    .address-main {
        color: #666;
        font-size: 14px;
    }
    .main {
        margin-bottom: 40px;
    }
    .address-main .main .row .title {
        line-height: 38px;
        padding-left: 25px;
        margin: 10px 0 20px;
        font-size: 18px;
        font-weight: 700;
    }
    .address-main .gray {
        color: #797979;
    }
    .address-main .gray i {
        color: #00c3f5;
        font-weight: 700;
    }
    i {
        font-style: normal;
    }
</style>
