import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

function About(): ReactElement {
    return (
        <>
            <h4>Version 1.0</h4>
            <div>
                Built as a part of&nbsp;
                <a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8" target="_blank" rel="noopener noreferrer">React crash course</a>
            </div>
            <div>Typed with TypeScript</div>
            <div>And linted with ESlint</div>
            <Link to="/">Go back</Link>
        </>
    );
}

export default About;
