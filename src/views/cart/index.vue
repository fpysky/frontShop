<template>
    <div>
        <Header></Header>
        <div class="cart">
            <div class="mzcontainer">
                <table class="cart-header">
                    <tbody>
                        <tr>
                            <td class="cart-col-select">
                            <div class="cart-select-all JSelectAll" data-mdesc="全选按钮" data-mtype="store_cart_all">
                                <div @click="handleSelectChane(true,false)" :class="selectAll?'mz-checkbox checked':'mz-checkbox'"></div>
                                <span class="cart-select-title">全选</span>
                            </div>
                            </td>
                            <td class="cart-col-price">单价(元)</td>
                            <td class="cart-col-number">数量</td>
                            <td class="cart-col-total">小计(元)</td>
                            <td class="cart-col-ctrl" id="J-cartHearCtrl">编辑</td>
                        </tr>
                    </tbody>
                </table>
                <ul class="cart-merchant-list">
                    <li class="cart-merchant">
                        <div class="cart-merchant-header"> 
                            <div class="cart-select-all">
                            <div class="mz-checkbox"></div>
                            <span class="cart-select-title">魅族</span>
                            </div> 
                            <div class="cart-select-fee">
                            <span class="cart-free">已免邮费</span>
                            <!-- <div>
                                <p>再买<span class="cart-shipping-price"></span>元起，即可免运费 </p>
                                <span class="fee-shipping-skip" data-mdesc="满包邮活动" data-mtype="store_cart_postage">立即凑单 &gt;</span>
                            </div> -->
                            </div> 
                        </div>
                        <table class="cart-merchant-body">
                            <tr v-for="(item,index) in cartList" :key="index" class="cart-product hasTheBinder">
                                <td class="cart-col-select" td="">
                                    <div @click="handleSelectChane(false,selects[index])" :class="selects[index].select?'mz-checkbox checked':'mz-checkbox'"></div>
                                    <a href="//detail.meizu.com/item/meizu15.html?skuId=7146" class="cart-product-link" target="_blank" data-mdesc="购物车商品位" data-mtype="store_cart_prod">
                                        <img class="cart-product-img" alt="魅族 15" :src="item.productSku.image" style="display: inline;">
                                    </a>
                                    <a href="//detail.meizu.com/item/meizu15.html?skuId=7146" class="cart-product-link cart-product-info" target="_blank" data-mdesc="购物车商品位" data-mtype="store_cart_prod">
                                        <p v-text="item.productSku.title" class="cart-product-item-name"></p> 
                                        <p v-text="item.productSku.description" class="cart-product-desc"></p>
                                    </a>
                                </td>
                                <td class="cart-col-price">
                                    <p><span v-text="item.productSku.price" class="cart-product-price"></span></p>
                                </td>
                                <td class="cart-col-number">
                                    <el-input-number size="small" :min="1" @change="((value)=>{handleChange(value,item.id)})" v-model="item.amount"></el-input-number> 
                                </td>
                                <td class="cart-col-total">
                                    <span v-text="item.productSku.price * item.amount" class="cart-product-price total main-goods"></span>
                                </td>
                                <td class="cart-col-ctrl"><div class="cart-product-remove " data-mdesc="删除单个商品按钮" data-mtype="store_cart_del"></div></td>
                            </tr>
                        </table>
                    </li>
                </ul>
            </div>
            <div class="cart-footer" id="cartFooter">
                <div class="mzcontainer">
                <div class="cart-footer-left">
                    <div class="cart-select-all JSelectAll" data-mdesc="全选按钮" data-mtype="store_cart_all">
                    <div @click="handleSelectChane(true,false)" :class="selectAll?'mz-checkbox checked':'mz-checkbox'"></div>
                    <span class="cart-select-title">全选</span>
                    </div>
                    <span class="cart-remove-selected" data-mdesc="删除选中商品" data-mtype="store_cart_batch" id="removeSelected">删除选中的商品</span>
                    <span class="cart-footer-count">
                    共<span class="cart-footer-num" id="totalCount">1</span>件商品，
                    已选择<span class="cart-footer-num blue" id="totalSelectedCount">0</span>件
                    </span>
                </div>
                <div class="cart-footer-right">
                    <span class="cart-footer-sum">
                    已优惠<span class="cart-footer-num red" id="totalDiscount">0.00</span>元，
                    合计(不含运费)：<span class="cart-footer-total" id="totalPrice">0.00</span>
                    </span>
                    <div @click="settle" ref="cartSubmit" class="mz-btn success to-order-btn" id="cartSubmit" data-mdesc="去结算按钮" data-mtype="store_cart_checkout" disabled="disabled">去结算</div>
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
import { fetchCartList, updateCart, settle } from '@/api/cart'
export default {
    name:'cart',
    components: {
        Header,
        Footer
    },
    data(){
        return {
            cartList:[],
            amount:1,
            total:0,
            page:1,
            selectAll:false,
            selects:[],
            multipleSelection:[],
            submitAbled:false,
        }
    },
    created(){
        this.fetchCartList() 
    },
    methods:{
        settle(){
            if(this.submitAbled){
                settle({cartIdCollection:this.multipleSelection}).then(res => {
                    this.$router.push({
                        name:'/addOrder',
                        params:{settle: res.data.list}
                    })
                }).catch(error => {
                    this.$notify.warning(error.response.data.message)
                })
            }
        },
        handleSelectChane(selectAll,selects){
            if(selectAll){
                if(this.selectAll){
                    this.multipleSelection = []
                    this.selectAll = false
                    this.selects.forEach(item => {
                        item.select = false
                    })
                }else{
                    this.cartList.forEach(item => {
                        this.multipleSelection.push(item.id)
                    })
                    this.selects.forEach(item => {
                        item.select = true
                    })
                    this.selectAll = true
                }
            }
            
            if(selects){
                if(selects.select){
                    let k = this.multipleSelection.indexOf(selects.id)
                    this.multipleSelection.splice(k,1)
                    selects.select = false
                }else{
                    this.multipleSelection.push(selects.id)
                    selects.select = true
                }
            }
            if(this.multipleSelection.length > 0){
                this.submitAbled = true
                this.$refs.cartSubmit.removeAttribute('disabled') 
            }else{
                this.submitAbled = false
                this.$refs.cartSubmit.setAttribute('disabled','disabled')
            }
        },
        handleChange(value,id){
            updateCart({
                id: id,
                amount:value
            }).then(res => {
                this.$notify.success('购物车商品更新成功')
            }).catch(error => {
                this.$notify.warning(error.response.data.message)
            })
        },
        fetchCartList(){
            fetchCartList().then(res => {
                this.cartList = res.data.list
                this.total = res.data.total
                this.cartList.forEach(item => {
                    item.productSku.image = process.env.BASE_API + item.productSku.image 
                    this.selects.push({id:item.id,select:false})
                }) 
            }).catch(error => {})
        },
    }
}
</script>
<style scoped>
a{
    text-decoration:none;
}
.cart {
    padding-bottom: 40px;
    overflow: hidden;
}
.cart, body {
    background-color: #F4F6FA;
}
.mzcontainer {
    width: 1240px;
    margin: 0 auto;
}
.cart .cart-header {
    height: 50px;
    margin-top: 10px;
    font-size: 12px;
    background-color: #fff;
    color: rgba(51,51,51,.4);
    border-bottom: 1px solid #EFEFEF;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
.cart .cart-col-select {
    width: 550px;
    text-align: left;
    padding-left: 24px;
}
.cart .cart-select-all {
    display: inline-block;
    vertical-align: middle;
    color: #333;
    cursor: pointer;
    font-size: 14px;
    line-height: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.cart .mz-checkbox {
    margin-right: 5px;
}
.mz-checkbox {
    display: inline-block;
    vertical-align: middle;
    width: 18px;
    height: 18px;
    border: 1px solid #BDBDBD;
    border-radius: 2px;
    background-color: #fff;
    text-align: center;
    font-size: 10px;
    line-height: 17px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.cart .cart-select-all .cart-select-title {
    display: inline-block;
    vertical-align: middle;
}
.cart .cart-col-price {
    width: 220px;
    text-align: center;
}
.cart .cart-col-number {
    width: 200px;
    text-align: center;
}
.cart .cart-col-total {
    width: 160px;
    text-align: center;
}
.cart .cart-col-ctrl {
    width: 110px;
    text-align: right;
    color: #00c3f5;
    padding-right: 48px;
    cursor: pointer;
}
.cart-merchant, .cart-merchant-list {
    margin-bottom: 10px;
}
dd, dl, dt, h1, h2, h3, h4, h5, h6, ol, p, ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-weight: 400;
}
.cart-merchant {
    background-color: #fff;
}
.cart-merchant, .cart-merchant-list {
    margin-bottom: 10px;
}
.cart-merchant .cart-merchant-header {
    height: 50px;
    line-height: 49px;
    padding-left: 24px;
    background-color: #FAFAFC;
}
.cart-merchant .cart-merchant-header .cart-select-all {
    color: #666;
    font-weight: 400;
}
.cart .mz-checkbox {
    margin-right: 5px;
}
.cart .cart-select-all .cart-select-title {
    display: inline-block;
    vertical-align: middle;
}
.cart-merchant .cart-merchant-header .cart-select-all {
    color: #666;
    font-weight: 400;
}
.cart .cart-select-fee {
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    color: #8c8c8c;
    margin-left: 24px;
}
.cart-merchant .cart-merchant-body {
    border-bottom: 1px solid #EFEFEF;
}
.cart-product.hasTheBinder {
    border: none;
}
.cart-product {
    height: 150px;
    border-top: 1px solid #EFEFEF;
}
.cart .cart-col-select {
    width: 550px;
    text-align: left;
    padding-left: 24px;
}
.cart .mz-checkbox {
    margin-right: 5px;
}
.cart-product .cart-col-select .cart-product-link {
    margin-left: 19px;
}
.cart-product .cart-product-link {
    display: inline-block;
    vertical-align: middle;
    color: #262626;
}
.cart-product .cart-col-select .cart-product-link {
    margin-left: 19px;
}
.cart-product .cart-product-info {
    width: 330px;
}
.cart-product .cart-product-img {
    width: 100px;
    height: 100px;
}
img {
    border-style: none;
    vertical-align: top;
}
.cart-product .cart-product-info .cart-product-item-name {
    font-size: 16px;
    color: #262626;
}
.cart-product .cart-product-info p {
    font-size: 14px;
    width: 100%;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cart-product .cart-product-info .cart-product-desc, .cart-product .cart-product-info .cart-product-package-name {
    color: #8C8C8C;
    margin-top: 4px;
}
.cart .cart-col-price {
    width: 220px;
    text-align: center;
}
.cart-product .cart-product-price {
    font-size: 16px;
    color: #666;
}
.cart .cart-col-total {
    width: 160px;
    text-align: center;
}
.cart-product .cart-product-price.total {
    color: #E02B41;
    font-size: 16px;
    opacity: 1;
}
.cart .cart-col-ctrl {
    width: 110px;
    text-align: right;
    color: #00c3f5;
    padding-right: 48px;
    cursor: pointer;
}
.cart-product .cart-product-remove, .cart-product .cart-product-remove-binder {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    margin-right: 3px;
    color: #666;
}
.cart-footer {
    position: relative;
    width: 100%;
    height: 70px;
    font-size: 14px;
    color: #666;
    line-height: 67px;
    transition: background-color 1s;
}
.cart-footer .mzcontainer {
    background-color: #fff;
    height: 100%;
}
.cart-footer .cart-footer-left {
    float: left;
    margin-left: 24px;
    height: 100%;
}
.cart-footer .cart-remove-selected {
    margin: 0 24px 0 12px;
    cursor: pointer;
}
.cart-footer .cart-footer-count, .cart-footer .cart-remove-selected {
    color: #8C8C8C;
    vertical-align: middle;
}
.cart-footer .cart-footer-count, .cart-footer .cart-remove-selected {
    color: #8C8C8C;
    vertical-align: middle;
}
.cart-footer .cart-footer-num {
    margin: 0 5px;
    opacity: 1;
}
.cart-footer .cart-footer-num.blue {
    color: #00c3f5;
}
.cart-footer .cart-footer-right {
    float: right;
    height: 100%;
    margin-right: 30px;
}
.cart-footer .cart-footer-sum {
    color: #595959;
    vertical-align: middle;
}
.cart-footer .cart-footer-num.red {
    color: #E02B41;
}
.cart-footer .cart-footer-total {
    font-size: 20px;
    font-weight: bolder;
    color: #E02B41;
    margin-right: 24px;
    vertical-align: middle;
}
.cart-footer .mz-btn.disabled, .cart-footer .mz-btn[disabled] {
    background: #DBDBDB!important;
}
.mz-btn.disabled, .mz-btn[disabled] {
    background-color: #DBDBDB!important;
    color: #fff!important;
    border-color: #DBDBDB!important;
    cursor: no-drop!important;
}
.mz-btn.success {
    color: #FFF;
    border-color: #00c3f5;
    background-color: #00c3f5;
}
.cart-footer .to-order-btn {
    color: #FFF;
    border: none!important;
    background-color: #F66567!important;
    border-radius: 2px;
}
.mz-btn.disabled, .mz-btn[disabled] {
    background-color: #DBDBDB!important;
    color: #fff!important;
    border-color: #DBDBDB!important;
    cursor: no-drop!important;
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
.mz-adder .mz-adder-num .mz-adder-input, .mz-btn {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
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
.mz-checkbox.checked {
    border-color: #00c3f5;
    background-color: #00c3f5;
}
</style>
