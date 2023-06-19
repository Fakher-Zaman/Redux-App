import React from 'react'

const Shop = () => {
    return (
        <div className='container m-3 d-flex flex-column justify-content-center align-items-center'>
            <h2>Deposit/Withdraw Money</h2>
            <div className=''>
                <button className='btn btn-primary m-2'>-</button>
                Update Balance
                <button className='btn btn-primary m-2'>+</button>
            </div>
        </div>
    )
}

export default Shop