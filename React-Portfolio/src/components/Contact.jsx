import React from "react";

function Contact() {

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input  type="text" id="name" placeholder="Please enter your name" />

        <label htmlFor="email">Email:</label>
        <input  type="email" id="email" placeholder="Please enter your email" />

        <label htmlFor="message">Message:</label>
        <textarea  id="message" placeholder="Please enter your message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;