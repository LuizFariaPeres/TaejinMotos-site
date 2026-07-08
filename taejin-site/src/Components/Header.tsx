import { Link, useLocation } from "react-router-dom";

//image
import logo from '../assets/taejinLogo.png'

export default function Header(){
    const location = useLocation();
 

    return(
        <div className="flex relative w-full h-20 justify-evenly items-center bg-[#242424]">
            <img className="absolute left-20 top-50% size-25" src={logo} alt="logo-taejin" />
            <Link className={location.pathname=='/'?
                'text-[#888787] border-b-2 border-[#ec172e] hover:text-[#ec172e] transition delay-150 duration-300 ease-in-out' :
                'text-[#888787] hover:text-[#ec172e] transition delay-150 duration-300 ease-in-out'} 
                to='/'>Home</Link>
            <Link className={location.pathname=='/produts'?
                'text-[#888787] border-b-2 border-[#ec172e] hover:text-[#ec172e] transition delay-150 duration-300 ease-in-out':
                'text-[#888787] hover:text-[#ec172e] transition delay-150 duration-300 ease-in-out'
            } to='/produts'>Produts</Link>
            <Link className={location.pathname=='/sale'?
                'text-[#888787] border-b-2 border-[#ec172e] hover:text-[#ec172e] transition delay-150 duration-300 ease-in-out':
                'text-[#888787] hover:text-[#ec172e] transition delay-150 duration-300 ease-in-out'
                } to='/sale'>Sale</Link>
        </div>
    )
}