import React from 'react';

function Button({text, onClick,  btnItinClassName }) {
    return (
        <button className={`btn btn-primary ${btnItinClassName}`}  onClick={onClick}>{text}</button>
    );
}

export default Button;