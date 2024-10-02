'use client'
import React, { useEffect, useState } from 'react';
import TourCombo from "@/_components/tour/sub_category/TourCombo"
import { Dot } from 'lucide-react';

const DudhSagarWaterFallTrip = () => {

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
      area: "The Dudhsagar Waterfalls",
      tagline: "",
      img: "/img/tour/dudhsagar-waterfall-trip/The Dudhsagar Waterfalls.jpg",
      description: `After the jeep safari, you will reach the breathtaking Dudhsagar waterfalls, one of the tallest waterfalls in India. The name "Dudhsagar" means "Sea of Milk" in Hindi, and it's not hard to see why. The waterfall looks like a milky cascade, especially during the monsoon season when it's at its fullest. You will get a chance to take a dip in the cool waters of the waterfall while wearing a life jacket and have a fun-filled time with your companions.`
    },
    {
      key: "3",
      area: "Spice Plantation Tour",
      tagline: "",
      img: "/img/tour/dudhsagar-waterfall-trip/Spice Planation Tour.jpg",
      description: "The adventure continues with a guided tour of a traditional spice plantation. You will get to see how various spices like cardamom, cinnamon, pepper, and vanilla are grown, harvested, and processed. The knowledgeable guide will explain the various uses of each spice and their medicinal properties. You will also get a chance to sample some of the spices and learn how they are used in Goan cuisine."
    },
    {
      key: "4",
      area: "Elephant Ride",
      tagline: "",
      img: "/img/tour/dudhsagar-waterfall-trip/Elephant Ride.jpg",
      description: "If you're feeling adventurous, you can opt for an elephant ride at an additional cost. You will get to ride on a majestic elephant through the spice plantation, a truly unique experience."
    },
    {
      key: "5",
      area: "Goan Food Delight",
      tagline: "",
      img: "/img/tour/dudhsagar-waterfall-trip/Goan Food Delight.jpg",
      description: "After all the excitement, it's time to satisfy your taste buds with a delicious lunch. The tour package includes veg/non-veg lunch with a variety of Goan dishes, prepared using the fresh spices from the plantation."
    },
    {
      key: "6",
      area: "Old Goa Tour",
      tagline: "",
      img: "/img/tour/dudhsagar-waterfall-trip/Old Goa Tour.jpg",
      description: "As an added bonus, the tour also includes a complimentary Old Goa Tour. You will get to explore the various churches and UNESCO world heritage sites in Old Goa, known for their unique architecture and rich history."
    },
    {
      key: "7",
      area: "Conclusion",
      description: "",
      detailedDesc: "The Dudhsagar Falls and Spice Plantation Tour is a must-do for anyone visiting Goa. It offers a perfect blend of adventure, nature, culture, and food, making it a memorable experience for all. From the thrilling jeep safari through the Mollem National Park to the refreshing dip in the Dudhsagar waterfall and the informative spice plantation tour, every moment of the tour is filled with excitement and learning. So, book your tickets now and get ready for an experience of a lifetime."
    },
    {
      key: "8",
      area: "FAQs",
      description: "",
      detailedDesc: (<>
        <div class="mb-6">
          <h2 class="text-xl font-semibold">1. What should I wear for the tour?</h2>
          <p class="mt-2 text-gray-700"><span className='font-bold'>Ans.</span> It is recommended to wear comfortable clothing and shoes for the jeep safari and waterfall visit. Please carry a change of clothes and a towel for the waterfall dip.</p>
        </div>

        <div class="mb-6">
          <h2 class="text-xl font-semibold">2. Are there any age restrictions for the tour?</h2>
          <p class="mt-2 text-gray-700"><span className='font-bold'>Ans.</span> There are no age restrictions for the tour, but children under the age of 5 are not allowed for the elephant ride.</p>
        </div>

        <div class="mb-6">
          <h2 class="text-xl font-semibold">3. Is lunch included in the tour package?</h2>
          <p class="mt-2 text-gray-700"><span className='font-bold'>Ans.</span> Yes, veg/non-veg lunch is included in the tour package.</p>
        </div>

        <div class="mb-6">
          <h2 class="text-xl font-semibold">4. Can I bring my camera on the tour?</h2>
          <p class="mt-2 text-gray-700"><span className='font-bold'>Ans.</span> Yes, you can bring your camera to capture the beautiful landscapes and wildlife during the tour.</p>
        </div>

        <div class="mb-6">
          <h2 class="text-xl font-semibold">5. How long is the tour?</h2>
          <p class="mt-2 text-gray-700"><span className='font-bold'>Ans.</span> The tour usually lasts for around 10-12 hours, starting early in the morning and ending in the evening.</p>
        </div>
      </>)
    },
    {
      key: "9",
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
    "/img/tour/dudhsagar-waterfall-trip/carousel/1.jpg",
    "/img/tour/dudhsagar-waterfall-trip/carousel/2.jpg",
    "/img/tour/dudhsagar-waterfall-trip/carousel/3.jpg",
    "/img/tour/dudhsagar-waterfall-trip/carousel/4.jpg",
    "/img/tour/dudhsagar-waterfall-trip/carousel/5.jpg",
  ]
  const OPTIONS = { loop: true, duration: 30 }

  const bookingSection = {
    startTime: "6:00 AM",
    duration: "12 Hours",
    location: "South Goa",
    price: result ? result?.adult : ""
  }

  const destination = ['Goa'];

  const description = `Are you tired of the hustle and bustle of city life? Do you want to escape to a place where you can relax and connect with nature? Look no further than Dudhsagar Falls and Spice Plantation tour. This majestic waterfall is located on the Mandovi River near Kulem and is surrounded by lush green forests. Join us on a journey to explore the stunning Dudhsagar Falls and gain significant knowledge about the various spices as you go on a spice plantation tour in Keri.  `;


  const initialFxn = async () => {

    try {

      const response = await fetch(`/api/category?maincategory=${"Tour"}&subcategory=${"Dudhsagar Waterfalls"}`,
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

  const inclusions = "Dudhsagar Waterfall"

  const dudhsagarPamplet = "/img/tour/dudhsagar-waterfall-trip/dudhsagar-waterfall-pamplet.jpg"

  const imgSection = "/img/tour/dudhsagar-waterfall-trip/dudhsagar-waterfall-pamplet.jpg"

  const action = "tour"

  const off = "449"

  return (
    <>
      <TourCombo data={data} title={"Dudhsagar Waterfall Trip"} titleImg={`/img/tour/dudhsagar-waterfall-trip/dudhsagar-waterfall.jpg`} SLIDES={SLIDES} OPTIONS={OPTIONS} bookingSection={bookingSection} description={description} destination={destination} inclusions={inclusions} dudhsagarPamplet={dudhsagarPamplet} action={action} imgSection={imgSection} off={off} />
    </>
  );
};

export default DudhSagarWaterFallTrip;
