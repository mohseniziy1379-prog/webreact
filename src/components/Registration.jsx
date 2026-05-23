import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { NewContext } from '../NewContext'

function Registration() {
    const {islogin , setIslogin} = useContext(NewContext)
    const [member, setMember] = useState(true)
    const [customers, setCustomers] = useState([])
    const [newcustomer, setnewcustomer] = useState({}) ; 
    const [oldcustomer, setOldcustomer] = useState({})
    useEffect(() => {
      localStorage.setItem('islogin' , islogin)
    }, [islogin])
    
    useEffect(() => {
      fetch("http://localhost:3001/customers")
          .then(res => res.json())
          .then(data =>setCustomers(data))
    }, [member])
    
    function changehandler(e) {
       setnewcustomer({...newcustomer , [e.target.id] : e.target.value})
       
    }
    function changehandler1(e) {
       setOldcustomer({...oldcustomer , [e.target.id] : e.target.value})
    }
    function loginweb (){
        
        if(customers.find((mem)=>mem.phone === oldcustomer.phone1 && mem.password === oldcustomer.password1 )){
            alert ('شما وارد شدید')
            setIslogin(true)
            

        }
        else {
            alert("نام کاربری یا رمز عبور اشتباه است")
        }
        
        
    }
    function addcustomer (){
           if (newcustomer.phone && newcustomer.password !== undefined  ) {
             if(newcustomer.phone && newcustomer.password !== ''){

              if(customers.find((mem)=>mem.phone === newcustomer.phone )) {
               alert("این شماره قبلا ثبت نام شده است لطفا وارد شوید ")
            }
               else {
                    fetch('http://localhost:3001/customers', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newcustomer),
                        })
                        alert("شما ثبت نام شدید")
                        setnewcustomer({})
                    }  
            }
            
            else{
                alert("لطفا شماره همراه یا رمز عبور را وارد کنید")
            }
            
           }
           else {
            alert("لطفا شماره همراه یا رمز عبور را وارد کنید")
           }
        
    }
    const handlelogout = () => {
        localStorage.removeItem('islogin')
        setIslogin(false)
    }
  return (
    <div className='flex flex-col h-[calc(100vh-137px)]'>
        {
            islogin ?(
            <div className='flex justify-center items-center flex-col gap-10 h-72'>
                <h2 className=' '>شما وارد شدید</h2>
                <button onClick={handlelogout} className='bg-red-600 text-white rounded p-2 '>خروج از حساب کاربری</button>
            </div>
            ) : (<div className='w-3/12 bg-slate-500 mx-auto rounded p-3'>
            <div className='flex gap-2'>
                    <div onClick={()=>setMember(true)} className={`w-1/2 bg-${member ? `white` : `slate-400`} rounded text-center text-${member ? `black` : `white`} py-2 cursor-pointer`}>ثبت نام</div>
                    <div onClick={()=>setMember(false)} className={`w-1/2 bg-${member ? `slate-400` : `white` } text-${member ? `white` : `black`} rounded text-center py-2 cursor-pointer`}>ورود</div>
            </div>
            {
                member ? (<div className='flex flex-col gap-8 mt-8'>
                <input onChange={changehandler} key='a'  id='phone' type="text" className='rounded text-right px-2 py-2' placeholder='شماره همراه' />
                <input onChange={changehandler} key='b'  id='password' type="text" className='rounded text-right px-2 py-2' placeholder='رمز عبور' />
                <button onClick={addcustomer} className='bg-white w-2/6 mx-auto rounded py-2'>ثبت نام</button>
            </div>) : (
                <div className='flex flex-col gap-8 mt-8'>
                        <input onChange={changehandler1} key='c'  id='phone1' type="text" className='rounded text-right px-2 py-2' placeholder='شماره همراه' />
                        <input onChange={changehandler1} key='d'  id='password1' type="text" className='rounded text-right px-2 py-2' placeholder='رمز عبور' />   
                        <button onClick={loginweb} className='bg-white w-2/6 mx-auto rounded py-2'>ورود</button>
                </div>
            )
            }
        </div>)
        }
        <Footer/>
    </div>
  )
}

export default Registration