import React from 'react'

function LessonNew({item}) {
  const imgurl  = '/ephoto.jpg'
  return (
    <div className='bg-white flex flex-col rounded min-w-64'>
                    <img className='w-60 rounded' src={imgurl}  />
                    <div className='text-right px-2 py-1 text-2xl '> {item.title}</div>
                    <div className='text-right px-2 py-1 '>مدرس : {item.teacher}</div>
                    <div className='text-right px-2 py-1 '>مدت زمان : {item.time} ساعت</div>
                    <div className='text-right px-2 py-1 '>قیمت : <span>{item.price}</span>
                    </div>
                </div>
  )
}

export default LessonNew