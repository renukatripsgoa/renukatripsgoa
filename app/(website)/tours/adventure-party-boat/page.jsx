"use client"
import React, { useEffect, useState } from 'react'
import Adventuresboatparty from '@/_components/Adventuresboatparty'
import { BadgeCheck, CircleCheck, Clock, Hourglass, IndianRupee, MapPinHouse } from 'lucide-react'
import { Button } from "@nextui-org/react";
import axios from 'axios'
import Link from 'next/link';

const Adventurepartyboat = () => {

  const bgimage = {
    key: "1",
    image: "/img/boatparty2.jpeg"
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
                  <p className='w-full text-left'>1:00 PM</p>
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
        "/img/tour/adventure-party-boat/1.jpg",
        "/img/tour/adventure-party-boat/2.jpg",
        "/img/tour/adventure-party-boat/3.jpg",
        "/img/tour/adventure-party-boat/4.jpg",
        "/img/tour/adventure-party-boat/5.jpeg",
      ]
      // image: [
      //   "/img/scuba.jpg",
      //   "/img/jetski.jpg",
      //   "/img/parasailing.jpg",
      //   "/img/sliding.jpg"

      // ]
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
                            href={`https://api.whatsapp.com/send?phone=${+917410150610}&text=${encodeURIComponent(`Hello, *The Renuka Trips Goa*, I would like to know about *Adventures Boat Party*`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                <Button
                  color="primary"
                  className='text-center'
                >
                  Book Your Adventure Today
                </Button>
                  </Link>
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
            <p className='mb-4 text-base'>Forget your worries and sorrows of life and get ready for a roller coaster Adventure Boat Cruise when in Goa. In just four hours, you will have the time of your life by experiencing Goa’s popular Adventure Boat Cruise and cherish these memories throughout your life.</p>
            <p className='mb-4 text-base'>Witness the breathtaking sunset and explore the marvelous beauty of Goa from the boat. You will ride in a double-deck catamaran which has 50 seats. This cruise trip has gained popularity over the years and is much in demand among the tourists. When you get sightseeing and adventure water sports all in one place, your joy will know no bounds.</p>
            <p className='mb-4 text-base'>You will live each moment in these four hours and never feel a dull moment. Interaction with fellow passengers will keep you entertained all throughout helping you form new bonds. Along with water sports and sightseeing, the music won’t be drab and thereby will give you the feel of a boat party. Seeing is believing and once you have the fun adventure of your life on this boat tour, you won’t get tired of praising this epic journey.</p>
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
                <p >Kayaking</p>
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
                <p >Paddle Boat</p>
              </div>
            </div>

            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
              <div className='w-[10%] md:w-[12%]'>
                <BadgeCheck color='green' />
              </div>
              <div className=' w-[80%]'>
                <p >Sailing on Sup Board</p>
              </div>
            </div>

            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
              <div className='w-[10%] md:w-[12%]'>
                <BadgeCheck color='green' />
              </div>
              <div className=' w-[80%]'>
                <p >Dolphin Spotting</p>
              </div>
            </div>

            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
              <div className='w-[10%] md:w-[12%]'>
                <BadgeCheck color='green' />
              </div>
              <div className=' w-[80%]'>
                <p >Sight Seeing</p>
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
                <p >Live DJ</p>
              </div>
            </div>

            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
              <div className='w-[10%] md:w-[12%]'>
                <BadgeCheck color='green' />
              </div>
              <div className=' w-[80%]'>
                <p >Chilled Beers</p>
              </div>
            </div>

            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
              <div className='w-[10%] md:w-[12%]'>
                <BadgeCheck color='green' />
              </div>
              <div className=' w-[80%]'>
                <p >Soft Drinks</p>
              </div>
            </div>

            <div className='flex justify-start md:justify-center md:gap-2 items-center'>
              <div className='w-[10%] md:w-[12%]'>
                <BadgeCheck color='green' />
              </div>
              <div className=' w-[80%]'>
                <p >Lunch (Veg/Non Veg)</p>
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
    subcategory: "Adventure Party Boat"
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
            <p>There are different Boat trips available in Goa. Adventure party boat is one such awesome boat trip in Goa which will take your party in Goa to a different level. This trip unlike other boat trips in Goa like Dolphin Spotting, Fishing Boat , Grande Island Boat Trip has on board Live Dj setup with dance floor. The Beautiful 40-50 people capacity Catamaran Boat operates everyday in Mandovi river near Panjim city of Goa. Beside being a party boat it also offers different adventure watersports like Water Kayaking, Sailing on SUP Board, Paddle Boat, Snorkeling ( Seasonal), Speed Boat Ride,Bumper Ride and Fishing. 3 hours of Adventure Boat Trip covers 30+ famous sightseeing points in around Panjim, Brittona, Resimangos Fort and surrounding areas. This trip can be enjoyed by Non Swimmers too as we have all floating equipment and professional Instructor to take care of you while you are in water. Beside adventure activities, trip also offer some light Snacks, Meal (Veg/NonVeg) and Drinks ( Limited soft drinks and Beers) Boat trip is fully insured, follows all government rules and regulations, proper  licensing, First aid kit and other safety measures. The Trip is ideal for people looking for some god 2-3 hours of boating with watersports. The Boat is also available on private basis (Charter) for a group of 30+ people. ( subjected to availability at the time of bookings)</p>
            <h5 className="font-semibold mt-3 mb-3">Included</h5>

            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              <p>Sailing on SUP Board</p>
              <p>Paddle Boat</p>
              <p>Snorkeling (seasonal)</p>
              <p>Sightseeing</p>
              <p>Snacks & Drinks</p>
              <p>Chilled Beers</p>
              <p>Meal ( Veg/NonVeg)</p>
              <p>Bumper Ride(extra payable)</p>
              <p>Speed Boat Ride(extra payable)</p>
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
            Flat Rs.449 Off on Pre Bookings
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

      const imgSection = "/img/tour/adventure-party-boat/adventurepartyboat.jpg"

  return (
    <div>
      <Adventuresboatparty title={"Adventures Boat Party"} bgimage={bgimage} slides={slides} breadcrump={breadcrump} sectiontwo={sectiontwo} description={description} inclusion={inclusion} destination={destination} accordionData={accordionData} imgSection={imgSection} />
    </div>
  )
}

export default Adventurepartyboat;
