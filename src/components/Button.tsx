import { ReactElement } from 'react';

interface ButtonProps {
    color: string,
    text: string,
    handleClick: () => void,
}

function Button({ color, text, handleClick }: ButtonProps): ReactElement {
    return (
        <button type="button" className="btn" style={{ backgroundColor: color }} onClick={handleClick}>{text}</button>
    );
}

export default Button;
