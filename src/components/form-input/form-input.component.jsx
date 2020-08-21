import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="form-container">
      <input onChange={handleChange} {...otherProps} className={otherProps.value.length ? "red-line" : ""} />
      {label ? (<label className={otherProps.value.length ? "shrink" : ""}>{label}</label>) : null}
    </div>
  );
};

export default FormInput;
//export to sign-in.component.jsx and sign-up.component.jsx