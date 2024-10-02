"use client"
import React, { useEffect, useState } from 'react'
import Adventuresboatparty from '@/_components/Adventuresboatparty'
import { BadgeCheck, Clock, Hourglass, IndianRupee, MapPinHouse } from 'lucide-react'
import { Button } from "@nextui-org/react";
import axios from 'axios'
import Link from 'next/link';

const Flyboarding = () => {

  const bgimage = {
    key: "1",
    image: "/img/tour/flyboarding/flyboarding.webp"
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
                  <p className='w-full text-left'>1 Hours</p>
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
                  <p className='w-full text-left'>3999</p>
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
        "/img/tour/flyboarding/flyboaedingthree.jpg",
        "/img/tour/flyboarding/flyboardingitwo.jpg",
        "/img/tour/flyboarding/flyboardingone.jpg"
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
                                href={`https://api.whatsapp.com/send?phone=${+917410150610}&text=${encodeURIComponent(`Hello, *The Renuka Trips Goa*, I would like to know about *Flyboarding*`)}`}
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
            <p className='mb-4 text-base'>Before indulging in the thrill of extreme water sports in Goa, an experienced instructor will provide a comprehensive briefing and guide you through the activity to ensure your safety and comfort.</p>
            <p className='mb-4 text-base'>Experience the adrenaline rush as you soar up to 30 feet in the air on a Flyboard and enjoy the sensation of flying like a superhero and swimming like a dolphin within a matter of minutes with full thrust.</p>
            <p className='mb-4 text-base'>Take in the picturesque view of nature&apos;s serenity as you engage in this exhilarating activity, with the Chapora river and Calangute Beach offering pristine views that are sure to leave a lasting impression.</p>
          </div>
        </>
      )
    }
  ]

  const estination = [
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
    subcategory: "Flyboarding"
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

            <p className='font-semibold mt-3 mb-3'>To ensure a hassle-free experience, it&apos;s recommended to arrive at the activity location 15 minutes prior to the scheduled starting time.</p>
            <p className='font-semibold mt-3 mb-3'>Once you have been briefed by the expert instructors, it&apos;s time to gear up and prepare for the ultimate adrenaline rush with the Goa Flyboarding experience. For your safety, you will be provided with a safety helmet, a life jacket, and equipped with jet propulsion.</p>
            <p className='font-semibold mt-3 mb-3'>Using a long hose, the board is designed to send riders soaring upwards to an impressive height of approximately 30 feet, making for an exhilarating experience that is sure to leave you breathless.</p>
            <p className='font-semibold mt-3 mb-3'>You will have a chance to experience the thrill of flying above the sea for a good 10 to 15 minutes, all while the hydropower is closely monitored by a trained instructor to ensure a safe and enjoyable experience.</p>
            <p className='font-semibold mt-3 mb-3'>The powerful jet propeller will also allow you to dive into the crystal-clear waters, exploring the depths of the pristine waters and creating an unforgettable experience that will stay with you for a lifetime.</p>
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
            {fetchprice?.adult ? <div><span className='font-semibold'>Adults:</span> {fetchprice?.adult}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.youth ? <div><span className='font-semibold'>Youth (7+) </span>: {fetchprice?.youth}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.percouple ? <div><span className='font-semibold'>Per Couple: </span>{fetchprice?.percouple}/-</div> : " "}
          </div>
          {/* <div className='mt-3'>
            {fetchprice?.childbelowseven ? <div><span className='font-semibold'>child (below 7 years) </span>: {fetchprice?.childbelowseven}/-</div> : " "}
          </div> */}
          <div className='mt-3'>
            {fetchprice?.childthreetoseven ? <div><span className='font-semibold'>Child (3 to 7 years): </span>{fetchprice?.childthreetoseven}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.childabovethree ? <div><span className='font-semibold'>Child (Above 3 years): </span>{fetchprice?.childabovethree}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.childabovetwelve ? <div><span className='font-semibold'>Child (Below 12 years): </span>{fetchprice?.childabovetwelve}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.childabovefour ? <div><span className='font-semibold'>Child (Above 4 years): </span>{fetchprice?.childabovefour}/-</div> : " "}
          </div>
        </>)
    }
  ]

  const imgSection = "/img/tour/flyboarding/flyboarding.jpg"

  return (
    <div><Adventuresboatparty title={"Flyboarding"} bgimage={bgimage} breadcrump={breadcrump} slides={slides} sectiontwo={sectiontwo} description={description} accordionData={accordionData} imgSection={imgSection}/></div>
  )
}

export default Flyboarding;
