<template>
    <div>
        <Header></Header>
        <div class="store-wrap">
            <div class="crumbs">
                <a href="//store.meizu.com">首页 &gt; </a>
                <a href="//me.meizu.com/member/index">我的商城 &gt; </a>
                <a href="//me.meizu.com/member/address/index" class="active">地址管理</a>
            </div>
            <div class="main clearfix">
            <div class="left-nav f-fl">
                <div class="nav-main">
                    <a href="javascript:;" class="type-title"><i class="iconfont icon-orderCenter"></i>订单中心</a>
                    <a href="//ordercenter.meizu.com/list/index.html" class="ml " data-mtype="store_mc_order_me" data-mdesc="我的订单">我的订单</a>
                    <a href="//mcycle.meizu.com/repo/order/list" class="ml " data-mtype="store_mc_order_mcycle" data-mdesc="我的回购单">我的回购单</a>
                    <a href="javascript:;" class="type-title"><i class="iconfont icon-selfCenter"></i>个人中心</a>
                    <a href="//me.meizu.com/member/address/index" class="ml active" data-mtype="store_mc_me_address" data-mdesc="地址管理">地址管理</a>
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
                    <div class="address-main">
                        <div class="main">
                            <div class="row" style="padding:0 0 10px 0;">
                                <span class="title rollit">新增收货地址</span>
                            </div>
                            <div id="valid-form">
                                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px">
                                    <el-form-item label="收货人姓名：" prop="contact_name">
                                        <el-input placeholder="收货人姓名" v-model="ruleForm.contact_name"></el-input>
                                        <span style="color:#F56C6C" v-if="is_Error && errors.contact_name">{{errors.contact_name[0]}}</span>
                                    </el-form-item>
                                    <el-form-item label="收货人手机号：" prop="contact_phone">
                                        <el-input placeholder="收货人手机号" v-model="ruleForm.contact_phone"></el-input>
                                        <span style="color:#F56C6C" v-if="is_Error && errors.contact_phone">{{errors.contact_phone[0]}}</span>
                                    </el-form-item>
                                    <el-form-item label="收货人地址：" prop="address_collect">
                                        <el-cascader style="width:100%;"
                                            :options="city_arr"
                                            v-model="ruleForm.address_collect"
                                            @change="handleChange">
                                        </el-cascader>
                                        <span style="color:#F56C6C" v-if="is_Error && errors.province">{{errors.province[0]}}</span>
                                        <span style="color:#F56C6C" v-if="is_Error && errors.city">{{errors.city[0]}}</span>
                                        <span style="color:#F56C6C" v-if="is_Error && errors.district">{{errors.district[0]}}</span>
                                    </el-form-item>
                                    <el-form-item label="详细地址：" prop="address">
                                        <el-input placeholder="详细地址" v-model="ruleForm.address"></el-input>
                                        <span style="color:#F56C6C" v-if="is_Error && errors.address">{{errors.address[0]}}</span>
                                    </el-form-item>
                                    <el-form-item label="邮编：" prop="zip">
                                        <el-input placeholder="邮编" v-model="ruleForm.zip"></el-input>
                                        <span style="color:#F56C6C" v-if="is_Error && errors.zip">{{errors.zip[0]}}</span>
                                    </el-form-item>
                                    <el-form-item label="设为默认：" prop="is_default">
                                        <el-switch v-model="ruleForm.is_default"></el-switch>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                            <div class="list">
                                <div class="row">
                                    <div class="title">
                                        <div>地址列表</div>
                                        <el-table :loading="tableloading" :data="tableData">
                                            <el-table-column
                                                prop="contact_name"
                                                label="收件人姓名"
                                                width="180">
                                            </el-table-column>
                                            <el-table-column
                                                prop="contact_phone"
                                                label="收件人手机号"
                                                width="180">
                                            </el-table-column>
                                            <el-table-column
                                                prop="address"
                                                label="收件人详细地址"
                                                width="180">
                                            </el-table-column>
                                            <el-table-column
                                                prop="is_default"
                                                label="是否默认"
                                                width="180">
                                                <template slot-scope="scoppe">
                                                    <el-tag v-if="scoppe.row.is_default" type="success">默认</el-tag>
                                                    <el-tag v-else type="info">否</el-tag>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                label="操作"
                                                width="100">
                                                <template slot-scope="scope">
                                                    <el-button @click="editFunc(scope.$index)" type="text" size="mini">修改</el-button>
                                                    <el-button @click="deleteFunc(scope.$index)" type="text" size="mini">删除</el-button>
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                        <el-pagination
                                            background
                                            @size-change="handleSizeChange"
                                            @current-change="handleCurrentChange"
                                            :page-size="pSize"
                                            :current-page="page"
                                            layout="prev, pager, next"
                                            :total="total">
                                        </el-pagination>
                                        <!-- <div class="upload hide">
                                            <i class="iconfont icon-zhuyi"></i>
                                            <span>因配送地址库数据升级，请点击地址进行升级，让您享受更好的配送服务！</span>
                                        </div> -->
                                    </div>
                                </div>
                                <!-- <div class="listHead">
                                    <span class="center w15">收货人姓名</span><span class="center w35">收货人地址</span><span class="center w25">收货人手机号</span><span class="center w10">操作</span>
                                </div>
                                <ul id="tableList" class=""><li>
                                    <input class="addressId" type="hidden" value="8869100961000">
                                    <input class="isOld" type="hidden" value="0">

                                    <span class="center w15">111</span>
                                    <span class="completeAddress center w35">北京北京市东城区景山街道11111</span>
                                    <span class="center w25">15611111111</span>
                                    <span class="center w10">
                                    <a class="edit" href="javascript:;">修改</a>
                                    <a class="delete" href="javascript:;">删除</a>
                                    </span>
                                    <span class="left w15">
                                        <a class="beDefault hide" href="javascript:;">设为默认</a>
                                    </span>
                                </li>
                                </ul> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/views/layout/Header'
import Footer from '@/views/layout/Footer'
import { mapGetters } from 'vuex'
import city_arr from '@/city-data.js'
import { storeAddress, fetchAddressList, deleteAddress } from '@/api/address'
export default {
    components: {
        Header,
        Footer
    },
    data(){
        return {
            ruleForm:{
                id:0,
                contact_name:'',
                contact_phone:'',
                address_collect:[],
                address:'',
                is_default:false,
                zip:'',
            },
            rules:{
                contact_name: [
                    { required: true, message: '请输入收件人姓名', trigger: 'blur' }
                ],
                contact_phone: [
                    { required: true, message: '请输入收件人号码', trigger: 'blur' }
                ],
                address_collect: [
                    { required: true, message: '请选择地址', trigger: 'change' }
                ],
                address: [
                    { required: true, message: '请输入详细地址', trigger: 'blur' }
                ],
                zip: [
                    { required: true, message: '请输入邮编', trigger: 'blur' }
                ],
            },
            city_arr:city_arr,
            is_Error:false,
            errors:{},
            tableData:[],
            tableloading:false,
            page:1,
            pSize:3,
            total:0,
        }
    },
    created(){
        this.fetchList()
    },
    methods:{
        handleSizeChange(val){
            this.pSize = val
            this.fetchList()
        },
        handleCurrentChange(val){
            this.page = val
            this.fetchList()
        },
        editFunc(k){
            let address = this.tableData[k]
            this.ruleForm.id = address.id
            this.ruleForm.contact_name = address.contact_name
            this.ruleForm.contact_phone = address.contact_phone
            this.ruleForm.address_collect = [address.province.toString(),address.city.toString(),address.district.toString()]
            this.ruleForm.address = address.address
            this.ruleForm.is_default = address.is_default?true:false
            this.ruleForm.zip = address.zip
        },
        handleChange(value) {
            console.log(value);
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
            this.ruleForm.id = 0
        },
        submitForm(formName) {
            this.is_Error = false
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.ruleForm.province = this.ruleForm.address_collect[0]
                this.ruleForm.city = this.ruleForm.address_collect[1]
                this.ruleForm.district = this.ruleForm.address_collect[2]
                storeAddress(this.ruleForm).then(res => {
                    this.$notify({
                        title: '成功',
                        message: '操作成功！',
                        type: 'success'
                    });
                    this.resetForm('ruleForm')
                    this.fetchList()
                }).catch(error => {
                    if(error.response.status == 422){
                        this.is_Error = true
                        this.errors = error.response.data.errors
                    }
                })
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        deleteFunc(k){
            this.$confirm('确定要删除所选数据吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                deleteAddress({ids:[this.tableData[k].id]}).then(response => {
                    this.$notify({
                        title: '成功',
                        message: '操作成功！',
                        type: 'success'
                    })
                    this.fetchList()
                }).catch(error => {
                    this.tableloading = false;
                    console.log(error);
                });
            }).catch((error) => {
                this.btnloading = false;
            });
        },
        fetchList(){
            this.tableloading = true
            let query = {
                page : this.page,
                pSize: this.pSize,
            }
            fetchAddressList(query).then(res => {
                this.tableData = res.data.list
                this.total = res.data.total
            }).catch(error => {

            })
        },
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
i {
    font-style: normal;
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
form {
    display: block;
    margin-top: 0em;
}
#valid-form{
    width:45%;
}
.main .left-nav .active {
    color: #00c3f5!important;
}
</style>
