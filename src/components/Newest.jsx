import React, { useEffect, useState } from 'react'
import LessonNew from './LessonNew';
import { Link } from 'react-router-dom';

function Newest() {
  const [lessons, setLessons] = useState([])
    useEffect(() => {
          fetch("http://localhost:3001/courses")
            .then(res => res.json())
            .then(data =>setLessons(data))
          }, [])
  return (
    <div className='mx-auto my-10 w-9/12 bg-slate-500 p-2 rounded'>
        <div className='  rounded p-2 '>
            <div className='text-white text-right mb-2'> جدید ترین دوره ها </div>
            <div className='flex gap-3 overflow-scroll'>
                {
                  lessons.filter(item=>item.isNew === true).map((item)=>(
                    <Link to={`/Lessonpage/${item.id}`}>
                      <LessonNew key={item.id} item ={item}/>
                    </Link>
                  ))
                }
            </div>
        </div>
    </div>
  )
}

export default Newest