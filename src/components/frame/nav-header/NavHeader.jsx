import { Link, useLocation } from 'react-router-dom'
import './atom.css'

function NavHeader() {
    const location = useLocation();
    const page = location.pathname.split("/")[1];

    const parseLiClass = (p) => {
        return "nav-item nav-link " + ((p === page) ? "li-selected" : "")
    }

    return (
        <div>
            <ul id="nav-bar">
                <li id="nav-title" className="nav-item">TIP</li>
                <li className={parseLiClass("")}><Link to="/" className="nav-link-a">Home</Link></li>
                <li className={parseLiClass("about")}><Link to="/about" className="nav-link-a">About</Link></li>
                <li className={parseLiClass("faq")}><Link to="/faq" className="nav-link-a">FAQ</Link></li>
                <li className={parseLiClass("signup")}><Link to="/signup" className="nav-link-a">Sign up</Link></li>
            </ul>
        </div>
    );
}

export default NavHeader;
