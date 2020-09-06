import React from "react";

export default ({ input, label, placeholder, type, meta: { touched, error } }) =>{
    return(
        <div className="survey-field">
            <label>{label}</label>
            <div>
                <input {...input} placeholder={placeholder} type={type} />
                {touched && error && <span className="error">{error}</span>}
            </div>
        </div>
    );
}
