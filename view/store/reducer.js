import {combineReducers} from 'redux'

const initUser={
    username:'',
    msg:''
}

function user(state=initUser,actions){
    switch(actions.type){
        
        default:return state
    }
}

export default combineReducers({
    user
})