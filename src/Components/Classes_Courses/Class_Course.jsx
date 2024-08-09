import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Class_Course = () => {
    return (
        <div>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}

                breakpoints={{
                    375: {
                        width: 300,
                        slidesPerView: 1,
                    },
                }}
            >
                <SwiperSlide>
                    <div className='h-[350px] w-[300px]  mt-2 mb-2  bg-white mx-auto'>
                        <img className='h-[200px] w-[300px]' src="https://i.ibb.co/8g7BKxz/web-developer.jpg" alt="" />
                        <div className='mt-3 p-2 space-y-3'>
                            <h2 className='text-[15px] font-bold'>Web Development Advance Course</h2>
                            <div className='flex items-center gap-5'>
                                <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Price: </span>$500</h2>
                                <h2 className='text-[15px] font-medium mr-8'><span className='font-bold'>Total Enroll:</span> 100</h2>
                            </div>
                            <Link to="/view">
                                <button className='btn bg-primary w-full text-white mt-2'>Enroll</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[350px] w-[300px]  mt-2 mb-2  bg-white mx-auto'>
                        <img className='h-[200px] w-[300px]' src="https://i.ibb.co/8g7BKxz/web-developer.jpg" alt="" />
                        <div className='mt-3 p-2 space-y-3'>
                            <h2 className='text-[15px] font-bold'>Web Development Advance Course</h2>
                            <div className='flex items-center gap-5'>
                                <h2 className='text-[15px] font-medium mr-14'><span className='font-bold'>Price: </span>$500</h2>
                                <h2 className='text-[15px] font-medium mr-14'><span className='font-bold'>Enroll:</span> 100</h2>
                            </div>
                            <button className='btn bg-primary w-full text-white'>Course Now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[350px] w-[300px]  mt-2 mb-2  bg-white mx-auto'>
                        <img className='h-[200px] w-[300px]' src="https://i.ibb.co/8g7BKxz/web-developer.jpg" alt="" />
                        <div className='mt-3 p-2 space-y-3'>
                            <h2 className='text-[15px] font-bold'>Web Development Advance Course</h2>
                            <div className='flex items-center gap-5'>
                                <h2 className='text-[15px] font-medium mr-14'><span className='font-bold'>Price: </span>$500</h2>
                                <h2 className='text-[15px] font-medium mr-14'><span className='font-bold'>Enroll:</span> 100</h2>
                            </div>
                            <button className='btn bg-primary w-full text-white'>Course Now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[350px] w-[300px]  mt-2 mb-2  bg-white mx-auto'>
                        <img className='h-[200px] w-[300px]' src="https://i.ibb.co/8g7BKxz/web-developer.jpg" alt="" />
                        <div className='mt-3 p-2 space-y-3'>
                            <h2 className='text-[15px] font-bold'>Web Development Advance Course</h2>
                            <div className='flex items-center gap-5'>
                                <h2 className='text-[15px] font-medium mr-14'><span className='font-bold'>Price: </span>$500</h2>
                                <h2 className='text-[15px] font-medium mr-14'><span className='font-bold'>Enroll:</span> 100</h2>
                            </div>
                            <button className='btn bg-primary w-full text-white'>Course Now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[350px] w-[300px]  mt-2 mb-2  bg-white mx-auto'>
                        <img className='h-[200px] w-[300px]' src="https://i.ibb.co/8g7BKxz/web-developer.jpg" alt="" />
                        <div className='mt-3 p-2 space-y-3'>
                            <h2 className='text-[15px] font-bold'>Web Development Advance Course</h2>
                            <div className='flex items-center gap-5'>
                                <h2 className='text-[15px] font-medium mr-14'><span className='font-bold'>Price: </span>$500</h2>
                                <h2 className='text-[15px] font-medium mr-14'><span className='font-bold'>Enroll:</span> 100</h2>
                            </div>
                            <button className='btn bg-primary w-full text-white'>Course Now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[350px] w-[300px]  mt-2 mb-2  bg-white mx-auto'>
                        <img className='h-[200px] w-[300px]' src="https://i.ibb.co/8g7BKxz/web-developer.jpg" alt="" />
                        <div className='mt-3 p-2 space-y-3'>
                            <h2 className='text-[15px] font-bold'>Web Development Advance Course</h2>
                            <div className='flex items-center gap-5'>
                                <h2 className='text-[15px] font-medium mr-14'><span className='font-bold'>Price: </span>$500</h2>
                                <h2 className='text-[15px] font-medium mr-14'><span className='font-bold'>Enroll:</span> 100</h2>
                            </div>
                            <button className='btn bg-primary w-full text-white'>Course Now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[350px] w-[300px]  mt-2 mb-2  bg-white mx-auto'>
                        <img className='h-[200px] w-[300px]' src="https://i.ibb.co/8g7BKxz/web-developer.jpg" alt="" />
                        <div className='mt-3 p-2 space-y-3'>
                            <h2 className='text-[15px] font-bold'>Web Development Advance Course</h2>
                            <div className='flex items-center gap-5'>
                                <h2 className='text-[15px] font-medium mr-14'><span className='font-bold'>Price: </span>$500</h2>
                                <h2 className='text-[15px] font-medium mr-14'><span className='font-bold'>Enroll:</span> 100</h2>
                            </div>
                            <button className='btn bg-primary w-full text-white'>Course Now</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Class_Course;