import React, { useState } from "react";
import "./App.css";

import Grid from "./grid/Grid";
import ColorPalette from "./palette/Palette";
import Button from "./button/Button";

function App() {
    const initialGridState = Array.from({ length: 30 }, () =>
        Array(30).fill(0)
    );
    const [gridState, setGridState] = useState(initialGridState);
    const [selectedColor, setSelectedColor] = useState(null);

    const handleCellClick = (rowIndex, colIndex) => {
        if (selectedColor !== null) {
            const newGridState = [...gridState];
            newGridState[rowIndex][colIndex] = selectedColor;
            setGridState(newGridState);
        }
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const handleClearAll = () => {
        const clearedGridState = Array.from({ length: 30 }, () =>
            Array(30).fill("#FFFFFF")
        );
        setGridState(clearedGridState);
    };

    return (
        <div className="container">
            <h1>React Painting Board</h1>
            <div className="container">
                <ColorPalette onColorSelect={handleColorSelect} />
                <Grid gridState={gridState} onCellClick={handleCellClick} />
                <Button onClick={handleClearAll} />
            </div>
        </div>
    );
}

export default App;
