import { getToken } from '@/utils/auth'
import store from './index' 
if(getToken()){
    if(store.getters.name == ''){
        store.dispatch('GetUserInfo').then(res => { // 拉取user_info
        
        }).catch((err) => {})
    } 
}