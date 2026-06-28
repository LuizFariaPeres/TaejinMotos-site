import type { Iteminfo } from "../Types/Item"


type Props ={
    info: Iteminfo;
}

export default function ItemCard({info}: Props){
    return(
        <div className="w-72 h-96 bg-amber-400" >
            <h2>{info.title}</h2>
            <img src={info.image} alt={info.title}/>
            <p>{info.price}</p><p>{info.model}</p>
        </div>
    )
}
