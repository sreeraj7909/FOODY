import { useEffect, useState } from "react";
import Card from "./Card"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body=()=>{
    const [ListOfRestro,setListOfRestro]=useState([])
    const [filteredRestro,setFilteredRestro]=useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async ()=>{
        const data=await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING`)
        console.log(data)
        const json=await data.json()
        console.log(json)
        const cardList=json?.data?.cards
        const cards_id = "restaurant_grid_listing";
        if(cardList===undefined)return <Shimmer/>
        cardList.map((cards)=>{
            if(cards?.card?.card?.id === cards_id){
               const restaturents=cards?.card?.card?.gridElements?.infoWithStyle?.restaurants;
               console.log(restaturents)
               setListOfRestro(restaturents)
               setFilteredRestro(restaturents)
            }
        })  
    }
    if(ListOfRestro.length===0) return <Shimmer/>
    
    return(
        <div className="bg-black w-screen">
              <div className="justify-between">
                  <button className="rounded-lg bg-green-600 text-white p-2 m-2 md:mx-32 md:mt-8 mx-16" onClick={()=>{
                  setListOfRestro(ListOfRestro.filter(res=>res.info.avgRating>4))
                  }}>Top Rated Restorents</button>
               </div>
             <div className="flex flex-wrap mt-5">
                 {
                    ListOfRestro.map(restaurent=><Link key={restaurent?.info?.id} to={"/restaurent/"+restaurent?.info?.id}><Card  resData={restaurent} /></Link>)
                  
                 }
             </div>
        </div>
    )
}
{/* //<Link key={restaurent?.info?.id} to={"/restaurent/"+restaurent?.info?.id}> <Card  resData={restaurent}/></Link>) */}

export default Body;