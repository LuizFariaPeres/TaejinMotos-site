import { Link } from "react-router-dom";

//css

export default function Header(){
    return(
        <div className="flex w-full h-20 justify-evenly items-center bg-[#fff]">
            <Link className="text-[#888787] hover:text-[#6a1515]" to='/'>Home</Link>
            <Link className="text-[#888787]" to='/produts'>Produts</Link>
            <Link className="text-[#888787]" to='/sale'>Sale</Link>
        </div>
    )
}