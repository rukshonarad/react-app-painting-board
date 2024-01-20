import React from "react";
import "./Cell.css";
const Cell = ({ color, onClick }) => {
    const style = {
        backgroundColor: color
    };

    return <div className="cell" style={style} onClick={onClick}></div>;
};

export default Cell;
