import React, { useState } from 'react';

// Le composant Collapse accepte les propriétés (props) title et content
export default function Collapse({ title, content }) {
  // Utilisation de l'état local pour suivre l'état d'ouverture/fermeture
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour ouvrir ou fermer le Collapse en inversant la valeur de isOpen
  const openCloseCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Rendu du composant
  return (
    <div className="Collapse">
      {/* Div contenant le titre du Collapse, avec une classe "open" si le Collapse est ouvert */}
      <div onClick={openCloseCollapse} className={`Collapse-title ${isOpen ? 'open' : ''}`}>
        {title}
      </div>
      {/* Div contenant le contenu du Collapse, avec une classe "hidden" si le Collapse est fermé */}
      <div className={`Collapse-content ${isOpen ? 'animated' : 'hidden'}`}>
        {content}
      </div>
    </div>
  );
}
