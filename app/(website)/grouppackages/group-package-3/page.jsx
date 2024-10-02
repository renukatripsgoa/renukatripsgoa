'use client'
import React, { useEffect, useState } from 'react';
import TourCombo from "@/_components/tour/sub_category/TourCombo"
import { Dot } from 'lucide-react';

const GroupPackageThree = () => {

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
      img: "/img/couple-packages-goa/couple-package-three/cruise-ship.jpg",
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

        <div>
          <h2 class="text-lg font-semibold mb-4 pt-4">{"Family Dinner Cruise (9:00pm to12:00pm)"}</h2>

          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>{"3 Hours Cruising"}</li>
            <li>{"Reserved Table Seating"}</li>
            <li>{"Open Air Scenic Dining"}</li>
            <li>{"Live DJ (Bollywood)"}</li>
            <li>{"Dance Floor"}</li>
            <li>{"Karaoke"}</li>
            <li>{"Goan Folk Dance"}</li>
            <li>{"Portuguese Dance"}</li>
            <li>{"Sightseeing of Panjim City"}</li>
            <li>{"Fun Games & Entertainment"}</li>
            <li>{"Welcome Drink"}</li>
            <li>{"Starter 2 Veg or 2 Non-Veg"}</li>
            <li>{"Buffet Dinner (Veg or Non-Veg)"}</li>
            <li>{"Drinks: 2(Alcoholic or Non Alcoholic)"}</li>
          </ul>
        </div>
      </>)
    },
    {
      key: "3",
      area: "Day 2",
      tagline: "Scuba Diving Combo (Scuba Diving at Grand Island + Water sports)",
      img: "/img/couple-packages-goa/couple-package-three/couple-scuba.jpg",
      description: (<>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>{"Pickup at 8 am from the Main road of your Hotel (Arpora, Baga, Calangute, Candolim, Sinquerim, Nerul)"}</li>
          <li>{"45 minutes Boat Ride towards Grand Island in Goa"}</li>
          <li>{"On the way Sightseeing of Aguada fort, Millionaire Palace, Central Jail, Lighthouse, and Dolphins spotting by Boat"}</li>
          <li>{"Breakfast will be served on the boat"}</li>
          <li>{"The pre-diving session will be given at The Grand Island"}</li>
          <li>{"Underwater Diving with PADI certified scuba diver"}</li>
          <li>{"Underwater Video"}</li>
          <li>{"After diving M.water, Fruits, Soft drinks, Beers, and Lunch will be Provided"}</li>
        </ul>

        <p className='pt-4 font-semibold opacity-95'>Water Sports</p>

        <ul class=" text-gray-700 space-y-2 pt-4">
          <li>{"1. Jet Ski bike"}</li>
          <li>{"2. Bumper ride"}</li>
          <li>{"3. Banana ride"}</li>
          <li>{"4. Speed Boat"}</li>
          <li>{"5. Parasailing"}</li>
        </ul>
      </>)
    },
    {
      key: "4",
      area: "Day 3",
      tagline: "Dudhsagar Waterfall Trip (6:00am to 5:30pm)",
      img: "/img/couple-packages-goa/couple-package-three/dudhsagar-waterfall.jpg",
      description: (<>
        <div>
          {/* <h2 class="text-lg font-semibold mb-4 pt-4">{"Dudhsagar Waterfall Trip (6:00am to 5:30pm)"}</h2> */}

          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>{"Pick up and drop"}</li>
            <li>{"Jeep Safari to the Falls"}</li>
            <li>{"Swimming with Safety Jacket"}</li>
            <li>{"Guided Spice Plantation Tour"}</li>
            <li>{"Buffet Lunch at Spice Plantation"}</li>
            <li>{"Visit to Old Goa Church"}</li>
            <li>{"All Entry Fees"}</li>
          </ul>
        </div>
      </>)
    },
    {
      key: "5",
      area: "Day 4",
      tagline: "North Goa Tour",
      img: "/img/couple-packages-goa/couple-package-three/North Goa.jpg",
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
      key: "6",
      area: "Day 5",
      tagline: "",
      img: "/img/couple-packages-goa/couple-package-three/Checkout.jpg",
      description: (<>
        <ul class=" text-gray-700 space-y-2">
          <li>{"1. Check-out from Hotel"}</li>
          <li>{"2. Drop on a Private basis"}</li>
          <li>{"   (Airport, Tivim Railway Station, Panaji Bus Stand or Mapusa Bus Stand)"}</li>
        </ul>
      </>)
    },
    {
      key: "7",
      area: "Services",
      description: "",
      detailedDesc: (<>
        <div className='font-semibold'>Flat Rs.999 Off on Pre Bookings</div>
        {result?.adult ? (
          <div>
            <span className="font-semibold">Per Adult</span>: {result?.adult}/-
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
) : ""} */}
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
    "/img/couple-packages-goa/couple-package-three/carousel/1.jpg",
    "/img/couple-packages-goa/couple-package-three/carousel/2.jpg",
    "/img/couple-packages-goa/couple-package-three/carousel/3.jpg",
    "/img/couple-packages-goa/couple-package-three/carousel/4.jpg",
    "/img/couple-packages-goa/couple-package-three/carousel/5.jpg",
    "/img/couple-packages-goa/couple-package-three/carousel/6.jpg",
    "/img/couple-packages-goa/couple-package-three/carousel/7.jpg",
    "/img/couple-packages-goa/couple-package-three/carousel/8.jpg",
  ]
  const OPTIONS = { loop: true, duration: 30 }

  const bookingSection = {
    // startTime: "6:00 AM",
    // duration: "12 Hours",
    location: "North Goa",
    minimum: "3-4 Pax",
    price: result?.adult ? result?.adult : result?.percouple ? result?.percouple : ""
  }

  const destination = ['Goa'];

  const description = (<>

    <span className='text-lg font-semibold mb-4 pt-4 block'>You are never too old to visit Goa: Exploring the Land of Beaches and Beyond</span>

    {"Goa, the land of sun, sand, and sea, has always been a popular tourist destination in India. But what makes it even more special is the fact that it appeals to all age groups. Whether you are a teenager looking for adventure or a senior citizen seeking tranquility, Goa has something to offer for everyone. In this article, we will explore why Goa is a must-visit destination, regardless of your age, and why you should consider booking an exclusive package tour for 3 or 4 persons to explore the best of Goa's tourist spots with your loved ones."}



</>);


const initialFxn = async () => {

  try {

    const response = await fetch(`/api/category?maincategory=${"Group Packages"}&subcategory=${"Group Package - 3"}`,
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

const imgSection = "/img/group-packages-goa/group-package-three/group section.jpg"

const action = "group"

  const off = "999"


return (
  <>
    <TourCombo data={data} title={"Group Goa Package - 3"} titleImg={`/img/group-packages-goa/group-package-three/group-package-three.jpg`} SLIDES={SLIDES} OPTIONS={OPTIONS} bookingSection={bookingSection} description={description} destination={destination} inclusions={inclusions} imgSection={imgSection} action={action} off={off}/>
  </>
);
};

export default GroupPackageThree;
