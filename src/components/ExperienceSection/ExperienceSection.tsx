import React from "react";
import "./ExperienceSection.scss";
import Tag from "../Tag/Tag";

interface ExperienceSectionProps {
  companyUrl: string;
  companyName: string;
  description: string;
  office: string;
  responsibilities: string;
  skills: string;
  technologies: { tech: string; url: string }[];
  tags: { text: string; color: string }[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  companyUrl,
  companyName,
  description,
  office,
  responsibilities,
  skills,
  technologies,
  tags,
}) => (
  <div className="experience-section">
    <h3>
      <a href={companyUrl}>{companyName}</a>
    </h3>
    <p>{description}</p>
    <h4>{office}</h4>
    <p>
      <strong>Descrição da atividade: </strong>
      {responsibilities}
    </p>
    <p>
      <strong>Competências: </strong>
      {skills}
    </p>
    <strong>Principais tecnologias abordadas na empresa:</strong>
    <br />
    <div style={{ display: "inline-block" }}>
      <br />
      {technologies.map((tech) => (
        <img key={tech.tech} alt={tech.tech} src={tech.url} />
      ))}
      <div className="tag-container">
        {tags.map((tag) => (
          <Tag key={tag.text} text={tag.text} color={tag.color} />
        ))}
      </div>
    </div>
  </div>
);

export default ExperienceSection;
