import Header from "../Components/Header"
import { useCartStore } from "../Store/useCartStore"
import Footer from "../Components/Footer"
import ItemCard from "../Components/ItemCard"


export default function Produts(){

    const sporting = useCartStore((state) => state.sporting)
    const scooters = useCartStore((state) => state.scooters)
    const trail = useCartStore((state) => state.trail)

    const addToCart =  useCartStore((state_ => state_.addToCart))


    return(
        <div className="min-w-screen h-full bg-[#858483]">
            <Header/>
            <div className="flex flex-col justify-center items-center gap-4 p-4 m-4">
                <h2 className='text-center text-xl font-bold'>T-Sporting Line</h2>
                <div className="flex flex-wrap justify-center items-center gap-12 p-4 m-10">
                    {sporting.map((produts) => (
                        <div key={produts._id} className="flex justify-center items-center">
                            <ItemCard info={produts}  onClick={addToCart}/>
                        </div>
                    ))}
                </div>
                <h2 className='text-center text-xl font-bold'>T-Scooter Line</h2>
                <div className="flex flex-wrap justify-center items-center gap-4 p-4 m-4">
                    {scooters.map((produts)=>(
                        <div key={produts._id} className="flex justify-center items-center">
                            <ItemCard info={produts} onClick={addToCart}/>
                        </div>
                    ))}
                </div>
                <h2 className='text-center text-xl font-bold'>T-Trail Line</h2>
                <div className="flex flex-wrap justify-center items-center gap-4 p-4 m-4">
                    {trail.map((produts) => (
                        <div key={produts._id} className="flex justify-center items-center">
                            <ItemCard info={produts} onClick={addToCart}/>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}