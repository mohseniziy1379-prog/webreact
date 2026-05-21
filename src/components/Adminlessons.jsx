import React, { useState } from 'react'

function Adminlessons({item , upstate , setUpstate}) {
    const [selected, setSelected] = useState(`${item.category}`)
    const [editedcourse, setEditedcourse] = useState({
      hasdiscount: item.hasdiscount,
      isNew: item.isNew,
      category: item.category,
      title: item.title,
      price: item.price,
      time: item.time,
      teacher: item.teacher
    })
    const imgurl  = '/ephoto.jpg'
    const handledelete = () => {
        fetch(`http://localhost:3001/courses/${item.id}` ,{
            method : 'DELETE'}
        )
        setUpstate(!upstate)
    }
    const handlechange = (e) => {   
        setEditedcourse({...editedcourse , [e.target.name] : e.target.value})   
    }
    const handlesubmit = () =>{
        if(item.title && item.price && item.teacher && item.time !== "") {
            fetch(`http://localhost:3001/courses/${item.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(editedcourse),
            }).then(alert('تغییرات ثبت شد'))
            setUpstate(!upstate)
         }
        else {
            alert (`لطفا تمام مقادیر را وارد کنید`)
        }
        
    }
    const selectchange = (e)=>{
        setSelected(`${e.target.value}`)
        setEditedcourse({...editedcourse , [e.target.name] : e.target.value})
    }
    const boxchange = (e) =>{
        setEditedcourse({...editedcourse , [e.target.name] : e.target.checked})
    }
  return (
    <div className='border shadow text-right flex flex-col gap-2 p-2 bg-gray-300 rounded'>
        <img className='rounded' src={imgurl} alt="" />
        <div >عنوان دوره  <input onChange={handlechange} name='title'  className='text-right border-2 border-black rounded' type="text" defaultValue={item.title} /></div>
        <div>قیمت دوره  <input onChange={handlechange} name='price' className='text-right border-2 border-black rounded' type="text" defaultValue={item.price} /></div>
        <h2>مدت زمان دوره <input onChange={handlechange} name='time' className='text-right border-2 border-black rounded' type="text" defaultValue={item.time} /> </h2>
        <h2>مدرس دوره  <input onChange={handlechange} name='teacher' className='text-right border-2 border-black rounded' type="text" defaultValue={item.teacher} /> </h2>
        <div>
            دسته بندی
               <select onChange={selectchange}  value={selected}  className='border-2 border-gray-400 rounded w-52 py-2 text-right ' name="category" id="">
                   <option value="vocab">لغت</option>
                    <option value="grammer">گرامر</option>
                    <option value="speaking">مکالمه</option>
                </select>
        </div>
        <div>
            <label className='mr-2'>تخفیف دار</label>
            <input name='hasdiscount' onChange={boxchange}  type="checkbox" defaultChecked={item.hasdiscount}/>
            <br />
            <label className='mr-2'>افزودن به دوره های جدید</label>
            <input name='isNew'  onChange={boxchange}  type="checkbox" defaultChecked={item.isNew}/>
        </div>
        
        <button onClick={handlesubmit} className='bg-yellow-500 text-white rounded py-2'>ثبت ویرایش</button>
        <button onClick={handledelete} className='bg-red-600 text-white rounded py-2'>حذف دوره</button>
    </div>
  )
}

export default Adminlessons