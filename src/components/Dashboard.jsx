import React, { useContext, useEffect, useState } from 'react'
import { NewContext } from '../NewContext'
import Adminlessons from './Adminlessons';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [upstate, setUpstate] = useState(false)
    const [items, setItems] = useState([])
    const {isadmin , setIsadmin} = useContext(NewContext)
    const [admin, setAdmin] = useState([])
    const [value, setValue] = useState({})
    useEffect(() => {
          fetch("http://localhost:3001/admins")
              .then(res => res.json())
              .then(data =>setAdmin(data))
        }, [])

    useEffect(() => {
          fetch("http://localhost:3001/courses")
            .then(res => res.json())
            .then(data =>{
              setItems(data)
            })
          }, [upstate])


    const handlechange = (e) =>{
        setValue({...value , [e.target.name] : e.target.value})
    }
    const handleadmin = () =>{
       if(admin[0].username === value.username && admin[0].password === value.password){
        setIsadmin(true)
        localStorage.setItem('isadmin', true)
       }
       else {
        alert("نام کاربری یا رمز عبور اشتباه است")
       }
       
    }
    const handlelogout = () =>{
        setIsadmin(false)
        localStorage.removeItem('isadmin')
    }
  return (
    <>
    {
        isadmin ? (
            <>
            <div className='flex justify-between items-center w-9/12 mx-auto p-2'>
                <button onClick={handlelogout} className=' bg-red-600 rounded text-white px-5 py-2'>خروج از حساب</button>
                <Link to={'/dashboard/addcourse'}><div className=' bg-red-600 rounded text-white px-5 py-2'> افزودن دوره جدید </div></Link>
            </div>
            
        <div className='w-9/12 mx-auto grid grid-cols-4 gap-2 p-2'>
            {
                items.map((item)=>(
                    <Adminlessons key={item.id} upstate={upstate} setUpstate={setUpstate} item={item}/>
                ))
            }
        </div>
            </>

        )
        : 
        (
            <div className='flex flex-col gap-3 justify-center items-center bg-slate-400 p-2 h-72 w-1/2 mx-auto'>
                <input onChange={handlechange} name='username' className='border-black border-2 rounded text-right w-1/2 p-2' type="text"  placeholder='نام کاربری'/>
                <input onChange={handlechange} name='password' className='border-black border-2 rounded text-right w-1/2 p-2' type="text"  placeholder='رمز عبور'/>
                <button onClick={handleadmin} className='bg-slate-700 text-white rounded py-2 px-20'>ورود</button>
            </div>
        )
    }
    </>
  )
}

export default Dashboard