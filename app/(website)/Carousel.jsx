// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { IMAGES } from "@/public/index";

// const slidesData = [
//   {
//     title: "OUTDOOR ACTIVITIES IN GOA",
//     description:
//       "Pack your multi-night trip with Big Blue in Portugal full of awesome outdoor adventures ",
//     image: IMAGES.adventure,
//   },
//   {
//     title: "OUTDOOR ACTIVITIES IN GOA",
//     description:
//       "Pack your multi-night trip with Big Blue in Portugal full of awesome outdoor adventures ",
//     image: IMAGES.scubahome,
//   },
//   {
//     title: "OUTDOOR ACTIVITIES IN GOA",
//     description:
//       "Pack your multi-night trip with Big Blue in Portugal full of awesome outdoor adventures ",
//     image: IMAGES.jetski,
//   },
// ];

// const ServiceAniMbl = ({ scrollContact }) => {
//   const videoRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(true);
//   const [userUnmuted, setUserUnmuted] = useState(false); 

//   const toggleMute = () => {
//     const newMutedState = !isMuted;
//     setIsMuted(newMutedState);
//     setUserUnmuted(!newMutedState);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       if (scrollY > 100) {
//         setIsMuted(true);
//       } else {
//         if (userUnmuted) {
//           setIsMuted(false);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [userUnmuted]);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.muted = isMuted;
//       if (videoRef.current.paused) {
//         videoRef.current.play();
//       }
//     }
//   }, [isMuted]);

//   return (
//     <div className="relative h-[84vh] w-[100%] lg:w-full lg:h-[90vh]">
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted={isMuted}
//         className="w-full h-full object-fill lg:object-cover"
//       >
//         <source src="/video/renukatripsgoa.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <button
//         onClick={toggleMute}
//         className="absolute bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full"
//       >
//         {isMuted ? "Unmute" : "Mute"}
//       </button>
//     </div>
//   );
// };

// export default ServiceAniMbl;



















"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { IMAGES } from "@/public/index";

const slidesData = [
  {
    title: "OUTDOOR ACTIVITIES IN GOA",
    description:
      "Pack your multi- night trip with Big Blue in Portugal full of awesome outdoor adventures ",
    image: IMAGES.adventure,
  },
  {
    title: "OUTDOOR ACTIVITIES IN GOA",
    description:
      "Pack your multi- night trip with Big Blue in Portugal full of awesome outdoor adventures ",
    image: IMAGES.scubahome,
  },
  {
    title: "OUTDOOR ACTIVITIES IN GOA",
    description:
      "Pack your multi- night trip with Big Blue in Portugal full of awesome outdoor adventures ",
    image: IMAGES.jetski,
  },
];

const ServiceAniMbl = ({ scrollContact }) => {
  return (
    <div className="w-full h-full">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        speed={1000}
        className="w-full h-[70vh] lg:h-[90vh] bg-black"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative p-5 h-full flex justify-center items-center rounded-10"
          >
            <Image
              alt={slide.title}
              src={slide.image}
              fill
              sizes="(width: 100%)"
              style={{
                objectFit: "cover",
                zIndex: "5",
              }}
            />

            {/* Overlay with semi-transparent background */}
            <div className="absolute inset-0 bg-black/30 z-10"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-start z-20 gap-5 p-10 lg:gap-8 w-full lg:w-[50%] ">
              <h1 className="text-3xl lg:text-6xl md:text-4xl font-extrabold text-white tracking-wide">
                {slide.title}
              </h1>
              <p className="text-lg lg:text-xl md:text-3xl mt-4 text-white">
                {slide.description}
              </p>
              <button
                onClick={() => {
                  scrollContact();
                }}
                className="border-2 border-white px-6 py-3 text-white rounded-xl hover:bg-white hover:text-blue-500 text-medium "
              >
                Book Your Trip
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceAniMbl;
