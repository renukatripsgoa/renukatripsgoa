"use client"
import React, { useState, useRef, useEffect } from "react";
import Carousel from "@/app/(website)/Carousel";
import Card from "@/app/(website)/Card";
import Testimonials from "@/app/(website)/Testimonials";
import AboutUsSection from "@/app/(website)/AboutUsSection";
import Contact from "@/app/(website)/contact/Contact";


const Home = () => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const contactRef = useRef(null);

  const handleCardSelect = (title) => {
    setSelectedTitle(title);
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-5">
        <Carousel scrollContact={handleCardSelect} />
        <AboutUsSection />
        <Card onSelectTitle={handleCardSelect} />
              <div className="flex h-44 w-full shadow-md rounded-xl border object-cover">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.9884543128114!2d73.75903857508901!3d15.538749653420867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc14acb1c97c9%3A0x15975bbbeeec0083!2sRenuka%20Trips%20Goa!5e0!3m2!1sen!2sin!4v1728021468235!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
        <Testimonials />
        <div ref={contactRef}>
          <Contact selectedService={selectedTitle} />
        </div>

      </div>
    </div>
  );
};

export default Home;
