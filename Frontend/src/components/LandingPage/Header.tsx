"use client";

import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import Button from "../Button";
import AnimatedDiv from "../AnimatedDiv";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Menu items array
  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#courses", label: "Courses" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#FAQS", label: "FAQs" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div>
      <div className="bg-header w-screen  bg-opacity-100 flex justify-between border-b-[0.5px] border-[#FCFBF726] shadow-lg px-4 md:px-8 items-center py-4  font-merriweather">
        <div className="flex md:px-2 gap-x-4 items-center font-mooli">
          <div className="bg-yellow rounded-2xl p-2">
          <img src="/logo.png" alt="CraftLink logo" width={22} height={49} />
          </div>
          <span className="text-[20px] md:text-[28px]">
            Craft{""}
            <span className="bg-[#FFD700] text-[#1A1203] rounded-sm">Link</span>
          </span>
        </div>

        <div className="hidden md:flex gap-x-8 text-lg text-[#F9F1E2]">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#FFD700]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex">
           <Button text="Start Learning" />
        </div>

        <div className="flex lg:hidden">
          <MdOutlineMenu color="#FFD700" size={32} onClick={toggleMenu} />
        </div>
      </div>

      {isMenuOpen && (
        <AnimatedDiv
        initialX="100%"
        animateX={0}
        exitX={"-100%"}
        duration={1.0}
        className="fixed inset-0 w-screen h-screen bg-[#333333] bg-opacity-50 z-10">
          <div className="relative top-8 right-1 flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-[#FFD700] text-3xl"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 bg-[#1A1A1A] text-[#F9F1E2] h-full p-6 text-xl rounded-md">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className="hover:text-[#FFD700]"
                tabIndex={0}
              >
                {item.label}
              </a>
            ))}
            <Button  text="Get Started" />
          </div>
        </AnimatedDiv>
      )}
    </div>
  );
};

export default Header;
