import {LOGO_URL} from "../utils/constants"
const Header=()=>{
    return (
     <div>
        <div>
            <img src={LOGO_URL} alt="logo"/>
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>      
    )
}
export default Header;