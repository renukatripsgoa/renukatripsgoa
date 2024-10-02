"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "@/_components/Loader";
import { IMAGES } from "@/public/index";
import React from 'react';
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/Siteconfig";
import Link from 'next/link';

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  

  return (
    <div className="inline-flex">
      <div className="flex items-center">
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <svg
              key={index}
              className="w-6 h-6 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        {hasHalfStar && (
          <svg
            className="w-6 h-6 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <defs>
              <clipPath id="half-star">
                <rect x="0" y="0" width="12" height="24" />
              </clipPath>
            </defs>
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              clipPath="url(#half-star)" />
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              className="text-gray-300"
              fill="currentColor"
              style={{ clipPath: "inset(0 0 0 50%)" }} // Left half
            />
          </svg>
        )}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <svg
              key={index + fullStars + (hasHalfStar ? 1 : 0)}
              className="w-6 h-6 text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
      </div>
      <div className="pl-2">{rating}</div>
    </div>
  );
};

const Card = ({ onSelectTitle }) => {
  const [loading, setLoading] = useState(true);
  const [fetchallcategory, setfetchallcategory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // console.log("Data Card::::::::>", onSelectTitle, fetchallcategory);
  }, [onSelectTitle, fetchallcategory]);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const response = await axios.post("/api/category", {
        operation: "fetchallcategory",
      });
      setfetchallcategory(response.data.fetchallcategory);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-start mb-8 text-blue-600">
        Explore Sea Adventures in Goa
      </h2>

      <div className="space-y-8">
        {["Tour", "Couple Packages", "Group Packages"].map((mainCategory) => (
          <div key={mainCategory}>
            <h2 className="text-2xl font-bold mb-4 text-blue-500">
              {mainCategory}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? (
                <>
                  <Loader />
                  <Loader />
                  <Loader />
                </>
              ) : (
                fetchallcategory
                  ?.filter((e) => e.maincategory === mainCategory)
                  .slice(0, 13) // Limit to the first 3 items of each main category
                  .map((e, index) => {

                    let percentOff = 0;

                    if(index === 0 && e.subcategory === "Scuba Combo") {
                      percentOff = 20
                    }

                    if(index === 1 && e.subcategory === "Couple Scuba Water Sports") {
                      percentOff = 20
                    }

                    if(index === 2 && e.subcategory === "Scuba Combo Paradise Island") {
                      percentOff = 18
                    }

                    if(index === 3 && e.subcategory === "Scuba Combo Malwan") {
                      percentOff = 15
                    }

                    if(index === 4 && e.subcategory === "Water Sports Combo") {
                      percentOff = 12
                    }

                    if(index === 5 && e.subcategory === "Adventure Party Boat") {
                      percentOff = 10
                    }

                    if(index === 6 && e.subcategory === "Dinner Cruise") {
                      percentOff = 10
                    }

                    if(index === 7 && e.subcategory === "Bungee Jump") {
                      percentOff = 13
                    }

                    if(index === 8 && e.subcategory === "North Goa Tour") {
                      percentOff = 13
                    }

                    if(index === 9 && e.subcategory === "South Goa Tour") {
                      percentOff = 13
                    }

                    if(index === 10 && e.subcategory === "Flyboarding") {
                      percentOff = 13
                    }

                    if(index === 11 && e.subcategory === "Dudhsagar Waterfalls") {
                      percentOff = 13
                    }

                    if(index === 12 && e.subcategory === "Island Trip Goa") {
                      percentOff = 15
                    }

                    if(index === 0 && e.subcategory === "Couple Package - 1") {
                      percentOff = 25
                    }

                    if(index === 1 && e.subcategory === "Couple Package - 2") {
                      percentOff = 20
                    }

                    if(index === 2 && e.subcategory === "Couple Package - 3") {
                      percentOff = 13.3
                    }

                    if(index === 0 && e.subcategory === "Group Package - 1") {
                      percentOff = 20
                    }

                    if(index === 1 && e.subcategory === "Group Package - 2") {
                      percentOff = 29
                    }

                    if(index === 2 && e.subcategory === "Group Package - 3") {
                      percentOff = 22
                    }


                    

                    return (
                      <div
                        key={index}
                        className="relative flex flex-col border rounded-lg overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => {
                          console.log("siteConfig:::::::>", siteConfig.tour.find((item) => item.name === e.subcategory), e.subcategory)
                          router.push(`${siteConfig.tour.find((item) => item.name === e.subcategory)?.link}`)
                        }}
                      >
                        {/* Discount Label */}
                        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                          {percentOff}% OFF
                        </div>

                        <div className="relative h-56">
                          <Image
                            src={IMAGES[e.subcategory]}
                            alt={e.subcategory}
                            fill
                            className="w-full h-56 object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex-1 p-4">
                            <div className="flex justify-between items-center">
                              <h3 className="text-xl font-semibold">
                                {e.subcategory === "Scuba Combo" ? "Grand Island Combo" : e.subcategory}
                              </h3>
                              <div className="flex flex-col text-right">
                                <p className="text-gray-500 line-through">
                                  ₹ {((e.adult || e.percouple) * (1 + percentOff / 100)).toFixed(2)}
                                </p>
                                <p className="text-blue-500 font-bold">
                                  ₹ {(Number(e.adult || e.percouple) || 0).toFixed(2)}
                                </p>
                              </div>
                            </div>
                            <p className="text-gray-600 mt-2 mb-2 text-justify">{e.description}</p>
                            <Rating rating={e.ratings} />
                          </div>
                          <div className="p-4">
                          <Link
                                href={`https://api.whatsapp.com/send?phone=${+917410150610}&text=${encodeURIComponent(`Hello, *The Renuka Trips Goa*, I would like to know about *${e.subcategory}*`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            <button
                              className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
                              onClick={(event) => {
                                event.stopPropagation();
                                onSelectTitle(e.subcategory)
                              }}
                            >
                              Get Details on Whatsapp
                            </button></Link>
                          </div>
                        </div>
                      </div>
                    )
                  })
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;


// "use client";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Loader from "@/_components/Loader";
// import { IMAGES } from "@/public/index";
// import React from 'react';
// import { useRouter } from "next/navigation";
// import { siteConfig } from "@/config/Siteconfig";
// import Link from 'next/link';

// const Rating = ({ rating }) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 !== 0;
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
//   const router = useRouter();

//   return (
//     <div className="inline-flex">
//       <div className="flex items-center">
//         {Array(fullStars)
//           .fill(0)
//           .map((_, index) => (
//             <svg
//               key={index}
//               className="w-6 h-6 text-yellow-500"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//             </svg>
//           ))}
//         {hasHalfStar && (
//           <svg
//             className="w-6 h-6 text-yellow-500"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <defs>
//               <clipPath id="half-star">
//                 <rect x="0" y="0" width="12" height="24" />
//               </clipPath>
//             </defs>
//             <path
//               d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
//               clipPath="url(#half-star)" />
//             <path
//               d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
//               className="text-gray-300"
//               fill="currentColor"
//               style={{ clipPath: "inset(0 0 0 50%)" }} // Left half
//             />
//           </svg>
//         )}
//         {Array(emptyStars)
//           .fill(0)
//           .map((_, index) => (
//             <svg
//               key={index + fullStars + (hasHalfStar ? 1 : 0)}
//               className="w-6 h-6 text-gray-300"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//             </svg>
//           ))}
//       </div>
//       <div className="pl-2">{rating}</div>
//     </div>
//   );
// };

// const Card = ({ onSelectTitle }) => {
//   const [loading, setLoading] = useState(true);
//   const [fetchallcategory, setfetchallcategory] = useState([]);

//   useEffect(() => {
//     // console.log("Data Card::::::::>", onSelectTitle, fetchallcategory);
//   }, [onSelectTitle, fetchallcategory]);

//   useEffect(() => {
//     setLoading(true);
//     async function getData() {
//       const response = await axios.post("/api/category", {
//         operation: "fetchallcategory",
//       });
//       setfetchallcategory(response.data.fetchallcategory);
//       setLoading(false);
//     }
//     getData();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl lg:text-3xl font-bold text-start mb-8 text-blue-600">
//         Explore Sea Adventures in Goa
//       </h2>

//       <div className="space-y-8">
//         {["Tour", "Couple Packages", "Group Packages"].map((mainCategory) => (
//           <div key={mainCategory}>
//             <h2 className="text-2xl font-bold mb-4 text-blue-500">
//               {mainCategory}
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {loading ? (
//                 <>
//                   <Loader />
//                   <Loader />
//                   <Loader />
//                 </>
//               ) : (
//                 fetchallcategory
//                   ?.filter((e) => e.maincategory === mainCategory)
//                   .slice(0, 12) // Limit to the first 3 items of each main category
//                   .map((e, index) => {

//                     let percentOff = 0;

//                     if(index === 0 && e.subcategory === "Scuba Combo") {
//                       percentOff = 20
//                     }

//                     if(index === 1 && e.subcategory === "Couple Scuba Water Sports") {
//                       percentOff = 20
//                     }

//                     if(index === 2 && e.subcategory === "Scuba Combo Paradise Island") {
//                       percentOff = 18
//                     }

//                     if(index === 3 && e.subcategory === "Scuba Combo Malwan") {
//                       percentOff = 15
//                     }

//                     if(index === 4 && e.subcategory === "Water Sports Combo") {
//                       percentOff = 12
//                     }

//                     if(index === 5 && e.subcategory === "Adventure Party Boat") {
//                       percentOff = 10
//                     }

//                     if(index === 6 && e.subcategory === "Dinner Cruise") {
//                       percentOff = 10
//                     }

//                     if(index === 7 && e.subcategory === "Bungee Jump") {
//                       percentOff = 13
//                     }

//                     if(index === 8 && e.subcategory === "North Goa Tour") {
//                       percentOff = 13
//                     }

//                     if(index === 9 && e.subcategory === "South Goa Tour") {
//                       percentOff = 13
//                     }

//                     if(index === 10 && e.subcategory === "Flyboarding") {
//                       percentOff = 13
//                     }

//                     if(index === 11 && e.subcategory === "Dudhsagar Waterfalls") {
//                       percentOff = 13
//                     }

//                     if(index === 0 && e.subcategory === "Couple Package - 1") {
//                       percentOff = 25
//                     }

//                     if(index === 1 && e.subcategory === "Couple Package - 2") {
//                       percentOff = 20
//                     }

//                     if(index === 2 && e.subcategory === "Couple Package - 3") {
//                       percentOff = 13.3
//                     }

//                     if(index === 0 && e.subcategory === "Group Package - 1") {
//                       percentOff = 20
//                     }

//                     if(index === 1 && e.subcategory === "Group Package - 2") {
//                       percentOff = 29
//                     }

//                     if(index === 2 && e.subcategory === "Group Package - 3") {
//                       percentOff = 22
//                     }


//                     // console.log("Price:::::::>", index, e.subcategory)

//                     return (
//                       <div
//                         key={index}
//                         className="relative flex flex-col border rounded-lg overflow-hidden shadow-lg"
//                         onClick={() => {
//                           router.push(`${siteConfig.tour.find((item) => item.name === e.subcategory)?.link}`)
//                         }}
//                       >
//                         {/* Discount Label */}
//                         <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
//                           {percentOff}% OFF
//                         </div>

//                         <div className="relative h-56">
//                           <Image
//                             src={IMAGES[e.subcategory]}
//                             alt={e.subcategory}
//                             fill
//                             className="w-full h-56 object-cover"
//                           />
//                         </div>
//                         <div>
//                           <div className="flex-1 p-4">
//                             <div className="flex justify-between items-center">
//                               <h3 className="text-xl font-semibold">
//                                 {e.subcategory === "Scuba Combo" ? "Grand Island Combo" : e.subcategory}
//                               </h3>
//                               <div className="flex flex-col text-right">
//                                 <p className="text-gray-500 line-through">
//                                   ₹ {((e.adult || e.percouple) * (1 + percentOff / 100)).toFixed(2)}
//                                 </p>
//                                 <p className="text-blue-500 font-bold">
//                                   ₹ {(Number(e.adult || e.percouple) || 0).toFixed(2)}
//                                 </p>
//                               </div>
//                             </div>
//                             <p className="text-gray-600 mt-2 mb-2 text-justify">{e.description}</p>
//                             <Rating rating={e.ratings} />
//                           </div>
//                           <div className="p-4">
//                             <Link
//                                 href={`https://api.whatsapp.com/send?phone=${+917410150610}&text=${encodeURIComponent(`Hello, *The Renuka Trips Goa*, I would like to know about *${e.subcategory}*`)}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                             <button
//                               className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
//                               onClick={(event) => {
//                                 event.stopPropagation();
//                                 onSelectTitle(e.subcategory)
//                               }}
//                             >
//                               Get Details on Whatsapp
//                             </button></Link>
//                           </div>
//                         </div>
//                       </div>
//                     )
//                   })
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;
