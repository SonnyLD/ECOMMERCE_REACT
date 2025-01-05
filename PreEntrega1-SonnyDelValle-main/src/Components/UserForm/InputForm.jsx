import React from "react";
import PropTypes from "prop-types";
import './InputForm.css'; // Mover los estilos a un archivo CSS

export default function InputForm({ title, value, required, name, onChange }) {
  return (
    <div className="input-form-container">
      <label htmlFor={name} className="input-form-label">{title}</label>
      <input
        id={name}
        value={value}
        required={required}
        name={name}
        type="text"
        onChange={onChange}
        aria-label={title}
        className="input-form-input"
      />
    </div>
  );
}

InputForm.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
