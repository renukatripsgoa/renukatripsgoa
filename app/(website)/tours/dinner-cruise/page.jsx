"use client"
import React, { useEffect, useState } from 'react'
import Adventuresboatparty from '@/_components/Adventuresboatparty'
import { BadgeCheck, CircleCheck, Clock, Hourglass, IndianRupee, MapPinHouse } from 'lucide-react'
import { Button } from "@nextui-org/react";
import axios from 'axios'
import Link from 'next/link';

const Dinnercruise = () => {

  const bgimage = {
    key: "1",
    // image: "/img/tour/dinner-cruise/dinnercruisee.jpg"
    image: "/img/tour/dinner-cruise/hq720.jpg"
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
                  <p className='w-full text-left'>9:00 PM</p>
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
                  <p className='w-full text-left'>3 Hours</p>
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
                  <p className='w-full text-left'>Panjim</p>
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
                  <p className='w-full text-left'>1999</p>
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
        "/img/tour/dinner-cruise/dinnercruiseone.jpeg",
        "/img/tour/dinner-cruise/dinnercruisetwo.jpg",
        "/img/tour/dinner-cruise/dinnercruisethreee.jpg",
        "/img/tour/dinner-cruise/dinnercruisefour.jpeg",
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
                            href={`https://api.whatsapp.com/send?phone=${+917410150610}&text=${encodeURIComponent(`Hello, *The Renuka Trips Goa*, I would like to know about *Dinner Cruise*`)}`}
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
            <p className='mb-4 text-base'>Dinner Cruises have their own charm under the silver of the moonlight. Take a break from the chaotic lifestyle and feel peaceful with the calm and serene Goan waters. Sail through the shimmering waters of the Mandovi River and enjoy the sun sinking away to calm your spirits with your loved ones by signing-up for the Romantic Dinner Cruise in Goa. This is a perfect getaway for couples where they can steal some romantic time in Goa! </p>
          </div>
        </>
      )
    }
  ]

  const inclusion = [

    {
      key: "1",
      inclusionpara: (
        <>
          <h4 className='text-xl font-semibold mb-4 text-[#003776] md:text-3xl'>Inclusion</h4>
          <div className='w-full grid-cols-1 grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4'>
            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
              <div className='w-[10%] md:w-[12%]'>
                <BadgeCheck color='green' />
              </div>
              <div className=' w-[80%]'>
                <p >Ac Coach Pickup and Drop</p>
              </div>
            </div>

            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
              <div className='w-[10%] md:w-[12%]'>
                <BadgeCheck color='green' />
              </div>
              <div className=' w-[80%]'>
                <p >Bollywood DJ Party Music</p>
              </div>
            </div>

            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
              <div className='w-[10%] md:w-[12%]'>
                <BadgeCheck color='green' />
              </div>
              <div className=' w-[80%]'>
                <p >3 hrs Cruising</p>
              </div>
            </div>

            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
              <div className='w-[10%] md:w-[12%]'>
                <BadgeCheck color='green' />
              </div>
              <div className=' w-[80%]'>
                <p >Entertainment Games with Prizes</p>
              </div>
            </div>

            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
              <div className='w-[10%] md:w-[12%]'>
                <BadgeCheck color='green' />
              </div>
              <div className=' w-[80%]'>
                <p >Buffet Dinner (Veg / Non-veg)</p>
              </div>
            </div>

            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
              <div className='w-[10%] md:w-[12%]'>
                <BadgeCheck color='green' />
              </div>
              <div className=' w-[80%]'>
                <p >Soft Drink</p>
              </div>
            </div>

            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
              <div className='w-[10%] md:w-[12%]'>
                <BadgeCheck color='green' />
              </div>
              <div className=' w-[80%]'>
                <p >2 Chilled Beers or any house Brand Whiskey</p>
              </div>
            </div>

            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
              <div className='w-[10%] md:w-[12%]'>
                <BadgeCheck color='green' />
              </div>
              <div className=' w-[80%]'>
                <p >Group Dance</p>
              </div>
            </div>
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
                <p >Panjim</p>
              </div>
            </div>

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
    subcategory: "Dinner Cruise"
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
            <h4 className="font-semibold mt-3 mb-3">Overview</h4>
            <p>The Dinner Cruise Party in Goa offers an unparalleled experience that seamlessly blends music, dance, scrumptious food, and a touch of Goan culture, creating a magical atmosphere that will stay with you long after the evening ends.</p>

            <p className='font-semibold mt-3 mb-3'>Activity Location: <span className='font-normal'> Mandovi River, Panaji, Goa</span></p>
            <p className='font-semibold mt-3 mb-3'>Pick-up and Drop-off Locations: <span className='font-normal'> Your hotel location must be centrally located in Baga, Calangute, Candolim, Panjim</span></p>
            <p className='font-semibold mt-3 mb-3'>Pick-up Time: <span className='font-normal'> 7:00 pm to 7:30 pm</span ></p>
            <p className='font-semibold mt-3 mb-3'>Party Duration: <span className='font-normal'> 3.00 Hrs.</span></p>
            <p className='font-semibold mt-3 mb-3'>Return Time: <span className='font-normal'> 12:00 AM</span></p>

            <h5 className="font-semibold mt-3 mb-3"> We have also four type of cruises.</h5>

            <ul className="mb-3">
              <li>Disco Cruise: Unleash Your Inner Dancing Star</li>
              <li>Family/Couple Cruise: A Memorable Journey for All Ages</li>
              <li>Romantic Cruise: Sail into the Realm of Love</li>
              <li>Luxury Premium Cruise: A Journey Beyond Expectations For cruise inquiries or assistance, please don&apos;t hesitate to contact us. We&apos;re here to help make your dream cruise a reality.</li>
            </ul>

            <h5 className="font-semibold mt-3 mb-3"> Included</h5>


            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              <p>Live DJ Music</p>
              <p>AC Dance Floor</p>
              <p>3 hrs Cruising</p>
              <p>Buffet Dinner (Veg / Non-veg)</p>
              <p>Soft Drink</p>
              <p>2 Chilled Beers or any house Brand Whiskey</p>
              <p>Group Dance</p>
              <p>Kunbi Dance</p>
              <p>Entertainment Games with Prizes</p>
            </div>
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
          <div className='mt-3'>
            {fetchprice?.childbelowseven ? <div><span className='font-semibold'>child (below 7 years) </span>: {fetchprice?.childbelowseven}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.childthreetoseven ? <div><span className='font-semibold'>child (3 to 7 years)</span> : {fetchprice?.childthreetoseven}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.childabovethree ? <div><span className='font-semibold'>child (above 3 years) </span>: {fetchprice?.childabovethree}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.childabovetwelve ? <div><span className='font-semibold'>child (below 12 years)</span> : {fetchprice?.childabovetwelve}/-</div> : " "}
          </div>
          <div className='mt-3'>
            {fetchprice?.childabovefour ? <div><span className='font-semibold'>child (above 4 years) </span>: {fetchprice?.childabovefour}/-</div> : " "}
          </div>
        </>)
    }
  ]

  const imgSection = "/img/tour/dinner-cruise/dinnercruisesection.jpg"

  const off = "449"

  return (
    <div><Adventuresboatparty title={"Dinner Cruise"} bgimage={bgimage} breadcrump={breadcrump} slides={slides} sectiontwo={sectiontwo} description={description} inclusion={inclusion} destination={destination} accordionData={accordionData} imgSection={imgSection} off={off}/></div>
  )
}

export default Dinnercruise;
