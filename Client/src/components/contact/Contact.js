import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="flexx" id="contact">
      <div className="two">
        <h1 className="fw-bold mb-4">CONTACT FORM</h1>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your phone" maxLength="10" />
          <input type="email" placeholder="Your email" />
          <textarea rows="3" placeholder="Message"></textarea>
          <button className="btn btn-dark"> SEND MESSAGE</button>
        </form>
      </div>
      <img
        // src="https://image.freepik.com/free-photo/top-view-chat-bubbles-with-telephone-receiver-copy-space_23-2148796078.jpg"
        src="https://images.pexels.com/photos/5605061/pexels-photo-5605061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        className="rounded float-end"
        alt="..."
        style={{
          height: "65vh",
          zIndex: "2",
          filter: "saturate(0.2)",
        }}
      ></img>
      <div className="sidebox position-absolute"></div>
    </div>
  );
};

export default Contact;
