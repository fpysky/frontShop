import { getToken } from '@/utils/auth'
import store from './index' 
if(getToken()){
    if(store.getters.name == ''){
        store.dispatch('GetUserInfo')
    } 
}