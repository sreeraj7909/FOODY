import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Error from "./components/Error"
import Footer from "./components/Footer"
import RestroMenu from "./components/Restromenu"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
const Applayout=()=>{
    return(
        <div>
           <Header/>
           <Outlet/>
           <Footer/>
        </div>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            { 
             path:"/",
             element:<Body/>   
             
            },
            {
                path:"/restaurent/:resId",
                element:<RestroMenu/>
            }
            
           
        ],
        errorElement:<Error/>
        

    },
    
])



const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)