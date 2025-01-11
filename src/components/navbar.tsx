"use client"
import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo-jamantek.png";
import { motion } from "framer-motion";
import { IconMenu2, IconX  } from "@tabler/icons-react";
  

interface MenuProps {
  label: string;
  links: string;
}

const menuItems: MenuProps[] = [
  {
    label: "Home",
    links: "/",
  },
  {
    label: "About",
    links: "/About",
  },
  {
    label: "Contact",
    links: "/Contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Navbar bg-white bg-[length:200%_100%] items-center z-[99999] flex w-full fixed shadow-sm shadow-black/40">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <Image src={Logo} width={100} height={100} alt="logo" />
        </a>
      </div>
      <div className="flex-none lg:hidden">
        {/* Hamburger icon for mobile */}
        <button onClick={toggleMenu} className="text-xl">
          {isMenuOpen ? (
            <IconX size={32} />  // Close icon when menu is open
          ) : (
            <IconMenu2 size={32} />  // Hamburger icon when menu is closed
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "-100%" }} // Start from the left side
        animate={{ x: isMenuOpen ? 0 : "-100%" }} // Move to 0 when menu is open, otherwise back to -100%
        exit={{ x: "-100%" }} // Exit animation
        transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth transition
        className="lg:hidden fixed flex justify-center w-2/3 bg-white pr-10 h-full shadow-lg"
      >

        <ul className="menu p-4 font-bold text-md w-full">
          {menuItems.map((menu, index) => (
            <li key={index}>
              <a href={menu.links} onClick={toggleMenu}>
                {menu.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Desktop Menu */}
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal px-1 font-bold text-md">
          {menuItems.map((menu, index) => (
            <li key={index}>
              <a href={menu.links}>{menu.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
