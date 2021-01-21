import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import './atom.css'

function NavHeader() {
    const location = useLocation();
    const page = location.pathname.split("/")[1];
    const [isChecked, setChecked] = useState(false)

    const parseLiClass = (p) => (p === page) ? "li-selected" : ""
    const onToggleMenu = () => setChecked(x => !x)
    const closeIfOpen = () => isChecked && setChecked(false)

    useEffect(() => {
        if (isChecked)
            document.body.style.overflow = "hidden";
        else
            document.body.style.overflow = "auto";
    }, [isChecked])

    return (
        <nav id="nav-header" role="navigation">
            <input type="checkbox" checked={isChecked} onChange={onToggleMenu} />
            <div id="nav-bar-overlay" onClick={onToggleMenu} />
            <div id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <span id="nav-title">TIP</span>

            <ul id="menu" className="open">
                <li className={parseLiClass("")}><Link to="/" onClick={closeIfOpen}>Home</Link></li>
                <li className={parseLiClass("about")}><Link to="/about" onClick={closeIfOpen}>About</Link></li>
                <li className={parseLiClass("faq")}><Link to="/faq" onClick={closeIfOpen}>FAQ</Link></li>
                <li className={parseLiClass("signup")}><Link to="/signup" onClick={closeIfOpen}>Sign Up</Link></li>
            </ul>
        </nav>
    );
}

export default NavHeader;
