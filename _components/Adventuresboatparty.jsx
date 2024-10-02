"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "@/styles/swiper.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Phone } from 'lucide-react';


const Adventuresboatparty = (props) => {

    const [scrollY, setScrollY] = useState(0);

    const [selectedKeys, setSelectedKeys] = useState(new Set(["0"]));

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scaleValue = 1 + scrollY * 0.0003;
    return (
        <>
            <div className=' w-full h-auto flex flex-col '>
                <div className="relative h-[80vh] lg:h-screen w-full overflow-hidden">
                    <div
                        className="absolute inset-0 transition-transform duration-500 ease-out"
                        style={{
                            transform: `scale(${scaleValue})`,
                            backgroundImage: `url(${props.bgimage.image})`,
                            backgroundAttachment: 'fixed',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                    </div>
                    <div className='absolute inset-0 flex justify-center items-center'>
                        <h1 className='text-3xl text-center md:text-7xl lg:text-7xl text-white font-extrabold'>{props.title}</h1>
                    </div>
                </div>
                <div className='w-full bg-[#C0DFFF] py-8'>
                    {props.breadcrump && props.breadcrump.map((e, i) => (
                        <div key={i}>
                            {e.breadcrumppara}
                        </div>
                    ))}
                </div>
                <div className='w-full pb-8 pt-14 md:pb-3 md:py-16'>
                    <div className='w-[95%] h-auto flex-col md:w-[90%] m-auto lg:h-96 flex justify-between lg:flex-row gap-6'>
                        <div className='w-full lg:w-[60%] relative'>
                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true} // Enable navigation
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {props.slides[0].image.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden">
                                            <Image
                                                src={image}
                                                alt={`slide ${index + 1}`}
                                                fill
                                                style={{
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className='w-full lg:w-[35%]'>
                            {props.sectiontwo && props.sectiontwo.map((e, i) => (
                                <div key={i}>
                                    {e.sectiontwopara}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-full py-4'>
                    {props.description && props.description.map((e, i) => (
                        <div key={i}>
                            {e.descriptionone}
                        </div>
                    ))}
                </div>

                {props.title === "Adventures Boat Party" || props.title === "Dinner Cruise" ? (
                    <div className='w-full py-8'>
                        <div className='w-[95%] md:w-[90%] m-auto'>
                            {props.inclusion && props.inclusion.map((e, i) => (
                                <div key={i}>
                                    {e.inclusionpara}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : ""}
            </div>

            <div className='w-full py-4'>
                <div className='w-[95%] md:w-[90%] m-auto'>

                    {props.destination && props.destination.map((e, i) => (
                        <div key={i} >
                            {e.destinationpara}
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full py-8'>
                <div className='w-[95%] md:w-[90%] m-auto'>
                    <Accordion selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys} selectionMode="multiple">
                        {props.accordionData &&
                            props.accordionData.map((item, index) => (
                                <AccordionItem
                                    key={String(index)}
                                    subtitle="click for more info"
                                    title={<span className="text-xl md:text-3xl font-semibold text-[#003776]">{item.title}</span>}
                                >
                                    <div>
                                        {item.title === "Services" ? (
                                            <>
                                                <p className="mb-3">{item.price}</p>
                                            </>
                                        ) : (
                                            <>
                                                {item.description}
                                            </>
                                        )}
                                    </div>
                                </AccordionItem>
                            ))}
                    </Accordion>
                </div>
            </div>



            <section className="pt-14 pb-14 bg-[#c0dfff] text-[#003776] text-center">
                <div className="max-w-6xl mx-auto flex lg:flex-row flex-col">
                     <div className='lg:text-center lg:w-[70%] lg:h-[580px]' style={{ textAlign: "-webkit-center" }}>
                        <Image
                            alt="Scuba Combo"
                            src={props.imgSection}
                            width={1280}
                            height={900}
                            className="object-fill h-full lg:max-w-[70%] max-w-[75%]"
                        />
                    </div>
{/*                     <div className='lg:text-center lg:w-[70%]' style={{ textAlign: "-webkit-center" }}>
                        <Image
                            alt="Scuba Combo"
                            src={props.imgSection}
                            width={1280}
                            height={900}
                            className="object-cover lg:max-w-[50%] max-w-[75%]"
                        />
                    </div> */}
                    <div className="flex flex-col gap-8 items-center lg:justify-self-left lg:items-left lg:w-[30%] lg:justify-center pt-8 lg:pt-0 lg:place-items-start lg:drop-shadow-none drop-shadow-md">

                        <div className="font-semibold text-3xl lg:text-[19px] text-start lg:ml-8">
                            Book Now
                        </div>


                        <div className="flex flex-col lg:flex-col sm:flex-row gap-4 w-[10rem] justify-center">
                            <Link
                                href="tel:+917410150610"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size="lg"
                                    className="flex items-center gap-3 shadow-md bg-gray-200 w-full sm:w-auto"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Call Now</span>
                                </Button>
                            </Link>

                            <Link
                                href={`https://api.whatsapp.com/send?phone=${+917410150610}&text=${encodeURIComponent(`Hello, *The Renuka Trips Goa*, I would like to know about *${props.title}*`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size="lg"
                                    className="flex items-center gap-3 shadow-md bg-green-600 text-white w-full sm:w-auto"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"
                                        />
                                    </svg>
                                    <span>Whatsapp</span>
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Adventuresboatparty
