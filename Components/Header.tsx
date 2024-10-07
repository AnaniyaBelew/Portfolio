"use client";

import Image from "next/image";
import ProfileImage from "@/assets/Photo.png";
import Link from "next/link";
import clsx from "clsx";

import { useState } from "react";
import { usePathname } from "next/navigation";
function Header() {
  //const variables
  const path = usePathname();
  //states
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //utilfunctions
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  console.log("this is the route:{}",path === "/")
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex justify-center items-center md:pl-10 pl-5">
        {/* <Image src={ProfileImage} width={70} height={70} alt='profile pic' className='rounded-full'/> */}
        <h1 className="md:p-10 p-5">Ananiya Belew</h1>
      </div>
      <button onClick={toggleSidebar} className="md:hidden p-5">
        {/* You can add an icon here if you want */}
        Menu
      </button>

      <div className="hidden md:flex justify-center items-center gap-5 pr-5">
      <Link
                href="#"
                className={clsx("font-third", {
                  "text-text-secondary": path === "/",
                })}
                onClick={toggleSidebar}
              >
                Home
              </Link>
              <Link
                href="#"
                className={clsx("font-third", {
                  "text-text-secondary": path === "/services",
                })}
                onClick={toggleSidebar}
              >
                Services
              </Link>
              <Link
                href="#"
                className={clsx("font-third", {
                  "text-text-secondary": path === "/resume",
                })}
                onClick={toggleSidebar}
              >
                Resume/CV
              </Link>
              <Link
                href="#"
                className={clsx("font-third", {
                  "text-text-secondary": path === "/expirence",
                })}
                onClick={toggleSidebar}
              >
                Experience
              </Link>
              <Link
                href="#"
                className={clsx("font-third", {
                  "text-text-secondary": path === "/hire",
                })}
                onClick={toggleSidebar}
              >
                Hire Me
              </Link>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className={`fixed right-0 top-0 h-full w-60 bg-foreground shadow-lg transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-5 justify-center p-5">
            <h2 className="text-xl font-bold top-0 right-0">Menu</h2>
            <nav className="flex justify-center flex-col gap-10 mt-5">
              <Link
                href="#"
                className={clsx("font-third", {
                  "text-text-secondary": path === "/",
                })}
                onClick={toggleSidebar}
              >
                Home
              </Link>
              <Link
                href="#"
                className={clsx("font-third", {
                  "text-text-secondary": path === "/services",
                })}
                onClick={toggleSidebar}
              >
                Services
              </Link>
              <Link
                href="#"
                className={clsx("font-third", {
                  "text-text-secondary": path === "/resume",
                })}
                onClick={toggleSidebar}
              >
                Resume/CV
              </Link>
              <Link
                href="#"
                className={clsx("font-third", {
                  "text-text-secondary": path === "/expirence",
                })}
                onClick={toggleSidebar}
              >
                Experience
              </Link>
              <Link
                href="#"
                className={clsx("font-third", {
                  "text-text-secondary": path === "/hire",
                })}
                onClick={toggleSidebar}
              >
                Hire Me
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
