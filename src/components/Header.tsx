import { ReactElement } from 'react';

import Button from './Button';

interface HeaderProps {
    showDialog: boolean,
    toggleShowDialog: () => void
}

function Header({ showDialog, toggleShowDialog }: HeaderProps): ReactElement {
    const color: string = showDialog ? 'red' : 'green';
    const text: string = showDialog ? 'Hide' : 'Add';

    return (
        <header className="header">
            <h1>TaskTracker</h1>
            <Button color={color} text={text} handleClick={toggleShowDialog} />
        </header>
    );
}

export default Header;
