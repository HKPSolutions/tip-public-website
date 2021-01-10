import { Link } from 'react-router-dom'
import './atom.css'

function NavHeader() {
    return (
        <div>
            <ul id="nav-bar">
                <li id="nav-title" className="nav-item">TIP</li>
                <li className="nav-item nav-link"><Link to="/" className="nav-link-a">Home</Link></li>
                <li className="nav-item nav-link"><Link to="/about" className="nav-link-a">About</Link></li>
                <li className="nav-item nav-link"><Link to="/faq" className="nav-link-a">FAQ</Link></li>
                <li className="nav-item nav-link"><Link to="/signup" className="nav-link-a">Sign up</Link></li>
            </ul>
        </div>
    );
}

export default NavHeader;
