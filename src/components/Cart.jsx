import React, { useContext, useEffect } from 'react'
import Cartitem from './Cartitem'
import { NewContext } from '../NewContext'
import Footer from './Footer'

function Cart() {
    let {cartitems} = useContext(NewContext)
    let totalcart = 0
    cartitems.map(item=>(
        totalcart += item.price * item.qty
    ))
  return (
    <div className='h-[calc(100vh-137px)] flex flex-col'>
        <div className='w-9/12 mx-auto'>
            { 
                cartitems.length == 0 ? <h2 className='flex items-center justify-center h-60'>سبد خالی است</h2> : cartitems.map(item=>(
                    <Cartitem key={item.id} {...item}/>
                ))
            }
            <div className='flex flex-col text-right p-4 bg-slate-300 mt-2 mb-4'>
                <div>
                    <span className='border-4 rounded px-2 text-2xl'>
                        مبلغ کل : {totalcart}
                    </span>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart