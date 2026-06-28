import Header from "../Components/Header";
import type { Iteminfo } from "../Types/Item";
import ItemCard from "../Components/ItemCard";
import Footer from "../Components/Footer";

//swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Home(){

    const Bikes: Iteminfo [] = [
        {
            _id: 1,
            title: 'T-300X',
            model: 'T-sporting',
            price: 13000,
            image: 'https://placehold.co/500'
        },
        {
            _id: 2,
            title: 'T-440X',
            model: 'T-sporting',
            price: 20000,
            image: 'https://placehold.co/500'
        },
        {
            _id: 3,
            title: 'T-300X',
            model: 'T-sporting',
            price: 13000,
            image: 'https://placehold.co/500'
        },
        {
            _id: 4,
            title: 'T-300X',
            model: 'T-sporting',
            price: 13000,
            image: 'https://placehold.co/500'
        },
        {
            _id: 5,
            title: 'T-300X',
            model: 'T-sporting',
            price: 13000,
            image: 'https://placehold.co/500'
        },            
    ]
        
    
    return(
        <div className="flex flex-col w-full">
            <Header/>
            <div className="flex flex-col w-full gap-10 bg-[#aaf5f2]">
                <div className="flex p-5 justify-between items-center bg-[#ffff]">
                    <button className="h-15 w-30 rounded-md bg-[#eb0000] text-[#ffffff] self-end justify-self-center">Saiba Mais</button>
                    <img className="justify-end-safe" src="https://placehold.co/500" alt="moto" />
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
                        autoplay={{delay:3000, disableOnInteraction:false}}
                        loop={true}
                    >
                        {Bikes.map((item) =>
                        (
                            <SwiperSlide key={item._id} className="flex justify-items-center">
                                <ItemCard info={item}/>
                            </SwiperSlide>
                            
                        ))}
                    </Swiper>
                </div>
                <div className="bg-indigo-700 w-full h-96">

                </div>
            </div>
            <Footer/>
        </div>
    )
}