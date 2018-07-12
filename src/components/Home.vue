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
        </div>
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
            let timeOut = 4000;
            let index = 1;
            let indexBannerBox = document.getElementsByClassName('index-banner-box');
            function moveFunc(){
                indexBannerBox[index].classList.add('banner-active');
                for(let i = 0; i < indexBannerBox.length; i++){
                    if(i != index){
                        indexBannerBox[i].classList.remove('banner-active');
                    }
                }
                if(index != 4){
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
</style>

