'use client';
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { motion } from "framer-motion";


export const Releases = () => {
  return (
    <section className="mt-6 lg:hidden overflow-x-hidden">
      <h2 className="text-green-header font-extralight text-3xl ml-4 flex items-center justify-start">
        LANÇAMENTOS
      </h2>
      <div>
        <div className="flex items-center justify-center mt-6">
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              arrows: true,
              pagination: true,
              autoplay: true,
            }}
            aria-label="Imagens dos lançamentos da Construtora Marceline"
          >
            <SplideSlide>
              <div>
                <Image
                  src="/lancamento01.jpg"
                  alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                  width={308}
                  height={173}
                  className="mx-auto w-[90%]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <Image
                  src="/lancamento02.jpg"
                  alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                  width={308}
                  height={173}
                  className="mx-auto w-[90%]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <Image
                  src="/lancamento03.jpg"
                  alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                  width={308}
                  height={173}
                  className="mx-auto w-[90%]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <Image
                  src="/lancamento04.jpg"
                  alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                  width={308}
                  height={173}
                  className="mx-auto w-[90%]"
                />
              </div>
            </SplideSlide>
            
          </Splide>
        </div>
        <div className="py-4 flex items-center justify-center shadow-md shadow-black/30">
          <h2 className="text-2xl font-light">Palazzo di Venezia</h2>
        </div>
        <div className="bg-green-sections px-2 py-8 shadow-inner-top">
          <motion.p
          className="text-center text-white font-extralight leading-10"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }}
          transition={{ duration: 0.7 }}
          >
            Inspirado na elegância e no charme de Veneza, o Palazzo di Venezia
            combina a grandiosidade clássica com a modernidade contemporânea.
            Seus espaços amplos e requintados oferecem um estilo de vida único,
            onde cada residente se sente parte de uma obra de arte.
          </motion.p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center mt-6">
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              arrows: true,
              pagination: true,
              autoplay: true,
            }}
            aria-label="Imagens dos lançamentos da Construtora Marceline"
          >
            <SplideSlide>
              <div>
                <Image
                  src="/lancamento02.jpg"
                  alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                  width={308}
                  height={173}
                  className="mx-auto w-[90%]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <Image
                  src="/lancamento01.jpg"
                  alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                  width={308}
                  height={173}
                  className="mx-auto w-[90%]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <Image
                  src="/lancamento03.jpg"
                  alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                  width={308}
                  height={173}
                  className="mx-auto w-[90%]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <Image
                  src="/lancamento04.jpg"
                  alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                  width={308}
                  height={173}
                  className="mx-auto w-[90%]"
                />
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div className="py-4 flex items-center justify-center shadow-md shadow-black/30">
          <h2 className="text-2xl font-light">Royal Park Tower</h2>
        </div>
        <div className="bg-green-sections px-2 py-8 shadow-inner-top">
          <motion.p className="text-center text-white font-extralight leading-10"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 150 }}
          transition={{ duration: 0.7 }}
          >
            Com vistas panorâmicas e um design imperial, o Royal Park Tower se
            destaca como um ícone de sofisticação e luxo. Equipado com as mais
            modernas comodidades, oferece aos seus moradores uma experiência de
            vida exclusiva e repleta de conforto.
          </motion.p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center mt-6">
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              arrows: true,
              pagination: true,
              autoplay: true,
            }}
            aria-label="Imagens dos lançamentos da Construtora Marceline"
          >
            <SplideSlide>
              <div>
                <Image
                  src="/lancamento03.jpg"
                  alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                  width={308}
                  height={173}
                  className="mx-auto w-[90%]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <Image
                  src="/lancamento01.jpg"
                  alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                  width={308}
                  height={173}
                  className="mx-auto w-[90%]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <Image
                  src="/lancamento02.jpg"
                  alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                  width={308}
                  height={173}
                  className="mx-auto w-[90%]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <Image
                  src="/lancamento04.jpg"
                  alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                  width={308}
                  height={173}
                  className="mx-auto w-[90%]"
                />
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div className="py-4 flex items-center justify-center shadow-md shadow-black/30">
          <h2 className="text-2xl font-light">Bellevue Heights</h2>
        </div>
        <div className="bg-green-sections px-2 py-8 shadow-inner-top">
          <motion.p className="text-center text-white font-extralight leading-10"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }}
          transition={{ duration: 0.7 }}
          >
            Situado em uma localização privilegiada, o Bellevue Heights oferece
            uma experiência de moradia incomparável. Com vistas deslumbrantes e
            acabamentos de alta qualidade, este edifício proporciona um ambiente
            tranquilo e luxuoso para aqueles que buscam o melhor da vida.
          </motion.p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center mt-6">
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              arrows: true,
              pagination: true,
              autoplay: true,
            }}
            aria-label="Imagens dos lançamentos da Construtora Marceline"
          >
            <SplideSlide>
              <div>
                <Image
                  src="/lancamento04.jpg"
                  alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                  width={308}
                  height={173}
                  className="mx-auto max-w-[90%]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <Image
                  src="/lancamento03.jpg"
                  alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                  width={308}
                  height={173}
                  className="mx-auto max-w-[90%]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <Image
                  src="/lancamento02.jpg"
                  alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                  width={308}
                  height={173}
                  className="mx-auto max-w-[90%]"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <Image
                  src="/lancamento01.jpg"
                  alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                  width={308}
                  height={173}
                  className="mx-auto max-w-[90%]"
                />
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div className="py-4 flex items-center justify-center shadow-md shadow-black/30">
          <h2 className="text-2xl font-light">Infinity Residences</h2>
        </div>
        <div className="bg-green-sections px-2 py-8 shadow-inner-top">
          <motion.p className="text-center text-white font-extralight leading-10"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 150 }}
          transition={{ duration: 0.7 }}
          >
            O Infinity Residences é o epitome da elegância e modernidade. Com
            linhas arquitetônicas limpas e espaços projetados para o máximo
            conforto, este edifício oferece um estilo de vida infinito em luxo e
            conveniência, redefinindo o conceito de bem-estar urbano.
          </motion.p>
        </div>
      </div>
      
    </section>
  );
};
