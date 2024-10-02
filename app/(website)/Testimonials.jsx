import { IMAGES } from "@/public/index";
export default function Testimonials() {
    const testimonials = [
      {
        name: "Rohit Gawade",
        role: "Scuba Diving Guest",
        image: IMAGES.test1, 
        testimonial: "Scuba diving in Goa is thrilling and peaceful, letting you explore vibrant coral reefs and encounter diverse. ",
        date: "27/08/2024"
      },
      {
        name: "Ankit Singh",
        role: "Scuba Diving Guest",
        image: IMAGES.test2,
        testimonial: "Scuba diving in Goa is thrilling and peaceful, letting you explore vibrant",
        date: "27/08/2024"
      },
      {
        name: "Saylee Nikam",
        role: "Surfing Guest",
        image: IMAGES.test3,
        testimonial: "Scuba diving in Goa is thrilling and peaceful, letting you explore ",
        date: "27/08/2024"
      }
    ];
  
    return (
      <div className="bg-blue-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
              >
                <div className="flex items-center mb-4 md:flex-col lg:flex-row md:gap-3 gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full "
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 md:text-center lg:text-start">{item.name}</h3>
                    <p className="text-gray-500">{item.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{item.testimonial}</p>
                <p className="text-gray-400 text-right">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }



// "use client"

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/free-mode";
// import { FreeMode, Pagination } from "swiper/modules";
// import { ArrowUpRight } from "lucide-react";

// const ActiveSlider = () => {
//   return (
//     <div className="flex items-center justify-center flex-col h-[900px] bg-[#6c34af]">
//       <Swiper
//         breakpoints={{
//           // Small devices (centered, 1 card)
//           340: {
//             display:"flex",
//             justifyContent:"center",
//             alignItems:"center",
//             slidesPerView: 1,
//             spaceBetween: 0,
//           },
//           // Medium devices (2 cards)
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           // Large devices (3 cards)
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//           },
//         }}
//         freeMode={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[FreeMode, Pagination]}
//         className="max-w-[90%] lg:max-w-[80%]"
//       >
//         {ServiceData.map((item) => (
//           <SwiperSlide key={item.title}>
//             <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
//               <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${item.backgroundImage})` }}
//               />
//               <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
//               <div className="relative flex flex-col gap-3">
//                 <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
//                 <h1 className="text-xl lg:text-2xl">{item.title} </h1>
//                 <p className="lg:text-[18px]">{item.content} </p>
//               </div>
//               <ArrowUpRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ActiveSlider;





// export const ServiceData = [
//   {
//     title: "Scuba Diving",
//     content: "Explore the underwater world with professional diving instructors.",
//     backgroundImage: "https://via.placeholder.com/350", // Replace with actual image source
//     icon: ArrowUpRight, // Replace with an appropriate icon component
//   },
//   {
//     title: "Surfing Lessons",
//     content: "Learn to ride the waves with our experienced surf coaches.",
//     backgroundImage: "https://via.placeholder.com/350", // Replace with actual image source
//     icon: ArrowUpRight, // Replace with an appropriate icon component
//   },
//   {
//     title: "Yoga Retreats",
//     content: "Relax and rejuvenate with our specialized yoga retreats.",
//     backgroundImage: "https://via.placeholder.com/350", // Replace with actual image source
//     icon: ArrowUpRight, // Replace with an appropriate icon component
//   },
//   {
//     title: "Mountain Trekking",
//     content: "Join our guided mountain treks to explore the great outdoors.",
//     backgroundImage: "https://via.placeholder.com/350", // Replace with actual image source
//     icon: ArrowUpRight, // Replace with an appropriate icon component
//   },
//   {
//     title: "Spa Services",
//     content: "Indulge in a variety of spa treatments designed for ultimate relaxation.",
//     backgroundImage: "https://via.placeholder.com/350", // Replace with actual image source
//     icon: ArrowUpRight, // Replace with an appropriate icon component
//   }
// ];