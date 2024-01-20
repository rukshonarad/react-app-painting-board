import React, { useState } from "react";
import "./Button.css";
const Button = ({ onClick }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        onClick();
        setIsClicked(true);
    };

    return (
        <div>
            <button onClick={handleClick}>Clear!</button>
        </div>
    );
};

export default Button;
