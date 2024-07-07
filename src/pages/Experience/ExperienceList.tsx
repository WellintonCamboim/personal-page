import React from "react";
import "./ExperienceList.scss";
import ExperienceSection from "../../components/ExperienceSection/ExperienceSection";

const ExperienceList = () => (
  <section className="experience">
    <h2>Atuação profissional - Experiências</h2>
    <div className="experience-sections">
      <ExperienceSection
        companyUrl="https://www.contaxip.com/"
        companyName="Conta Xip"
        description="Solução financeira digital exclusiva para os clientes da Solar Coca-Cola"
        office="Desenvolvedor Full Stack"
        responsibilities="Como Desenvolvedor Full Stack na Conta Xip, atuei no time de desenvolvimento da API interna, no aplicativo principal (Xip+) e no sistema Backoffice utilizado internamente pelos colaboradores da empresa. Além disso, fui responsável por investigar bugs relatados pelo suporte de níveis 1 e 2, fornecendo análises e coleta de dados para os setores comercial e de compliance da empresa. Também executei scripts para atualizações de dados nos bancos de dados da organização."
        skills="Análise e correção de bugs, implementação de software, criação de scripts para atualização de dados, sustentação N3, desenvolvimento de software, análise de dados financeiros e gestão de projetos."
        technologies={[
          {
            tech: "javascript",
            url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
          },
          {
            tech: "nodejs",
            url: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
          },
          {
            tech: "typescript",
            url: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
          },
          {
            tech: "react",
            url: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
          },
          {
            tech: "reactnative",
            url: "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
          },
          {
            tech: "html5",
            url: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
          },
          {
            tech: "css3",
            url: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
          },
          {
            tech: "sass",
            url: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
          },
          {
            tech: "mongodb",
            url: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
          },
          {
            tech: "postgresql",
            url: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
          },
          {
            tech: "aws",
            url: "https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white",
          },
          {
            tech: "linux",
            url: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
          },
        ]}
        tags={[
          { text: "Redux", color: "#9a58dc" },
          { text: "Git", color: "#a52a2a" },
          { text: "Scrum", color: "#900020" },
        ]}
      />

      <ExperienceSection
        companyUrl="https://tentaculo.digital/"
        companyName="Tentáculo Digital"
        description="Empresa de Software House"
        office="Desenvolvedor Full Stack"
        responsibilities="Na Tentáculo Digital, tive a oportunidade de integrar diferentes squads, atuando como Desenvolvedor Full Stack em produtos internos da Software House e também em projetos para clientes, principalmente do setor financeiro. Adquiri experiência no desenvolvimento de novos produtos, na implementação de melhorias, na compreensão de regras de negócios e na correção de bugs."
        skills="Desenvolvimento de software, realização de testes de software e desenvolvimento de aplicações para Web e mobile."
        technologies={[
          {
            tech: "javascript",
            url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
          },
          {
            tech: "nodejs",
            url: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
          },
          {
            tech: "typescript",
            url: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
          },
          {
            tech: "react",
            url: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
          },
          {
            tech: "reactnative",
            url: "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
          },
          {
            tech: "html5",
            url: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
          },
          {
            tech: "css3",
            url: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
          },
          {
            tech: "sass",
            url: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
          },
          {
            tech: "mongodb",
            url: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
          },
          {
            tech: "postgresql",
            url: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
          },
          {
            tech: "aws",
            url: "https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white",
          },
          {
            tech: "linux",
            url: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
          },
        ]}
        tags={[
          { text: "Redux", color: "#9a58dc" },
          { text: "Git", color: "#a52a2a" },
          { text: "Scrum", color: "#900020" },
        ]}
      />

      <ExperienceSection
        companyUrl="https://www.camboriu.ifc.edu.br/ifc-camboriu-e-universidade-do-reino-unido-debatem-sobre-solucao-para-desenvolvimento-de-pesca-e-aquicultura-sustentavel/"
        companyName="Instituto Federal Catarinense - IFC"
        description="Projeto de pesquisa coordenado pela TAF International Project em Parceria com a FAPESC e IFC - Camboriú/SC"
        office="Desenvolvedor de Back-end"
        responsibilities="No Projeto Tecnológico de Desenvolvimento Sustentável da Aquicultura Catarinense, fui contratado como Desenvolvedor de Back-end para integrar a equipe responsável pelo desenvolvimento de um sistema de monitoramento e automatização do cultivo de peixes. Este projeto, denominado 'Implementando Soluções Tecnológicas para o Desenvolvimento Sustentável da Aquicultura de Santa Catarina - TAF International Project,' contou com a parceria da FAPESC e do IFC - Camboriú/SC."
        skills="Desenvolvimento de software, realização de testes, validação de regras de negócio e monitoramento de dados coletados por sensores de avaliação da qualidade da água em campo."
        technologies={[
          {
            tech: "javascript",
            url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
          },
          {
            tech: "react",
            url: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
          },
          {
            tech: "html5",
            url: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
          },
          {
            tech: "css3",
            url: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
          },
          {
            tech: "postgresql",
            url: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
          },
          {
            tech: "linux",
            url: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
          },
        ]}
        tags={[
          { text: "Java", color: "#1000ff" },
          { text: "Spring Boot", color: "#4bc465" },
          { text: "Model UML", color: "#ba6f2d" },
          { text: "Git", color: "#a52a2a" },
          { text: "Scrum", color: "#900020" },
        ]}
      />
    </div>
  </section>
);

export default ExperienceList;
