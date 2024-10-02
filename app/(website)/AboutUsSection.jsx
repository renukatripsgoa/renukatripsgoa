const AboutUsSection = () => {
  return (
    <div className="w-[90%] mx-auto h-full lg:h-52 bg-[#C0DFFF] flex flex-col lg:flex-row ">
      <div className="bg-blue-950 p-5 flex justify-center items-center w-full lg:w-[10%] relative">
        <div
          className={`absolute w-5 h-5 transform rotate-45 bg-blue-950 
                lg:top-[40%] lg:right-0 lg:translate-x-1/2 
                bottom-0  translate-y-1/2`}
        />
        <p className="text-center font-semibold text-xl text-white rotate-0 lg:rotate-[-90deg]">
          About Us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 p-5 place-content-center w-full lg:w-[90%] mt-5 lg:m-0">
        <div className="grid grid-cols-2 gap-3 py-4  text-blue-900 border-b-1 lg:border-b-0 lg:border-r-1 border-blue-500">
          <h3 className="text-3xl text-start lg:text-center font-bold"> 12+</h3>
          <p className="text-start font-medium">Years of Experience</p>
        </div>
        <div className="grid grid-cols-2 gap-3 py-4  text-blue-900  border-b-1 lg:border-b-0 lg:border-r-1 border-blue-500">
          <h3 className="text-3xl text-start lg:text-center font-bold">32500+</h3>
          <p className="text-start font-medium">Satisfied Customers</p>
        </div>
        <div className="grid grid-cols-2 gap-3 py-4  text-blue-900 border-b-1 md:border-b-0 lg:border-b-0 lg:border-r-1 border-blue-500">
          <h3 className="text-3xl text-start lg:text-center font-bold">7200+</h3>
          <p className="text-start font-medium">Number of Dives</p>
        </div>
        <div className="grid grid-cols-2 gap-3 py-4  text-blue-900">
          <h3 className="text-3xl text-start lg:text-center font-bold">50+</h3>
          <p className="text-start font-medium ">On ground Team staff
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
