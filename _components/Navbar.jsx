"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/Siteconfig";
import { Button } from "@nextui-org/react";

export default function Navbar() {
  const { navItems } = siteConfig;
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const pathname = usePathname(); // Get the current path

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }

  return (
    <div className="top-0 sticky bg-white z-50">
      <div className="mx-auto flex w-[90%] justify-between py-3 lg:py-2 text-sm ">
        {/* left side */}
        <section ref={animationParent} className="flex items-center gap-10">
          <Link href="/">
            <h2 className="text-xl lg:text-2xl font-semibold text-blue-600 cursor-pointer">
              Renuka Trips Goa
            </h2>
          </Link>
          {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        </section>

        {/* right side data */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="hidden lg:flex items-center gap-4 transition-all">
            {navItems.map((d, i) => (
              <li key={i} className="relative group py-3 transition-all">
                <Link
                  href={d.link ?? "#"}
                  className={`flex cursor-pointer items-center gap-2 font-medium ${
                    pathname === d.link ||
                    (d.children &&
                      d.children.some((ch) => ch.link === pathname))
                      ? "text-blue-500"
                      : "text-neutral-400"
                  }`}
                >
                  <span>{d.label}</span>
                  {d.children && (
                    <ChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {/* dropdown */}
                {d.children && (
                  <ul
                    className={`absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex`}
                  >
                    {d.children.map((ch, i) => (
                      <li
                        key={i}
                        className={`flex cursor-pointer items-center py-1 pl-6 pr-8 font-medium text-sm ${
                          pathname === ch.link
                            ? "text-blue-500"
                            : "text-neutral-400 hover:text-black"
                        }`}
                      >
                        <Link href={ch.link ?? "#"}>
                          {/* image */}
                          {ch.iconImage && (
                            <Image
                              src={ch.iconImage}
                              alt="item-icon"
                              width={16}
                              height={16}
                            />
                          )}
                          <span className="whitespace-nowrap pl-3">
                            {ch.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          
          <Link href="/contact" className="h-fit rounded-lg border-2 border-blue-500 px-4 py-2 text-blue-500 transition-all hover:bg-blue-500 hover:text-white font-medium" >
            Book now
          </Link>
        </nav>

        <div className="p-2 rounded-full bg-blue-300 lg:hidden">
          <Menu
            onClick={openSideMenu}
            className="cursor-pointer text-4xl lg:hidden text-white"
          />
        </div>
      </div>
    </div>
  );
}

function MobileNav({ closeSideMenu }) {
  const pathname = usePathname();
  const [openTabIndex, setOpenTabIndex] = useState(null);

  function handleTabClick(index) {
    setOpenTabIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <div
      className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 lg:hidden"
      onClick={closeSideMenu}
    >
      <div
        className="h-full w-[70%] bg-white  py-4 overflow-y-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <section className="flex justify-end mx-5">
          <div className="p-2 bg-blue-300 rounded-full">
            <X
              onClick={closeSideMenu}
              className="cursor-pointer text-4xl text-white"
            />
          </div>
        </section>

        {/* Add a specific height and enable scrolling */}
        <div className="max-h-[85vh] overflow-y-auto">
          <ul className="flex flex-col text-base gap-2 transition-all font-medium ">
            {siteConfig.navItems.map((d, i) => (
              <li key={i}>
                <SingleNavItem
                  label={d.label}
                  iconImage={d.iconImage}
                  link={d.link}
                  // eslint-disable-next-line react/no-children-prop
                  children={d.children}
                  isActive={
                    pathname === d.link ||
                    (d.children &&
                      d.children.some((ch) => ch.link === pathname))
                  }
                  closeSideMenu={closeSideMenu}
                  isItemOpen={openTabIndex === i}
                  onTabClick={() => handleTabClick(i)}
                />
              </li>
            ))}
          </ul>

          <section className="flex flex-col gap-8 mt-4 px-3">
            <Link href="/contact" className="h-fit rounded-lg border-2 border-blue-500 px-4 py-2 text-blue-500 transition-all hover:bg-blue-500 hover:text-white font-medium" >
                Book now
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

function SingleNavItem({
  label,
  iconImage,
  link,
  children,
  isActive,
  isItemOpen,
  onTabClick, // New prop to handle tab clicks
  closeSideMenu,
}) {
  const [animationParent] = useAutoAnimate();
  const pathname = usePathname();

  function handleItemClick() {
    if (children) {
      onTabClick();
    } else {
      closeSideMenu();
    }
  }

  return (
    <div ref={animationParent} className="relative py-3 transition-all px-3">
      <Link
        href={link ?? "#"}
        onClick={handleItemClick}
        className={`flex cursor-pointer items-center gap-2  ${
          isActive ? "text-blue-500" : "text-neutral-400"
        } group-hover:text-black`}
      >
        <span>{label}</span>
        {children && (
          <ChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
        )}
      </Link>

      {/* dropdown */}
      {isItemOpen && children && (
        <ul className="w-auto flex-col gap-1 rounded-lg bg-gray-200 py-3 transition-all flex mt-2">
          {children.map((ch, i) => (
            <li
              key={i}
              className={`flex cursor-pointer items-center py-1  ${
                pathname === ch.link
                  ? "text-blue-500"
                  : "text-neutral-400 hover:text-black"
              }`}
            >
              <Link href={ch.link ?? "#"} onClick={closeSideMenu}>
                {/* image */}
                {ch.iconImage && (
                  <Image
                    src={ch.iconImage}
                    alt="item-icon"
                    width={16}
                    height={16}
                  />
                )}
                <span className="whitespace-nowrap pl-3">{ch.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
