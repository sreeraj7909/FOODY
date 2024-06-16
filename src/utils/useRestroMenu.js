import { useEffect, useState } from "react"
import { MENU_URL } from "./constants"
import { useParams } from "react-router-dom"


const useGetRestroMenu=()=>{
    const {resId}=useParams()
    const [resMenu,setResMenu]=useState(null)
    useEffect(()=>{
       getData()
    },[])

    const getData=async ()=>{
        const data=await fetch(MENU_URL+resId)
        const json=await data.json()
        setResMenu(json)
    }

 return resMenu
}

export default useGetRestroMenu