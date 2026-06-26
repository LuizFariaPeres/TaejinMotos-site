import { Routes, Route, Link } from "react-router-dom"
import Home from "../Pages/Home"
import Produts from "../Pages/Produts"
import Sale from "../Pages/Sale"

export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/produts" element={<Produts/>}/>
            <Route path="/sale" element={<Sale/>}/>
        </Routes>
    )
}