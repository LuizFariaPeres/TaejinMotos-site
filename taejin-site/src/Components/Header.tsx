import { Link } from "react-router-dom";

//css
import '../assets/Css/Header.css'

export default function Header(){
    return(
        <div className="Header">
            <Link className="Link" to='/'>Home</Link>
            <Link className="Link" to='/produts'>Produts</Link>
            <Link className="Link" to='/sale'>Sale</Link>
        </div>
    )
}