import React from "react";
import "./EducationList.scss";
import EducationSection from "../../components/EducationSection/EducationSection";

const EducationList = () => (
  <section className="education-list">
    <h2>Formação Acadêmica</h2>
    <div className="education-sections">
      <EducationSection
        period="2018-2019"
        training="Pós-Graduação Lato Sensu em Gestão e Negócios"
        trainingUrl="https://www.camboriu.ifc.edu.br/pos-graduacao/pos-graduacao-em-gestao-e-negocios/"
        institutionName="Instituto Federal Catarinense, IF-Catarinense"
        institutionUrl="https://www.camboriu.ifc.edu.br/"
        address="Camboriú/SC"
        status="Concluído"
      />
      <EducationSection
        period="2017-2020"
        training="Bacharelado em Sistema de Informação"
        trainingUrl="https://www.camboriu.ifc.edu.br/cursos-superiores/bacharelado-em-sistemas-de-informacao/"
        institutionName="Instituto Federal Catarinense, IF-Catarinense"
        institutionUrl="https://www.camboriu.ifc.edu.br/"
        address="Camboriú/SC"
        status="Incompleto"
      />
      <EducationSection
        period="2010-2016"
        training="Bacharel em Engenharia Ambiental"
        trainingUrl="https://www.univali.br/graduacao/engenharia-ambiental-e-sanitaria-itajai/Paginas/default.aspx"
        institutionName="Universidade do Vale do Itajaí - Univali"
        institutionUrl="https://www.univali.br/"
        address=" Itajaí/SC, Brasil"
        status="Concluído"
      />
    </div>
  </section>
);

export default EducationList;
