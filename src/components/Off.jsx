import React, { useEffect, useState } from 'react'
import Lessonoff from './Lessonoff' ;
import { Link } from 'react-router-dom';


function Off() {
  const [lessons, setLessons] = useState([])
  useEffect(() => {
        fetch("http://localhost:3001/courses")
          .then(res => res.json())
          .then(data =>setLessons(data))
        }, [])
  return (
    <div className='mx-auto my-10 w-9/12 bg-red-500 p-2 rounded'>
        <div className='rounded p-2 '>
            <div className='text-white text-right mb-2'>تخفیف های ویژه</div>
            <div className='flex gap-3 overflow-scroll'>
              
                {
                  lessons.filter(item=>item.hasdiscount === true).map((item)=>(
                    <Link to={`/Lessonpage/${item.id}`}>
                      <Lessonoff key={item.id} item ={item}/>
                    </Link>
                  ))
                }
            </div>
        </div>
    </div>
  )
}

export default Off