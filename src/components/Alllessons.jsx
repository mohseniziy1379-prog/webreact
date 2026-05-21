import React from 'react'

function Alllessons({item}) {
    const imgurl  = '/ephoto.jpg'
  return (
    <div className=' border-gray-400 border-2 rounded p-2 text-right flex flex-col gap-3'>
        <img className='shadow' src={imgurl} alt="" />
        <div className='text-2xl bg-slate-200 rounded text-center'>{item.title}</div>
        <hr />
        <div>مدرس : {item.teacher}</div>
        <div>مدت زمان : {item.time}</div>
        <div>قیمت : {item.price}</div>
        <div className='text-right mb-2 '>
        </div>
    </div>
  )
}

export default Alllessons