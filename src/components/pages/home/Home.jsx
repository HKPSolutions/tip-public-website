import { Link } from 'react-router-dom'
import './atom.css'

function HomePage() {
    return (
        <div id="home-container">
            <h3 id="home-main-brand-name">Training and Internship Placement Solutions</h3>
            <h3 id="home-main-tagline">Request a 13-Week Remote Software Engineering Intern </h3>
            <h4 id="home-sub-tagline">No additional payment to interns required <br /> Request an intern by February 12th for Spring 2021</h4>
            <hr id="home-separator"></hr>
            <p id="pricing-tagline">One-time $1,000 recruitment fee per intern</p>
            <button id="home-request-intern-btn"><a href="https://forms.gle/Cvb1NzKALvT2QoU36" className="text-white no-link-btn">Click here to request an intern!</a></button>
            <div id="home-center-content">
                <div id="home-center-content-img-layer">
                    <div id="home-center-container">
                        <div className="center-text">
                            Match with the best software engineering talent for your small business internship needs
                            Whether you’re seeking a one-time intern or potential full-time contributor, let us handle the hassle of recruitment, interviews, and training
                    </div>
                        <br></br>
                    Our interns are…
                    <ul>
                            <li>Recruited from over <strong>25 institutions</strong> including top schools like CalTech, Thomas Jefferson HSST and Cornell University</li>
                            <li>Have passed comprehensive <strong>behavioral and technical interviews</strong></li>
                            <li>Completed a rigorous <strong><em>six week</em> training program</strong> to further their skills in web and mobile development</li>
                            <li>We have trained over <strong>100 interns to-date</strong></li>
                        </ul>
                    </div>
                    <button id="home-get-started-btn"><Link to="/signup" className="text-black no-link-btn">Get Started Today!</Link></button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
