"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

export const Enterprises = () => {
  return (
    <section className="bg-interprise bg-cover bg-no-repeat bg-center pt-6 pb-10 lg:hidden">
      <span className="text-white font-extralight text-3xl pl-4 flex items-center justify-start">
        EMPREENDIMENTOS
      </span>
      <div className="mt-5 pb-10 bg-white w-full py-2">
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
            <p className="text-center text-xl font-light py-5">Palazzo di Venezia</p>
            <div className="relative">
              <Image
                src="/lancamento01.jpg"
                alt="Foto lançamento residencial Pallazzo di Veneza, da Construtora Marceline"
                width={308}
                height={173}
                layout="responsive"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <p className="text-center text-xl font-light py-5">Royal Park Tower</p>
            <div className="relative">
              <Image
                src="/lancamento02.jpg"
                alt="Foto do segundo lançamento residencial"
                width={308}
                height={173}
                layout="responsive"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <p className="text-center text-xl font-light py-5">Bellevue Heights</p>
            <div className="relative">
              <Image
                src="/lancamento03.jpg"
                alt="Foto do terceiro lançamento residencial"
                width={308}
                height={173}
                layout="responsive"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <p className="text-center text-xl font-light py-5">Infinity Residences</p>
            <div className="relative">
              <Image
                src="/lancamento04.jpg"
                alt="Foto do terceiro lançamento residencial"
                width={308}
                height={173}
                layout="responsive"
              />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};
