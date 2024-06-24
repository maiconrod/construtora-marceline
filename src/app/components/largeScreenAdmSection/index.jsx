export const LargeScreenAdmSection = () => {
  return (
    <section className="hidden lg:flex bg-green-sections px-10 py-20 items-center justify-center gap-10 shadow-inner-top">
     <div className="w-[50%] h-[270px] px-6 py-6 text-white flex flex-col gap-6 border border-white">
        <h2 className="text-center font-normal text-xl">Administração e gerência de Obras</h2>
        <p className="text-center font-extralight leading-7">
          Garantimos que cada projeto seja cuidadosamente planejado e executado,
          coordenando todos os recursos de maneira eficaz.
        </p>
        <p className="text-center font-extralight leading-7">
          Nosso compromisso com a qualidade e a segurança resulta em obras
          concluídas dentro do prazo e do orçamento, proporcionando confiança e
          tranquilidade aos nossos clientes.
        </p>
      </div>
      <div className='w-[50%] h-[270px] px-2 py-6 text-white flex flex-col gap-6 border border-white'>
        <h2 className="text-center">
          Gestão eficiente, confiança sólida, segurança garantida.
        </h2>
        <p className="text-center font-light px-2">
          Invista no mercado imobiliário e valorize seu patrimônio.
        </p>
        <ul className="list-disc flex flex-col items-start pl-12 font-extralight">
          <li>Valorização Contínua</li>
          <li>Alta demanda turística</li>
          <li>Qualidade de vida</li>
          <li>Oportunidades de desenvolvimento</li>
        </ul>
      </div>
    </section>
  );
};
