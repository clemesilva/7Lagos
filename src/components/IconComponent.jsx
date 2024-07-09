// src/components/IconComponent.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const IconComponent = ({ icon }) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default IconComponent;
