import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";


const RestroMenu=()=>{
      const [resMenu,setResMenu]=useState(null)
      const {resId}=useParams()
    useEffect(()=>{
       fetchMenu()
    },[])

    const fetchMenu=async ()=>{
        const data= await fetch(MENU_URL+resId)
        const json=await data.json()
        console.log(json)
        setResMenu(json)
    }
    
    if(resMenu==null) return null;


    const {name,cuisines,locality}=resMenu?.data?.cards[2]?.card?.card?.info
    return(
        <div>
            <h1>{name}</h1>
            <h1>{cuisines.join(",")}</h1>
            <h1>{locality}</h1>
        </div>
    )
}

export default RestroMenu;