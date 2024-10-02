"use client"
import React, { useEffect, useState } from 'react'
import Adventuresboatparty from '@/_components/Adventuresboatparty'
import { BadgeCheck, CircleCheck, Clock, Hourglass, IndianRupee, MapPinHouse } from 'lucide-react'
import { Button } from "@nextui-org/react";
import axios from 'axios'
import Link from 'next/link';


const Northgoatour = () => {

  const bgimage = {
    key: "1",
    image: "/img/tour/north-goa-tour/northgoa.jpg"
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
                  <p className='w-full text-left'>North Goa</p>
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
        "/img/tour/north-goa-tour/northagoaone.jpg",
        "/img/tour/north-goa-tour/northgoatwo.jpg",
        "/img/tour/north-goa-tour/northagoathree.jpg",
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
                                href={`https://api.whatsapp.com/send?phone=${+917410150610}&text=${encodeURIComponent(`Hello, *The Renuka Trips Goa*, I would like to know about *North Goa Tour*`)}`}
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
            <p className='mb-4 text-base'>Embark on a thrilling excursion through the city of North Goa, as you delve into the prime points of interest with ease and convenience.</p>
            <p className='mb-4 text-base'>Immerse yourself in an unforgettable experience with your loved ones, as you make your way through an array of notable landmarks including the awe-inspiring Fort Aguada, the magnificent St. Alex Church, the pristine Baga beach, and the picturesque Anjuna beach.</p>
            <p className='mb-4 text-base'>Marvel at the exquisite architecture, opulent interiors, and serene environs as you traverse the renowned St. Alex Church, an iconic symbol of the city.</p>
            <p className='mb-4 text-base'>Pay homage to the revered Shree Chauranginath Bhumika Panchayatan Mandir, a renowned temple within the city, and offer prayers alongside your family.</p>
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
    subcategory: "North Goa Tour"
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

            <p className='font-semibold mt-3 mb-3'>Begin your journey of exploration by getting picked up from your centrally located hotel in Baga, Calangute, Arpora, or Candolim, in a meticulously maintained vehicle, and gear up for an extraordinary North Goa City Tour.</p>
            <p className='font-semibold mt-3 mb-3'>Firstly, head towards the Fort Aguada, one of the famous lighthouses of Goa, which was constructed during the 17th Century by the Portuguese. This historical and architectural gem will surely leave you in awe.</p>
            <p className='font-semibold mt-3 mb-3'>After admiring the magnificence of the Fort Aguada, make your way to the charming St. Alex Church, renowned for its pristine white exterior, intricate interiors, and peaceful ambiance. Marvel at the church&apos;s sheer beauty and get lost in its serene surroundings.</p>
            <p className='font-semibold mt-3 mb-3'>Take a break from historical sites and head to some of the famous beaches in the area, such as Baga Beach, Vagator Beach, and Anjuna Beach, among others. Experience the warm sand beneath your feet, the cool breeze blowing through your hair, and the sun kissing your skin as you enjoy your time at these picturesque locales.</p>
            <p className='font-semibold mt-3 mb-3'>Next, visit the famous Shree Chauranginath Bhumika Panchayatan Mandir, a revered temple in the area, and offer your prayers alongside your family and loved ones. This holy site is sure to leave you feeling spiritually fulfilled.</p>
            <p className='font-semibold mt-3 mb-3'>Throughout the tour, an experienced guide will accompany you and provide you with fascinating historical information and interesting facts about each location you visit.</p>
            <p className='font-semibold mt-3 mb-3'>At the end of the tour, hop off at designated locations, including Baga, Calangute, and Candolim Main Road, and return home with your loved ones, carrying along with you unforgettable memories that will last a lifetime.</p>
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
            Flat Rs.49 Off on Pre Bookings
          </div>
          <div className='mt-3'>
            {fetchprice?.adult ? <div><span className='font-semibold'>Adults (16+)</span> : {fetchprice?.adult}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.youth ? <div><span className='font-semibold'>Youth (7+) </span>: {fetchprice?.youth}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.percouple ? <div><span className='font-semibold'>Per Couple </span> : {fetchprice?.percouple}/-</div> : " "}
          </div>
          {/* <div className='mt-3'>
            {fetchprice?.childbelowseven ? <div><span className='font-semibold'>Child (Below 7 years) </span>: {fetchprice?.childbelowseven}/-</div> : " "}
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

  const imgSection = "/img/tour/north-goa-tour/north-goa.jpg"

  return (
    <div><Adventuresboatparty title={"North Goa Tour"} bgimage={bgimage} breadcrump={breadcrump} slides={slides} sectiontwo={sectiontwo} description={description} destination={destination} accordionData={accordionData} imgSection={imgSection}/></div>
  )
}

export default Northgoatour;
