import './atom.css'
import { Link } from 'react-router-dom';

function NavFooter() {
    return (
        <div className = "navfooter">
            <h2>TIP Solutions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h3>Sitemap</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/signup">Sign In</Link></li>  
            </ul>
            <p>✉︎</p>
            <p>Email: <a href="mailto:info@tipssolutions.net">info@tipssolutions.net</a></p>
            <p>Back to the Top</p>
            <div className = "navfooter_arrow-container">
                <div className = "navfooter_arrow-border">
                    <div className = "navfooter_arrow"></div>
                </div>
            </div>
            <p>@2021 TIP Solutions is a subsidiary of HKP Solutions LLC</p>
        </div>
    );
}

export default NavFooter;
