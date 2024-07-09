// src/components/SocialIcons.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = ({ icon }) => {
  let renderedIcon = null;

  // Renderizar el ícono según el prop recibido
  if (icon === 'whatsapp') {
    renderedIcon = <FontAwesomeIcon icon={faWhatsapp} />;
  } else if (icon === 'instagram') {
    renderedIcon = <FontAwesomeIcon icon={faInstagram} />;
  } else {
    // Manejar el caso por defecto o cuando el prop no coincida con ninguna opción
    renderedIcon = null; // O puedes manejar un icono por defecto aquí
  }

  return (
    <div className="flex space-x-4">
      {renderedIcon}
    </div>
  );
};

export default SocialIcons;
