"use client";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function CatalogSwiperSection() {

    return (
        <div className="py-8 lg:py-28">
            <div className="container grid pb-8 lg:grid-cols-2">
                <div className="text-left ">
                    <h1 className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">Modern machinery</h1>
                </div>
                <div>
                    <h2 className="pb-6 text-xl font-bold tracking-wider"> Neocene Solutions</h2>
                    <div className="grid grid-cols-2 text-gray-500 gap-x-8">
                        <div>
                            <p>
                            Neocene Solutions is dedicated to delivering an extensive array of services tailored to meet your specific needs.

                            </p>
                        </div>
                        <div>
                            <p>
                            Our offerings span from personalized one-on-one consultations, ensuring a deep understanding of your unique requirements,
                            </p>
                            <a href="" className="inline-flex items-center pt-4 text-lg font-bold text-black underline">View Gallery <TbArrowUpRight /> </a>
                        </div>
                    </div>
                </div>
            </div>

            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}

            >
                <SwiperSlide>
                    <Image src="https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}