"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const menuItems = [
  {
    id: 1,
    name: "Em Construção",
  },
  {
    id: 2,
    name: "Entregues",
  },
  {
    id: 3,
    name: "Lançamentos",
  },
  {
    id: 4,
    name: "Projetos",
  },
];

export const LargeScreenMenuSection = () => {
  return (
    <section className="hidden lg:flex flex-col w-full shadow-md shadow-black/30">
      <motion.div
        className="flex items-center justify-center w-full"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/logo-500-gold.png"
          alt="Logomarca Construtora Marceline"
          width={250}
          height={250}
        />
      </motion.div>
      <nav className="w-full flex items-center justify-center gap-40 bg-green-sections py-3">
        {...menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: index * 0.2 }}
          >
            <ul className="flex items-center justify-center gap-40 w-full text-white/60 font-light hover:text-white transition-all duration-300">
              <li>
                <a
                href="#"
                className=''
                >{item.name}</a>
              </li>
            </ul>
          </motion.div>
        ))}
      </nav>
    </section>
  );
};
