import './atom.css'

function SignUpPage() {
    return (
        <div id="signup-main-container">
            <div id="signup-header">
                <h1 id="signup-title">Contact Us</h1>
                <div id="signup-header-info-container">
                    <p id="signup-header-info">Please feel free to contact us at info@tipsolutions.com or fill out the below contact form if you have any questions.</p>
                </div>
            </div>
            <form action="" id="signup-message-form">
                <input type="text" placeholder="Full Name" className="signup-input"/>
                <input type="text" placeholder="Email"  className="signup-input"/>
                <textarea name="" id="" cols="15" rows="100" placeholder="Message"  className="signup-textarea"></textarea>
                <input type="submit" value="Submit" id="signup-submit-button"/>
            </form>
        </div>
    );
}

export default SignUpPage;
