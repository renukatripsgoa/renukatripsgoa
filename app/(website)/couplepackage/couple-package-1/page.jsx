'use client'
import React, { useEffect, useState } from 'react';
import TourCombo from "@/_components/tour/sub_category/TourCombo"
import { Dot } from 'lucide-react';

const CouplePackageOne = () => {

  const [result, setResult] = useState({})

  const data = [
    {
      key: "1",
      area: "Detailed Itinerary",
      description: "",
      detailedDesc: (<>

      </>)
    },
    {
      key: "2",
      area: "Day 1",
      tagline: "",
      img: "/img/couple-packages-goa/couple-package-one/Three Star Hotel.jpg",
      description: (<>
        <div class="">
          <h2 class="text-lg font-semibold mb-4">Pickup on Private Basis</h2>
          <ul class="list-disc list-inside text-gray-700 mb-4">
            <li>Airport</li>
            <li>Tivim Railway Station</li>
            <li>Panaji Bus Stand</li>
            <li>Mapusa Bus Stand</li>
          </ul>
          <p class="text-gray-800 font-medium">
            Check-in: <span class="font-semibold">3 stars hotel</span>
          </p>
        </div>

      </>)
    },
    {
      key: "3",
      area: "Day 2",
      tagline: "South Goa Tour",
      img: "/img/couple-packages-goa/couple-package-one/South Goa.jpeg",
      description: (<>
        <ul class=" text-gray-700 space-y-2">
          <li>{"1. Miramar Beach"}</li>
          <li>{"2. SE Cathedral Church"}</li>
          <li>{"3. Basilica of Bom Jesus"}</li>
          <li>{"4. ST Augustine Church"}</li>
          <li>{"5. Mangeshi Temple"}</li>
          <li>{"6. Balaji Temple"}</li>
          <li>{"7. Boat Cruise"} <span class="text-sm text-gray-500">(extra charge)</span></li>
        </ul>
      </>)
    },
    {
      key: "4",
      area: "Day 3",
      tagline: "North Goa Tour",
      img: "/img/couple-packages-goa/couple-package-one/North Goa.jpeg",
      description: (<>
        <ul class=" text-gray-700 space-y-2">
          <li>{"1. Fort Aguada"}</li>
          <li>{"2. Saligao Church"}</li>
          <li>{"3. Sinquerim Beach"}</li>
          <li>{"4. Anjuna Beach"}</li>
          <li>{"5. Vagator Beach"}</li>
          <li>{"6. Baga Beach"}</li>
          <li>{"7. Snow Park"} <span class="text-sm text-gray-500">(extra charge)</span></li>
        </ul>
      </>)
    },
    {
      key: "5",
      area: "Day 4",
      tagline: "",
      img: "/img/couple-packages-goa/couple-package-one/Checkout.jpg",
      description: (<>
        <ul class=" text-gray-700 space-y-2">
          <li>{"1. Check-out from Hotel"}</li>
          <li>{"2. Drop on a Private basis"}</li>
          <li>{"   (Airport, Tivim Railway Station, Panaji Bus Stand or Mapusa Bus Stand)"}</li>
        </ul>
      </>)
    },
    {
      key: "6",
      area: "Services",
      description: "",
      detailedDesc: (<>
        <div className='font-semibold'>Flat Rs.999 Off on Pre Bookings</div>
        {result?.adult ? (
          <div>
            <span className="font-semibold">Adults (16+)</span> : {result?.adult}/-
          </div>
        ) : " "}
        {result?.youth ? (
          <div>
            <span className="font-semibold">Youth (7+)</span> : {result?.youth}/-
          </div>
        ) : ""}
        {result?.percouple ? (
          <div>
            <span className="font-semibold">Per Couple</span> : {result?.percouple}/-
          </div>
        ) : ""}
        {/* {result?.childbelowseven ? (
    <div>
        <span className="font-semibold">Child (below 7 years)</span> : {result?.childbelowseven}/-
    </div>
) : ""} */}
        {result?.childthreetoseven ? (
          <div>
            <span className="font-semibold">Child (3 to 7 years)</span> : {result?.childthreetoseven}/-
          </div>
        ) : ""}
        {result?.childabovethree ? (
          <div>
            <span className="font-semibold">Child (Above 3 years)</span> : {result?.childabovethree}/-
          </div>
        ) : ""}
        {result?.childabovetwelve ? (
          <div>
            <span className="font-semibold">Child (Above 12 years)</span> : {result?.childabovetwelve}/-
          </div>
        ) : ""}
        {result?.childabovefour ? (
          <div>
            <span className="font-semibold">Child (Above 4 years)</span> : {result?.childabovefour}/-
          </div>
        ) : ""}

      </>)
    },
  ]

  const SLIDES = [
    "/img/couple-packages-goa/couple-package-one/carousel/1.jpg",
    "/img/couple-packages-goa/couple-package-one/carousel/2.jpeg",
    "/img/couple-packages-goa/couple-package-one/carousel/3.jpg",
    "/img/couple-packages-goa/couple-package-one/carousel/4.jpg",
    "/img/couple-packages-goa/couple-package-one/carousel/5.jpg",
  ]
  const OPTIONS = { loop: true, duration: 30 }

  const bookingSection = {
    // startTime: "6:00 AM",
    // duration: "12 Hours",
    location: "North Goa",
    price: result?.adult ? result?.adult : result?.percouple ? result?.percouple : ""
  }

  const destination = ['Goa'];

  const description = `Whenever an individual aspires to embark on a romantic retreat amid the glistening golden seashores, their first inclination gravitates towards the expanse of Goa. It is a destination that amalgamates the elements of sunlight, sand, and sea in a harmonious accord. If one intends to spend amorous moments with their significant other, there is no place more fitting than Goa. The locale offers a serene and pacifying atmosphere, sparkling and effervescent waters, a relaxing ambience, an unparalleled nightlife and an intimate milieu that coalesces to form an idyllic setting to celebrate the emotions of love.`;


  const initialFxn = async () => {

    try {

      const response = await fetch(`/api/category?maincategory=${"Couple Packages"}&subcategory=${"Couple Package - 1"}`,
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

  const inclusions = "couple"

  const imgSection = "/img/couple-packages-goa/couple-package-one/couple.jpg"

  const action = "couple"

  const off = "999"

  return (
    <>
      <TourCombo data={data} title={"Couple Package - 1"} titleImg={`/img/couple-packages-goa/couple-package-one/couple-package-one.png`} SLIDES={SLIDES} OPTIONS={OPTIONS} bookingSection={bookingSection} description={description} destination={destination} inclusions={inclusions} imgSection={imgSection} action={action} off={off} />
    </>
  );
};

export default CouplePackageOne;
