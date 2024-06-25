"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const InfoSection = () => {
  return (
    <section>
      <div className="w-full pt-20 flex flex-col xl:flex-row xl:justify-center xl:items-center xl:pl-0 xl:gap-24 xl:mb-10 items-baseline justify-center pl-[10%] md:pl-[35%]">
        <motion.div
          className="flex items-center justify-center gap-2 mb-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/crane.png"
            alt="Imagem de Guindaste simbolizando a área construída pela empresa."
            width={100}
            height={100}
          />
          <div>
            <p className="text-4xl font-light">100.000+</p>
            <p className="text-xl font-extralight">m2 construídos</p>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center gap-2 mb-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/constructor.png"
            alt="Imagem de Guindaste simbolizando a área construída pela empresa."
            width={100}
            height={100}
          />
          <div>
            <p className="text-4xl font-light">130+</p>
            <p className="text-xl font-extralight">unidades entregues</p>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center gap-2 mb-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/checked.png"
            alt="Imagem de Guindaste simbolizando a área construída pela empresa."
            width={100}
            height={100}
          />
          <div>
            <p className="text-4xl font-light">+10 anos</p>
            <p className="text-xl font-extralight">construindo sonhos</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
