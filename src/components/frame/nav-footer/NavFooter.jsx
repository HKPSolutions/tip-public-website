import './atom.css'
import { Link } from 'react-router-dom';

function NavFooter() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    };

    return (
        <div className = "navfooter">
            <div className = "navfooter_top">
                <div className = "navfooter_info">
                    <h2>TIP Solutions</h2>
                </div>
                <div className = "navfooter_links">
                    <h3>Sitemap</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>  
                    </ul>
                </div>
                <div className = "navfooter_contact">
                    <p className = "navfooter_contact_emoji">✉︎</p>
                    <p className = "navfooter_contact_email">Email: <a href="mailto:info@tipssolutions.net">info@tipssolutions.net</a></p>
                </div>
            </div>
            <div className = "navfooter_bottom">
                <div className = "navfooter_subsidiary">
                    <p>@2021 TIP Solutions is a subsidiary of HKP Solutions LLC</p>
                </div>
                <div className = "navfooter_linktop">
                    <p>Back to the Top</p>
                    <div onClick={scrollToTop}>
                        <div className = "navfooter_arrow_container">
                            <div className = "navfooter_arrow_border">
                                <div className = "navfooter_arrow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavFooter;
