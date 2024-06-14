import { LOGO_URL } from "../utils/constants";
const Header=()=>{
    return (
     <div className="flex justify-between shadow-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  md:h-36 h-24 w-full items-center">
        <div className="mx-0 md:mx-0">
              <img className=" mx-12 w-36 md:mx-16 " src={LOGO_URL} alt="logo" />
        </div>
        <div className="p-4 m-4 mx-32 my-8">
            <ul className="flex">
            <li className="md:px-4 text-white">Online Status
                    </li>
                    <li className="md:px-4 px-2 text-white">Home</li>
                    <li className="md:px-4 px-2 text-white">About Us</li>
                    <li className="md:px-4 px-2 text-white">Contact Us</li> 
            </ul>
        </div>
    </div>      
    )
}
export default Header;