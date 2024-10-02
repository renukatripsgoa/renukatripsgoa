'use client'
import React, { useEffect, useState } from 'react';
import TourCombo from "@/_components/tour/sub_category/TourCombo"
import { Dot } from 'lucide-react';

const WaterSports = () => {

  const [result, setResult] = useState({})

  const data = [
    {
      key: "1",
      area: "Detailed Itinerary",
      description: "",
      detailedDesc: (<>
        <div className="mt-6">
          <h2 className="text-lg font-bold text-left mb-6">Activities Included in Trip</h2>
          <ul className="space-y-2">
            <li className="bg-blue-50 font-medium py-2 px-4 rounded-lg shadow-sm hover:bg-blue-100 w-36">
              {"Speed Boat"}
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
    // {
    //   key: "2",
    //   area: "Scuba Diving",
    //   tagline: "Scuba Diving in Grand Island: Discovering Underwater Marvels",
    //   img: "/img/tour/scuba-combo/scuba-diving.jpg",
    //   description: "Grand Island, located off the coast of Goa, is a paradise for scuba diving enthusiasts. With its pristine waters and stunning underwater landscapes, this destination offers a remarkable diving experience. Dive into the depths of the Arabian Sea and witness a vibrant marine world teeming with colorful coral reefs and a diverse array of marine life, including tropical fish, sea turtles, and even occasional sightings of dolphins. The underwater visibility is excellent, making it an ideal spot for both beginners and experienced divers. Immerse yourself in the wonders of Grand Island, where every dive is an adventure to remember."
    // },
    {
      key: "2",
      area: "Parasailing",
      tagline: "Parasailing Ride in Goa: Soaring Above the Coastal Beauty",
      img: "/img/tour/scuba-combo/parasailing.jpg",
      description: "For those seeking a bird's-eye view of Goa's stunning coastline, a parasailing ride is an absolute must. Imagine being harnessed to a colorful parachute as you ascend into the sky, towed by a speedboat below. As you soar high above the azure waters, you'll be treated to breathtaking panoramic vistas of sandy beaches, swaying palm trees, and the vast expanse of the Arabian Sea. Feel the rush of adrenaline as you glide through the air, experiencing a unique sense of freedom and tranquility. Parasailing in Goa is an unforgettable adventure that allows you to embrace the beauty of the coastal landscape from a whole new perspective."
    },
    {
      key: "3",
      area: "Jet Ski Ride",
      tagline: "Jet Ski Ride in Goa: Soaring Through the Waves",
      img: "/img/tour/scuba-combo/jet-ski.jpg",
      description: "For those seeking an exhilarating water adventure in Goa, the Jet Ski Ride is an absolute must-try. Hop on a sleek and powerful jet ski and get ready to feel the adrenaline surge through your veins. With the wind in your face and the saltwater spraying beneath you, zoom across the sparkling waves of the Arabian Sea. Experience the thrill of maneuvering your own personal watercraft as you navigate through the open waters. Whether you're a novice or a seasoned rider, the Jet Ski Ride in Goa promises an adrenaline-fueled experience that will leave you with a sense of freedom and a rush of excitement. Get ready to soar through the waves and create memories that will last a lifetime."
    },
    {
      key: "4",
      area: "Banana Boat Ride",
      tagline: "Banana Boat Ride in Goa: Fun-Filled Thrills on the Waves",
      img: "/img/tour/scuba-combo/banana-boat-ride.jpg",
      description: "If you're seeking a dose of adventure and thrill on the waters of Goa, then the Banana Boat Ride is just for you. This exciting activity involves riding a banana-shaped inflatable boat that is pulled by a speedboat, bouncing and gliding over the waves. Perfect for groups and families, the Banana Boat Ride guarantees laughter and excitement as you try to hold on while the boat twists and turns. Feel the refreshing splash of seawater and the wind in your hair as you enjoy this thrilling experience. Be prepared for a memorable and exhilarating ride that will leave you with a big smile and cherished memories of your time in Goa."
    },
    {
      key: "5",
      area: "Bumper Ride",
      tagline: "Bumper Ride in Goa: A Wild Water Adventure",
      img: "/img/tour/scuba-combo/bumper-boat-ride.jpg",
      description: "Looking for an adrenaline-pumping water activity in Goa? Look no further than the Bumper Ride. Hop aboard an inflatable bumper tube and get ready for a wild and bouncy ride on the waves. As a speedboat pulls you along, you'll experience exhilarating twists, turns, and unexpected splashes. Hold on tight as the boat skims across the water, creating waves that add to the thrill. Whether you're with friends or family, the Bumper Ride promises a fun-filled adventure that will leave you laughing and craving for more. Gear up for an unforgettable water experience that will add an extra splash of excitement to your Goa holiday."
    },
    {
      key: "6",
      area: "Speed Boat",
      tagline: "Speed Boat Ride in Goa: A High-Speed Thrill on the Water",
      img: "/img/tour/scuba-combo/speed-boat-ride.jpg",
      description: "If you're seeking an exhilarating experience on the waters of Goa, look no further than the Speed Boat Ride. Hop aboard a powerful speedboat and prepare for an adrenaline-fueled adventure. Feel the rush as the boat accelerates, slicing through the waves with speed and precision. Hold on tight as the wind rushes through your hair and the stunning coastal views blur past you. Whether you're craving a solo adventure or enjoying the ride with friends and family, the Speed Boat Ride in Goa promises an unforgettable thrill that will leave you craving for more. Get ready to embrace the excitement and make memories that will last a lifetime."
    },
    {
      key: "7",
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
        <div>
          <span className="font-semibold">Child (below 7 years)</span>: Not Suppose to Do
        </div>
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
    "/img/tour/water-sports-combo/carousel/1.jpg",
    "/img/tour/water-sports-combo/carousel/2.jpg",
    "/img/tour/water-sports-combo/carousel/3.jpg",
    "/img/tour/water-sports-combo/carousel/4.jpg",
    "/img/tour/water-sports-combo/carousel/5.jpg",
    "/img/tour/water-sports-combo/carousel/6.jpg",
  ]
  const OPTIONS = { loop: true, duration: 30 }

  const bookingSection = {
    startTime: "11:00 AM",
    duration: "2 Hours",
    location: "Calangute",
    price: result ? result?.adult : ""
  }

  const destination = ['Goa'];

  const description = `Water sports are incredibly popular in Goa, and there are many options to choose from. Tourists can indulge in thrilling water sports activities such as jet skiing, bumper ride, banana ride, parasailing, and speedboat. These activities are perfect for those who are looking for an adrenaline rush and want to experience the thrill of water sports. The best time to enjoy these activities is from October to May when the sea is calm and the weather is pleasant. `;


  const initialFxn = async () => {

    try {

      const response = await fetch(`/api/category?maincategory=${"Tour"}&subcategory=${"Water Sports Combo"}`,
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

  const inclusions = "Water Sports Package"

  const imgSection = "/img/tour/water-sports-combo/Water sports.jpg"


  const action = "tour"

  const off = "449"


  return (
    <>
      <TourCombo data={data} title={"Water Sports Combo"} titleImg={`/img/tour/water-sports-combo/water-sports.jpg`} SLIDES={SLIDES} OPTIONS={OPTIONS} bookingSection={bookingSection} description={description} destination={destination} inclusions={inclusions} imgSection={imgSection} action={action} off={off} />
    </>
  );
};

export default WaterSports;
