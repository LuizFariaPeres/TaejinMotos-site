import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";



export default function Carrousel(){
    const slides = [
        {id:1, title: 'Slide1', image: 'https://placeholder.com'},
        {id:2, title: 'Slide2', image: 'https://placeholder.com'},
        {id:3, title: 'Slide3', image: 'https://placeholder.com'},
    ]
    return(
        <div className="Swipperconteiner">
            <Swiper
            modules={[Navigation,Pagination,Autoplay]}
            spaceBetween={100}
            slidesPerView={1}
            navigation
            pagination={{clickable:true}}
            autoplay={{delay:3000, disableOnInteraction:false}}
            loop={true}
            >
                {slides.map((item)=>(
                    <SwiperSlide key={item.id}>
                        <img className="swiperImg" src={item.image} alt={item.title}></img>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}