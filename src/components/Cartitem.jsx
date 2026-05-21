import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NewContext } from '../NewContext'

function Cartitem({id , qty}) {
    let {cartitems,setCartitems} = useContext(NewContext)
    const [item, setItem] = useState({})
    useEffect(() => {
              fetch(`http://localhost:3001/courses/${id}`)
                .then(res => res.json())
                .then(data =>{
                  setItem(data)
                })
              }, [])
    const imgurl  = '/ephoto.jpg'
    const handleremove = ()=>{
      setCartitems(cartitems.filter(item=> item.id !== id))
      
    }
    const handleincrease = () =>{
      cartitems.find(item=> item.id === id).qty += 1
      setCartitems([...cartitems])
    }
    const handledecrease = () =>{
      if(cartitems.find(item=> item.id === id).qty === 1) {
        handleremove()
      }
      else {
        cartitems.find(item=> item.id === id).qty -= 1
        setCartitems([...cartitems])
      }
    }
  return (
    <div className='flex flex-row-reverse border-t-2 p-2 mt-2'>
            <Link to={`/Lessonpage/${id}`}><img className='w-60 shadow' src={imgurl} alt="" /></Link>
            <div className='p-5 text-right flex flex-col gap-5'>
                <h2 className='text-xl font-bold'>{item.title} </h2>
                <div> تومان {item.price}</div>
                <div className='flex items-center justify-between'>
                  <button onClick={handleincrease} className='bg-slate-300 rounded px-2  text-2xl'>+</button>
                  <div> تعداد : {qty}</div>
                  <button onClick={handledecrease} className='bg-slate-300 rounded px-2  text-2xl'>-</button>
                </div>
                <div className='font-bold '>{qty * parseInt(item.price)}</div>
                <button onClick={handleremove} className='bg-red-500 text-white rounded p-2'>حذف از سبد خرید</button>
            </div>
        </div>
  )
}

export default Cartitem