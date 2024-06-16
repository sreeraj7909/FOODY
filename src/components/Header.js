import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useNetworkStatus from "../utils/useNetworkStatus";
const Header=()=>{
    const onlineStatus=useNetworkStatus()
    return (
     <div className="flex  justify-between shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500  md:h-36 h-20 w-screen items-center">
        <div className="mx-0 md:mx-0">
              <img className=" mx-12 w-36 md:mx-16 " src={LOGO_URL} alt="logo" />
        </div>
        <div className="p-4 m-4 mx-32 my-8">
            <ul className="flex">
            <li className="-mt-4"> <input className="p-2 m-2 mx-16 rounded-xl w-3/4" type="text" placeholder="Serach"></input></li>
            <li><button className="bg-slate-900">Search</button></li>
            <li className="md:px-4 text-white">Online Status:{onlineStatus?"🟢":"🔴"}</li>
                    <li className="md:px-4 px-2 text-white"><Link to={"/"}>Home</Link></li>
                    <li className="md:px-4 px-2 text-white"><Link to={"/about"}>About Us</Link></li>
                    <li className="md:px-4 px-2 text-white">Contact Us</li> 
            </ul>
        </div>
    </div>      
    )
}
export default Header;