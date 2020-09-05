import React from "react";
import './Backdrop.scss';

export default (props)=>(
    props.show ? <div className="custom-backdrop" onClick={props.clicked}></div> : null
);


