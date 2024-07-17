import React from "react";
import "./EducationSection.scss";

interface EducationSectionProps {
  period: string;
  training: string;
  trainingUrl: string;
  institutionName: string;
  institutionUrl: string;
  address: string;
  status: string;
}

const EducationSection: React.FC<EducationSectionProps> = ({
  period,
  training,
  trainingUrl,
  institutionName,
  institutionUrl,
  address,
  status,
}) => (
  <div className="education-section">
    <p>
      <strong>{period}</strong>
    </p>
    <h3>
      <a href={trainingUrl}>{training}</a>
    </h3>
    <h4>
      <a href={institutionUrl}>{institutionName}</a>
    </h4>
    <p>{`${address} - ${status}`}</p>
    <br />
  </div>
);

export default EducationSection;
