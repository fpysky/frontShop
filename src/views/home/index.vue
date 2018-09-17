<template>
    <div>
        <Header></Header>
        <div class="home">
            <div class="home-carousel">
                <el-carousel height="480px" :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in banner" :key="item.id">
                    <img style="width:100%;height:100%;" :src="item.image" alt="">
                    </el-carousel-item>
                </el-carousel>
                <div class="site-category">
                    <ul class="site-category-list clearfix">
                        <li @mouseover="categoryLiOver(index)" @mouseout="categoryLiOut(index)" ref="categoryLi" v-for="(item,index) in category" :key="index" class="category-item">
                            <a class="title" href="javascript:;">{{ item.name }}<i class="el-icon-arrow-right title-i"></i></a>
                            <div class="children clearfix children-col-4">
                                <div v-for="(child,child_index) in item._child" :key="child_index" class="children-list-col">
                                    <a class="link" href="javascript:;">
                                        <!-- <img class="thumb" src="//i1.mifile.cn/f/i/g/2015/cn-index/m8-80.png?width=80&amp;height=80" width="40" height="40" alt=""> -->
                                        <span class="text">{{ child.name }}</span>
                                        <i class="el-icon-arrow-right title-i"></i>
                                    </a>
                                    <ul>
                                        <li v-for="(product,product_index) in child.product" :key="product_index">
                                            <a href="" @click.prevent="goProduct(product.id)">
                                                <img class="thumb" :src="product.image" width="40" height="40" alt="">
                                                <span>{{ product.title}}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- <ul class="children-list children-list-col children-list-col-1">
                                    <li v-for="(child,child_index) in item._child" :key="child_index">
                                        <a class="link" href="https://www.mi.com/mi8/">
                                            <img class="thumb" src="//i1.mifile.cn/f/i/g/2015/cn-index/m8-80.png?width=80&amp;height=80" width="40" height="40" alt="">
                                            <span class="text">{{ child.name }}</span>
                                        </a>
                                    </li>
                                </ul> -->
                                    
                                <!-- <ul>
                                    <li v-for="(child,child_index) in item._child" :key="child_index"><a href="">{{ child.name }}</a></li>
                                </ul> -->
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="page-main home-main">
                <div class="container">
                    <div class="home-brick-box home-brick-row-2-box xm-plain-box J_itemBox J_brickBox no-comment-total is-visible loaded">
                        <div class="box-hd">
                            <h2 class="title">手机</h2>
                        </div>
                        <div class="box-bd J_brickBd">
                            <div class="row">
                                <div class="span4 span-first">
                                    <ul class="brick-promo-list clearfix">
                                        <li class="brick-item brick-item-l">
                                            <a href="https://item.mi.com/product/10000111.html" class="exposure" data-stat-aid="AA20720" data-stat-pid="2_57_1_331" data-log_code="31pchomephone_left001018#t=normal&amp;act=other&amp;page=home&amp;bid=3185160.1&amp;adm=5432" target="_blank" data-stat-id="AA20720+2_57_1_331" onclick="_msq.push(['trackEvent', '81190ccc4d52f577-AA20720+2_57_1_331', 'https://item.mi.com/product/10000111.html', 'pcpid', '31pchomephone_left001018#t=normal&amp;act=other&amp;page=home&amp;bid=3185160.1&amp;adm=5432']);"><img src="//i1.mifile.cn/a4/xmad_15323220713837_GLBVX.jpg" alt=""></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="span16">
                                    <ul class="brick-list clearfix">
                                        <li v-for="(item,index) in mobilePhone" :key="index" class="brick-item brick-item-m brick-item-m-2" data-gid="2182300110">
                                            <div class="figure figure-img">
                                                <a class="exposure" href="" @click.prevent="goProduct(item.id)">
                                                    <!-- <img src="//i1.mifile.cn/a1/pms_1528719476.67789934!220x220.jpg" width="160" height="160" alt="红米6A"> -->
                                                    <img :src="item.image">
                                                </a>
                                            </div>
                                            <h3 class="title">
                                                <a href="" v-text="item.title"></a>
                                            </h3>
                                            <p class="desc" v-text="item.desc"></p>
                                            <p class="price">
                                                <span v-text="item.price" class="num">599</span>元
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
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/views/layout/Header'
import Footer from '@/views/layout/Footer'
import { banners, mobilePhones } from '@/api/index'
import { productClassify } from '@/api/product'
export default {
    name:'index',
    components: {
        Header,
        Footer
    },
    data(){
        return {
            banner:[],
            mobilePhone:[],
            category:[],
        }
    },
    created(){
        this.banners()
        this.mobilePhones()
        this.productClassify()
    },
    methods:{
        categoryLiOver(index){
            this.$refs.categoryLi[index].classList.add('category-item-active')
        },
        categoryLiOut(index){
            this.$refs.categoryLi[index].classList.remove('category-item-active')
        },
        productClassify(){
            productClassify().then(res => {
                this.category = res.data.list
                this.category.forEach(item => {
                    item._child.forEach(child =>{
                        child.product.forEach(product => {
                            product.image = process.env.BASE_API + product.image
                        })
                    })
                })
            }).catch(error => {
                this.$notify.warning(error.response.data.message)
            })
        },
        goProduct(id){
            this.$router.push({
                name:'/product',
                params:{id: id}
            })
        },
        banners(){
            banners().then(res => {
                this.banner = res.data.list
                this.banner.forEach(item => {
                    item.image = process.env.BASE_API + item.image
                })
            }).catch(error => {
                this.$message.error(error.response.data.message)
            })
        },
        mobilePhones(){
            mobilePhones().then(res => {
                this.mobilePhone = res.data.list
                this.mobilePhone.forEach(item => {
                    item.image = process.env.BASE_API + item.image
                })
            }).catch(error => {
                this.$message.error(error.response.data.message)
            })
        },
    }
}
</script>
<style scoped>
a{
    text-decoration: none;
    color:#000;
}
ul{
    padding:0;
    margin:0;
    list-style-type: none;
}
.home {
    background: #f4f4f4;
    position: relative;
}
.home-carousel {
    width: 100%;
    height: 480px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0; 
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.home-main {
    padding-top: 22px;
}
.page-main {
    background: #f5f5f5;
}
.container {
    width: 1226px; 
    margin-right: auto;
    margin-left: auto;
}
.home-brick-row-2-box {
    height: 686px;
}
.box-hd {
    position: relative;
    height: 58px;
    -webkit-font-smoothing: antialiased;
}
.row {
    margin-left: -14px;
    _margin-left: 0;
    *zoom: 1;
}
.span4 {
    width: 234px;
}
.home-brick-box .brick-list, .home-brick-box .brick-promo-list {
    margin: 0 0 -14px -14px;
    _margin-left: 0;
}
.brick-list, .brick-promo-list {
    height: 614px;
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.clearfix {
    *zoom: 1;
}
.brick-item-l {
    height: 614px;
}
.brick-item {
    position: relative;
    z-index: 1;
    float: left;
    width: 234px;
    margin-left: 14px;
    margin-bottom: 14px;
    background: #fff;
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
}
.brick-promo-list a {
    display: block;
    width: 100%;
    height: 100%;
}
.brick-promo-list .brick-item-l img {
    height: 614px;
}
.brick-promo-list img {
    width: 234px;
}
.span1, .span2, .span3, .span4, .span5, .span6, .span7, .span8, .span9, .span10, .span11, .span12, .span13, .span14, .span15, .span16, .span17, .span18, .span19, .span20 {
    float: left;
    margin-left: 14px;
    min-height: 1px;
}
.span16 {
    width: 978px;
}
.brick-list {
    width: 992px;
}
.brick-list, .brick-promo-list {
    height: 614px;
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.brick-item-m-2 {
    height: 260px;
    padding: 20px 0;
}
.brick-item-m {
    height: 246px;
    padding: 34px 0 20px;
    *zoom: 1;
}
.brick-item {
    position: relative;
    z-index: 1;
    float: left;
    width: 234px;
    margin-left: 14px;
    margin-bottom: 14px;
    background: #fff;
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
}
.brick-item-m-2 .figure-img {
    width: 160px;
    height: 160px;
}
.brick-item-m .figure-img {
    width: 150px;
    height: 150px;
    margin: 0 auto 18px;
}
.brick-item-m .figure-img a {
    display: block;
}
.brick-item-m-2 .figure-img img {
    width: 160px;
    height: 160px;
}
.brick-item-m .figure-img img {
    width: 150px;
    height: 150px;
}
.brick-item-m-2 .title {
    margin: 0 10px 2px;
}
.brick-item-m .title, .brick-item-m .title a {
    color: #333;
}
.brick-item-m .title {
    margin: 0 10px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
}
.brick-item-m .title a {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    _zoom: 1;
}
.brick-item-m .title, .brick-item-m .title a {
    color: #333;
}
.brick-item-m .desc {
    margin: 0 10px 10px;
    height: 18px;
    font-size: 12px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    _zoom: 1;
    color: #b0b0b0;
}
.brick-item-m-2 .price {
    margin: 0 10px 14px;
}
.brick-item-m .price {
    margin: 0 10px 10px;
    text-align: center;
    color: #ff6700;
}
.clearfix:after {
    clear: both;
}
.site-category { 
    position: absolute;
    top: 0;
    left: 18%;
    z-index: 10000;
    width: 234px;
    height: 460px;
    font-size: 17px;
}
.site-category-list {
    height: 100%;
    border: 0;
    color: #fff;
    background: #333;
    background: rgba(0,0,0,0.6);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#99000000", endColorstr="#99000000")\9;
    padding:20px 0 0 0;
}
.clearfix {
    *zoom: 1;
}
.site-category-list .title {
    color: #fff;
}
.site-category-list .title {
    position: relative;
    display: block;
    padding-left: 30px;
    height: 56px;
    line-height: 56px;
}
.site-category-list .title-i {
    position:absolute;
    right:10px;
    top:0;
    line-height: 56px;
}
.site-category-list .children-col-4 {
    width: 992px;
    overflow: hidden;
}
.site-category-list .children {
    display: none;
    position: absolute;
    left: 234px;
    top: 0;
    z-index: 24;
    height: 480px;
    border: 1px solid #e0e0e0;
    border-left: 0;
    background: #fff;
    -webkit-box-shadow: 0 8px 16px rgba(0,0,0,0.18);
    box-shadow: 0 8px 16px rgba(0,0,0,0.18);
}
.category-item-active .children{
    display:block;
    opacity: .9;
}
.site-category-list .children-list-col{
    float: left;
    width: 160px;
    height: 76px;
    line-height: 76px;
    padding:0 0 0 15px;
    position: relative;
}
.site-category-list .children-list .link {
    display: block;
    padding: 18px 20px;
    line-height: 40px;
    color: #333;
    -webkit-transition: color .2s;
    transition: color .2s;
}
.site-category-list .children-list-col .thumb {
    margin-right: 12px;
    vertical-align: middle;
}
.site-category-list .children-list-col .text {
    line-height: 40px;
}
.children-list-col .title-i{
    position:absolute;
    right:10px;
    top:0;
    line-height: 76px;
}
</style>
