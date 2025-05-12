import React, { useState } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const Experience = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const experiences = [
    {
      id: 1,
      role: 'Desarrollador de Software Junior',
      company: 'ATOS IT Solutions & Services',
      location: 'Santiago de Compostela, España',
      description: `Participé en el desarrollo de proyectos destinados a la logística y contabilidad del Servicio Galego de Saúde (SERGAS). Con enfoque full-stack, adquirí experiencia tanto en frontend como en backend (Java, Spring, APIs REST), y el manejo de Oracle y Postman.`
    },
    {
      id: 2,
      role: 'Experiencia Previa +8 años',
      company: 'Diversas Empresas del Sector Metalúrgico y Logístico y otras',
      location: 'España',
      description: `Cuento con 8 años de experiencia en campos variados, como la soldadura y la logística, entre otros. Durante este tiempo, desarrollé habilidades en trabajo en equipo, disciplina y resolución de problemas, además de adquirir experiencia en el uso del ERP SAP a nivel usuario, lo que me permitió comprender procesos operativos y administrativos. Esta experiencia me ha forjado como un profesional versátil y capaz de adaptarse a nuevos retos.`,
      details: [
        "2011 – 2012: Trabajé en INSTALACIONES SOGAS, S.L. – Comercial de puerta fría.",
        "2014: Experiencias en Cerámicas Verea a través de Nortempo ETT – Operario de producción y control de calidad.",
        "2015: Continuación en Cerámicas Verea (Nortempo ETT) – Producción y control de calidad.",
        "2015 – 2016: Trabajé en Parking Santiago S.C. – Gestión de stock automovilístico y transporte de clientes.",
        "2016 – 2017: Global Metal & Piping Services – Montaje y soldadura (cese prematuro por accidente laboral). * NOTA: Cabe destacar que compaginé las labores en Parking Santiago con las de Global Metal & Piping Services de forma simultánea durante un tiempo.",
        "2017 – 2022: Experiencia en Finsa – Colaboración en procesos logísticos de carga, descarga y almacenaje, con uso diario del ERP SAP."
      ]
    }
  ];
  const experienceWithDetails = experiences.find(exp => exp.id === 2);
  return (
    <section id="experience" className="experience container">
      <h2>Experiencia Laboral</h2>
      <div className="experience-grid">
        {experiences.map(exp => (
          <div className="experience-item" key={exp.id}>
            <div className="experience-info">
              <h3>{exp.role}</h3>
              {exp.company && <p className="company">{exp.company} | {exp.location}</p>}
              <p className="description">{exp.description}</p>
              {exp.details && (
                <button className="details-icon-btn" onClick={() => setModalVisible(true)} title="Ver detalles">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <FaExclamationCircle size={25} />
                    <span style={{ fontSize: '20px' }}>Ver Detalle</span>
                  </div>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {modalVisible && experienceWithDetails && (
        <div className="modal-overlay" onClick={() => setModalVisible(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setModalVisible(false)}>X</button>
            <ul className="details-text">
              {experienceWithDetails.details.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
