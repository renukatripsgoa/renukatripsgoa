'use client'
import React, { useState, useEffect } from "react";
import { IMAGES } from "@/public/index";
import Image from "next/image";
import { X } from "lucide-react";

const Contact = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",

    services: [], // to manage multiple services
  });

  const serviceOptions = [
    "Scuba Diving",
    "Parasailing",
    "Kayaking",
    "Cruise",
    "Dinner Cruise",
    "Boat Party",
    "Bungee Jumping",
  ];

  // Initialize the formData.services with the selectedService if not already included
  useEffect(() => {
    if (selectedService && !formData.services.includes(selectedService)) {
      setFormData((prevData) => ({
        ...prevData,
        services: [...prevData.services, selectedService],
      }));
    }
  }, [selectedService]);

  // Handle changes in the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle changes in the service dropdown
  const handleDropdownSelect = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue && !formData.services.includes(selectedValue)) {
      setFormData((prevData) => ({
        ...prevData,
        services: [...prevData.services, selectedValue],
      }));
    }
  };

  // Remove a selected service
  const handleServiceRemove = (serviceToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      services: prevData.services.filter(
        (service) => service !== serviceToRemove
      ),
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I am interested in the following services: 
    ${formData.services.join(", ")}.
    My details are - 
    Name: ${formData.name},
    Phone: ${formData.phone}, 
    Email: ${formData.email}, 
    Message: ${formData.message}`;
    const whatsappURL = `https://wa.me/7378592332?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
      services: [], // Clear selected services
    });
  };

  return (
    <div className="flex justify-center items-center lg:h-screen bg-white mb-10">
      <div className="bg-white shadow-lg rounded-lg w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2 w-full rounded-lg relative">
          <Image
            src={IMAGES.contact}
            width={400}
            height={400}
            alt="Scenic"
            className="rounded-xl w-full h-full object-cover"
          />
          <div className="flex justify-center items-center absolute inset-0 flex-col gap-2 md:gap-5 px-5 md:px-8 lg:px-16">
            <h2 className="text-white md:text-3xl lg:text-6xl font-bold text-start w-full">
              Every Trip
            </h2>
            <h2 className="text-white md:text-3xl lg:text-6xl font-bold text-start w-full">
              Starts with a Plan.
            </h2>
          </div>
        </div>
        <div className="col-span-1 p-5 lg:p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <p className="text-gray-600 mb-6">Connect with us to know more</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <select
              className="block w-full px-4 py-2 border rounded-lg mb-4"
              onChange={handleDropdownSelect}
              value=""
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((service) => (
                <option
                  key={service}
                  value={service}
                  disabled={formData.services.includes(service)}
                >
                  {service}
                </option>
              ))}
            </select>

            {/* Selected Services */}
            <div className="mb-4 grid grid-cols-2 gap-2">
              {formData.services.map((service) => (
                <div
                  key={service}
                  className="flex items-center justify-between bg-blue-500 text-white px-4 py-2 rounded-xl"
                >
                  <span>{service}</span>
                  <button
                    type="button"
                    onClick={() => handleServiceRemove(service)}
                    className="ml-1 text-black font-bold p-1 bg-white rounded-full"
                  >
                    <X className="size-3" />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
