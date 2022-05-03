import React,  { createContext, useState } from "react"

const Usercontext = createContext()
const initialState = { id:1, name:'Miguel Angel', favoriteMovie:[1, 2]}
export const UserProvider = ({children})=>{
    const [user, setUser] = useState(initialState)
    const login = ()=>{
        setUser(initialState)
    }
    const logout = ()=>{
        setUser(null)
    }

    const data = {user, login, logout }
    return(
        <Usercontext.Provider value= {data}>
            {children}
        </Usercontext.Provider>
    )
}

export default Usercontext