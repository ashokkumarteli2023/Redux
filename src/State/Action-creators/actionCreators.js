//depositMoney will take amount as an argument and return a function that will take a function as an argument and call a function

export const depositMoney = (amount) => {
    // Returning an inner function that takes "dispatch" as a parameter
    // This inner function is commonly known as a thunk
    return (dispatch) => {
      // Within the inner function, we call "dispatch" with an action object
  
      // The dispatched action has a "type" property set to 'deposit'
      // The "type" property is used to identify the action type in Redux reducers
  
      // The dispatched action also has a "payload" property set to the provided "amount"
      // The "payload" property contains the data associated with the action
      dispatch({
        type: 'deposit',
        payload: amount
      });
    };
  };
  

export const withdrawMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}