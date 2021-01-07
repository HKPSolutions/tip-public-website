import { Link } from 'react-router-dom'
import './atom.css'

function NavHeader() {
    return (
        <div>
            [NavHeader]
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/faq">Faq</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
            </ul>
        </div>
    );
}

export default NavHeader;
