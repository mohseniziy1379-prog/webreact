import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NewContext } from '../NewContext'

function Lessonpage() {
    let {cartitems , setCartitems} = useContext(NewContext)
    const [items, setItems] = useState({})
    const imgurl  = '/ephoto.jpg'
    let id = useParams().id
    useEffect(() => {
          fetch(`http://localhost:3001/courses/${id}`)
            .then(res => res.json())
            .then(data =>{
              setItems(data)
            })
          }, [])
      
          
    const hanldeadd = ()=>{
      let selecteditem = cartitems.find(item=> item.id == id)
       if(selecteditem === undefined) {
          items.qty = 1 ;
          setCartitems([...cartitems , items])
       }
       else {
          selecteditem.qty +=1
          setCartitems([...cartitems])  
       }
    }
  return (
    <div className='mx-auto w-9/12 flex gap-2 border border-gray-300 rounded shadow '>
        <div className='w-1/2'>
            <img src={imgurl} className='shadow' />
        </div>
        <div className='text-right text-2xl w-1/2 flex flex-col gap-4 p-10 pb-0'>
            <h2 className='text-3xl bg-slate-200 rounded text-center'>{items.title}</h2>
            <hr />
            <div>مدرس : {items.teacher}</div>
            <div> مدت زمان دوره : {items.time}</div>
            <div>قیمت دوره : {items.price}</div>
            <br />

           <div className='flex mb-2 items-center justify-around'>
             <div className='flex'>
                  {/* <button className='bg-slate-300 rounded px-1'>+</button> */}
                  <span className='mx-2'>{
                    cartitems.find(item=> item.id == id) !== undefined ? cartitems.find(item=> item.id == id).qty : 0
                  }</span>
                  {/* <button className='bg-slate-300 rounded px-1'>-</button> */}
              </div>
              <span  onClick={hanldeadd} className='bg-slate-500 shadow select-none text-white px-2 py-1 rounded  cursor-pointer '>افزودن به سبد خرید</span>
            </div>
        </div>
    </div>
  )
}

export default Lessonpage