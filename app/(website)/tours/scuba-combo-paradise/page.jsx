'use client'
import React, { useEffect, useState } from 'react';
import TourCombo from "@/_components/tour/sub_category/TourCombo"

const ScubaCombooParadise = () => {

  const [result, setResult] = useState({})

  const data = [
    {
      key: "1",
      area: "Detailed Itinerary",
      description: "",
      detailedDesc: (<>
        <div className="pt-8">
          <h1 className="text-lg font-bold text-left mb-6">Scuba Diving Experience at Paradise Island</h1>
          <p className="text-gray-700 mb-4">
            The scuba diving experience at Paradise Island is a PADI (Professional Association of Diving Instructors) dive, which means that participants receive training before they dive. The training is conducted by certified PADI instructors, who provide detailed instructions on how to use the diving equipment and how to communicate underwater.
          </p>
          <p className="text-gray-700 mb-4">
            Once the training is complete, the participants are taken underwater by a PADI dive master who guides them through the dive. The dive master is an experienced professional who is well-versed with the diving site and knows how to ensure a safe and enjoyable diving experience.
          </p>
          <p className="text-gray-700 mb-4">
            The underwater world at Paradise Island is truly mesmerizing. The crystal-clear water, colorful coral reefs, and exotic marine life make for an unforgettable experience. Divers can witness an array of marine life, including schools of fish, octopuses, turtles, and even sharks!
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-bold text-left mb-6">Activities Included in Trip</h2>
          <ul className="space-y-2">
            <li className="bg-blue-50 font-medium py-2 px-4 rounded-lg shadow-sm hover:bg-blue-100 w-36">
              {"Scuba Diving"}
            </li>
            <li className="bg-blue-50 font-medium py-2 px-4 rounded-lg shadow-sm hover:bg-blue-100 w-44">
              {"Banana Boat Ride"}
            </li>
            <li className="bg-blue-50 font-medium py-2 px-4 rounded-lg shadow-sm hover:bg-blue-100 w-36">
              {"Bumper Ride"}
            </li>
            <li className="bg-blue-50 font-medium py-2 px-4 rounded-lg shadow-sm hover:bg-blue-100 w-36">
              {"Jet Skiing"}
            </li>
            <li className="bg-blue-50 font-medium py-2 px-4 rounded-lg shadow-sm hover:bg-blue-100 w-36">
              {"Parasailing"}
            </li>
          </ul>
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
    {
      key: "3",
      area: "Parasailing",
      tagline: "Parasailing Ride in Goa: Soaring Above the Coastal Beauty",
      img: "/img/tour/scuba-combo/parasailing.jpg",
      description: "For those seeking a bird's-eye view of Goa's stunning coastline, a parasailing ride is an absolute must. Imagine being harnessed to a colorful parachute as you ascend into the sky, towed by a speedboat below. As you soar high above the azure waters, you'll be treated to breathtaking panoramic vistas of sandy beaches, swaying palm trees, and the vast expanse of the Arabian Sea. Feel the rush of adrenaline as you glide through the air, experiencing a unique sense of freedom and tranquility. Parasailing in Goa is an unforgettable adventure that allows you to embrace the beauty of the coastal landscape from a whole new perspective."
    },
    {
      key: "4",
      area: "Jet Ski Ride",
      tagline: "Jet Ski Ride in Goa: Soaring Through the Waves",
      img: "/img/tour/scuba-combo/jet-ski.jpg",
      description: "For those seeking an exhilarating water adventure in Goa, the Jet Ski Ride is an absolute must-try. Hop on a sleek and powerful jet ski and get ready to feel the adrenaline surge through your veins. With the wind in your face and the saltwater spraying beneath you, zoom across the sparkling waves of the Arabian Sea. Experience the thrill of maneuvering your own personal watercraft as you navigate through the open waters. Whether you're a novice or a seasoned rider, the Jet Ski Ride in Goa promises an adrenaline-fueled experience that will leave you with a sense of freedom and a rush of excitement. Get ready to soar through the waves and create memories that will last a lifetime."
    },
    {
      key: "5",
      area: "Banana Boat Ride",
      tagline: "Banana Boat Ride in Goa: Fun-Filled Thrills on the Waves",
      img: "/img/tour/scuba-combo/banana-boat-ride.jpg",
      description: "If you're seeking a dose of adventure and thrill on the waters of Goa, then the Banana Boat Ride is just for you. This exciting activity involves riding a banana-shaped inflatable boat that is pulled by a speedboat, bouncing and gliding over the waves. Perfect for groups and families, the Banana Boat Ride guarantees laughter and excitement as you try to hold on while the boat twists and turns. Feel the refreshing splash of seawater and the wind in your hair as you enjoy this thrilling experience. Be prepared for a memorable and exhilarating ride that will leave you with a big smile and cherished memories of your time in Goa."
    },
    {
      key: "6",
      area: "Bumper Ride",
      tagline: "Bumper Ride in Goa: A Wild Water Adventure",
      img: "/img/tour/scuba-combo/bumper-boat-ride.jpg",
      description: "Looking for an adrenaline-pumping water activity in Goa? Look no further than the Bumper Ride. Hop aboard an inflatable bumper tube and get ready for a wild and bouncy ride on the waves. As a speedboat pulls you along, you'll experience exhilarating twists, turns, and unexpected splashes. Hold on tight as the boat skims across the water, creating waves that add to the thrill. Whether you're with friends or family, the Bumper Ride promises a fun-filled adventure that will leave you laughing and craving for more. Gear up for an unforgettable water experience that will add an extra splash of excitement to your Goa holiday."
    },
    {
      key: "7",
      area: "Speed Boat",
      tagline: "Speed Boat Ride in Goa: A High-Speed Thrill on the Water",
      img: "/img/tour/scuba-combo/speed-boat-ride.jpg",
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
        {result?.percouple ? (
          <div>
            <span className="font-semibold">Per Couple</span>: {result?.percouple}/-
          </div>
        ) : ""}
 {/* {result?.childbelowseven ? (
          <div>
            <span className="font-semibold">Child (below 7 years)</span>: {result?.childbelowseven}/-
          </div>
        ) : ""}  */}
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
    "/img/tour/scuba-combo-paradise-island/carousel/1.jpg",
    "/img/tour/scuba-combo-paradise-island/carousel/2.jpg",
    "/img/tour/scuba-combo-paradise-island/carousel/3.jpg",
    "/img/tour/scuba-combo-paradise-island/carousel/4.jpg",
    "/img/tour/scuba-combo-paradise-island/carousel/5.jpg",
  ]
  const OPTIONS = { loop: true, duration: 30 }

  const bookingSection = {
    startTime: "07:00 AM",
    duration: "11 Hours",
    location: "Paradise Island (GOA)",
    price: result?.adult ? result?.adult : result?.percouple ? result?.percouple : ""
  }

  const destination = ['Paradise Island', "GOA"];

  const description = `Scuba diving at Paradise Island in Shiroda is an activity that takes place in the Arabian Sea. The crystal clear waters and stunning coral reefs create a surreal underwater landscape. The package includes pick-up and drop-off services from North Goa, and the journey from North Goa to Shiroda takes only 35 km. This PADI (Professional Association of Diving Instructors) certified dive includes a training session with a PADI dive master, which makes it a perfect fit for both beginners and experienced divers. The dive master will guide you through the underwater world and help you discover the beauty hidden beneath the surface. The scuba diving experience at Paradise Beach, Shiroda, is truly unique due to the stunning and diverse marine life. The clear waters offer great visibility and provide an opportunity to witness the abundant marine life, including schools of colorful fish, sea turtles, and stingrays. Additionally, the shallow waters around Paradise Beach provide a safe and perfect environment for scuba diving beginners.`;

  const initialFxn = async () => {

    try {

      const response = await fetch(`/api/category?maincategory=${"Tour"}&subcategory=${"Scuba Combo Paradise Island"}`,
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

  const imgSection = "/img/tour/scuba-combo-paradise-island/paradise.jpg"

  const action = "tour"

  const off = "449"

  return (
    <>
      <TourCombo data={data} title={"Scuba Combo Paradise Island"} titleImg={`/img/tour/scuba-combo-paradise-island/paradise-island-scuba-diving.jpg`} SLIDES={SLIDES} OPTIONS={OPTIONS} bookingSection={bookingSection} description={description} destination={destination} imgSection={imgSection} action={action} off={off} />
    </>
  );
};

export default ScubaCombooParadise;
