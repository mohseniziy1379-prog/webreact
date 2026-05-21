import React from 'react'

function Lessonoff({item}) {
    const imgurl  = '/ephoto.jpg'
  return (
                <div className='bg-white flex flex-col rounded min-w-64'>
                    <img className='w-60 rounded' src={imgurl}  />
                    <div className='text-center px-2  text-2xl bg-slate-200 rounded m-2'>{item.title}</div>
                    <div className='text-right px-2 py-1 '>{item.teacher}</div>
                    <div className='text-right px-2 py-1 '>مدت زمان : {item.time} ساعت</div>
                    <div className='text-right px-2 py-1 '>قیمت اصلی : <span className='line-through'>{item.price}</span></div>
                    <div className='text-right px-2 py-1 '>قیمت با تخفیف : 10000</div>
                    
                </div>
  )
}

export default Lessonoff