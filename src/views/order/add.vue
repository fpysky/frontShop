<template>
    <div>
        <Header></Header>
        <div class="order">
            <div class="mzcontainer">
                <div class="order-address" id="addressModule">
                    <div class="order-address-title">
                        收货人信息
                    </div>
                    <ul class="order-address-list clearfix" id="addressList" style="height: 174px;">
                        <li @click="choiceAddress(item.id)" v-for="(item,index) in addresses" :key="index" :class="item.id == address_id?'order-address-checkbox checked':'order-address-checkbox'" data-mdesc="收货人信息" data-mtype="store_se_adr">
                            <div class="order-address-checkbox-top">
                                <div v-text="item.contact_name" class="order-address-checkbox-name" title="111"></div>
                                <div v-text="item.contact_phone" class="order-address-checkbox-phone"></div>
                            </div>
                            <div v-text="item.address" class="order-address-checkbox-content"></div>
                            <div class="order-address-checkbox-checked">
                                <div class="order-address-checkbox-tick"></div>
                            </div> 
                            <div class="order-address-checkbox-ctrl">
                            <div class="order-address-checkbox-delete"></div>
                            <div class="order-address-checkbox-edit"></div>
                            </div>
                            <div v-if="item.is_default" style="font-size:12px;color:#ccc;">默认</div>
                        </li>
                        <li class="order-address-checkbox add">
                            <div class="order-add-icon"></div>
                            <div class="order-address-add-text">添加新地址</div>
                        </li>
                    </ul> 
                </div>
                <div class="mzcontainer order-product">
                    <div class="order-product-title">确认订单信息</div>
                    <div class="order-product-list">
                        <table cellpadding="0" cellspacing="0" class="order-product-table">
                            <thead>
                                <tr>
                                    <th class="order-product-table-name">
                                    <div class="order-product-supplier">
                                        供应商：<span class="order-product-supplier-name">魅族</span>
                                        <!--<div class="order-product-supplier-tips">由“魅族”负责发货，并提供售后服务</div>-->
                                    </div>
                                    </th>
                                    <th class="order-product-table-price">单价</th>
                                    <th class="order-product-table-num">数量</th>
                                    <th class="order-product-table-total">小计</th>
                                    <th class="order-product-table-express table-express-header">配送方式</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in settle" :key="index">
                                    <td class="order-product-table-name">
                                        <a target="_blank" class="order-product-link" href="//detail.meizu.com/item/meizu15.html" data-mdesc="确认订单信息" data-mtype="store_se_ord">
                                        <img class="order-product-image" :src="item.productSku.image" style="display: inline;">
                                        </a>
                                        <div class="order-product-name">
                                        <a target="_blank" class="order-product-link" href="//detail.meizu.com/item/meizu15.html" data-mdesc="确认订单信息" data-mtype="store_se_ord">
                                            <p v-text="item.productSku.title" class="order-product-name-item item-name"></p>
                                            <p v-text="item.productSku.description" class="order-product-name-item cspu-desc"></p> 
                                        </a>
                                        </div>
                                    </td>
                                    <td class="order-product-table-price">
                                        <p><span v-text="item.productSku.price" class="order-product-price"></span></p>
                                    </td>
                                    <td v-text="item.amount" class="order-product-table-num"></td>
                                    <td class="order-product-table-total">
                                        <p v-text="item.productSku.price * item.amount" class="order-product-price red"></p>
                                    </td> 
                                    <td v-if="index == 0" class="order-product-table-express" rowspan="999">
                                        <p> 快递配送：运费<span class="order-product-price red express-fee has-express-fee">0.00</span></p>
                                        <div class="order-product-arrival"> 
                                            <p>19:00前下单并支付，</p>
                                            <p>预计<strong>后天（09月16日）</strong>送达</p>
                                        </div>
                                    </td>
                            
                                </tr>
                            </tbody>
                            <tfoot>
                            <tr class="order-product-footer">
                                <td colspan="3" class="order-product-info">
                                
                                <div class="order-product-invoice clearfix">
                                    
                                    <div class="order-product-invoice-type">
                                    发票类型：电子发票<div class="order-product-invoice-icon"></div>
                                    </div>
                                    
                                    <span class="order-product-invoice-edit">修改</span>
                                    <div class="order-product-invoice-info">
                                    <p>发票抬头：<span class="order-product-invoice-title">默认为收货人姓名</span>
                                    </p>
                                    <p class="order-product-company">纳税人识别号：<span class="order-product-invoice-identify"></span></p>
                                    <p class="order-product-company">开户行及账号：<span class="order-product-invoice-bank"></span></p>
                                    </div>
                                </div>
                                
                                </td>
                                <td colspan="2" class="order-product-total">
                                合计：<span v-text="amount" class="order-product-price red total-has-express-fee"></span>
                                </td>
                            </tr>
                            <tr class="order-product-remark">
                                <td colspan="5">
                                <span class="order-product-remark-title">备注：</span>
                                <textarea class="order-product-remark-input" maxlength="45"></textarea>
                                </td>
                            </tr>
                            </tfoot>
                            </table>
                    </div>
                </div>
                <div class="order-total clearfix">
                    <div class="order-total-pay">
                        <div class="order-total-pay-header">选择支付方式</div>
                        <div class="order-total-pay-content">
                            <el-radio v-model="payWay" label="1">支付宝</el-radio>
                            <el-radio v-model="payWay" label="2">微信</el-radio>
                        </div>
                    </div>
                    <div class="order-total-content">
                        <div class="order-total-row">
                            总金额：
                            <div v-text="amount" class="order-total-price" id="totalOrderPrice"></div>
                        </div>
                        <!-- <div class="order-total-row order-total-discount" id="totalCouponRow">
                            优惠券：
                            <div class="order-total-price sub">0.00</div>
                        </div> -->
                        <!-- <div class="order-total-row order-total-discount" id="totalRedRow">
                            红包：
                            <div class="order-total-price sub">0.00</div>
                        </div> -->
                        <!-- <div class="order-total-row order-total-discount" id="totalRepoRow" style="display: none;">
                            回购金：
                            <div class="order-total-price sub">0.00</div>
                        </div> -->
                        <!-- <div class="order-total-row order-total-discount" id="totalGiftRow">
                            礼品卡：
                            <div class="order-total-price sub">0.00</div>
                        </div> -->
                        <div class="order-total-row">
                            运费
                            <div class="order-total-price" id="totalExpressPrice">0.00</div>
                        </div>
                        <div class="order-total-line"></div>
                        <div class="order-total-row">
                            应付：
                            <div v-text="amount" class="order-total-price total" id="totalPayPrice"></div>
                        </div>
                        <div class="order-total-row order-total-valid-row clearfix">
                            <div class="order-total-valid" id="validCode"></div>
                            <div @click="createOrder" class="mz-btn success" id="submitForm" data-mdesc="下单并支付" data-mtype="store_se_pay">下单并支付</div>
                            <!-- <div class="order-stock-tips-wrap" id="orderStockTips" style="display: block;">
                                <div class="order-stock-tips">该订单含付款减库存商品，支付完成后才会为您预留库存！</div>
                            </div> -->
                        </div>
                        <div class="order-total-row order-total-row-tips" id="totalTips"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '@/views/layout/Header'
import { fetchAddressList } from '@/api/address'
import { createOrder, pay } from '@/api/order'
import city_arr from '@/city-data.js'
export default {
   name:'add',
   components: {
        Header
    },
   data(){
       return {
           addresses:[],
           city_arr:city_arr,
           address_id:0,
           settle:[],
           amount:0.00,
           payWay:'1',
           items:[],
       }
   }, 
   created(){
       if(this.$route.params.settle){
           this.settle = this.$route.params.settle
           this.settle.forEach(item => {
               item.productSku.image = process.env.BASE_API + item.productSku.image
               this.amount = parseFloat(this.amount) + parseFloat(item.amount) * parseFloat(item.productSku.price)
               this.items.push({sku_id:item.productSku.id,amount:item.amount})
           })
           console.log(this.settle,'this.settle')
       }
       this.fetchAddressList() 
   },
   methods:{
       createOrder(){
           createOrder({
               address_id:this.address_id,
               items:this.items,
           }).then(res => {
               let order = res.data.order
               window.location.href = process.env.BASE_API + 'api/payment/alipay/' + order.id
           }).catch(error => {
               this.$notify.warning(error.response.data.message)
           })
       },
       choiceAddress(id){
           this.address_id = id
       },
       fetchAddressList(){
           fetchAddressList().then(res => {
               this.addresses = res.data.list
               this.addresses.forEach(item => {
                   let str = ''
                   this.city_arr.forEach(province => {
                       if(item.province.toString() == province.value){
                           str = province.label
                           province.children.forEach(city => {
                               if(item.city.toString() == city.value){
                                   str = str + city.label
                                   city.children.forEach(district => {
                                       if(item.district.toString() == district.value){
                                           str = str + district.label + ' '
                                       }
                                   })
                               }
                           })
                       }
                   })
                   item.address = str + item.address
                   str = ''
                   if(item.is_default){
                       this.address_id = item.id
                   }
               }) 
           }).catch(error => { 
               this.$notify.warning(error.response.data.message)
           })
       },
   }
}
</script>
<style scoped>
a{
    text-decoration: none;
}
ul{
    padding:0;
    margin:0;
    list-style-type: none;
}
.order, body {
    background-color: #F4F6FA;
}
.order *, .order :after, .order :before {
    box-sizing: border-box;
}
.mzcontainer {
    width: 1240px;
    margin: 0 auto;
}
.order-address {
    position: relative;
    padding: 0 24px;
    margin-top: 10px;
    background-color: #FFF;
}
.order-address .order-address-title {
    padding-top: 32px;
    font-size: 18px;
    font-weight: 500;
}
.order-address .order-address-list {
    margin-top: 16px;
    overflow: hidden;
    height: 174px;
    transition: height .8s;
}
.clearfix {
    zoom: 1;
}
.order-address .order-address-list li:nth-child(4n+1) {
    margin-left: 0!important;
}
.order-address .order-address-checkbox.checked, .order-address .order-address-checkbox:hover {
    border: 1px solid #00c3f5;
}
.order-address .order-address-checkbox {
    float: left;
    position: relative;
    width: 288px;
    height: 148px;
    border: 1px solid #EFEFEF;
    border-radius: 2px;
    cursor: pointer;
    padding: 0 16px;
    margin: 0 0 30px 12px;
    transition: border-color .8s;
}
.order-address .order-address-checkbox .order-address-checkbox-top {
    font-size: 12px;
    padding-top: 16px;
    color: #262626;
    height: 45px;
    border-bottom: 1px solid #EFEFEF;
    font-weight: bolder;
}
.order-address .order-address-checkbox .order-address-checkbox-top .order-address-checkbox-name {
    float: left;
    width: 125px;
    overflow: hidden;
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
}
.order-address .order-address-checkbox .order-address-checkbox-top .order-address-checkbox-phone {
    float: right;
}
.order-address .order-address-checkbox .order-address-checkbox-content {
    padding-top: 10px;
    word-break: break-all;
    word-wrap: break-word;
    font-size: 12px;
    max-height: 70px;
    overflow: hidden;
    color: #595959;
}
.order-address .order-address-checkbox.checked .order-address-checkbox-checked, .order-address .order-address-checkbox.disabled:hover .order-address-checkbox-tips {
    display: block;
}
.order-address .order-address-checkbox .order-address-checkbox-checked {
    display: none;
    position: absolute;
    overflow: hidden;
    right: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
}
.order *, .order :after, .order :before {
    box-sizing: border-box;
}
.order-address .order-address-checkbox .order-address-checkbox-ctrl {
    position: absolute;
    opacity: 0;
    filter: alpha(opacity=0);
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 20px;
    font-size: 14px;
    padding-top: 5px;
    color: #00c3f5;
}
.order-address .order-address-checkbox .order-address-checkbox-delete, .order-address .order-address-checkbox .order-address-checkbox-edit {
    margin-right: 10px;
    float: right;
}
.order-address .order-address-checkbox {
    float: left;
    position: relative;
    width: 288px;
    height: 148px;
    border: 1px solid #EFEFEF;
    border-radius: 2px;
    cursor: pointer;
    padding: 0 16px;
    margin: 0 0 30px 12px;
    transition: border-color .8s;
}
.order-address .order-address-checkbox .order-add-icon {
    margin-left: 105px;
    margin-top: 50px;
}
.order .order-add-icon {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: #BDBDBD;
    transition: background-color .8s;
}
.order-address .order-address-checkbox .order-address-add-text {
    margin-top: 8px;
    font-size: 12px;
    color: #999;
    text-align: center;
    transition: color .8s;
}
.order-address .order-address-checkbox .order-address-checkbox-checked:before {
    position: absolute;
    right: 0;
    top: 0;
    content: "";
    background: #00c3f5;
    width: 20px;
    height: 20px;
}
.order-product {
    padding: 0 24px 30px;
    background-color: #FFF;
}
.order-product .order-product-title {
    font-size: 18px;
    color: #262626;
    padding: 25px 0 16px;
    font-weight: 500;
}
.order-product-table:last-child {
    margin-bottom: 0;
}
.order-product table {
    border: 1px solid #EFEFEF;
}
.order-product thead {
    font-size: 12px;
    color: rgba(51,51,51,.6);
    border-bottom: 1px solid #EFEFEF;
}
.order-product thead tr {
    height: 50px;
    background: #f6f8fb;
}
.order-product .order-product-table-name {
    width: 500px;
    text-align: left;
}
.order-product .order-product-supplier {
    position: relative;
    font-weight: 400;
    color: #262626;
    font-size: 14px;
    margin-left: 24px;
    cursor: pointer;
}
.order-product .order-product-supplier .order-product-supplier-name {
    color: #333;
}
.order-product .order-product-table-price {
    text-align: center;
    width: 228px;
}
.order-product .order-product-table-num {
    text-align: center;
    width: 140px;
}
.order-product .order-product-table-total {
    text-align: center;
    width: 160px;
}
.order-product .table-express-header {
    text-align: center!important;
}
.order-product .order-product-table-express {
    text-align: left;
    padding-left: 16px;
    width: 192px;
    line-height: 25px;
}
.order-product tbody tr {
    height: 150px;
    border-top: 1px solid #EFEFEF;
}
.order-product .order-product-link {
    color: #262626;
    line-height: 22px;
}
.order-product .order-product-name-item {
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.order-product .order-product-name {
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    color: #262626;
    width: 300px;
} 
.order-product .order-product-name-item.cspu-desc {
    margin-top: 10px;
}
.order-product .order-product-name-item.cspu-desc, .order-product .order-product-name-item.order-product-group {
    font-size: 14px;
    color: #999;
}
.order-product .order-product-name-item {
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.order-product tbody .order-product-table-price {
    text-align: center;
}
.order-product .order-product-table-price {
    text-align: center;
    width: 228px;
}
.order-product .order-product-table-num {
    text-align: center;
    width: 140px;
}
.order-product .order-product-table-total {
    text-align: center;
    width: 160px;
}
.order-product .order-product-price.red {
    color: #E02B41;
}
.order-product .order-product-price:before {
    content: "\FFE5";
    margin-right: 2px;
}
.order-product tbody .order-product-table-express {
    border-left: 1px solid #EFEFEF;
    color: #333;
}
.order-product .order-product-table-express {
    text-align: left;
    padding-left: 16px;
    width: 192px;
    line-height: 25px;
}
.order-product .order-product-price.red {
    color: #E02B41;
}
.order-product tfoot {
    border-top: 1px solid #EFEFEF;
    color: #666;
}
.order-product .order-product-footer {
    vertical-align: middle;
}
.order-product .order-product-info {
    padding: 15px 0 15px 25px;
    color: #595959;
    font-size: 12px;
}
.clearfix {
    zoom: 1;
}
.order-product .order-product-invoice .order-product-invoice-type {
    font-size: 14px;
    display: inline-block;
}
.order-product .order-product-invoice .order-product-invoice-icon {
    display: inline-block;
    margin-left: 5px;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: #00c3f5;
    line-height: 14px;
    text-align: center;
    color: #fff;
    cursor: pointer;
}
.order-product .order-product-invoice .order-product-invoice-edit {
    margin-left: 10px;
    color: #00c3f5;
    cursor: pointer;
    font-size: 14px;
}
.order-product .order-product-invoice .order-product-invoice-info {
    margin-top: 10px;
    color: #8c8c8c;
}
dd, dl, dt, h1, h2, h3, h4, h5, h6, ol, p, ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-weight: 400;
}
.order-product .order-product-invoice .order-product-invoice-info .order-product-company {
    display: none;
    margin-top: 6px;
}
.order-product .order-product-total {
    padding-right: 26px;
    text-align: right;
    font-size: 14px;
    color: #666;
}
.order-product .order-product-total .order-product-price {
    font-size: 20px;
}
.order-product .order-product-price.red {
    color: #E02B41;
}
.order-product .order-product-remark {
    overflow: hidden;
    height: 46px;
    border-top: 1px solid #EFEFEF;
}
.order-product .order-product-remark .order-product-remark-title {
    display: inline-block;
    vertical-align: top;
    margin-left: 24px;
    margin-top: 4px;
    line-height: 46px;
    font-size: 14px;
    color: #999;
}
.order-product .order-product-remark .order-product-remark-input {
    border: none;
    width: 552px;
    height: 48px;
    background-color: #fff;
    resize: none;
    outline: 0;
    padding-top: 13px;
    color: #999;
}
.order-product tfoot {
    border-top: 1px solid #EFEFEF;
    color: #666;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
.order *, .order :after, .order :before {
    box-sizing: border-box;
}
.order-product .order-product-image {
    vertical-align: middle;
    height: 100px;
    width: 100px;
    margin-left: 24px;
    margin-right: 16px;
}
.order-total-pay {
    overflow: hidden;
    margin-bottom: 30px;
}
.order-total-pay .order-total-pay-header {
    color: #333;
    font-size: 18px;
    padding: 10px 0 16px;
    font-weight: 500;
}
.order-total-pay .order-total-pay-content {
    padding: 40px 26px 30px;
    border: 1px solid #efefef;
}
.order-total {
    overflow: hidden;
    padding: 0 24px 30px;
    color: #898989;
    background-color: #FFF;
}
.order-total .order-total-content {
    float: right;
    width: 318px;
}
.order-total .order-total-row {
    padding: 0 2px;
    margin-bottom: 12px;
}
.order-total .order-total-discount {
    display: none;
}
.order-total .order-total-row {
    padding: 0 2px;
    margin-bottom: 12px;
}
.order-total .order-total-price.sub {
    color: #e02b41;
}
.order-total .order-total-price {
    float: right;
}
.order-total .order-total-line {
    width: 100%;
    height: 1px;
    background-color: #EFEFEF;
    margin-bottom: 20px;
}
.order-total .order-total-row {
    padding: 0 2px;
    margin-bottom: 12px;
}
.order-total .order-total-price.total {
    color: #e02b41;
    font-size: 20px;
    font-weight: bolder;
}
.order-total .order-total-row.order-total-valid-row {
    font-size: 0;
    margin-bottom: 5px;
    padding-right: 0;
}
.order-total .order-total-valid {
    position: relative;
    float: left;
    width: 200px;
    margin-right: 14px;
}
.order-total .order-total-row.order-total-valid-row .mz-btn {
    float: right;
    border-color: #F66567;
    background-color: #F66567;
    border-radius: 2px;
}
.mz-btn.success {
    color: #FFF;
    border-color: #00c3f5;
    background-color: #00c3f5;
}
.mz-btn.success {
    color: #FFF;
    border-color: #00c3f5;
    background-color: #00c3f5;
}
.mz-btn {
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    outline: 0;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    min-width: 58px;
    min-height: 34px;
    line-height: 34px;
    transition: .5s all;
    padding: 0 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
