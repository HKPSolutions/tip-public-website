import './atom.css'
function About() {
    return (
        <div id="about-main-container">
            <div id="about-header-container">
                <h1 id="about-header"><u>About Us</u></h1>
            </div>
            <div id="about-body">
                <div id="about-body-text-container">
                    <h3><u>Recruitment and Training Process</u></h3>
                    <p className="about-p">We recruit from top universities and select high schools, using our extensive connections with career centers and personal relationships.</p>
                    <p className="about-p">A recruiter personally reads every applicant’s resume to ensure they have the experience and technical expertise to contribute to your company.</p>
                    <p className="about-p">All interns have already passed a 1-on-1 interview with a recruiter who gauged interns on both technical and behavioral questions.</p>
                    <p className="about-p">Our rigorous <b>six-week</b> training program puts candidates down either a mobile app or website development track. While candidates must have previous Computer Science experience, our training program equips interns with the latest frameworks, ensures they have top work ethic, and are ready to start contributing at your company immediately. Our training process includes extensive code feedback for interns and weekly review calls.</p>
                    <h3><u>Why should you trust TIP Solutions?</u></h3>
                    <p className="about-p">We have trained over 100 interns to date. Spring 2021 will be our third internship cycle.</p>
                    <p className="about-p">TIP Solutions is a subsidiary of HKP Solutions, a mobile app development company. We started TIP Solutions as an expansion of our existing intern recruitment and training program.</p>
                    <p className="about-p">No payment is required until you have interviewed your potential interns yourself and decided on a match. If you are unsatisfied with your matches, you can walk away without paying anything.</p>
                    <p className="about-p">TIP Solutions also offers a 21-day money back guarantee. If you are not completely satisfied with your intern, let us know within the first 21-days at your company and we will offer you a full refund.</p>
                    <h3><u>Details on the Matching Process</u></h3>
                    <p className="about-p">If you request an intern through our intern request form by February 12th 2021, you will be included in our Spring 2021 intern placement process. No payment is required to submit a request form.</p>
                    <p className="about-p">Once you submit an intern request form, we will carefully review your request and match you with 2-3 interns who meet the qualifications you are seeking and are interested in working with a business in your sector. You will have the opportunity to speak with each of the potential interns and rank your preferred interns. We will release matches after receiving your ranking, and if you are satisfied with your intern, at that time we request our $1,000 fee per intern accepted. Once we receive your payment, the intern will be ready to begin working for your company.</p>
                    <p className="about-p">Our timeline is as follows:</p>
                    <div id="about-dates">
                        <p id="about-dates-p">February 12:  Requests close for Spring 2021 interns <br></br>
                            Week of February 15:  Interviews with 2-3 potential interns<br></br>
                            February 22:  Intern matches released<br></br>
                            February 26:  Payment due <br></br>
                            March 1:  Interns begin working at companies<br></br>
                            May 28:  Internship ends<br></br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
