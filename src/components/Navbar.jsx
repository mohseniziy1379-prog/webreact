import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NewContext } from '../NewContext'

function Navbar() {
  let {cartitems , islogin} = useContext(NewContext)
  let total = 0 ;
  cartitems.map(item=> total += item?.qty)

  
  
  return (
    <>
    <div className="mx-auto w-9/12 my-10 bg-slate-500 text-end  rounded h-14 flex  md:flex-row-reverse items-center justify-between ">
        <div className='flex flex-row-reverse'>
          <div className='mr-2 '>
            <Link className='bg-slate-200 rounded   px-2 py-2' to={`/`}>صفحه نخست</Link>
        </div>
        <div className='mr-2 '>
            <Link className='bg-slate-200 rounded   px-2 py-2' to={`/courses`}>دوره ها</Link>          
        </div>
        <div className='mr-2 '>
             <Link className='bg-slate-200 rounded   px-2 py-2' to={`/about-us`}>درباره ما </Link>  
        </div>
        </div>
        <div>
          <Link to={'/registration'}><button className='text-black ml-2 p-1.5 rounded bg-slate-300'>
            {islogin ?  'حساب کاربری' : ' ثبت نام یا ورود' }
             </button></Link>
          <Link className='text-black ml-2 p-1.5 rounded bg-slate-300' to={'/cart'}> 
            {
              total == 0 ? '' : <span className='bg-red-700 rounded-full px-1 text-white'>{total}</span>
            }
          سبد خرید</Link>
         
        </div>
      </div>
    </>
  )
}

export default Navbar