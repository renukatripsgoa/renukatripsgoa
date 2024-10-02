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
        <Testimonials />
        <div ref={contactRef}>
          <Contact selectedService={selectedTitle} />
        </div>

      </div>
    </div>
  );
};

export default Home;