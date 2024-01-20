import React from "react";
import "./Palette.css";
const colors = [
    "black",
    "red",
    "blue",
    "yellow",
    "gray",
    "green",
    "white",
    "pink"
];

const ColorPalette = ({ onColorSelect }) => {
    return (
        <div className="palette">
            {colors.map((color) => (
                <div
                    key={color}
                    className="color"
                    style={{ backgroundColor: color }}
                    onClick={() => onColorSelect(color)}
                ></div>
            ))}
        </div>
    );
};

export default ColorPalette;
