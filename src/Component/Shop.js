import React from 'react'

import { useDispatch } from 'react-redux';
import { actionCreators } from '../State/Action-creators';
import { bindActionCreators } from 'redux';
import {useSelector} from 'react-redux';

const Shop = () => {
  // Accessing the Redux dispatch function
  const dispatch=useDispatch();

  const balance=useSelector(state => state.amount);

  // Binding action creators to the dispatch function
  // The "withdrawMoney" and "depositMoney" functions from the actionCreators are bound to the dispatch
  const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch);
  return (
    <div className='my-3'>
      
      <h2>Deposit/Withdraw money</h2>
      <button disabled={balance===0?true:false} className="btn btn-primary mx-1" onClick={()=>{withdrawMoney(100)}}>-</button>
      Update balance : {balance}
      <button className="btn btn-primary mx-1" onClick={()=>{depositMoney(100)}}>+</button>
      
      {/* without bindActionCreators */}
      {/* <button className="btn btn-primary mx-1" onClick={()=>{
        dispatch(actionCreators.withdrawMoney(100))
      }}>-</button>
      Update balance
      <button className="btn btn-primary mx-1" onClick={()=>{
        dispatch(actionCreators.depositMoney(100))
      }}>+</button> */}
    </div>
  )
}

export default Shop
