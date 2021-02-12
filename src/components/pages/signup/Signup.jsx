import './atom.css'
import emailjs from 'emailjs-com'
import { useState } from 'react';

const ERROR = "Something Went Wrong!"
const LOADING = "Loading..."
const SEND = "Message Sent! We will be in touch with you soon!"

function SignUpPage() {
    const [alert, setAlert] = useState(null);

    const onSubmit = (e) => {
        setAlert(LOADING)
        emailjs.sendForm(process.env.REACT_APP_serviceID, process.env.REACT_APP_templateID, e.target, process.env.REACT_APP_userID)
            .then((result) => {
                setAlert(SEND)
                console.log(result.text);
                setTimeout(() => {
                    setAlert(null)
                }, 3000)
            }, (error) => {
                setAlert(ERROR)
                console.log(error.text);
                setTimeout(() => {
                    setAlert(null)
                }, 3000)
            });
        e.preventDefault();
    }

    return (
        <div id="signup-main-container">
            <div id="signup-header">
                <h1 id="signup-title">Sign Up</h1>
                <div id="signup-header-info-container">
                    <p id="signup-header-info"><a href="https://forms.gle/Cvb1NzKALvT2QoU36">Click here to request an intern by February 17th!</a> Please feel free to contact us at <a href="mailto:info@tipsolutions.net">info@tipsolutions.net</a> or fill out the below contact form if you have any questions.</p>
                </div>
            </div>
            <form onSubmit={onSubmit} id="signup-message-form">
                <input name="full_name" type="text" placeholder="Full Name" className="signup-input" />
                <input name="email" type="text" placeholder="Email" className="signup-input" />
                <textarea name="message" id="" cols="15" rows="100" placeholder="Message" className="signup-textarea"></textarea>
                {alert && <div className="alert" style={{
                    backgroundColor: alert === LOADING ? 'blue' : alert === ERROR ? 'red' : 'green'
                }}>{alert}</div>}
                <input type="submit" value="Submit" id="signup-submit-button" />
            </form>
        </div>
    );
}

export default SignUpPage;
