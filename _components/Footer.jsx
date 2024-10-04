import Link from "next/link";
import { siteConfig } from "@/config/Siteconfig";

export default function Footer() {
  const { tours, couplePackages, groupPackages, quickLinks } = siteConfig;
  return (
    <>
      <footer className="bg-blue-900 text-white py-8">
        <div className="w-[90%] mx-auto flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <h1 className="text-xl lg:text-2xl font-bold">Renuka Trips Goa</h1>
            {/* <button className="px-3 py-1 md:p-2 lg:p-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors ">
              Book Your Trip
            </button> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Tours Section */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Tours</h2>
              <ul className="space-y-2 text-gray-300">
                {tours.map((tour, index) => (
                  <li key={index}>
                    <Link href={tour.link}>{tour.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Couple Packages Section */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Couple Packages</h2>
              <ul className="space-y-2 text-gray-300">
                {couplePackages.map((packageItem, index) => (
                  <li key={index}>
                    <Link href={packageItem.link}>{packageItem.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Group Packages Section */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Group Packages</h2>
              <ul className="space-y-2 text-gray-300">
                {groupPackages.map((packageItem, index) => (
                  <li key={index}>
                    <Link href={packageItem.link}>{packageItem.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Section */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
              <ul className="space-y-2 text-gray-300">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-8 border-t border-white pt-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col gap-5">
              <h3 className="font-semibold text-start lg:text-center ">
                Address
              </h3>
              <p className="text-gray-300 text-start lg:text-center">
                Vaddi galvai 3/19/A/1 near Andores resort and spa Tivai Vaddo Calangute, Goa 403516 India
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="font-semibold text-start lg:text-center">Email</h3>
              <p className="text-gray-300 text-start lg:text-center">
                <Link
                  href="mailto:renukaadventures@gmail.com"
                  className="text-gray-300"
                >
                  renukaadventures@gmail.com
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="font-semibold text-start lg:text-center">
                Contact No.
              </h3>
              <p className="text-gray-300 text-start lg:text-center">
                <Link href="tel:+917410150610" className="text-gray-300">
                  +91 74101 50610
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex justify-center items-center bg-white">
        <h1 className="text-medium text-black p-5">
          Website Developed and Maintained by{" "}
          <span>
            <Link
              href="https://www.prosperaahospitality.com/"
              className="text-primary-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prospera Hospitality
            </Link>
          </span>
        </h1>
      </div>
    </>
  );
}
