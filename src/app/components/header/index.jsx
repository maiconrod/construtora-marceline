"use client";

import Image from "next/image";
import { HiMiniBars3 } from "react-icons/hi2";
import { HeroSection } from "../heroSection";
import { CiInstagram, CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const socialItems = [
  { id: 1, name: <CiInstagram /> },
  { id: 2, name: <CiFacebook /> },
  { id: 3, name: <CiLinkedin /> },
  { id: 4, name: <FaXTwitter /> },
];

const navLinks = [
  { title: "Em construção", id: 1, link: "#" },
  { title: "Entregues", id: 2, link: "#" },
  { title: "Lançamentos", id: 3, link: "#" },
  { title: "Projetos", id: 4, link: "#" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((menu) => !menu);
  };

  return (
    <motion.header
      className="bg-image bg-cover bg-no-repeat w-full h-[850px] lg:bg-image2 lg:shadow-md shadow-black/30 relative"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full bg-green-header opacity-80 flex items-center justify-between px-5">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/logo-500-gold.png"
            alt="Logomarca Construtora Marceline"
            width={100}
            height={100}
          />
        </motion.a>
        <div className="hidden lg:flex items-center justify-center text-xl gap-2 text-gold-details">
          {socialItems.map((item, index) => (
            <motion.a
              className="hover:text-white transition-all duration-300"
              href="#"
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.15, delay: index * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
        <div className="lg:hidden relative z-20">
          <button type="button" onClick={handleMenu}>
            {open ? (
              <IoMdClose className="text-gold-details text-4xl hover:text-white transition-all duration-300" />
            ) : (
              <HiMiniBars3 className="text-gold-details text-4xl hover:text-white transition-all duration-300" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="w-full bg-green-sections/80 flex flex-col items-center justify-center gap-4 py-3 text-white font-light absolute z-10"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {navLinks.map((link) => (
              <ul key={link.id} className="w-full text-center">
                <li>
                  <a
                    href={link.link}
                    className="hover:text-gold-details transition-all duration-300 block py-4"
                  >
                    {link.title}
                  </a>
                </li>
              </ul>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <HeroSection />
    </motion.header>
  );
};
