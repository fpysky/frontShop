<template>
    <div>
        <Header></Header>
        <div class="home">
            <div class="home-carousel"></div>
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
</style>
