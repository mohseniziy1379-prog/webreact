import { createContext, useEffect, useState } from "react";

export let NewContext = createContext()

export function AppDataProvider({children}){
    const [isadmin, setIsadmin] = useState(JSON.parse(localStorage.getItem('isadmin')))
    const [islogin, setIslogin] = useState(JSON.parse(localStorage.getItem('islogin')))
    const [cartitems, setCartitems] = useState(JSON.parse(localStorage.getItem('cartitem')))
    useEffect(() => {
        localStorage.setItem('cartitem' , JSON.stringify(cartitems))
      }, [cartitems])
    return (
        <NewContext.Provider value={{cartitems,setCartitems,islogin,setIslogin ,isadmin , setIsadmin}}>
            {children}
        </NewContext.Provider>
    )
}