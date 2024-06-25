'use client'
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { PiPhoneLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";


const socialItems = [
  {
    id: 1,
    name: <CiInstagram />,
  },
  {
    id: 2,
    name: <CiFacebook />,
  },
  {
    id: 3,
    name: <CiLinkedin />,
  },
  {
    id: 4,
    name: <FaXTwitter />,
  },
];

export const Contact = () => {
  return (
    <section>
      <div className="flex items-center justify-center gap-4 md:gap-10 lg:gap-6 bg-green-header w-[60%] md:w-[40%] lg:w-[23%] mx-auto rounded-ss-full rounded-se-full pt-2 pb-1 text-gold-details ">
      {socialItems.map((item, index) => (
            <motion.a
            className='hover:text-white transition-all duration-300 text-2xl lg:text-3xl'
              href="#"
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.15, delay: index * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
      </div>
      <div className="bg-green-sections flex items-center justify-center lg:justify-start lg:pl-10 py-12 gap-1 shadow-inner-top">
        <div className="leading-[40px] font-extralight text-white text-lg">
          <div className="flex items-center gap-2">
            <CiMail className="text-gold-details text-3xl" />
            <p>marcelineconst@email.com</p>
          </div>
          <div className="flex items-center gap-2">
            <PiWhatsappLogoLight className="text-gold-details text-3xl" />
            <p>(99) 9 9999-9999</p>
          </div>
          <div className="flex items-center gap-2">
            <PiPhoneLight className="text-gold-details text-3xl" />
            <p>(99) 9 9999-9999</p>
          </div>
          <div className="flex items-center gap-2">
            <CiLocationOn className="text-gold-details text-3xl" />
            <p>Av. São Pedro, 1377, Centro, Cidade/XX</p>
          </div>
        </div>
      </div>
    </section>
  );
};
