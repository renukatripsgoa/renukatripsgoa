'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import EmblaCarousel from "@/_components/carousel/js/EmblaCarousel"
import "@/_components/carousel/css/sandbox.css"
import "@/_components/carousel/css/embla.css"
import { Button } from '@nextui-org/button';
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Phone, Dot, BadgeCheck, Timer, Hourglass, TreePalm, IndianRupee, PersonStanding } from 'lucide-react';
import Link from 'next/link';


const TourCombo = ({ data, title, titleImg, SLIDES, OPTIONS, bookingSection, description, destination, inclusions, imgSection, action, off }) => {
    const [scrollY, setScrollY] = useState(0);

    const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scaleValue = 1 + scrollY * 0.0003; // Smaller scaling factor for smoother effect

    return (
        <>

            <section className="relative h-[80vh] lg:h-screen w-full overflow-hidden">
                <div
                    className="absolute inset-0 transition-transform duration-500 ease-out"
                    style={{
                        transform: `scale(${scaleValue})`,
                    }}
                >
                    <Image
                        alt="Scuba Combo"
                        src={titleImg}
                        fill
                        sizes="(width: 100%)"
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div className="relative flex justify-center items-center h-full bg-black bg-opacity-50">
                    <p className="text-white text-wrap text-3xl lg:text-7xl md:text-7xl font-bold text-center drop-shadow-lg w-[80%] p-2">
                        {title}
                    </p>
                </div>
            </section>

            <section className=" bg-white text-black text-center">
                <div className='flex justify-center items-center bg-[#c0dfff] text-[#003776] lg:p-12 pt-8 pb-8 font-bold'>
                    <div className='grid grid-cols-2 gap-2 w-[80%] lg:flex lg:flex-wrap lg:flex-cols lg:gap-2 lg:w-full lg:justify-evenly'>
                        {bookingSection.startTime
                            ? <div className='inline-flex gap-5'>
                                <div className='content-evenly'>
                                    <Timer className="size-10 lg:size-16 md:size-14" />
                                </div>
                                <div className='flex flex-col gap-1 text-start pt-2'>
                                    <p>Start Time</p>
                                    <p>{bookingSection.startTime}</p>
                                </div>
                            </div>
                            : ""}

                        {bookingSection.duration
                            ? <div className='inline-flex gap-5'>
                                <div className='content-evenly'>
                                    <Hourglass className="size-10 lg:size-16 md:size-14" />
                                </div>
                                <div className='flex flex-col gap-1 text-start pt-2'>
                                    <p>Duration</p>
                                    <p>{bookingSection.duration}</p>
                                </div>
                            </div>
                            : ""}

                        <div className='inline-flex gap-5'>
                            <div className='content-evenly'>
                                <TreePalm className="size-10 lg:size-16 md:size-14" />
                            </div>
                            <div className='flex flex-col gap-1 text-start pt-2 justify-center'>
                                <p>Location</p>
                                <p>{bookingSection.location}</p>
                            </div>
                        </div>

                        {bookingSection.minimum
                            ? <div className='inline-flex gap-5'>
                                <div className='content-evenly'>
                                    <PersonStanding className="size-10 lg:size-16 md:size-14" />
                                </div>
                                <div className='flex flex-col gap-1 text-start pt-2 justify-center'>
                                    <p>Minimum</p>
                                    <p>{bookingSection.minimum} /-</p>
                                </div>
                            </div>
                            : ""}

                        <div className='inline-flex gap-5'>
                            <div className='content-evenly'>
                                <IndianRupee className="size-10 lg:size-16 md:size-14" />
                            </div>
                            <div className='flex flex-col gap-1 text-start pt-2 justify-center'>
                                <p>Price</p>
                                <p>{bookingSection.price} /-</p>
                            </div>
                        </div>

                    </div>
                </div>

{/*                 {title === "Dudhsagar Waterfall Trip"
                    ? <section className='bg-white text-black flex justify-center pt-16'>
                        <div className=''>
                            <img
                                alt="Scuba Combo"
                                src={`/img/tour/dudhsagar-waterfall-trip/dudhsagar.png`}
                                width={1280}
                                height={900}
                                className="object-cover lg:max-w-[100%] max-w-[75%]"
                            />
                        </div>
                    </section>
                    : ""}
 */}

                <div className='py-16'>
                    <h2 className="text-2xl md:text-4xl font-semibold mb-4">Special Pre-Booking Offer</h2>
                    <p className="text-lg md:text-2xl">Flat Rs {off} off on Pre-Bookings</p>
                </div>


            </section>



            <section className=" bg-white text-[#003776] lg:flex w-[90%] mx-auto lg:flex-row flex-col">



                <div className="col-span-3 w-full lg:w-[70%] lg:flex lg:flex-start">
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </div>

                <div className="flex flex-col gap-8 pt-8 justify-self-center items-center w-full lg:w-[30%] lg:flex lg:pt-14 lg:items-start lg:flex-col lg:pl-16">

                    <div className="font-semibold text-3xl lg:text-[19px] text-start lg:ml-6">
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
                            href={`https://api.whatsapp.com/send?phone=${+917410150610}&text=${encodeURIComponent(`Hello, *The Renuka Trips Goa*, I would like to know about *${title}*`)}`}
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
            </section>

            <section className="pt-8 bg-white text-black text-left lg:ml-[100px] lg:mr-[100px] ml-[30px] mr-[30px]">
                <div className="w-full">

                    <div className='font-semibold lg:text-3xl text-2xl text-[#003776]'>Description</div>
                    <p className='pt-4 w-full text-base opacity-95 text-justify'>{description}</p>

                    {inclusions === "couple" || inclusions === "group" ? "" : <div className='font-semibold lg:text-3xl text-2xl pt-16 text-[#003776]'>Inclusions</div>}
                    {inclusions
                        ? inclusions === "couple" || inclusions === "group" || inclusions === "Island Trip Goa" ? "" : <div className='inline-flex pt-4'><BadgeCheck color='green' /> {inclusions}</div>
                        : <div className='w-full grid-cols-1 grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4'>
                            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
                                <div className='w-[10%] md:w-[12%]'>
                                    <BadgeCheck color='green' />
                                </div>
                                <div className=' w-[80%]'>
                                    <p >Transportation</p>
                                </div>
                            </div>

                            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
                                <div className='w-[10%] md:w-[12%]'>
                                    <BadgeCheck color='green' />
                                </div>
                                <div className=' w-[80%]'>
                                    <p >Breakfast, lunch</p>
                                </div>
                            </div>

                            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
                                <div className='w-[10%] md:w-[12%]'>
                                    <BadgeCheck color='green' />
                                </div>
                                <div className=' w-[80%]'>
                                    <p >Mineral Water</p>
                                </div>
                            </div>

                            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
                                <div className='w-[10%] md:w-[12%]'>
                                    <BadgeCheck color='green' />
                                </div>
                                <div className=' w-[80%]'>
                                    <p >Sightseeing</p>
                                </div>
                            </div>

                            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
                                <div className='w-[10%] md:w-[12%]'>
                                    <BadgeCheck color='green' />
                                </div>
                                <div className=' w-[80%]'>
                                    <p >Briefing by DIVE Master</p>
                                </div>
                            </div>

                            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
                                <div className='w-[10%] md:w-[12%]'>
                                    <BadgeCheck color='green' />
                                </div>
                                <div className=' w-[80%]'>
                                    <p >Scuba Diving Equipment</p>
                                </div>
                            </div>


                            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
                                <div className='w-[10%] md:w-[12%]'>
                                    <BadgeCheck color='green' />
                                </div>
                                <div className=' w-[80%]'>
                                    <p >10-15 mins. Dive in Underwater with PADI Dive Master</p>
                                </div>
                            </div>

                            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
                                <div className='w-[10%] md:w-[12%]'>
                                    <BadgeCheck color='green' />
                                </div>
                                <div className=' w-[80%]'>
                                    <p >Water Sport Package</p>
                                </div>
                            </div>
                        </div>



                        // <div className='pt-4' style={{ textAlign: "left" }}>
                        //     <Image
                        //         alt="Scuba Combo"
                        //         src={`/img/tour/scuba-combo/Inclusions.png`}
                        //         width={1280}
                        //         height={900}
                        //         className="object-cover lg:max-w-[27%]"

                        //     />
                        // </div>
                    }

                    {inclusions === "Island Trip Goa" 
                     ? <div className='w-full grid-cols-1 grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4'>
                     <div className='flex justify-start md:justify-center md:gap-2 items-center'>
                         <div className='w-[10%] md:w-[12%]'>
                             <BadgeCheck color='green' />
                         </div>
                         <div className=' w-[80%]'>
                             <p >Pickup and Drop from Hotel</p>
                         </div>
                     </div>

                     <div className='flex justify-start md:justify-center md:gap-2 items-center'>
                         <div className='w-[10%] md:w-[12%]'>
                             <BadgeCheck color='green' />
                         </div>
                         <div className=' w-[80%]'>
                             <p >Snorkelling</p>
                         </div>
                     </div>

                     <div className='flex justify-start md:justify-center md:gap-2 items-center'>
                         <div className='w-[10%] md:w-[12%]'>
                             <BadgeCheck color='green' />
                         </div>
                         <div className=' w-[80%]'>
                             <p >Fishing</p>
                         </div>
                     </div>

                     <div className='flex justify-start md:justify-center md:gap-2 items-center'>
                         <div className='w-[10%] md:w-[12%]'>
                             <BadgeCheck color='green' />
                         </div>
                         <div className=' w-[80%]'>
                             <p >Dolphin Sighting</p>
                         </div>
                     </div>

                     <div className='flex justify-start md:justify-center md:gap-2 items-center'>
                         <div className='w-[10%] md:w-[12%]'>
                             <BadgeCheck color='green' />
                         </div>
                         <div className=' w-[80%]'>
                             <p >Beer, Water and Soft Drinks</p>
                         </div>
                     </div>

                     <div className='flex justify-start md:justify-center md:gap-2 items-center'>
                         <div className='w-[10%] md:w-[12%]'>
                             <BadgeCheck color='green' />
                         </div>
                         <div className=' w-[80%]'>
                             <p >Fruits, Snacks</p>
                         </div>
                     </div>


                     <div className='flex justify-start md:justify-center md:gap-2 items-center'>
                         <div className='w-[10%] md:w-[12%]'>
                             <BadgeCheck color='green' />
                         </div>
                         <div className=' w-[80%]'>
                             <p >BBQ (Fish/Chicken)</p>
                         </div>
                     </div>

                     <div className='flex justify-start md:justify-center md:gap-2 items-center'>
                         <div className='w-[10%] md:w-[12%]'>
                             <BadgeCheck color='green' />
                         </div>
                         <div className=' w-[80%]'>
                             <p >Buffet (Veg/Non Veg)</p>
                         </div>
                     </div>
                 </div>

                     : ""
                    }


                    <div className='pt-8'>

                        <div className='font-semibold lg:text-3xl text-2xl pt-4 text-[#003776]'>Destinations</div>

                        <div className='inline-flex gap-8 pt-4'>
                            {destination.map((item, index) => {
                                return (
                                    <div key={index} className='inline-flex gap-1'><BadgeCheck color='green' />{item}</div>
                                )
                            })}
                        </div>

                    </div>
                    {/* <div className='row-span-1 content-center grid grid-cols-2 w-[60%]' style={{ justifySelf: "center" }}>
            <div><p>Book Now</p> <p>or To Know More About Tours and Activities</p></div>
            <div>Book Now</div>
          </div> */}

                </div>
            </section>

            <section className="pt-8 pb-16 bg-white lg:ml-[100px] lg:mr-[100px] ml-[30px] mr-[30px]">
                <Accordion selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys} selectionMode="multiple">
                    {data.map((item) => {
                        if (action === "group" || action === "couple") {
                            return (
                                <AccordionItem
                                    key={String(item.key)}
                                    subtitle={item.area === "Detailed Itinerary" ? "" : "click for more info"}
                                    aria-label={item.area}
                                    title={
                                        item.area === "Detailed Itinerary" || item.area === "Services" || item.area === "Conclusion" || item.area === "FAQs"
                                            ? <p className='font-semibold lg:text-3xl text-2xl pt-4 text-[#003776]'>{item.area}</p>
                                            : <p className='font-semibold lg:text-2xl text-1xl pt-4 text-[#003776]'>{`${item.area}`}</p>
                                    }>
                                    {item.area === "Detailed Itinerary" ? (
                                        <>
                                            <div className='pt-2 text-justify'>{item.description}</div>
                                            {item.detailedDesc}
                                        </>
                                    ) : item.area === "Services" || item.area === "Conclusion" || item.area === "FAQs" ? (
                                        <div className='flex flex-col gap-2 pb-4'>
                                            {item.detailedDesc}
                                        </div>
                                    ) : (
                                        <>
                                            <div className='relative flex justify-center items-center w-full h-[20rem] lg:h-[40rem]'>
                                                <Image
                                                    className='rounded-lg'
                                                    alt="Scuba Combo"
                                                    src={item.img}
                                                    fill
                                                    style={{ objectFit: "fill" }}
                                                />
                                            </div>
                                            <div className='pt-8 font-bold inline-flex text-xl text-[#003776]'>
                                                {item.area}
                                            </div>
                                            <div className='pt-4 font-semibold opacity-95'>
                                                {item.tagline}
                                            </div>
                                            <div className='pt-6 pb-4 text-justify'>
                                                {item.description}
                                            </div>
                                        </>
                                    )}
                                </AccordionItem>
                            );
                        }

                        if (action === "tour") {

                            let subtitle = "";

                            if (item.area === "Detailed Itinerary" || item.area === "Services" || item.area === "Conclusion" || item.area === "FAQs") {
                                subtitle = "click for more info"
                            } else {
                                subtitle = (<p className='pl-7'>click for more info</p>)
                            }

                            if (item.area === "Detailed Itinerary" && title === "Dudhsagar Waterfall Trip") {
                                subtitle = ""
                            }

                            return (
                                <AccordionItem
                                    key={item.key}
                                    subtitle={subtitle}
                                    aria-label={item.area}
                                    title={item.area === "Detailed Itinerary" || item.area === "Services" || item.area === "Conclusion" || item.area === "FAQs" ? <p className='font-semibold lg:text-3xl text-2xl pt-4 text-[#003776]'>{item.area}</p> : <p className='font-semibold lg:text-2xl text-1xl pt-4 text-[#003776]'>{(parseInt(item.key) - 1) + "]" + " " + item.area}</p>}
                                >
                                    {item.area === "Detailed Itinerary"
                                        ?
                                        <>
                                            <div className='pt-2 text-justify'>{item.description}</div>
                                            {item.detailedDesc}
                                        </>
                                        : item.area === "Services" || item.area === "Conclusion" || item.area === "FAQs"
                                            ? <div className='flex flex-col gap-2 pb-16'>
                                                {item.detailedDesc}
                                            </div>
                                            : <><div className='relative flex justify-center items-center w-full h-[20rem] lg:h-[40rem]'>
                                                <Image
                                                    className='rounded-lg'
                                                    alt="Scuba Combo"
                                                    src={item.img}
                                                    fill
                                                    style={{
                                                        objectFit: "fill",
                                                    }} />
                                            </div>
                                                <div className='pt-8 font-bold inline-flex text-xl text-[#003776]'>
                                                    {item.area}
                                                </div>
                                                <div className='pt-4 font-semibold opacity-95'>
                                                    {item.tagline}
                                                </div>
                                                <div className='pt-6 text-justify'>{item.description}</div></>}
                                </AccordionItem>
                            )
                        }


                    })}
                </Accordion>
            </section>


            <section className="pt-14 pb-14 bg-[#c0dfff] text-[#003776] text-center">
                <div className="max-w-6xl mx-auto flex lg:flex-row flex-col">

                    {action === "couple" || action === "group" 
                    ? <>
                    <div className='lg:text-center lg:w-[70%]' style={{ textAlign: "-webkit-center" }}>
                        <Image
                            alt="Scuba Combo"
                            src={imgSection}
                            width={1280}
                            height={900}
                            className="object-cover lg:max-w-[50%] max-w-[75%]"
                        />
                    </div>
                    </> 
                    : <>
                    <div className='lg:text-center lg:w-[70%] lg:h-[580px]' style={{ textAlign: "-webkit-center" }}>
                        <Image
                            alt="Scuba Combo"
                            src={imgSection}
                            width={1280}
                            height={900}
                            className="object-fill h-full lg:max-w-[70%] max-w-[75%]"
                        />
                    </div>
                    </>}
                    
{/*                     <div className='lg:text-center lg:w-[70%]' style={{ textAlign: "-webkit-center" }}>
                        <Image
                            alt="Scuba Combo"
                            src={imgSection}
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
                                href={`https://api.whatsapp.com/send?phone=${+917410150610}&text=${encodeURIComponent(`Hello, *The Renuka Trips Goa*, I would like to know about *${title}*`)}`}
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
                    {/* <div className='flex flex-row-2 gap-2 justify-evenly pt-8 ml-12 mr-12'>
                        <div className="lg:text-lg text-md w-[55%]" style={{ textAlign: "-webkit-left" }}>
                            <p>Book Now</p>
                            <p>or To Know More About Tours and Activities</p>
                        </div>
                        <div className='inline-flex gap-2 self-center lg:text-lg text-md' style={{ justifyContent: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 258"><defs>
                                <linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%">
                                    <stop offset="0%" stopColor="#1faf38"></stop>
                                    <stop offset="100%" stopColor="#60d669"></stop>
                                </linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%">
                                    <stop offset="0%" stopColor="#f9f9f9"></stop><stop offset="100%" stopColor="#fff"></stop>
                                </linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"></path><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"></path><path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64">
                                </path>
                            </svg>
                            <p className='self-center'>Book Now</p>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* <section className="py-16 flex bg-white text-white justify-center">
                <div className="flex flex-col w-[9.25rem] gap-8">
                    <Button size='lg flex gap-5' className="shadow-md bg-gray-200">
                        <Phone className='size-5' />
                        Call Now
                    </Button>
                    <Button size='lg flex gap-5' className="shadow-md bg-green-600 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"></path>
                        </svg>Whatsapp
                    </Button>
                </div>
            </section>

            <section className="py-16 bg-[#c0dfff] text-[#003776] text-center pl-5 pr-5">
                <div className="max-w-6xl mx-auto font-sans">
                    <p className="text-xl md:text-3xl font-bold mb-6">24/7 Customer Support Available</p>
                    <p className="text-lg md:text-2xl font-medium mb-4">Office Timings: 10 am–8pm, Monday - Sunday</p>
                    <p className="text-lg md:text-2xl font-medium mb-4">Address: Shop No 8, Situated in Kamath Holiday Holiday Homes,</p>
                    <p className="text-lg md:text-2xl font-medium mb-4">Behind Old Newton Super Market, Calangute, Bardez, Goa, 403516.</p>
                    <p className="text-lg md:text-2xl font-medium mb-4">Phone: +91 77777 77777 / +91 99999 99999</p>
                    <p className="text-lg md:text-2xl font-medium mb-4">Email: demo@gmail.com</p>
                </div>
            </section> */}

        </>
    );
};

export default TourCombo;
