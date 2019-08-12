/**
 * "Shell-styled" reuseable button template
 * ------------------------------
 */

import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Button = ({
  title,
  id,
  action,
  styleId,
  extraStyles,
  labelStyle,
  type,
  strong,
}) => {
  const buttonClicked = () => {
    if (action) action(id);
  };

  return (
    <button
      type={type}
      onClick={buttonClicked}
      className={`submit-button ${extraStyles || ""}`}
      id={styleId || ""}
    >
      {(strong && <h1 className={labelStyle || ""}>{title}</h1>) || (
        <p className={labelStyle || ""}>{title}</p>
      )}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  action: PropTypes.func,
  styleId: PropTypes.string,
  lableStyle: PropTypes.string,
  type: PropTypes.string,
};

export { Button };
