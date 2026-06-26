import { Link } from "react-router-dom";

//css
import '../assets/Css/Header.css'

export default function Header(){
    return(
        <div className="HeaderContainer">
            <Link to='/'>Home</Link>
            <Link to='/produts'>Produts</Link>
            <Link to='/sale'>Sale</Link>
        </div>
    )
}