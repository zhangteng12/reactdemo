import { combineReducers } from "redux";

let counter = (state = 0, action) =>{
    switch (action.type) {
        case 'ADD':
            return state+1;
        case 'DEL':
            return state-1;
        default:
            return state;
    }
}
let initValue = {
    list:['A','B','C']
}

let todolist= (state=initValue,action)=>{
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'add_item':
            newState.list.push(action.value);
            return newState;
        case 'del_item':
            newState.list.splice(action.value,1);
            return newState;
        default:
            return state;
    }
}

export default combineReducers({ counter,todolist })