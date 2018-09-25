<template>
    <div>
        <Header ref="header"></Header>
        <div class="row container">
            <div class="preview">
                <div class="preview-booth">
                    <a href="javascript:;" id="J_imgBooth">
                        <img :src="currentImages" height="560" width="560" alt="">
                    </a>
                </div>
                <ul class="preview-thumb clearfix" id="J_previewThumb">
                    <li v-for="(item,index) in images" :key="index">
                        <a data-mtype="store_de_tp_2" href="/" @click.prevent="handleImagesPreview(item.url)">
                            <img :src="item.url" width="80" height="80">
                        </a>
                    </li>
                </ul>
                <div class="preview-action">
                    <a class="vm-favorite" data-mtype="store_de_favorite" id="J_favorite" href="javascript:;"><i class="iconfont icon-favorite"></i>收藏 </a>
                    <a class="compare-btn-list" id="J_compare" data-mtype="store_de_compare"><i class="iconfont icon-duibi compare-duibi"></i><span>对比</span></a>
                </div> 
            </div>
            <div class="property">
                <div class="property-hd">
                    <h1 v-text="product.sku?product.sku.title:''"></h1>
                    <p v-text="product.desc" class="mod-info "></p>
                </div>
                <div class="property-sell">
                    <div class="property-sell-price clearfix">
                        <div class="mod-price">
                            <small>¥</small>
                            <span v-text="product.sku?product.sku.price:''" id="J_price" class="vm-money"></span>
                        </div>
                        <div class="mod-original" id="J_originalPrice" style="display:none;"></div>
                    </div>
                </div>
                <div class="property-set">
                    <dl class="property-set-sale" data-property="颜色分类">
                        <dt class="vm-metatit">颜色分类</dt>
                        <dd class="clearfix">
                            <a @click="changeSku(item.value,false)" v-for="(item,index) in product.images" :class="item.value == query.color?'vm-sale-img selected':'vm-sale-img'" :key="index" data-value="3:27062"  data-mtype="store_de_sp_2_1" href="#" title="雅金">
                                <img :src="item.images[0].url" width="32" height="32">
                                <span v-text="item.value"></span>
                            </a>
                        </dd>
                        <div v-for="(item,index) in product.productSkuAttribute" :key="index">
                            <dt v-text="item.name" class="vm-metatit"></dt>
                            <dd class="clearfix">
                                <a v-for="(itemChild,k) in item._child" @click="changeSku(false,{id:item.id,value:itemChild})" :class="(item.id == query.attributes[index].id && itemChild == query.attributes[index].value)?'vm-sale-img selected':'vm-sale-img'" :key="k" data-value="3:27062"  data-mtype="store_de_sp_2_1" href="#">
                                    <span v-text="itemChild"></span>
                                </a>
                            </dd>
                        </div>
                    </dl>
                </div>
                <div class="property-buy clearfix">
                    <p class="vm-message" id="J_message"></p>
                    
                    <dl class="property-buy-quantity">
                        <dt class="vm-metatit">数<span class="s-space"></span><span class="s-space"></span>量
                        </dt>
                        <dd class="clearfix">
                            <el-input-number v-model="amount" size="small" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                        </dd>
                    </dl>
                    <div class="property-buy-action"> 
                        <a @click="buy" data-mtype="store_de_buy" href="javascript:void(0);" id="J_btnBuy" class="btn btn-primary btn-lg mr20" style="display: inline-block;">立即购买</a>
                        <a @click="addCart" data-mtype="store_de_cart" href="javascript:void(0);" id="J_btnAddCart" class="btn btn-empty btn-lg hide" style="display: inline-block;"><i></i>加入购物车</a>
                        <a href="javascript:void(0);" data-mtype="store_de_remind" id="J_btnRemind" class="btn btn-empty btn-lg hide" style="display: none;"><i></i>开售提醒</a>
                        <span class="vm-service" id="J_panicBuyingWrap"></span>
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
import { products } from '@/api/product'
import { addCart } from '@/api/cart'
import { getToken } from '@/utils/auth'
import { settle } from '@/api/cart'
export default {
    name:'product',
    components: {
        Header,
        Footer
    },
    data(){
        return {
            product:{},
            images:{},
            currentImages:'',
            query:{
                id:0,
                attributes:[],
                color:'',
            },
            amount:0,
        }
    },
    created(){
        if(this.$route.params.id){
            this.query.id = this.$route.params.id
        } 
        this.products()
    },
    methods:{
        addCart(){
            if(getToken()){
                if(this.amount < 0){
                    this.$notify.warning('商品数量不得小于0')
                }else{
                    addCart({
                        sku_id:this.product.sku.id,
                        amount:this.amount,
                    }).then(res => {
                        this.$notify.success('加入购物车成功')
                        this.$refs.header.getCartNum()
                    }).catch(error => {
                        this.$notify.warning(error.response.data.message)
                    })
                }
            }else{
                this.$router.push({name:'/login'})
            }
        },
        buy(){
            if(getToken()){
                if(this.amount < 0){
                    this.$notify.warning('商品数量不得小于0')
                }else{
                    addCart({
                        sku_id:this.product.sku.id,
                        amount:this.amount,
                    }).then(res => {
                        this.$router.push({name:'/cart'})
                    }).catch(error => {
                        this.$notify.warning(error.response.data.message)
                    })
                }
            }else{
                this.$router.push({name:'/login'})
            }
        },
        handleChange(value) {
            console.log(value);
        },
        changeSku(color,attributes){
            if(color){
                this.query.color = color
                this.product.images.forEach(element => {
                    if(element.value == color){
                        this.images = element.images
                    }
                });
            }
            if(attributes){
                this.query.attributes.forEach(item => {
                    if(attributes.id == item.id){
                        item.value = attributes.value
                    }
                })
            }
            this.products()
        },
        handleImagesPreview(url){
            this.currentImages = url
        },
        products(){
            products(this.query).then(res => { 
                this.product = res.data.list
                this.product.images.forEach(element => {
                    element.images.forEach(item => {
                        item.url = process.env.BASE_API + item.url
                    })
                    if(element.value == this.product.sku.color){
                        this.images = element.images
                    }
                });
                this.images.forEach((item,index) => { 
                    if(index == 0){
                        this.currentImages = item.url
                    }
                })
                this.query.attributes = JSON.parse(this.product.sku.attributes)
                this.query.color = this.product.sku.color 
            }).catch(error => { 
                this.$message.warning(error.response.data.message)
            })
        },
    },
}
</script>
<style>
img {
    border-style: none;
    vertical-align: top;
}
a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    text-decoration: none;
    outline: 0;
}
.container {
    width: 1240px;
    margin-left: auto;
    margin-right: auto;
}
.preview {
    float: left;
    width: 560px;
    margin-right: 40px;
}
.preview .preview-booth {
    margin: 8px 0;
    width: 560px;
    height: 560px;
}
.page-sku, a, mark {
    color: #000;
}
.preview .preview-thumb {
    overflow: hidden;
    margin-top: 10px;
    margin-left: 24px;
}
.bfc, .clearfix, .fast-nav .-ulist, .inblock, .preview .preview-thumb li, .property-set-package, .property-set-sale, .property-sibling-item, .row {
    *zoom: 1;
    overflow: hidden;
}
.clearfix {
    zoom: 1;
}
dd, dl, dt, h1, h2, h3, h4, h5, h6, ol, p, ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-weight: 400;
}
.preview .preview-thumb li {
    position: relative;
    display: inline-block;
    margin: 0 24px;
    overflow: hidden;
    height: 102px;
}
.preview .preview-thumb a {
    display: block;
    position: relative;
    overflow: hidden;
    text-align: center;
}
.preview .preview-thumb img {
    position: relative;
    max-width: 80px;
    max-height: 80px;
}
img {
    border-style: none;
    vertical-align: top;
}
.preview .preview-thumb .current::after {
    content: ' ';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAAAkFBMV…TuGdluGT5vGqPveiGw5dXGL3oTtOvF2e96z7jttez/9Rb7D04sqq5gGpE+AAAAAElFTkSuQmCC) 50% bottom no-repeat;
}
.preview .preview-action {
    padding: 10px 56px 0;
}
.preview .preview-action a {
    font-size: 12px;
    display: inline-block;
    text-align: center;
    color: #bfbfbf;
    line-height: 1;
}
.preview .preview-action a .iconfont {
    color: #BFBFBF;
    display: block;
    font-size: 18px;
    margin-bottom: 5px;
}
.iconfont {
    font-family: iconfont!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
}
.preview .preview-action a {
    font-size: 12px;
    display: inline-block;
    text-align: center;
    color: #bfbfbf;
    line-height: 1;
}
.compare-btn-list {
    cursor: pointer;
    color: #000;
    margin-left: 40px;
    font-size: 12px;
}
.preview .preview-action a .iconfont {
    color: #BFBFBF;
    display: block;
    font-size: 18px;
    margin-bottom: 5px;
}
.compare-btn-list .compare-duibi {
    font-size: 13px;
    margin-right: 4px;
    color: #000;
}
.property {
    position: relative;
    float: left;
    width: 640px;
    font-size: 12px;
    padding-top: 25px;
}
.property-hd, .property-out .mod-hd {
    position: relative;
    padding-top: 30px;
    margin-bottom: 12px;
}
.property-hd h1, .property-out .mod-hd h1 {
    margin-bottom: 4px;
    font-size: 28px;
    line-height: 1.2;
    font-weight: 700;
    color: #262626;
}
dd, dl, dt, h1, h2, h3, h4, h5, h6, ol, p, ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-weight: 400;
}
.property-hd .mod-info, .property-out .mod-hd .mod-info {
    font-size: 14px;
    color: #999;
}
.property-sell {
    position: relative;
    background: #f4f6fa;
    padding: 16px 0 12px;
}
.property-sell-price {
    height: 36px;
    overflow: hidden;
    padding-left: 10px;
}
.clearfix {
    zoom: 1;
}
.property-sell-price .mod-price {
    margin-right: 8px;
    line-height: 36px;
}
.property-sell-price .mod-original, .property-sell-price .mod-price {
    color: #e02b41;
}
.property-sell-price .mod-activity, .property-sell-price .mod-countdown, .property-sell-price .mod-original, .property-sell-price .mod-price {
    float: left;
}
.property-sell-price .mod-price small {
    font-size: 24px;
}
.property-sell-price .mod-original small, .property-sell-price .mod-price small {
    font-family: arial;
    font-style: normal;
}
.property-sell-price .mod-price .vm-money {
    color: #e02b41;
    font-size: 36px;
    font-weight: 500;
}
.property-sell-price .mod-price {
    margin-right: 8px;
    line-height: 36px;
}
.property-set-sale, .property-sibling-item {
    margin-top: 20px;
    margin-bottom: -10px;
}
.vm-metatit{
    width: 65px;
}
.property-set-package dd, .property-set-sale dd, .property-sibling-item dd {
    float: left;
    width: 565px;
    overflow: hidden;
}
.package-tab, .property-set-sale dd {
    margin-right: -20px;
}
.package-tab a.selected, .property-huabei-bd a.selected, .property-set-sale a.selected, .property-sibling-item a.selected {
    border-color: #000;
    color: #000;
}
.property-set-sale .vm-sale-img {
    position: relative;
    height: 40px;
    min-width: inherit;
    line-height: 40px;
    width: 172px;
    text-align: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
}
.package-tab a, .property-huabei-bd a, .property-set-sale a, .property-sibling-item a {
    position: relative;
    float: left;
    width: 176px;
    margin: 0 10px 10px 0;
    background-color: #fff;
    white-space: nowrap;
    line-height: 40px;
    border: 1px solid #BFBFBF;
    border-radius: 2px;
    color: #595959;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
}
.property-set-sale .vm-sale-img img {
    margin-right: 5px;
}
.property-set-sale .vm-sale-img img, .property-set-sale .vm-sale-img span {
    display: inline-block;
    vertical-align: middle;
}
.property .vm-metatit {
    float: left;
    padding-left: 10px;
    width: 75px;
    font-size: 12px;
    line-height: 42px;
    color: #8c8c8c;
}
.property-buy {
    margin-top: 20px;
}
.property-buy .vm-message {
    position: relative;
    font-size: 16px;
    margin-left: 10px;
    color: #e02b41;
}
.property-buy-quantity {
    margin-bottom: 45px;
}
.property-buy .vm-metatit, .property-huabei .vm-metatit, .property-service .vm-metatit, .property-set .vm-metatit, .property-sibling .vm-metatit {
    width: 65px;
}
.property .vm-metatit {
    float: left;
    padding-left: 10px;
    width: 75px;
    font-size: 12px;
    line-height: 42px;
    color: #8c8c8c;
}
.property .s-space {
    padding: 0 6px;
}
.property-buy .mod-control {
    position: relative;
    z-index: 1;
    height: 40px;
    width: 122px;
    overflow: hidden;
}
.property-buy .mod-control, .property-related li {
    margin-right: 30px;
    float: left;
}
.property-buy .mod-control a.disabled {
    cursor: default;
    color: #e0e0e0;
}
.property-buy .mod-control .vm-minus {
    right: 90px;
}
.property-buy .mod-control a {
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    text-decoration: none;
    text-align: center;
    border: 1px solid #e7e7e7;
    color: #000;
    background: #f7f7f7;
}
.page-sku {
    position: relative;
    padding-top: 66px;
    line-height: 1.5;
}
.property-buy .mod-control input {
    position: absolute;
    top: 0;
    right: 30px;
    width: 60px;
    height: 38px;
    padding: 0;
    line-height: 40px;
    font-size: 12px;
    text-align: center;
    color: #595959;
    border: 1px solid #dedede;
}
button, input, optgroup, select, textarea {
    font: inherit;
    margin: 0;
}
.property-buy .mod-control a.disabled {
    cursor: default;
    color: #e0e0e0;
}
.property-buy .property-buy-action {
    margin-top: 17px;
    margin-left: 10px;
}
.property-buy .btn {
    padding: 15px 0;
    width: 208px;
    font-size: 20px;
    line-height: 24px;
}
.mr20 {
    margin-right: 20px!important;
}
.btn-lg {
    padding: 10px 30px;
    line-height: 1.33333;
    border-radius: 3px;
}
.btn-primary {
    color: #fff;
    background-color: #27b3ff;
}
.btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    line-height: 1.42857;
    border-radius: 3px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.property-buy .btn.btn-empty {
    font-size: 18px;
}
.property-buy .btn {
    padding: 15px 0;
    width: 208px;
    font-size: 20px;
    line-height: 24px;
}
.btn-lg {
    padding: 10px 30px;
    line-height: 1.33333;
    border-radius: 3px;
}
.property-buy .property-buy-action {
    margin-top: 17px;
    margin-left: 10px;
}
.btn, .diff-operate, .match-alert-bd, .tcenter {
    text-align: center;
}
.btn-empty {
    border: 1px solid #27B3FF;
}
.btn-empty, .text-primary {
    color: #27b3ff;
}
</style>
