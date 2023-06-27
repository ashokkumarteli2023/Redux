//amountReducer will either increase or decrease the amount

//it takes state and action and return new state
const reducer= (state=0,action)=>{
    if(action.type==='deposit')
    {
        return state+action.payload;
    }
    else if(action.type==='withdraw')
    {
        return state-action.payload;
    }
    else{
        return state;
    }
}

export default  reducer;