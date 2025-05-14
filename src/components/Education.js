import React from 'react';

const Education = () => {
  const educationList = [
    {
      id: 1,
      degree: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
      institution: 'I.E.S. Plurilingüe Antón Losada Dieguéz',
      location: '',
      period: '',
      description: ''
    }
  ];
  return (
    <section id="education" className="education container" aria-labelledby="education-heading" role="region" aria-label="Formación académica de Diego Barreiro">
      <h2 id="education-heading">Formación relacionada con Desarrollo de Software</h2>
      <div className="education-grid">
        {educationList.map((edu) => (
          <div className="education-item" key={edu.id}>
            <div className="education-info">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution} {edu.location && `| ${edu.location}`}</p>
              {edu.period && <p>{edu.period}</p>}
              {edu.description && <p>{edu.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
