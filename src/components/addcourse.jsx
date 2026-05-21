import React, { useContext, useState } from 'react'
import { NewContext } from '../NewContext'
import { Link, Navigate } from 'react-router-dom'

function Addcourse() {
    const {isadmin , setIsadmin} = useContext(NewContext)
    const [hasdiscount,setHasdiscount ] = useState(false)
    const [isNew, setIsNew] = useState(false)
    const [course, setCourse] = useState({
      hasdiscount : hasdiscount ,
      isNew : isNew ,
      category : "vocab"
    })
    const haschange = (e)=>{
        setHasdiscount(!hasdiscount)
        setCourse({...course , hasdiscount : !hasdiscount})
    }
    const isnewchange = (e)=>{
        setIsNew(!isNew)
        setCourse({...course , isNew : !isNew})
    }
    const handlechange = (e) =>{
        setCourse({...course , [e.target.name] : e.target.value})
        
    }
    const handlesubmit = ()=>{
         if(course.title && course.price && course.teacher && course.time !== "") {
            fetch('http://localhost:3001/courses', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(course),
            }).then(alert('دوره ثبت شد'))
         }
        else {
            alert (`لطفا تمام مقادیر را وارد کنید`)
        }
        
        
    }
  return (
    <>

    {
        isadmin ? (
        <>
        <Link to={'/dashboard'}><div className='w-9/12 mx-auto mb-5'><span className='bg-red-600 text-white rounded p-3'>بازگشت به داشبورد</span></div></Link>
        <div className='w-1/3 mx-auto'>
            <div className='border shadow text-right flex flex-col gap-2 p-2 bg-gray-300 rounded'>
                <div > <input  onChange={(e)=>handlechange(e)}  name='title' className='text-right border-2 border-black rounded' type="text"  />  : عنوان دوره </div>
                <div> <input onChange={(e)=>handlechange(e)} name='price' className='text-right border-2 border-black rounded' type="text" /> : قیمت دوره  </div>
                <h2> <input onChange={(e)=>handlechange(e)} name='time' className='text-right border-2 border-black rounded' type="text"  /> : مدت زمان دوره  </h2>
                <h2> <input onChange={(e)=>handlechange(e)} name='teacher' className='text-right border-2 border-black rounded' type="text"  /> : مدرس دوره  </h2>
                <div>
                    <select  onChange={(e)=>handlechange(e)}  className='border-2 border-gray-400 rounded w-52 py-2 text-right ' name="category" id="">
                        <option value="vocab">لغت</option>
                        <option value="grammer">گرامر</option>
                        <option value="speaking">مکالمه</option>
                    </select>
                    <span className='ml-2'>انتخاب دسته بندی</span>
                </div>
                <div>
                    <label className='mr-2'>تخفیف دار</label>
                    <input onChange={haschange} checked={hasdiscount} name='hasdiscount' type="checkbox" />
                    <br />
                    <label className='mr-2'>افزودن به دوره های جدید</label>
                    <input onChange={isnewchange} checked={isNew} name='isNew'  type="checkbox" />
                </div>
                
                <button onClick={handlesubmit} className='bg-green-500 text-white rounded py-2 w-2/3 mx-auto'>ثبت دوره</button>
            </div>
        </div> 
        </>

    ): <Navigate to={'/dashboard'}/>
    }
    </>
  )
}

export default Addcourse