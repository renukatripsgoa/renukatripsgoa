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
      <TourCombo data={data} title={"Island Trip Goa"} titleImg={`/img/tour/island-trip/grand-island-Goa.jpg`} SLIDES={SLIDES} OPTIONS={OPTIONS} bookingSection={bookingSection} description={description} destination={destination} imgSection={imgSection} action={action} off={off} inclusions={inclusions}/>
    </>
  );
};

export default TripIsland;
