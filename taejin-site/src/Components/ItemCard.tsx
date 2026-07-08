import { useCartStore } from "../Store/useCartStore";
import type { Iteminfo } from "../Types/Item"


type Props ={
    info: Iteminfo;
    onClick?: (item: Iteminfo) => void;
}

export default function ItemCard({info, onClick}: Props){

    const addToCart = useCartStore((state) => state.addToCart);
    

    return(
        <div className="flex flex-col justify-center items-center gap-2 w-72 h-96 hover:scale-105 transition-transform duration-300" >
            <h2>{info.title}</h2>
            <img className="w-full h-full" src={info.image} alt={info.title}/>
            <p>A partir de R$ {info.price.toFixed(2)}</p><p>{info.model}</p>
            <button className="bg-blue-50 p-2 rounded-2xl hover:bg-[#ec172e] hover:text-white" onClick={()=>{addToCart(info)}}>Adicionar</button>
           
        </div>
    )
}
