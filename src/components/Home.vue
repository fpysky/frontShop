<template>
    <div class="index-banner">
        <div class="index-banner-content" id="index-banner-content">
            <div class="index-banner-box banner-active">
                <img src="./../assets/banner1.jpg" alt="">
            </div>
            <div class="index-banner-box" style="background-color:blue">
                <img src="./../assets/banner2.jpg" alt="">
            </div>
            <div class="index-banner-box" style="background-color:yellow">
                <img src="./../assets/banner3.jpg" alt="">
            </div>
            <div class="index-banner-box" style="background-color:#cccc">
                <img src="./../assets/banner4.jpg" alt="">
            </div>
            <div class="index-banner-box" style="background-color:#F56C6C">
                <img src="./../assets/banner5.jpg" alt="">
            </div>
            <div class="index-banner-box" style="background-color:#F56C6C">
                <img src="./../assets/banner6.jpg" alt="">
            </div>
        </div>
        <ul class="home-category">
            <li class="home-category-item">
                <a href="" class="home-category-link">手机</a>
                <div class="home-category-child"></div>
            </li>
            <li class="home-category-item">
                <a href="" class="home-category-link">智能设备</a>
            </li>
            <li class="home-category-item">
                <a href="" class="home-category-link">游戏设备</a>
            </li>
            <li class="home-category-item">
                <a href="" class="home-category-link">数码影音</a>
            </li>
            <li class="home-category-item">
                <a href="" class="home-category-link">手机周边</a>
            </li>
            <li class="home-category-item">
                <a href="" class="home-category-link">生活周边</a>
            </li>
            <li class="home-category-item">
                <a href="" class="home-category-link">个护健康</a>
            </li>
            <li class="home-category-item">
                <a href="" class="home-category-link">居家用品</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    mounted(){
        this.activeBanner();
    },
    methods:{
        activeBanner(){
            let t = '';
            let timeOut = 5000;
            let index = 1;
            let indexBannerBox = document.getElementsByClassName('index-banner-box');
            function moveFunc(){
                indexBannerBox[index].classList.add('banner-active');
                for(let i = 0; i < indexBannerBox.length; i++){
                    if(i != index){
                        indexBannerBox[i].classList.remove('banner-active');
                    }
                }
                if(index != 5){
                    index++;
                }else{
                    index = 0;
                }
            }
            t = setInterval(moveFunc,timeOut);
            //检查浏览器窗口是否被挂起 如果不进行判断 窗口被挂起后定时器会紊乱
            document.addEventListener("visibilitychange", function() {
                if(document.hidden === true) {
                    // 窗口被挂起 停止执行定时器
                    clearInterval(t);
                } else {
                    // 窗口由挂起被激活 继续执行定时器
                    t = setInterval(moveFunc,timeOut);
                }
            })
        },
    },
}
</script>
<style>
    .index-banner{
        width:100%;
        height:480px;
        position: relative;
    }
    .index-banner .index-banner-content{
        width:100%;
        height:480px;
        position: relative;
        margin:0 auto;
    }
    .index-banner .index-banner-content .index-banner-box{
        width:100%;
        height:480px;
        position:absolute;
        top:0;
        left:0;
        z-index:1;
        opacity: 0;
        transition:opacity .7s;
    }
    .index-banner .index-banner-content .index-banner-box img{
        width:100%;
        height:100%;
    }
    .index-banner .index-banner-content .banner-active{
        z-index:2;
        opacity:1;
    }
    .index-banner .home-category{
        background-color: rgba(248,247,247,.8);
        position: absolute;
        left: 50%;
        top: 0;
        padding:0;
        margin-left: -620px;
        padding-top: 12px;
        height: 480px;
        width: 244px;
        background-color: rgba(248,247,247,.8);
        background-color: #f8f7f7\9;
        z-index: 3;

    }
    .index-banner .home-category .home-category-item{
        height: 57px;
        line-height: 57px;
        background-color: transparent;
        transition: all .5s;
        display: list-item;
        text-align: -webkit-match-parent;
        list-style-type: none;
    }
    .index-banner .home-category .home-category-item:hover a{
        background-color:#fff;
    }
    .index-banner .home-category .home-category-item .home-category-link{
        display: block;
        color: #333;
        padding: 0 30px;
        height: 100%;
        transition:all .4s;
    }
    .index-banner .home-category .home-category-item .home-category-child{
        display: none;
        position: absolute;
        height: 480px;
        left: 244px;
        top: 0;
        background-color: #fff;
        white-space: nowrap;
        font-size: 0;
        box-shadow: 1px 1px 2px rgba(0,0,0,.1);
    }
</style>

