import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination'; 

import { FreeMode, Pagination } from 'swiper/modules';
 
const Partnership = () => {
    return (
        <Swiper
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='lg:w-[100px] w-[50px] mx-auto flex items-center gap-2 h-[100px]'>
                    <img src="https://i.ibb.co/XWptrcR/fonterra.png" alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='lg:w-[100px] w-[50px] mx-auto flex items-center gap-2 h-[100px]'>
                    <img src="https://i.ibb.co/9NW752R/yanmar.png" alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='lg:w-[100px] w-[50px] mx-auto flex items-center gap-2 h-[100px]'>
                    <img src="https://i.ibb.co/gZHFWB6/usaid.png" alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='lg:w-[100px] w-[50px] mx-auto flex items-center gap-2 h-[100px]'>
                    <img src="https://i.ibb.co/rmF79HL/yamaha.png" alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='lg:w-[100px] w-[50px] mx-auto flex items-center gap-2 h-[100px]'>
                    <img src="https://i.ibb.co/PFXQZp1/sanofi.png" alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='lg:w-[100px] w-[50px] mx-auto flex items-center gap-2 h-[100px]'>
                    <img src="https://i.ibb.co/9NW752R/yanmar.png" alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='lg:w-[100px] w-[50px] mx-auto flex items-center gap-2 h-[100px]'>
                    <img src="https://i.ibb.co/gZHFWB6/usaid.png" alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='lg:w-[100px] w-[50px] mx-auto flex items-center gap-2 h-[100px]'>
                    <img src="https://i.ibb.co/rmF79HL/yamaha.png" alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Partnership;
