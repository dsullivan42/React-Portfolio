import React from "react";

function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <form>
                <h5>Name:</h5>
                <input type="text" placeholder="Please enter your name" />
            </form>
            <form>
                <h5>Email:</h5>
                <input type="text" placeholder="Please enter your email" />
            </form>
            <form>
                <h5>Message:</h5>
                <input type="text" placeholder="Please enter your message" />
            </form>
            <button type="submit">Submit</button>
        </div>
    );
}

export default Contact;