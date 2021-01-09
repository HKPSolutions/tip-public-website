import './atom.css'
import React, { useState } from 'react';

function FAQPage() {
    const [showAnswer, setShowAnswer] = React.useState(false);
    return (
        <div className = "faq">
            <h1>FAQs</h1>
            <h2>Find out if we’ve already addressed your questions</h2>
            <div className = "faq_buttons">
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>Are internships in-person or remote? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>All internships are remotely conducted online.</p> : null}
                </div>
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>How much is the fee? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>We charge a one-time fee of $1,000 per intern for recruitment, training, and matching.  We do not charge any subsequent fees if you choose to employ the intern in any capacity in the future.</p> : null}
                </div>
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>Do I have to pay my intern? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>No - our interns are not expecting a paid internship position. <br />
    However, your internship must meet the parameters for unpaid internship set forth by the Fair Labor Standards Act.  For more information see <a href = "https://www.dol.gov/agencies/whd/fact-sheets/71-flsa-internships">here</a> <br />
    We are not responsible for ensuring that your internship meets FLSA guidelines. <br />
    You may choose to pay your intern if you wish; we will not collect a percentage of what you choose to pay your intern.
    </p> : null}
                </div>
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>What if I decide after the interviews that I don’t want any of the interns? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>If you are unsatisfied with your match and don’t accept an intern, you have no payment obligations to us.</p>: null}
                </div>
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>Once I have hired the intern, what if I am unhappy with my intern’s performance? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>We have a 21-day money back guarantee policy.  If you are unhappy with your intern’s performance and you let us know within the first 21 days of their internship, we will issue you a full refund.</p>: null}
                </div>
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>If I choose to have my intern continue in the future for another internship or a full-time position, do I owe you a fee? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>No - we charge a one-time, no strings attached fee for recruitment, training, and matching.  If you choose to renew your internship for future terms with the intern or hire them full-time, we do not charge a fee and are not involved.</p>: null}
                </div>
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>Do you handle payroll? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>No - Once we match the intern with you, we are no longer involved with your choice to pay your intern or hire them in the future.</p>: null}
                </div>
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>Can I have my intern sign an NDA or company specific policies? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>Yes - once we have received your payment and assigned you your intern, you may ask your intern to sign additional an NDA or adhere to company specific policies.</p>: null}
                </div>
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>What is TIP Solutions’ experience in training and recruitment? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>To date, we have run three recruitment and training cycles, and trained over 100 interns.  TIP Solutions is a subsidiary of HKP Solutions, a mobile app development company.</p>: null}
                </div>
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>What kind of training have the interns gone through? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>All interns have either completed a six-week web development or mobile app development track.  The training process is extremely rigorous, including: daily coding exercises, code feedback, and weekly review calls.</p>: null}
                </div>
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>How many interns will I interview? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>For each intern you request, we aim to have you interview 2-3 potential interns.  You may request more interviews if needed.  Each intern will also be interviewing at 2-3 companies.</p>: null}
                </div>
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>How does the matching process work? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>Both interns and companies will rank their preferences, and we will make assignments that optimize intern and company preferences.</p>: null}
                </div>
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>How long is the internship and how many hours per week can I expect from my intern? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>The internship is 12 weeks running from March 1st to May 28.  Interns are expected to work around 15-20 hours per week.</p>: null}
                </div>
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>When are Spring 2021 requests due?  What is the matching timeline? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>February 12:  Requests close for Spring 2021 interns<br />
    Week of February 15:  Interviews with 2-3 potential interns<br />
    February 22:  Intern matches released<br />
    February 26:  Payment due<br />
    March 1:  Interns begin working at companies<br />
    May 28:  Internship ends
    </p>: null}
                </div>
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>Can I request an intern for a non-software engineering role? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>While we primarily recruit for software engineering, you may indicate on the request form if you are interested in hosting an intern with graphic design or business development experience.</p>: null}
                </div>
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>Do I need to be a tech or software company? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>While many of our clients are tech startups, you do not need to be a software or tech company to request or host an intern.  In fact, many of our clients in adjacent spaces such as hospitality or NPOs may find it especially helpful to hire a software engineering intern and hire us to handle the screening and training.</p>: null}
                </div>
                <button type = "button" className = "faq_question" onClick={() => setShowAnswer(!showAnswer)}>Are you running a Summer 2021 internship cycle? {showAnswer ? <p>-</p> : <p>+</p>}</button>
                <div className = "faq_answer">
                    {showAnswer ? <p>Yes, please check back in March!</p>: null}
                </div>
            </div>
        </div>
    );
}

export default FAQPage;
