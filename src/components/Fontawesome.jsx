import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const FontAwesome = ({ icon }) => {
  let iconToRender;

  // Determinar qué ícono usar según la prop icon
  if (icon === "instagram") {
    iconToRender = faInstagram;
  } else if (icon === "whatsapp") {
    iconToRender = faWhatsapp;
  } else {
    iconToRender = faInstagram; // Icono por defecto, si no se proporciona o es incorrecto
  }

  return (
    <div>
      <FontAwesomeIcon icon={iconToRender} size="2x" />
    </div>
  );
};

export default FontAwesome;
