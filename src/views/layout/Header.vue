<template>
  <div>
    <!-- 小广告 -->
    <div class="home-settlement" style="background-color: rgb(255,255,255);">
      <div class="mzcontainer">
        <img src="//openfile.meizu.com/group1/M00/06/36/Cgbj0VuAOi-AFTz1AAMhcBof8Sk659.jpg" alt=" " class="home-settlement-img" style="max-width: 1920px; margin-left: -960px;">
        <a href="javascript:;" class="home-settlement-point close" title="关闭">
            <i class="home-font close"></i>
        </a>
            <a href="https://detail.meizu.com/item/meizu16thplus.html?click=store_index_dt_1" class="home-settlement-point" style="width: 1920px; height: 120px; left: 0px; top: 0px;" target="_blank" title="魅族 16th" data-mtype="store_index_dt_1" data-mdesc="顶通1"></a>
        </div>
    </div>
    <div class="layout-header clearfix" id="layoutHeader">
      <div class="mzcontainer">
          <div class="layout-header-logo">
              <a href="/" class="layout-header-logo-link" alt="魅族科技" data-mtype="wmz_public_yt_logo">
                  <img src="data:image/png;base64,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" style="max-width:125px;margin-top:  28px;">
              </a>
          </div>
          <ul class="layout-header-service clearfix">
              <li class="layout-header-service-item layout-header-service-search mz-autocomlete" id="layoutHeaderSearch">
                <input class="mz-autocomlete-input" placeholder="魅族 16th"><img class="layout-img-search" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAAAXNSR0IArs4c6QAAA4VJREFUSA21Vz1oU1EU7ntNGweldZWiiyB0KaHVgD+LS0HrJtZBpCC0aZMsaju42Mkh1ilpTDrVn8XiIupQIVsdktihS0EQQaiVLkKxQ9KGxO97vvO4L76bJnnpg+Sec+453/neub/P6GryicfjwUqlcqFarQ7UarVTDDMMY9s0za1AIFBIJpPlJqE83QxPq2KMRCJjSD6BpKMgcFzpckT07aFvFaSWM5nMB6ejBUFLBAT49s+AdbkFPLquoUL30+l0sZU4TyJTU1MRgCTxlgEVDG++CX0D9m3aoXOIhqAPUpcH9grkeDabzYjtsPY/IiDxFMAPJRCgZegpvGUGb/lN7Go7MzNzFvMnAt8YfIPSB30BZGZFb9S6iLASAHquBOR7enrGFxcXfyg2rRiNRs8cHBy8gUNYnEBmupnKOEQ4J0DiM37WcADgbW9v751WVwNX1/7+/mvg3CQZ4FTwu4RJXBByXq0pRk5MIQFbvh0SxCJxxhKDOjHtSU9V+1gVsZfoe3qBfRnz4Vyzw6FD5jBh3nwFEWvOYGnfaLS0rYpwnxBABKb8kiAWMYgluGoOsamtyTFFFUbFyNUhst9WxWIO5tJhmty2wdzaMeG8qVuiOoBGdmIRkz7MwVw6fxMlG1A6NxS5U6KDWZfLhW+CqXWA0QrZ2jFdHj4VFVPNVQ/rLN/6jqPQMUw1Ha6JTqcKkJ3q6AJatddh/tLFY3mbW0rnkCJ3SnQw63K58E0ssQJY79GKMRzkAeby8KEQi5iEYA7m0sGZ3JLhvCoOPEVF9tuqWMzR6NyyJitKtixJwTzG7Vn0dltiEEviIb8Q2au1iNhnwBodwDzIo7zRLugFpNoYSwxiKfbZycnJ04ruEp3li6o8AGverPiEeZS3Q4YxjCWGhWT/gdQViBu484yrdpGd+wgNR3ExAoF3eMnraANOUsN42dfXF0skEn/E1i0C2/X19S8jIyM8dy7adn46TA8PD/eHw+HvxWLxt213NVwdoVDoEXxfocOZX6jwwtLS0j3Ef4J8FX0n7cChUql0C/Y8cv6kzVUR28mqDOSOXp7n5uZO7O7upkD2ruThVID+GGSfeBKho5/PCc433dUQuLdx+PFe3C+E0I5piYiTfXubAPuOfWBx9QCP91pOYD6HE/nn19U1Pz9/bGdn5zyPcgBYZxLA2v7kXFlZ6c7lcteAVcXQfPwLwMHO9PXwzvQAAAAASUVORK5CYII=">
              </li>
              <li class="layout-header-service-item" id="layoutHeaderUser" @mouseover="layoutHeaderUserOver('over')" @mouseout="layoutHeaderUserOver('out')">
                  <a class="layout-header-service-link" href="/" @click.prevent="goUserCenter" data-mtype="wmz_public_yt_mycenter">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABNdJREFUaAXtWjlLNEsUvfPcxQXENXEXXHALFMFExC1VBDVR0MjAwMC/YWKgiYKJigiGLohoYKLgikvgnrjvouL2vXcKqqjnN+1Uj9UzODMXerqm+i7n9K2uvlUztj//CXmR/ONFXBlVH2FPz7gvw74Me9gd8Loh7e+KBH58fNDq6io7jo6O6O7ujoWNjIykpKQkKigoYIefn5/lcGxWFx4gOjY2RhcXF9+SiYmJofr6ekb8W8UfXrSMMAq48fFxmpqaMgWxurqaamtryWazmbJTVbZsSH8lGxwcTFVVVZSfn0/IJgRZX1tbo+npaXp5eWF9/AbV1dWx77o/LMkwhnFvb6/AmpmZSS0tLRQVFSX65Mb19TUNDg7Szs6O6G5vb7dkeGufpTFB4ZnlArKdnZ2GZKGHGwEd6HKBD/jSLdoJI7t8gsIwRmZVBbqwgcAHfOkWSwhzkHhmjYYx15HP0IUNl19BGO9ZLpigzIpsI/sy68dIX3uGeVGBgHw2Ngpur1+2kX3Z03WmTzthZ0C40kY74YiICIHfmQzJNrIv4fSHDe2E4+PjBaS9vT3RVm3INrIvVXtHetoJy+/SjY0NR/H/ui7byL7+UnSyQzvh3NxcUQfjtSIPUUcYoctfRail4Uu3aCccGxtLWVlZDCcqpYmJCWXM0OXVFXzAl27RThgAKysrBc75+XlSeZ9CB7pcZB+8T8fZEsLZ2dlsVQSAn5+f1NfXRw8PD4Z4cQ060IWg+IAPK8QSwgDa0NBAISEhDDNWQ93d3YTzV/l6DTawtUosWR5ysNvb29TT0yOey9DQUMICPy8vj6msr6+zDYKnpyf2HVs8HR0dYg7gfnSeLSUMoEtLS2yt+/b29i3ugIAAtrIqKir6Vu+nFy0nDIAHBwc0MDBA5+fndvFiNm5tbaWUlBS713V2uoQwAGOPa3FxkVZWVujk5IRxSEhIoMLCQiouLhbvbp3k7PlyGWF7wd3RZ9ks7Q4yKjF9hFXu0m/W8boMa92Iv7y8JBQbOLDriJIRx/v7u9Kg8Pf3p/DwcHZgqwcLCBzR0dFK9ipKWmZprGEnJydpd3dXJaZpnfT0dKqpqdGyXPwR4bOzM1ZQHB4emibhjEFycjIrUOLi4pwxZzZOE15YWKCRkRF6fX0VwVEe5uTksGGYmppK+Dk0LCyMVH8GxVr48fGRbRrs7++zR2Nzc5PksjQwMJAaGxuptLRUxDXTcIrw3NwcDQ8PizggWlFRQeXl5aR74+3+/p5mZ2dpZmbmf8SbmpqorKxMYFBtmCaM8hB1Mf8/W2JiIrW1tZEVG24yidPTU+rv76fj42PWjS0g1N8oS82IqdcS9pyGhoYE2YyMDOrq6rKcLAjhhiIWYkJww4HFzJ4Z7EwRHh0dpefnZ9gxAFi74plylSAWYvLRBCzAZEaUCd/e3tLy8jLzjeHU3NxMQUFBZmJp0UVMxOb/EAAmYFMVZcJ4dvmeE2bitLQ01Rja9RAbGCDABGyqokx4a2tL+CwpKRFtdzVkDDI2R3iUCV9dXQlf+KuRu0XGIGNzhEuZ8M3NjfBl5kduYaS5IWOQsTkKo0xYrnZQ5LtbZAwyNke4lAk7cvRbrnsdYdOl5W/JpBFOr8uwj7DRUPCUfl+GPSWTRjx8GTa6M57S/y9uIe/cMMw11wAAAABJRU5ErkJggg==" alt=" " class="layout-header-service-avatar">
                  </a>
              </li>
              <li class="layout-header-service-item layout-header-service-cart" id="layoutHeaderCart">
                  <a @click.prevent="goCart" class="layout-header-service-link service-cart" href="" data-mtype="wmz_public_yt_cart">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABAxJREFUaAXtWbtLNDEQn1NPQcG3lS9UxAcWiiAIlnaCYCFW/hn+FXbCIdhfeQiKoPZiIaeg4At8gKjgs7BQFPX7fqsJ2d3snbsbd7PeTrOTSTKZX2aSTLKJz/9EBURFBYTVgBoD/usejz0ce/iPzUAc0n/MoTY4BefhEusUrK+v0/LyMr2+vlqreHl8fJzGxsZ4OUqMzcMrKys5wQLczs5OlDCabLUB7u3tNTWQFS4uLuj+/l5Wpb0sYb084C5xfn4u9fL8/Dw9Pz8boCYnJ2l0dFR7gFYDbWs4kUhQW1ubtZ1R7uvro62tLYNHWEcRsC2kpUi/hQMDA7z69PSUnp6eeDkqjM3DuQyHh5PJJL29vdHHxwdtbGyQOAm5+gZVhwitqqqisrIy6ZC2NSxtJQhTqRTt7u4KEv1YgO7v76epqSmqqakxGegqpNFTN4+a0HwXsPFij5mbm7Ntvq4BI6yjQldXV5TNZk3mulrD6FlZWUmNjY10eXlpKBoZGSFkXroQvLuwsEAnJyeGScgZhoeHuXmuAaMnkhMGGGc2Ngmd6OHhgZtTXV3NeTCuQxqdenp68DEIwHU6nnBcPj4+MvOoq6uL82A8Ae7s7KSSkq/gQAgdHByYlIZZENdsfX09tba2mszxBLi0tJQ6Ojq4ov39fc6HzYiABwcHbeZ4AgwtYlgfHh7aFIchsIazUsDirQpr5vr6OgyMpjFF78rCGY09e7ilpYUqKir4gDqsYxGwzLu+ACN96+7u1gbwT8LZF2B0Ftfx8fExvb+/8wkImhG96xTOsMlzSKOzuI5fXl7o7OwM4lBIBOwUzjDMF+C6ujpqaGjgAMM6nn4azr4BQ4EY1mFtXKJ3c4WzEsBiWCOvZm9eUB4UiYBzhTPs8RXSUIBctajoSw1eQY6OjiAOjNyEM4zyDbi8vNyUrwa9jkXv5gtnJYChRFzHe3t7hAtFEIRjUAScL5xhk28PQ4k4EO6ii4uLvw4ak5rJZExXwaGhIZiTkzw9AFg1NjU1GV5mu/Ta2hptb29Tc3MzISNTTdgr8JJxd3fHVePRDnbkI9evlk4K8etldnbWNONObVXLa2traWZmhvDNR8oAY6CbmxtKp9MU5HUR+8f09DQhCfoJKQXMBsRRgTTz9vb2V/Lr4uJiI8Nrb293/C3EbLF+fwWwdRCdykp2aZ0A5bMlBpxvhqJer+QcFicB2c/S0hJtbm4aYrz6488ENhoV5Fe/csAAu7q6yrExfmJigsv8MH71K1/DzLMiKJlMrHfDy3TJZE46lQN2GkgXuXLA4p86BlImY3VuvzJdMpmTXuVrmP06ZWEGY5jMyQg3cqbLq/4403Iz21Fsq3wN6z4JMWDdPeTXvtjDfmdQ9/4F5+F/nGyFQiUTZpsAAAAASUVORK5CYII=" alt=" " class="layout-font-cart">
                      <span class="layout-header-service-cart-num" style="line-height: 15px;">0</span>
                  </a>
              </li>
          </ul>
          <ul class="layout-header-nav clearfix" id="layoutHeaderNav">
              <li class="layout-header-nav-item">
                  <a href="//store.meizu.com" class="layout-header-nav-link" data-mtype="wmz_public_yt_store">商城</a>
              </li>
                  <li class="layout-header-nav-item">
                      <a href="https://lists.meizu.com/page/list?categoryid=76" class="layout-header-nav-link" data-mtype="wmz_public_yt_custom_1">手机</a>
                  </li>
                  <li class="layout-header-nav-item">
                      <a href="https://lists.meizu.com/page/list/?categoryid=231" class="layout-header-nav-link" data-mtype="wmz_public_yt_custom_2">声学</a>
                  </li>
                  <li class="layout-header-nav-item">
                      <a href="https://lists.meizu.com/page/list/?categoryid=174" class="layout-header-nav-link" data-mtype="wmz_public_yt_custom_3">智能</a>
                  </li>
                  <li class="layout-header-nav-item">
                      <a href="https://lists.meizu.com/page/list/?categoryid=222" class="layout-header-nav-link" data-mtype="wmz_public_yt_custom_4">生活</a>
                  </li>
              <li class="layout-header-nav-item">
                  <a href="//www.flyme.cn/" class="layout-header-nav-link" target="_blank" data-mtype="wmz_public_yt_flyme">Flyme</a>
              </li>
              <li class="layout-header-nav-item">
                  <a href="http://care.meizu.com/" class="layout-header-nav-link" target="_blank" data-mtype="wmz_public_yt_service">服务</a>
              </li>
              <li class="layout-header-nav-item">
                  <a href="http://retail.meizu.com/index.html" class="layout-header-nav-link" target="_blank" data-mtype="wmz_public_yt_offstore">专卖店</a>
              </li>
              <li class="layout-header-nav-item">
                  <a href="//bbs.meizu.cn/" class="layout-header-nav-link" target="_blank" data-mtype="wmz_public_yt_bbs">社区</a>
              </li>
              <li class="layout-header-nav-item app-down">
                  <a href="javascript:;?click=gw_public_yt_app" class="layout-header-nav-link" target="_blank" data-mtype="wmz_public_yt_app">APP下载</a>
              </li>
          </ul>
          <!-- <div class="layout-header-nav-downmenu" id="layoutHeaderNavDownmenu"></div>
          <div class="layout-header-app-down" id="layoutHeaderAppDown">
              <div class="layout-header-app-down-content">
                  <img class="app-down-content-img" src="https://openfile.meizu.com/group1/M00/06/0A/Cgbj0Vtzj4GAV3zZAAMBJl6L8H8438.jpg" alt="">
                  <a class="app-down-link-1 app-down-link" data-mtype="gw_index_dt_download_1" target="_blank" href="https://hd.meizu.com/share/app_download.html?click=gw_index_dt_download_1">
                      <img src="https://openfile.meizu.com/group1/M00/05/FC/Cgbj0Ftzj4CAWPgjAAAPE0ahc9Y069.png" alt="">
                  </a>
                  <a class="app-down-link-2 app-down-link" data-mtype="gw_index_dt_download_2" target="_blank" href="http://app.flyme.cn/apps/public/detail?package_name=com.meizu.flyme.flymebbs&amp;click=gw_index_dt_download_2">
                      <img src="https://openfile.meizu.com/group1/M00/05/FC/Cgbj0Ftzj4CAWPgjAAAPE0ahc9Y069.png" alt="">
                  </a>
              </div>
          </div> -->
      </div>
    </div>
    <div class="layout-user-downmenu" @mouseover="layoutHeaderUserOver('over')" @mouseout="layoutHeaderUserOver('out')" ref="layoutUserDownmenu" style="top: 186px; left: 1460.5px;">
      <ul v-if="name == ''" class="layout-user-downmenu-list">
        <li class="layout-user-downmenu-item">
          <a href="/login" class="layout-user-downmenu-link" data-mtype="wmz_public_grzx_login">立即登录</a>
        </li>
        <li class="layout-user-downmenu-item">
          <a href="/register" class="layout-user-downmenu-link" data-mtype="wmz_public_grzx_register">注册</a>
        </li>
        <li class="layout-user-downmenu-item">
          <!-- <a href="//ordercenter.meizu.com/list/index.html" class="layout-user-downmenu-link" data-mtype="wmz_public_grzx_myorder">我的订单</a> -->
        </li>
        <!-- <li class="layout-user-downmenu-item">
          <a href="/" class="layout-user-downmenu-link" data-mtype="wmz_public_grzx_mformy">M码通道</a>
        </li> -->
      </ul>
      <ul v-else class="layout-user-downmenu-list">
        <li class="layout-user-downmenu-item">
          <a href="/login" class="layout-user-downmenu-link" data-mtype="wmz_public_grzx_login">个人中心</a>
        </li>
        <li class="layout-user-downmenu-item">
          <a href="/register" class="layout-user-downmenu-link" data-mtype="wmz_public_grzx_register">{{name}}</a>
        </li>
        <li class="layout-user-downmenu-item">
          <a href="//ordercenter.meizu.com/list/index.html" class="layout-user-downmenu-link" data-mtype="wmz_public_grzx_myorder">我的订单</a>
        </li>
        <li class="layout-user-downmenu-item">
          <a href="/" @click.prevent="logout" class="layout-user-downmenu-link" data-mtype="wmz_public_grzx_mformy">退出</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getToken } from '@/utils/auth'
export default {
  name: 'Header',
  data () {
    return { 

    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar'
    ])
  },
  methods:{
    goCart(){
        if(getToken()){
            this.$router.push({name:'/cart'})
        }else{
            this.$router.push({name:'/login'})
        }
    },
    layoutHeaderUserOver(eventName){
      if(eventName == 'over'){
        this.$refs.layoutUserDownmenu.classList.add("layout-user-downmenu-show")
      }else if(eventName == 'out'){
        this.$refs.layoutUserDownmenu.classList.remove("layout-user-downmenu-show")
      }
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()
      })
    },
    goUserCenter(){
        if(getToken()){
            this.$router.push({name:'/userCenter'})
        }else{
            this.$router.push({name:'/register'})
        }
    },
  }
}
</script>
<style scoped>
body {
    margin: 0;
    position: relative;
    font-family: "PingFang SC","\5FAE\8F6F\96C5\9ED1","Microsoft Yahei",Arial,Helvetica,sans-serif,"\5B8B\4F53";
    font-size: 14px;
    min-width: 1240px;
    min-height: 100%;
    padding-bottom: 246px;
}
dd, dl, dt, h1, h2, h3, h4, h5, h6, ol, p, ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-weight: 400;
}
body{
  margin:0;
  padding:0;
}
a{
  text-decoration: none !important;
}
.home-settlement {
    overflow: hidden;
    transition: height 1s ease-in-out,top 1.5s ease-in-out,opacity 1.5s linear;
}
.mzcontainer {
    width: 1240px;
    margin: 0 auto;
}
.home-settlement .mzcontainer {
    position: relative;
}
.home-settlement .home-settlement-img {
    position: relative;
    left: 50%;
}
img {
    border-style: none;
    vertical-align: top;
}
.layout-header {
    position: relative;
    width: 100%;
    z-index: 998;
    height: 80px;
    background-color: #fff;
    border-bottom: 1px solid #efefef;
}
.clearfix {
    zoom: 1;
}
.layout-header .layout-header-logo {
    float: left;
    height: 80px;
    overflow: hidden;
}
.layout-header .layout-header-service {
    float: right;
    height: 80px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.layout-header .layout-header-nav {
    float: right;
}
.layout-header .layout-header-nav-downmenu {
    position: absolute;
    height: 0;
    width: 100%;
    left: 0;
    top: 80px;
    opacity: 0;
    background-color: #fff;
    transition: height .2s ease-in-out;
}
.layout-header .layout-header-app-down {
    position: absolute;
    height: 0;
    width: 100%;
    left: 0;
    top: 80px;
    background: #fff;
    opacity: 0;
    overflow: hidden;
    transition: all .2s ease-in-out;
}
.layout-header .layout-header-nav .layout-header-nav-item {
    float: left;
    margin: 0 20px 0 15px;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.layout-header .layout-header-nav .layout-header-nav-link {
    display: block;
    color: #333;
    height: 80px;
    line-height: 80px;
    transition: color .2s linear;
}
a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    text-decoration: none;
    outline: 0;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.layout-header .layout-header-service .layout-header-service-item.layout-header-service-search {
    position: relative;
    height: 30px;
    border-radius: 20px;
    padding: 0;
    margin: 24px 0 0 18px;
    width: 168px;
    text-align: right;
    word-break: keep-all;
    white-space: nowrap;
    border: 1px solid rgba(0,0,0,.15);
    line-height: 28px;
}
.layout-header .layout-header-service .layout-header-service-item {
    position: relative;
    float: left;
    right: 3px;
    padding: 26px 8px 0 12px;
}
.layout-header .layout-header-service .layout-header-service-item.layout-header-service-search .mz-autocomlete-input {
    vertical-align: middle;
    border: none;
    outline: 0;
    width: 125px;
    height: 20px;
    margin-left: 15px;
    transition: width .5s;
    font-size: 12px;
    line-height: 20px;
    color: #999;
}
.mz-autocomlete .mz-autocomlete-input {
    outline: 0;
}
button, input, optgroup, select, textarea {
    font: inherit;
    margin: 0;
}
button, hr, input {
    overflow: visible;
}
.layout-header .layout-header-service .layout-header-service-item.layout-header-service-search .layout-img-search {
    width: 17px;
    margin-top: 7px;
    margin-right: 6px;
    margin-left: 3px;
    cursor: pointer;
}
img {
    border-style: none;
    vertical-align: top;
}
.layout-header .layout-header-service .layout-header-service-link {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    color: #666;
}
a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    text-decoration: none;
    outline: 0;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.layout-header .layout-header-service .layout-header-service-avatar {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 100%;
}
.layout-header .layout-header-service .layout-header-service-cart {
    padding-left: 0!important;
    padding-right: 0!important;
}
.layout-header .layout-header-service .service-cart {
    width: 34px;
    height: 34px;
    overflow: unset;
}
.layout-header .layout-header-service .layout-header-service-link {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    color: #666;
}
.layout-header .layout-header-service .layout-font-cart {
    display: block;
    width: 30px;
    height: 30px;
}
.layout-header .layout-header-service .layout-header-service-link {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    color: #666;
}
.layout-header .layout-header-service .layout-header-service-cart-num {
    z-index: 9999;
    position: absolute;
    top: 0;
    right: -2px;
    height: 16px;
    min-width: 8px;
    border-radius: 50%;
    background: #F10000;
    color: #fff;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    display: inline-block;
    padding: 0 4px;
    text-indent: 0;
    font-weight: 300;
}
.layout-user-downmenu {
    display: none;
    z-index: 999;
    font-size: 12px;
    padding-top: 4px;
    overflow: hidden;
    animation: .3s ease showUserDownMenu forwards 1;
}
.layout-user-downmenu-show{
  display:block;
}
.layout-user-downmenu, .mz-loading {
    position: absolute;
    text-align: center;
}
.layout-user-downmenu .layout-user-downmenu-list {
    position: relative;
    background-color: #fff;
    border-radius: 3px;
    padding: 6px 0;
    width: 96px;
    border: 1px solid #efefef;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.layout-user-downmenu .layout-user-downmenu-link {
    position: relative;
    display: block;
    color: #666;
    padding: 7px 0;
    background-color: transparent;
    transition: all .3s;
}
#layoutHeaderUser{
  height:70%;
}
</style>
