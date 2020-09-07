import React from "react";

export default ({ input, label, placeholder, disabled, type, meta: { touched, error } }) =>{
    return(
        <div className="survey-field">
            <label>{label}</label>
                <input {...input} placeholder={placeholder} disabled={disabled} type={type}/>
                {touched && error && <span className="error">{error}</span>}
        </div>
    );
}
