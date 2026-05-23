import React, { useEffect, useState } from 'react'
import Alllessons from './Alllessons'
import Footer from './Footer'
import { Link } from 'react-router-dom'


 function Courselist() {
    const [items, setItems] = useState([])
    const [newlessons, setNewlessons] = useState([])
    useEffect(() => {
      fetch("http://localhost:3001/courses")
        .then(res => res.json())
        .then(data =>{
          setItems(data)
          setNewlessons(data)
        })
      }, [])
      let category
      function handlechange (e) {
       if (e.target.value === 'all'){
        setNewlessons(items)
        return
       }
       category = e.target.value 
       setNewlessons(items.filter (item => item.category === category))
      }
  return (
    <div className='flex flex-col'>
      <div className='w-9/12 mx-auto text-center mb-3'>
        <select  onChange={(e)=>handlechange(e)}  className='border-2 border-gray-400 rounded w-52 py-2 text-right ' name="" id="">
          <option value="all">همه</option>
          <option value="vocab">لغت</option>
          <option value="grammer">گرامر</option>
          <option value="speaking">مکالمه</option>
        </select>
      </div>

      <div className='sm:w-9/12 w-7/12 mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 mb-20'>
        {
           newlessons.map((item)=>(
              <Link to={`/lessonpage/${item.id}`} key={item.id}>
                <Alllessons item={item}  /> 
              </Link>
          ))
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Courselist