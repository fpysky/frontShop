<template>
    <div>
        <Header></Header>
        <div class="home">
            <div class="home-carousel">
                <el-carousel height="480px" :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '@/views/layout/Header'
export default {
    name:'index',
    components: {
        Header
    },
    data(){
        return {

        }
    },
    created(){},
    methods:{
        
    }
}
</script>
<style scoped>
.home {
    background: #f4f4f4;
    position: relative;
    overflow: hidden;
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
</style>
