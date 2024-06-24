import Image from "next/image";

export const About = () => {
  return (
    <section className="px-9 pb-20 shadow-inner-top">
      <div className="flex justify-center items-center">
        <Image
          src="/logo-500-gold.png"
          alt="Logomarca Constutora Marceline"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 xl:px-48">
        <p className="text-justify indent-9 text-green-header font-extralight leading-10 ">
          A Marceline Construtora, com mais de uma década de atuação no mercado
          da construção civil, tem se destacado pela excelência e inovação.
          Desde sua fundação, a empresa transformou sonhos em realidade,
          oferecendo soluções construtivas modernas e funcionais. Com um
          portfólio diversificado de projetos residenciais e comerciais, a
          Marceline Construtora orgulha-se de entregar obras que superam as
          expectativas de seus clientes.
        </p>
        <p className="text-justify indent-9 text-green-header font-extralight leading-10">
          Guiada por valores sólidos como compromisso com a qualidade,
          transparência e respeito aos prazos, a Marceline Construtora prioriza
          a segurança e a sustentabilidade em todos os seus projetos. A
          dedicação em satisfazer os clientes e a busca contínua por inovação
          garantem que cada obra seja sinônimo de confiança e durabilidade,
          consolidando a Marceline Construtora como referência no setor da
          construção civil.
        </p>
      </div>
    </section>
  );
};
