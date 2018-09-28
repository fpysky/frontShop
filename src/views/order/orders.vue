<template>
    <div>
        <Header></Header>
        <div class="store-wrap">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="no" label="订单号" width="200">
                </el-table-column>
                <el-table-column prop="created_at" label="下单时间" width="150">
                </el-table-column>
                <el-table-column prop="address.address" label="配送信息" width="260">
                </el-table-column>
                <el-table-column prop="address.contact_name" label="收件人" width="100">
                </el-table-column>
                <el-table-column prop="address.contact_phone" label="联系方式" width="130">
                </el-table-column>
                <el-table-column label="订单状态" width="130">
                    <template slot-scope="scope">
                        <span style="color:#67C23A;" v-if="scope.row.paid_at && scope.row.refund_status == 'pending'">已支付</span>
                        <span style="color:#E6A23C;" v-else-if="scope.row.closed">已关闭</span>
                        <span style="color:#E6A23C;" v-else>未支付,请于30分钟内支付</span>
                    </template>
                </el-table-column>
                <el-table-column prop="total_amount" label="订单总价" width="130">
                </el-table-column>
                <el-table-column label="订单详情" width="130">
                    <template slot-scope="scope">
                        <el-button size="small" type="primary">查看详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                style="margin:15px;"
                background
                layout="prev, pager, next"
                page-size="15"
                :total="total">
            </el-pagination>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/views/layout/Header'
import Footer from '@/views/layout/Footer'
import { fetchOrderList } from '@/api/order'
export default {
    name:'orders',
    components: {
        Header,
        Footer
    },
    data(){
        return {
            tableData:[],
            total:0,
        }
    },
    created(){
        this.fetchOrderList()
    },
    methods:{
        fetchOrderList(){
            fetchOrderList().then(res => {
                this.tableData = res.data.list
                this.total = res.data.total
                console.log(this.tableData)
            }).catch(error => {
                this.$notify.warning(error.response.data.message)
            })
        },
    }
}
</script>
<style scoped>
.store-wrap{
    width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
}
</style>
