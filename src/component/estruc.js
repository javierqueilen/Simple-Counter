import React from "react";
import PropTypes from "prop-types";

const Estruc = (props) => {
    return (
        <div className="contenedor">
            <div><i className="far fa-clock"></i></div>
            <div className="d6">{props.num6 % 10}</div>
            <div className="d5">{props.num5 % 10}</div>
            <div className="d4">{props.num4 % 10}</div>
            <div className="d3">{props.num3 % 10}</div>
            <div className="d2">{props.num2 % 10}</div>
            <div className="d1">{props.num1 % 10}</div>
        </div>
    )
}

Estruc.propTypes = {
    num1: PropTypes.number,
    num2: PropTypes.number,
    num3: PropTypes.number,
    num4: PropTypes.number,
    num5: PropTypes.number,
    num6: PropTypes.number, 
}

export default Estruc;