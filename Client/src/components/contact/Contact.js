import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="one">
      <div className="two">
        <h1 class="fw-bold">CONTACT FORM</h1>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your phone" maxLength="10" />
          <input type="email" placeholder="Your email" />
          <textarea rows="3" placeholder="Message"></textarea>
          <button> SEND MESSAGE →</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
