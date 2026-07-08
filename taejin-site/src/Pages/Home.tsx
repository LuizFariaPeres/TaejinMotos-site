import Header from "../Components/Header";
import type { Iteminfo } from "../Types/Item";
import ItemCard from "../Components/ItemCard";
import Footer from "../Components/Footer";
import { useCartStore } from "../Store/useCartStore";

//imagens
import t300xConcerpt from '../assets/t300xConcerpt.png'
import t300x from '../assets/t300x.png'

//swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export default function Home(){

    const motors = useCartStore((state) => (state.sporting)) 

   
    const handleAddToCart = useCartStore((state) => state.addToCart)

    return(
        <div className="flex flex-col w-full">
            <Header/>
            <div className="flex flex-col w-full gap-10 bg-[#858483]">
                <div className="flex relative p-5 justify-between items-center bg-[#858483]">
                    <p className="absolute top-[45%] left-[10%] right-[50%] text-3xl">T-300x é uma moto para quem quer esportividade e conforto</p>
                    <button className="h-15 w-30 rounded-md bg-[#ec172e] text-[#ffffff] hover:bg-[#6b1d22] 
                    self-end justify-self-center transition delay-75 duration-300 ease-in-out">Saiba Mais</button>
                    <img className="justify-end-safe w-137.5 mask-x-from-90% mask-y-from-90%" src={t300x} alt="moto" />
                </div>
                <div className="w-screen flex px-8">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={10}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1440: {
                                slidesPerView: 4,
                            },
                            2000:{
                                slidesPerView:5,
                            }
                        }}
                        autoplay={{delay:5000, disableOnInteraction:false}}
                        loop={true}
                    >
                        {motors.map((item) =>
                        (
                            <SwiperSlide key={item._id} className="flex justify-items-center p-8">
                                <ItemCard info={item} onClick={handleAddToCart}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='w-full h-180 flex items-center justify-center'>
                    <img className="w-full h-full" src={t300xConcerpt} alt="moto-concerpt" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}