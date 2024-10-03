'use client'
import React, { useEffect, useState } from 'react';
import TourCombo from "@/_components/tour/sub_category/TourCombo"
// import TourCombo from "@/app/(website)/tour/island-trip/TourCombo"

const TripIsland = () => {

  const [result, setResult] = useState({})

  const data = [
    {
      key: "1",
      area: "Detailed Itinerary",
      description: "Grand Island has a stunning underwater world which the tourists will get to experience in this combo package. The journey will start from either of the Calangute /Baga / Candolim/ Arpora beach from where the tourists will be picked early morning. One the tourist reach Grand Island, they will be taken via a motorboat towards the driving area in the beach. In the beach, the people will involved in various adventurous water activities like banana boat ride, bumper boat ride and island tour.",
      detailedDesc: (<>
        <div className="pt-8">
          <h1 className="text-lg font-bold text-left mb-6">Tour Package Includes</h1>

          <div className="space-y-8">
          
            <div>
              <ul className="list-disc list-inside ml-6 text-gray-700 mt-2 space-y-1">
                <li>Pick-up and Drop from Hotel</li>
                <li>Snorkelling</li>
                <li>Fishing</li>
                <li>Dolphins Sighting</li>
                <li>Beer, Water & Soft Drinks</li>
                <li>Fruits & Snacks</li>
                <li>Barbeque (Fish/Chicken)</li>
                <li>Buffet (Veg/Non-Veg)</li>
              </ul>
            </div>


            {/* Pick-Up Points */}
            <div className='pb-4'>
              <h2 className="text-md font-semibold flex items-center gap-2">

                Pick-Up Points
              </h2>
              <p className="ml-6 text-gray-700 mt-2">Nagoa / Arpora / Baga / Calangute / Candolim</p>
            </div>
          </div>
        </div>
      </>)
    },
    {
      key: "2",
      area: "Scuba Diving",
      tagline: "Scuba Diving in Grand Island: Discovering Underwater Marvels",
      img: "/img/tour/island-trip/scuba-diving.jpg",
      description: "Grand Island, located off the coast of Goa, is a paradise for scuba diving enthusiasts. With its pristine waters and stunning underwater landscapes, this destination offers a remarkable diving experience. Dive into the depths of the Arabian Sea and witness a vibrant marine world teeming with colorful coral reefs and a diverse array of marine life, including tropical fish, sea turtles, and even occasional sightings of dolphins. The underwater visibility is excellent, making it an ideal spot for both beginners and experienced divers. Immerse yourself in the wonders of Grand Island, where every dive is an adventure to remember."
    },
    {
      key: "3",
      area: "Parasailing",
      tagline: "Parasailing Ride in Goa: Soaring Above the Coastal Beauty",
      img: "/img/tour/island-trip/parasailing.jpg",
      description: "For those seeking a bird's-eye view of Goa's stunning coastline, a parasailing ride is an absolute must. Imagine being harnessed to a colorful parachute as you ascend into the sky, towed by a speedboat below. As you soar high above the azure waters, you'll be treated to breathtaking panoramic vistas of sandy beaches, swaying palm trees, and the vast expanse of the Arabian Sea. Feel the rush of adrenaline as you glide through the air, experiencing a unique sense of freedom and tranquility. Parasailing in Goa is an unforgettable adventure that allows you to embrace the beauty of the coastal landscape from a whole new perspective."
    },
    {
      key: "4",
      area: "Jet Ski Ride",
      tagline: "Jet Ski Ride in Goa: Soaring Through the Waves",
      img: "/img/tour/island-trip/jet-ski.jpg",
      description: "For those seeking an exhilarating water adventure in Goa, the Jet Ski Ride is an absolute must-try. Hop on a sleek and powerful jet ski and get ready to feel the adrenaline surge through your veins. With the wind in your face and the saltwater spraying beneath you, zoom across the sparkling waves of the Arabian Sea. Experience the thrill of maneuvering your own personal watercraft as you navigate through the open waters. Whether you're a novice or a seasoned rider, the Jet Ski Ride in Goa promises an adrenaline-fueled experience that will leave you with a sense of freedom and a rush of excitement. Get ready to soar through the waves and create memories that will last a lifetime."
    },
    {
      key: "5",
      area: "Banana Boat Ride",
      tagline: "Banana Boat Ride in Goa: Fun-Filled Thrills on the Waves",
      img: "/img/tour/island-trip/banana-boat-ride.jpg",
      description: "If you're seeking a dose of adventure and thrill on the waters of Goa, then the Banana Boat Ride is just for you. This exciting activity involves riding a banana-shaped inflatable boat that is pulled by a speedboat, bouncing and gliding over the waves. Perfect for groups and families, the Banana Boat Ride guarantees laughter and excitement as you try to hold on while the boat twists and turns. Feel the refreshing splash of seawater and the wind in your hair as you enjoy this thrilling experience. Be prepared for a memorable and exhilarating ride that will leave you with a big smile and cherished memories of your time in Goa."
    },
    {
      key: "6",
      area: "Bumper Ride",
      tagline: "Bumper Ride in Goa: A Wild Water Adventure",
      img: "/img/tour/island-trip/bumper-boat-ride.jpg",
      description: "Looking for an adrenaline-pumping water activity in Goa? Look no further than the Bumper Ride. Hop aboard an inflatable bumper tube and get ready for a wild and bouncy ride on the waves. As a speedboat pulls you along, you'll experience exhilarating twists, turns, and unexpected splashes. Hold on tight as the boat skims across the water, creating waves that add to the thrill. Whether you're with friends or family, the Bumper Ride promises a fun-filled adventure that will leave you laughing and craving for more. Gear up for an unforgettable water experience that will add an extra splash of excitement to your Goa holiday."
    },
    {
      key: "7",
      area: "Speed Boat",
      tagline: "Speed Boat Ride in Goa: A High-Speed Thrill on the Water",
      img: "/img/tour/island-trip/speed-boat-ride.jpg",
      description: "If you're seeking an exhilarating experience on the waters of Goa, look no further than the Speed Boat Ride. Hop aboard a powerful speedboat and prepare for an adrenaline-fueled adventure. Feel the rush as the boat accelerates, slicing through the waves with speed and precision. Hold on tight as the wind rushes through your hair and the stunning coastal views blur past you. Whether you're craving a solo adventure or enjoying the ride with friends and family, the Speed Boat Ride in Goa promises an unforgettable thrill that will leave you craving for more. Get ready to embrace the excitement and make memories that will last a lifetime."
    },
    {
      key: "8",
      area: "Services",
      description: "",
      detailedDesc: (<>
        <div className='font-semibold'>Flat Rs.449 Off on Pre Bookings</div>
        {result?.adult ? (
          <div>
            <span className="font-semibold">Adults (16+)</span>: {result?.adult}/-
          </div>
        ) : " "}
        {result?.youth ? (
          <div>
            <span className="font-semibold">Youth (7+)</span>: {result?.youth}/-
          </div>
        ) : ""}
        {result?.childbelowseven ? (
          <div>
            <span className="font-semibold">Child (below 7 years)</span>: {result?.childbelowseven}/-
          </div>
        ) : ""}
        {result?.childthreetoseven ? (
          <div>
            <span className="font-semibold">Child (3 to 7 years)</span>: {result?.childthreetoseven}/-
          </div>
        ) : ""}
        {result?.childabovethree ? (
          <div>
            <span className="font-semibold">Child (Above 3 years)</span>: {result?.childabovethree}/-
          </div>
        ) : ""}
        {result?.childabovetwelve ? (
          <div>
            <span className="font-semibold">Child (Above 12 years)</span>: {result?.childabovetwelve}/-
          </div>
        ) : ""}
        {result?.childabovefour ? (
          <div>
            <span className="font-semibold">Child (Above 4 years)</span>: {result?.childabovefour}/-
          </div>
        ) : ""}

      </>)
    },
  ]

  const SLIDES = [
    "/img/tour/island-trip/carousel/1.jpg",
    "/img/tour/island-trip/carousel/2.jpg",
    "/img/tour/island-trip/carousel/3.jpg",
    "/img/tour/island-trip/carousel/4.jpg",
    "/img/tour/island-trip/carousel/5.jpg",
  ]
  const OPTIONS = { loop: true, duration: 30 }

  const bookingSection = {
    startTime: "07:00 AM",
    duration: "8 Hours",
    location: "Grand Island (GOA)",
    price: result ? result?.adult : ""
  }

  const destination = ['Grand Island', "(GOA)"];

  const description = (<>
    <span className='block '>Ilha Grande popularly known as the Grande island Or Bat Island, it is one of the most exotic locations for watersports like snorkeling in Goa.</span>
    <span className='block pt-4 '>The only way to reach Ilha Grande is by sailing on a boat. A Complete Boat tour to the Island includes snorkeling, fishing, and a scrumptious lunch. The aroma of the barbequed fish is too magnetic. One can enjoy swimming after lunch. You will be served drinks and fruits on board. Bat island is an ideal picnic spot.  If you are lucky, you will spot dolphins twirling in their natural habitat. A lot of tour operators offer this trip at pocket-friendly prices.</span></>)


  const initialFxn = async () => {

    try {

      const response = await fetch(`/api/category?maincategory=${"Tour"}&subcategory=${"Island Trip Goa"}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();

      // console.log("Result::::>", result.resultByCategory)
      setResult(result?.resultByCategory ? result?.resultByCategory[0] : {})

    } catch (error) {

    }
  }

  useEffect(() => {

    initialFxn()

  }, [])

  const imgSection = "/img/tour/island-trip/sport-imagee.jpg"

  const action = "tour"

  const off = "449"

  const inclusions = "Island Trip Goa"

  return (
    <>
      <TourCombo data={data} title={"Island Trip Goa"} titleImg={`/img/tour/island-trip/trip-island-goa.jpeg`} SLIDES={SLIDES} OPTIONS={OPTIONS} bookingSection={bookingSection} description={description} destination={destination} imgSection={imgSection} action={action} off={off} inclusions={inclusions}/>
    </>
  );
};

export default TripIsland;
