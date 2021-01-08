import './atom.css'

function SignUpPage() {
    return (
        <div id="main-container">
            <div id="header">
                <h1 id="title">Contact Us</h1>
                <div id="header-info-container">
                    <p id="header-info">Please feel free to contact us at info@tipsolutions.com or fill out the below contact form if you have any questions.</p>
                </div>
            </div>
            <form action="" id="message-form">
                <input type="text" placeholder="Full Name"/>
                <input type="text" placeholder="Email"/>
                <textarea name="" id="" cols="15" rows="100" placeholder="Message"></textarea>
                <input type="submit" value="Submit" id="submit-button"/>
            </form>
        </div>
    );
}

export default SignUpPage;
