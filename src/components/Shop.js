import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {
    const dispatch = useDispatch();
    const balance = useSelector(state => state.amount);
    // const action = bindActionCreators(actionCreators, dispatch);
    const { WithdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className='container m-3 d-flex flex-column justify-content-center align-items-center'>
            <h2>Deposit/Withdraw Money</h2>
            {/* <div className='mt-3'>
                <button className='btn btn-primary m-2' onClick={() => dispatch(actionCreators.WithdrawMoney(100))}>-</button>
                Update Balance
                <button className='btn btn-primary m-2' onClick={() => dispatch(actionCreators.depositMoney(100))}>+</button>
            </div> */}
            {/* <div className='mt-3'>
                <button className='btn btn-primary m-2' onClick={() => action.WithdrawMoney(100)}>-</button>
                Update Balance
                <button className='btn btn-primary m-2' onClick={() => action.depositMoney(100)}>+</button>
            </div> */}
            <div className='mt-3'>
                <button className='btn btn-primary m-2' onClick={() => WithdrawMoney(100)}>-</button>
                Update Balance ({balance})
                <button className='btn btn-primary m-2' onClick={() => depositMoney(100)}>+</button>
            </div>
        </div>
    )
}

export default Shop