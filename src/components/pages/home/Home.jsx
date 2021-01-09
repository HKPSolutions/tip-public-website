import { Link } from 'react-router-dom'
import './atom.css'

import HomeBg from "./assets/homepage-bg.png";

function HomePage() {
    return (
        <div id="home-container">
            <h3 id="home-main-tagline">$1,000 for a 14-week remote software engineering intern.</h3>
            <h4 id="home-sub-tagline">No additional payment to interns required.</h4>
            <h4 id="home-deadline-tagline">Request an intern by February 12th for Spring 2021.</h4>
            <hr id="home-separator"></hr>
            <p id="home-company-name">TIP Solutions</p>
            <button id="home-request-intern-btn"><Link to="/signup" className="text-white no-link-btn">Click here to request an intern!</Link></button>
            <div id="home-center-content">
                <img src={HomeBg} alt="Black wave background" id="home-bg-img"></img>
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
    );
}

export default HomePage;
