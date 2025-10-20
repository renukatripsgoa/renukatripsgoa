'use client'
import React, { useEffect, useState } from 'react';
import TourCombo from "@/_components/tour/sub_category/TourCombo"
import { Dot } from 'lucide-react';

const ScubaDivingPackageOne = () => {

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
            {/* Pick-Up & Drop */}
            <div>
              <h2 className="text-md font-semibold flex items-center gap-2">

                Pick-Up & Drop
              </h2>
              <ul className="list-disc list-inside ml-6 text-gray-700 mt-2">
                <li>Pick-up & drop from your hotel (7:30 to 8:00 AM)</li>
                <li>20-minute road journey from your hotels</li>
              </ul>
            </div>

            {/* Boat Journey */}
            <div>
              <h2 className="text-md font-semibold flex items-center gap-2">

                Boat Journey
              </h2>
              <ul className="list-disc list-inside ml-6 text-gray-700 mt-2 space-y-1">
                <li>38 KM boat journey to Grand Island</li>
                <li>Light & healthy breakfast provided</li>
                <li>Dolphin show, sea birds viewing & sightseeing</li>
                <li>
                  Visit to various attractions by boat ride:
                  <ul className="list-disc list-inside ml-6 space-y-1 mt-1">
                    <li>Lighthouse</li>
                    <li>Aguada Fort</li>
                    <li>Centre Jail</li>
                    <li>Miramar Beach</li>
                    <li>Dona Paula Beach</li>
                    <li>Governor House</li>
                    <li>Monkey Beach</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Scuba Diving */}
            <div>
              <h2 className="text-md font-semibold flex items-center gap-2">

                Scuba Diving
              </h2>
              <ul className="list-disc list-inside ml-6 text-gray-700 mt-2 space-y-1">
                <li>5-minute training in shallow water</li>
                <li>20 to 25 minutes of scuba diving underwater</li>
                <li>Scuba diving with PADI instructor</li>
                <li>See 30 kinds of fish and sea corals</li>
                <li>Full HD videos of your scuba diving experience provided (compulsory)</li>
              </ul>
            </div>

            {/* Sight Seeing */}
            {/* <div>
              <h2 className="text-md font-semibold flex items-center gap-2">

                Sight Seeing
              </h2>
              <ul className="list-disc list-inside ml-6 text-gray-700 mt-2 space-y-1">
                <li>Dolphins</li>
                <li>Sea Birds</li>
                <li>Light House</li>
                <li>Aguada Fort</li>
                <li>Central Jail Aguada</li>
                <li>Miramar Beach</li>
                <li>Dona Paula Beach</li>
                <li>Governor House</li>
                <li>Monkey Beach</li>
              </ul>
            </div> */}

            {/* Buffet Lunch */}
            <div>
              <h2 className="text-md font-semibold flex items-center gap-2">

                Buffet Lunch
              </h2>
              <ul className="list-disc list-inside ml-6 text-gray-700 mt-2 space-y-1">
                <li>Chicken Masala</li>
                <li>Mix Vegetable</li>
                <li>Dal Fry</li>
                <li>Rice</li>
                <li>Chapati</li>
                <li>Salad</li>
                <li>2 Beers</li>
                <li>Soft drink / Mineral water</li>
                <li>Fruits</li>
              </ul>
            </div>

            {/* Water Sports Package */}
            <div>
              <h2 className="text-md font-semibold flex items-center gap-2">

                Activities
              </h2>
              <ul className="list-disc list-inside ml-6 text-gray-700 mt-2 space-y-1">
                <li>Scuba Diving</li>
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
      img: "/img/tour/scuba-combo/scuba-diving.jpg",
      description: "Grand Island, located off the coast of Goa, is a paradise for scuba diving enthusiasts. With its pristine waters and stunning underwater landscapes, this destination offers a remarkable diving experience. Dive into the depths of the Arabian Sea and witness a vibrant marine world teeming with colorful coral reefs and a diverse array of marine life, including tropical fish, sea turtles, and even occasional sightings of dolphins. The underwater visibility is excellent, making it an ideal spot for both beginners and experienced divers. Immerse yourself in the wonders of Grand Island, where every dive is an adventure to remember."
    },
    // {
    //   key: "3",
    //   area: "Parasailing",
    //   tagline: "Parasailing Ride in Goa: Soaring Above the Coastal Beauty",
    //   img: "/img/tour/scuba-combo/parasailing.jpg",
    //   description: "For those seeking a bird's-eye view of Goa's stunning coastline, a parasailing ride is an absolute must. Imagine being harnessed to a colorful parachute as you ascend into the sky, towed by a speedboat below. As you soar high above the azure waters, you'll be treated to breathtaking panoramic vistas of sandy beaches, swaying palm trees, and the vast expanse of the Arabian Sea. Feel the rush of adrenaline as you glide through the air, experiencing a unique sense of freedom and tranquility. Parasailing in Goa is an unforgettable adventure that allows you to embrace the beauty of the coastal landscape from a whole new perspective."
    // },
    // {
    //   key: "4",
    //   area: "Jet Ski Ride",
    //   tagline: "Jet Ski Ride in Goa: Soaring Through the Waves",
    //   img: "/img/tour/scuba-combo/jet-ski.jpg",
    //   description: "For those seeking an exhilarating water adventure in Goa, the Jet Ski Ride is an absolute must-try. Hop on a sleek and powerful jet ski and get ready to feel the adrenaline surge through your veins. With the wind in your face and the saltwater spraying beneath you, zoom across the sparkling waves of the Arabian Sea. Experience the thrill of maneuvering your own personal watercraft as you navigate through the open waters. Whether you're a novice or a seasoned rider, the Jet Ski Ride in Goa promises an adrenaline-fueled experience that will leave you with a sense of freedom and a rush of excitement. Get ready to soar through the waves and create memories that will last a lifetime."
    // },
    // {
    //   key: "5",
    //   area: "Banana Boat Ride",
    //   tagline: "Banana Boat Ride in Goa: Fun-Filled Thrills on the Waves",
    //   img: "/img/tour/scuba-combo/banana-boat-ride.jpg",
    //   description: "If you're seeking a dose of adventure and thrill on the waters of Goa, then the Banana Boat Ride is just for you. This exciting activity involves riding a banana-shaped inflatable boat that is pulled by a speedboat, bouncing and gliding over the waves. Perfect for groups and families, the Banana Boat Ride guarantees laughter and excitement as you try to hold on while the boat twists and turns. Feel the refreshing splash of seawater and the wind in your hair as you enjoy this thrilling experience. Be prepared for a memorable and exhilarating ride that will leave you with a big smile and cherished memories of your time in Goa."
    // },
    // {
    //   key: "6",
    //   area: "Bumper Ride",
    //   tagline: "Bumper Ride in Goa: A Wild Water Adventure",
    //   img: "/img/tour/scuba-combo/bumper-boat-ride.jpg",
    //   description: "Looking for an adrenaline-pumping water activity in Goa? Look no further than the Bumper Ride. Hop aboard an inflatable bumper tube and get ready for a wild and bouncy ride on the waves. As a speedboat pulls you along, you'll experience exhilarating twists, turns, and unexpected splashes. Hold on tight as the boat skims across the water, creating waves that add to the thrill. Whether you're with friends or family, the Bumper Ride promises a fun-filled adventure that will leave you laughing and craving for more. Gear up for an unforgettable water experience that will add an extra splash of excitement to your Goa holiday."
    // },
    // {
    //   key: "7",
    //   area: "Speed Boat",
    //   tagline: "Speed Boat Ride in Goa: A High-Speed Thrill on the Water",
    //   img: "/img/tour/scuba-combo/speed-boat-ride.jpg",
    //   description: "If you're seeking an exhilarating experience on the waters of Goa, look no further than the Speed Boat Ride. Hop aboard a powerful speedboat and prepare for an adrenaline-fueled adventure. Feel the rush as the boat accelerates, slicing through the waves with speed and precision. Hold on tight as the wind rushes through your hair and the stunning coastal views blur past you. Whether you're craving a solo adventure or enjoying the ride with friends and family, the Speed Boat Ride in Goa promises an unforgettable thrill that will leave you craving for more. Get ready to embrace the excitement and make memories that will last a lifetime."
    // },
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
    "/img/tour/scuba-combo/carousel/1.jpg",
    "/img/tour/scuba-combo/carousel/2.jpg",
    "/img/tour/scuba-combo/carousel/3.jpg",
    "/img/tour/scuba-combo/carousel/4.jpg",
    "/img/tour/scuba-combo/carousel/5.jpg",
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
    <span className='block '>Scuba diving in Goa is an activity with which you can not only take a look at the oceanic beds but can also witness the underwater kingdom. Right from the vibrant variants of marine life to the excellent range of diving spots, here you can pick as per your requirements and create everlasting memories with your friends and family. Be it the good climatic conditions or the affordable diving options, here you can find them all. Gape at the coral reefs of ocean depths and become a certified PADI diver. Whether you are a non-swimmer or a beginner you need not worry as a few sets of instructions are just enough for you!</span>
    <span className='block pt-4 '>Scuba Diving Goa conducts all scuba trips and courses like the Advanced Open Water or Adventure Diver Certification. These centers provide the scuba trip with or without the training. Scuba Diving is a multi-location water sport being offered at various places.</span></>)


  const initialFxn = async () => {

    try {

      const response = await fetch(`/api/category?maincategory=${"Scuba Diving At Grand Island Packages"}&subcategory=${"Scuba Diving Package - 1"}`,
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

  const inclusions = "group"

  const imgSection = "/img/scubadiving-packages-goa/scubadiving-package-1/scubadivingatgrandisland.jpeg"

  const action = "group"

  const off = "999"

  return (
    <>
      <TourCombo data={data} title={"Scuba Diving At Grand Island"} titleImg={`/img/scubadiving-packages-goa/scubadiving-package-1/Oceanographer.jpeg`} SLIDES={SLIDES} OPTIONS={OPTIONS} bookingSection={bookingSection} description={description} destination={destination} inclusions={inclusions} imgSection={imgSection} action={action} off={off} />
    </>
  );
};

export default ScubaDivingPackageOne;