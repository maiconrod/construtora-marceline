import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 0.8, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
      transition={{ duration: .8 }}
    >
      <div className="pt-28 flex items-center justify-center">
        <Image
          src="/heroSection.png"
          alt="Logomarca Construtora Marceline"
          width={500}
          height={500}
        />
      </div>
      <div className="flex justify-center">
        <button className="flex items-center justify-center gap-1 border text-white/50 font-light px-2 text-center hover:scale-110 hover:text-white transition-all duration-500">
          SAIBA MAIS
          <p>
            <BsArrowRight />
          </p>
        </button>
      </div>
    </motion.section>
  );
};
