export const AdmSection = () => {
  return (
    <section className="m-2 mb-12 lg:hidden">
      <div className="px-2 py-6 bg-green-header text-white flex flex-col gap-6 shadow-md shadow-black/50">
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
    </section>
  );
};
