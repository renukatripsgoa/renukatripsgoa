"use client"
import React, { useEffect, useState } from 'react'
import Adventuresboatparty from '@/_components/Adventuresboatparty'
import { BadgeCheck, CircleCheck, Clock, Hourglass, IndianRupee, MapPinHouse } from 'lucide-react'
import { Button } from "@nextui-org/react";
import axios from 'axios'
import Link from 'next/link';

const Southgoatour = () => {

  const bgimage = {
    key: "1",
    image: "/img/tour/south-goa-tour/southgoa.webp"
  }

  const breadcrump = [
    {
      key: "1",
      breadcrumppara: (
        <>
          <div className='w-[95%] md:w-[90%] m-auto grid grid-cols-2 lg:grid-cols-4 gap-6 bg-[#C0DFFF]'>
            <div>
              <div className='w-full md:w-[70%] md:m-auto grid grid-cols-2 h-20'>
                <div className='flex justify-center items-center text-[#003776]'>
                  <Clock className='w-[40px] h-[40px]  md:w-[60px] md:h-[60px] ' />
                </div>
                <div className='flex justify-center items-center flex-col font-bold text-[#003776] text-base'>
                  <p className='w-full text-left'>Start Time</p>
                  <p className='w-full text-left'>11:00 AM</p>
                </div>
              </div>
            </div>

            <div>
              <div className='w-full md:w-[70%] md:m-auto grid grid-cols-2 h-20'>
                <div className='flex justify-center items-center text-[#003776]'>
                  <Hourglass className='w-[40px] h-[40px]  md:w-[60px] md:h-[60px] ' />
                </div>
                <div className='flex justify-center items-center flex-col font-bold text-[#003776] text-base'>
                  <p className='w-full text-left'>Duration</p>
                  <p className='w-full text-left'>8 Hours</p>
                </div>
              </div>
            </div>

            <div>
              <div className='w-full md:w-[70%] md:m-auto grid grid-cols-2 h-20'>
                <div className='flex justify-center items-center text-[#003776]'>
                  <MapPinHouse className='w-[40px] h-[40px]  md:w-[60px] md:h-[60px] ' />
                </div>
                <div className='flex justify-center items-center flex-col font-bold text-[#003776] text-base'>
                  <p className='w-full text-left'>Location</p>
                  <p className='w-full text-left'>South Goa</p>
                </div>
              </div>
            </div>

            <div>
              <div className='w-full md:w-[70%] md:m-auto grid grid-cols-2 h-20'>
                <div className='flex justify-center items-center text-[#003776]'>
                  <IndianRupee className='w-[40px] h-[40px]  md:w-[60px] md:h-[60px] ' />
                </div>
                <div className='flex justify-center items-center flex-col font-bold text-[#003776] text-base'>
                  <p className='w-full text-left'>Price</p>
                  <p className='w-full text-left'>449</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )

    }
  ]

  const slides = [
    {
      key: "1",
      image: [
        "/img/tour/south-goa-tour/southgoatwo.jpg",
        "/img/tour/south-goa-tour/southgoaone.jpg",
        "/img/tour/south-goa-tour/southgoathree.jpg"
      ]
    }
  ]

  const sectiontwo = [
    {
      key: "1",
      sectiontwopara: (
        <>
          <div className='flex flex-col'>
            <div className='w-full h-64 md:h-48 lg:h-72 flex justify-between flex-col'>
              <h3 className='text-xl font-semibold text-[#003776] md:text-3xl'>Experience the thrill of Boat Parties in Goa!</h3>
              <p>Set sail for an unforgettable adventure with vibrant music, stunning views, and a lively atmosphere. Perfect for celebrations or just soaking in Goa’s beauty, these boat parties promise fun and relaxation.</p>
              <p>Ready to dive in? Click below to book your boat party now!</p>
            </div>
            <div className=' w-full h-24 flex justify-center items-center'>
              <div className='w-full flex justify-center items-center'>
<Link
                                href={`https://api.whatsapp.com/send?phone=${+917410150610}&text=${encodeURIComponent(`Hello, *The Renuka Trips Goa*, I would like to know about *South Goa Tour*`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                <Button
                  color="primary"
                  className='text-center'
                >
                  Book Your Adventure Today
                </Button></Link>
              </div>
            </div>
          </div>
        </>
      )
    }
  ]

  const description = [
    {
      key: "1",
      descriptionone: (
        <>
          <div className='w-[95%] md:w-[90%] m-auto'>
            <h4 className='text-xl font-semibold mb-4 text-[#003776] md:text-3xl'>Description</h4>
            <p className='mb-4 text-base'>Embark on an expedition to witness the marvels of Portuguese architecture, widely known as The Basilica of Bom Jesus, a spectacle among the 7 Wonders of Portugal. Benefit from the shared or private transportation services, available from the principal North Goa beaches to arrive at your destination effortlessly.</p>
            <p className='mb-4 text-base'>Explore the distinguished landmarks of South Goa, including the Mangeshi Temple, Shantadurga Temple, and Miramar Beach, a few of the most alluring tourist attractions that the city has to offer. Brace yourself for an exhilarating tour of South Goa and set out on an adventure to discover the iconic landmarks situated in the ancient region of the city.</p>
            <p className='mb-4 text-base'>Enrich your knowledge about the rich heritage and culture of South Goa, alongside the profound historical landmarks with the aid of a licensed guide.</p>
          </div>
        </>
      )
    }
  ]

  const destination = [
    {
      key: "1",
      destinationpara: (
        <>
          <h4 className='text-xl font-semibold mb-4 text-[#003776] md:text-3xl'>Destination</h4>
          <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-8 mt-4'>
            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
              <div className='w-[10%] md:w-[12%]'>
                <BadgeCheck color='green' />
              </div>
              <div className=' w-[80%]'>
                <p >Goa</p>
              </div>
            </div>
          </div>
        </>
      )
    }
  ]

  const [fetchprice, setfetchprice] = useState('');
  // console.log(fetchprice, "fetchprice");

  const [fetchdata, setfetchdata] = useState({
    maincategory: "Tour",
    subcategory: "South Goa Tour"
  })
  // console.log(fetchdata.maincategory, "fetchdata");

  const handleprice = async () => {

    const response = await axios.post("/api/category", {
      operation: "fetchcategorywisedata",
      maincategory: fetchdata.maincategory,
      subcategory: fetchdata.subcategory
    })
    // console.log(response.data.fetchmaincategorydata, "check");
    setfetchprice(response.data.fetchmaincategorydata)
  }

  useEffect(() => {
    if (fetchdata.maincategory && fetchdata.subcategory) {
      handleprice()
    }
  }, [fetchdata])

  const accordionData = [
    {
      key: "1",
      title: "Detailed Itinerary",
      description: (
        <>
          <div>

            <p className='font-semibold mt-3 mb-3'>Experience the grandeur of South Goa&apos;s scenic beauty in the luxury of an air-conditioned vehicle as you embark on a delightful sightseeing tour. Begin your journey by reaching Miramar Beach, also known as Gasper Dias, where you can immerse yourself in the tranquil waters and relish the serene surroundings.</p>
            <p className='font-semibold mt-3 mb-3'>Proceed to Dona Paula, a place where two of Goa&apos;s prominent rivers, Mandovi and Zuari, converge, and revel in the breathtaking view that it has to offer. Afterward, enjoy a thirty-minute halt to savor the delectable lunch (note that this will incur an additional cost).</p>
            <p className='font-semibold mt-3 mb-3'>Post a scrumptious meal, delve into the enchanting beauty of Old Goa and visit the Bom Jesus Basilica & Se Cathedral de Santa Catarina. The awe-inspiring seven-storeyed lamp tower at Mangeshi Temple is a must-visit destination before ending your tour with a visit to the renowned Shantadurga Temple. Finally, our vehicle will drop you back at your hotel, making it a hassle-free and enjoyable journey.</p>

          </div>
        </>
      )
    },
    {
      key: "2",
      title: "Services",
      price: (
        <>
          <div className='font-semibold'>
            Flat Rs.999 Off on Pre Bookings
          </div>
          <div className='mt-3'>
            {fetchprice?.adult ? <div><span className='font-semibold'>Adults (16+)</span> : {fetchprice?.adult}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.youth ? <div><span className='font-semibold'>Youth (7+) </span>: {fetchprice?.youth}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.percouple ? <div><span className='font-semibold'>percouple </span> : {fetchprice?.percouple}/-</div> : " "}
          </div>
          {/* <div className='mt-3'>
            {fetchprice?.childbelowseven ? <div><span className='font-semibold'>Child (below 7 years) </span>: {fetchprice?.childbelowseven}/-</div> : " "}
          </div> */}
          <div className='mt-3'>
            {fetchprice?.childthreetoseven ? <div><span className='font-semibold'>Child (3 to 7 years)</span> : {fetchprice?.childthreetoseven}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.childabovethree ? <div><span className='font-semibold'>Child (Above 3 years) </span>: {fetchprice?.childabovethree}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.childabovetwelve ? <div><span className='font-semibold'>Child (below 12 years)</span> : {fetchprice?.childabovetwelve}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.childabovefour ? <div><span className='font-semibold'>Child (Above 4 years) </span>: {fetchprice?.childabovefour}/-</div> : " "}
          </div>
        </>)
    }
  ]

  const imgSection = "/img/tour/south-goa-tour/south-goa.jpg"

  return (
    <div><Adventuresboatparty title={"South Goa Tour"} bgimage={bgimage} breadcrump={breadcrump} slides={slides} sectiontwo={sectiontwo} description={description} destination={destination} accordionData={accordionData} imgSection={imgSection}/></div>
  )
}

export default Southgoatour;
