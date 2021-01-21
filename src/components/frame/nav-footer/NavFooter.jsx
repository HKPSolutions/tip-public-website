import './atom.css'
import { Link } from 'react-router-dom';
import { LinkedIn } from './linkedin'

function NavFooter() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <div className="navfooter">
                <div className="navfooter_top">
                    <div className="navfooter_info">
                        <h2>TIP Solutions</h2>
                    </div>
                    <div className="navfooter_links">
                        <h3>Sitemap</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/signup">Sign Up</Link></li>
                        </ul>
                    </div>
                    <div className="navfooter_contact">
                        <div>
                            <p className="navfooter_contact_emoji">✉︎</p>
                            <p className="navfooter_contact_email">Email: <a href="mailto:info@tipssolutions.net">info@tipssolutions.net</a></p>
                        </div>
                        <div>
                            <div className="navfooter_linkedin_emoji">
                                <LinkedIn />
                            </div>
                            <p className="navfooter_contact_email"><a href="https://www.linkedin.com/company/tipsolutions/">LinkedIn</a></p>
                        </div>
                    </div>
                </div>
                <div className="navfooter_bottom">
                    <div className="navfooter_subsidiary">
                        <p>@2021 TIP Solutions is a subsidiary of HKP Solutions LLC</p>
                    </div>
                </div>
            </div>
            <div className="navfooter_linktop" onClick={scrollToTop}>
                <p>Back to the Top</p>
                <div>
                    <div className="navfooter_arrow_container">
                        <div className="navfooter_arrow_border">
                            <div className="navfooter_arrow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavFooter;
