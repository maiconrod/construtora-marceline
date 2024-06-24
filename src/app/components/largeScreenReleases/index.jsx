"use client";
import { Playball } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const playball = Playball({
  variable: "--font-playball",
  subsets: ["latin"],
  weight: ["400"],
});

export const LargeScreenReleases = () => {
  const [isXl, setIsXl] = useState(false);
  const [is2xl, setIs2xl] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsXl(window.innerWidth >= 1280);
      setIs2xl(window.innerWidth >= 1440);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const descriptionAnimation = is2xl
    ? {
        initial: { opacity: 0, x: 1400, y: -200 },
        whileInView: { opacity: 1, x: 640, y: -200 },
        exit: { opacity: 0, x: 1400, y: -200 },
        transition: { duration: 0.7 },
      }
    : {
        initial: { opacity: 0, x: 1000, y: -100 },
        whileInView: { opacity: 1, x: 480, y: -100 },
        exit: { opacity: 0, x: 1000, y: -100 },
        transition: { duration: 0.7 },
      };

  const descriptionLeftAnimation = is2xl
    ? {
        initial: { opacity: 0, x: -1200, y: -200 },
        whileInView: { opacity: 1, x: -720, y: -200 },
        exit: { opacity: 0, x: -1200, y: -200 },
        transition: { duration: 0.7 },
      }
    : {
        initial: { opacity: 0, x: -1100, y: -100 },
        whileInView: { opacity: 1, x: -620, y: -100 },
        exit: { opacity: 0, x: -1100, y: -100 },
        transition: { duration: 0.7 },
      };

  const titleAnimation = is2xl
    ? {
        initial: { opacity: 0, x: -600, y: -110 },
        whileInView: { opacity: 1, x: 1400, y: -110 },
        exit: { opacity: 0, x: -600, y: -110 },
        transition: { duration: 0.7 },
      }
    : {
        initial: { opacity: 0, x: -600, y: -110 },
        whileInView: { opacity: 1, x: 900, y: -110 },
        exit: { opacity: 0, x: -600, y: -110 },
        transition: { duration: 0.7 },
      };
  const titleLeftAnimation = is2xl
    ? {
        initial: { opacity: 0, x: 300, y: 0 },
        whileInView: { opacity: 1, x: -500, y: 0 },
        exit: { opacity: 0, x: 600, y: 0 },
        transition: { duration: 0.7 },
      }
    : {
        initial: { opacity: 0, x: 600, y: 0 },
        whileInView: { opacity: 1, x: -450, y: 0 },
        exit: { opacity: 0, x: 600, y: 0 },
        transition: { duration: 0.7 },
      };

  return (
    <section className="hidden lg:flex flex-col w-full pt-20">
      <div className="font-playball w-full text-green-header font-light text-4xl ml-4 flex items-center justify-center pb-20 tracking-widest">
        <h1 className={playball.className}>Lançamentos</h1>
      </div>
      <div className="flex items-center justify-start relative w-full mb-16">
        <div className="w-3/5 relative">
          <div className={playball.className}>
            <p className="text-center text-4xl font-light pb-5">2025</p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/lancamento01.jpg"
              alt="Foto Lançamento Pallazo di Venezza"
              width={600}
              height={200}
              className="w-full border-green-header border-4 shadow-md shadow-black/30"
            />
          </motion.div>
          <div>
            <div className={playball.className}>
              <motion.h2
                className="absolute top-40 transform translate-x-[950px] xl:translate-x-[160%] 2xl:translate-x-[190%] -translate-y-1/2 p-5 w-[700px] h-[250px] text-3xl"
                {...titleAnimation}
              >
                Palazzo di Venezia
              </motion.h2>
            </div>
            <motion.div
              className="absolute top-1/2 -right-20 transform translate-x-[450px] xl:translate-x-[440px] 2xl:translate-x-[900px] -translate-y-1/2 bg-green-sections/90 p-5 xl:px-12 w-[800px] 2xl:w-[1000px] h-[250px] 2xl:h-[350px]"
              {...descriptionAnimation}
            >
              <p className="text-center text-white font-extralight leading-10 xl:pt-[3%] 2xl:pt-16">
                Inspirado na elegância e no charme de Veneza, o Palazzo di
                Venezia combina a grandiosidade clássica com a modernidade
                contemporânea. Seus espaços amplos e requintados oferecem um
                estilo de vida único, onde cada residente se sente parte de uma
                obra de arte.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end relative w-full mb-16">
        <div className={playball.className}>
          <motion.h2
            className="absolute top-9 transform translate-x-[20%] -translate-y-1/2 p-5 w-[700px] h-[250px] text-3xl font-light"
            {...titleLeftAnimation}
          >
            Royal Park Tower
          </motion.h2>
        </div>
        <div className="w-3/5 relative">
          <motion.div
            className="absolute top-1/2 left-0 transform -translate-x-[590px] xl:-translate-x-[530px] 2xl:-translate-x-[730px] 2xl:w-[1000px] 2xl:h-[350px] -translate-y-1/2 bg-green-sections/90 p-5 xl:px-12 w-[800px] h-[250px] z-40"
            {...descriptionLeftAnimation}
          >
            <p className="text-center text-white font-extralight leading-10 xl:pt-[3%] 2xl:pt-16">
              Com vistas panorâmicas e um design imperial, o Royal Park Tower se
              destaca como um ícone de sofisticação e luxo. Equipado com as mais
              modernas comodidades, oferece aos seus moradores uma experiência
              de vida exclusiva e repleta de conforto.
            </p>
          </motion.div>
          <div className={playball.className}>
            <p className="text-center text-4xl font-light pb-5">2026</p>
          </div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/lancamento02.jpg"
              alt="Foto Lançamento Pallazo di Venezza"
              width={600}
              height={200}
              className="w-full border-green-header border-4 shadow-md shadow-black/30"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex items-center justify-start relative w-full mb-16">
        <div className="w-3/5 relative">
          <div className={playball.className}>
            <p className="text-center text-4xl font-light pb-5">2028</p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/lancamento03.jpg"
              alt="Foto Lançamento Pallazo di Venezza"
              width={600}
              height={200}
              className="w-full border-green-header border-4 shadow-md shadow-black/30"
            />
          </motion.div>
          <div className="flex">
            <div className={playball.className}>
              <motion.h2
                className="absolute top-40  transform translate-x-[950px] xl:translate-x-[160%] 2xl:translate-x-[190%] -translate-y-1/2 p-5 w-[700px] h-[250px] text-3xl font-light"
                initial={{ opacity: 0, x: -600, y: -110 }}
                whileInView={{ opacity: 1, x: 1000, y: -110 }}
                exit={{ opacity: 0, x: -600, y: -110 }}
                transition={{ duration: 0.7 }}
                {...titleAnimation}
              >
                Bellevue Heights
              </motion.h2>
            </div>

            <motion.div
              className="absolute top-1/2 -right-20 transform translate-x-[450px] xl:translate-x-[440px] -translate-y-1/2 bg-green-sections/90 p-5 xl:px-12 w-[800px] h-[250px] 2xl:translate-x-[630px] 2xl:w-[1000px] 2xl:h-[350px]"
              {...descriptionAnimation}
            >
              <p className="text-center text-white font-extralight leading-10 2xl:pt-16 xl:pt-[3%]">
                Situado em uma localização privilegiada, o Bellevue Heights
                oferece uma experiência de moradia incomparável. Com vistas
                deslumbrantes e acabamentos de alta qualidade, este edifício
                proporciona um ambiente tranquilo e luxuoso para aqueles que
                buscam o melhor da vida.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end relative w-full mb-16">
        <div className="w-3/5 relative">
          <div className={playball.className}>
            <motion.h2
              className="absolute top-9 transform translate-x-[20%] -translate-y-1/2 p-5 w-[700px] h-[250px] text-3xl font-light"
              {...titleLeftAnimation}
            >
              Infinity Residences
            </motion.h2>
          </div>
          <motion.div
            className="absolute top-1/2 left-0 transform -translate-x-[530px] xl:-translate-x-[530px] -translate-y-1/2 bg-green-sections/90 p-5 xl:px-12 w-[800px] h-[250px] 2xl:-translate-x-[700px] 2xl:w-[1000px] 2xl:h-[350px] z-40"
            {...descriptionLeftAnimation}
          >
            <p className="text-center text-white font-extralight leading-10 xl:pt-[3%] 2xl:pt-16">
              O Infinity Residences é o epitome da elegância e modernidade. Com
              linhas arquitetônicas limpas e espaços projetados para o máximo
              conforto, este edifício oferece um estilo de vida infinito em luxo
              e conveniência, redefinindo o conceito de bem-estar urbano.
            </p>
          </motion.div>
          <div className={playball.className}>
            <p className="text-center text-4xl font-light pb-5">2029</p>
          </div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/lancamento04.jpg"
              alt="Foto Lançamento Pallazo di Venezza"
              width={600}
              height={200}
              className="w-full border-green-header border-4 shadow-md shadow-black/30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
