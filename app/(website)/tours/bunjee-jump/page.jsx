"use client"
import React, { useEffect, useState } from 'react'
import Adventuresboatparty from '@/_components/Adventuresboatparty'
import { BadgeCheck, CircleCheck, Clock, Hourglass, IndianRupee, MapPinHouse } from 'lucide-react'
import { Button } from "@nextui-org/react";
import axios from 'axios'
import Link from 'next/link';

const Bunjeejump = () => {

  const bgimage = {
    key: "1",
    image: "/img/tour/bunjee-jump/bunjee-jump.webp"
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
                  <p className='w-full text-left'>2 Hours</p>
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
                  <p className='w-full text-left'>3749</p>
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
        "/img/tour/bunjee-jump/bunjeeone.webp",
        "/img/tour/bunjee-jump/bunjeetwo.jpeg",
        "/img/tour/bunjee-jump/bunjeethree.jpg",
        "/img/tour/bunjee-jump/bunjeefour.jpg",
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
                            href={`https://api.whatsapp.com/send?phone=${+917410150610}&text=${encodeURIComponent(`Hello, *The Renuka Trips Goa*, I would like to know about *Bungee Jump*`)}`}
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
            <p className='mb-4 text-base'>Bungee jumping, a comparatively new and exhilarating activity, has already made its mark in Goa. This movement is a unique and awe-inspiring experience that is both exciting and fascinating. Whether it be the scorching heat of the summer or the chilly winds of winter, there is never a specific time or season to indulge in the thrilling activity of bungee jumping in Goa.</p>
            <p className='mb-4 text-base'>So if you&apos;re seeking an adventure that will take your breath away, look no further than the state of Goa, where you can explore a multitude of heart-pumping activities that will leave you exhilarated and yearning for more. </p>
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
    subcategory: "Bungee Jump"
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

            <p className='font-semibold mt-3 mb-3'>Welcome for one of the most thrilling and action-filled recreational activity in India. This is 61 mtrs height and second highest tower in India and biggest of Goa.</p>
            <p className='font-semibold mt-3 mb-3'>Report the venue between 10 am to 4.30 pm. Make sure to know your slot time from the coordinating team once booking is done.</p>
            <p className='font-semibold mt-3 mb-3'>Hire a cab or rent a bike to reach our destination for your activity.</p>
            <p className='font-semibold mt-3 mb-3'>Our Bungee location is approximately 32-34 kms from Calangute, Goa. </p>
            <p className='font-semibold mt-3 mb-3'>Once reaching the venue meetup our ground staff who will capture some basic requirements before your activity which will make you clear if you are capable to have the activity.</p>
            <p className='font-semibold mt-3 mb-3'>Once formalities are completed my other team will accompany with you on the lift to go to the top for your activity.</p>
            <p className='font-semibold mt-3 mb-3'>Maximum 4 members can go at a time on the lift for the activity.</p>
            <p className='font-semibold mt-3 mb-3'>While going up the instructor will guide you about the bungee history and different ways of jumps like free fall, dead jump, etc.</p>
            <p className='font-semibold mt-3 mb-3'>We follow SANZ standards are followed here with proper certified trainers.</p>
            <p className='font-semibold mt-3 mb-3'>We provide you the certificate of participation, 5 DSLR photos and an edited Video of your experience.</p>
            <p className='font-semibold mt-3 mb-3'>Bungee helps you to gain ultimate confidence in life in future.</p>
            <p className='font-semibold mt-3 mb-3'>This is one of the thrilling and risk oriented activity which can be done by all but only after following the instruction.</p>

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
            Flat Rs.449 Off on Pre Bookings
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
            {fetchprice?.childbelowseven ? <div><span className='font-semibold'>child (below 7 years) </span>: {fetchprice?.childbelowseven}/-</div> : " "}
          </div> */}
          <div className='mt-3'>
            {fetchprice?.childthreetoseven ? <div><span className='font-semibold'>Child (3 to 7 years)</span> : {fetchprice?.childthreetoseven}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.childabovethree ? <div><span className='font-semibold'>Child (Above 3 years) </span>: {fetchprice?.childabovethree}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.childabovetwelve ? <div><span className='font-semibold'>Child (Above 12 years)</span> : {fetchprice?.childabovetwelve}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.childabovefour ? <div><span className='font-semibold'>Child (Above 4 years) </span>: {fetchprice?.childabovefour}/-</div> : " "}
          </div>
        </>)
    }
  ]

  const imgSection = "/img/tour/bunjee-jump/bunjee.jpg"

  return (
    <div><Adventuresboatparty title={"Bungee Jump"} bgimage={bgimage} breadcrump={breadcrump} slides={slides} sectiontwo={sectiontwo} description={description} destination={destination} accordionData={accordionData} imgSection={imgSection}/></div>
  )
}

export default Bunjeejump;
