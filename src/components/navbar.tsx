"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo-jamantek.png";
import { motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

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
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="Navbar bg-white fixed w-full flex shadow-md z-[99999] pr-10 items-center">
      {/* Logo Section */}
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl" aria-label="Home">
          <Image src={Logo} width={100} height={100} alt="logo" />
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="flex-none lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-xl"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <IconX size={32} /> : <IconMenu2 size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[99998] bg-black/50"
          onClick={closeMenu}
        ></div>
      )}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isMenuOpen ? 0 : "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="lg:hidden fixed w-2/3 bg-white left-0 top-0 h-full shadow-lg z-[99999]"
      >
        <ul className="menu p-4 font-bold text-md">
          {menuItems.map((menu, index) => (
            <li key={index}>
              <Link href={menu.links} onClick={closeMenu}>
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-md">
          {menuItems.map((menu, index) => (
            <li key={index}>
              <Link href={menu.links}>{menu.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
