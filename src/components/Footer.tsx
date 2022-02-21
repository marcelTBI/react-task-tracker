import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

function Footer(): ReactElement {
    return (
        <footer>
            <p>Copyright &copy; 2022</p>
            <Link to="/about"> About </Link>
        </footer>
    );
}

export default Footer;
