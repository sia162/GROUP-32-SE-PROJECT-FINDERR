// import React from "react";
// import "./contact.css";

// const Contact = () => {
//   return (
//     <div className="flexx">
//       <div className="one">
//         <img src="https://images.unsplash.com/photo-1594022527131-2c26853089f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhbGxpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"></img>
//       </div>
//       <div className="two">
//         <h1 className="fw-bold mb-5">CONTACT FORM</h1>
//         <form>
//           <input type="text" placeholder="Your name" />
//           <input type="text" placeholder="Your phone" maxLength="10" />
//           <input type="email" placeholder="Your email" />
//           <textarea rows="3" placeholder="Message"></textarea>
//           <button className="btn btn-dark"> SEND MESSAGE</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="flexx">
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
        src="https://image.freepik.com/free-photo/top-view-chat-bubbles-with-telephone-receiver-copy-space_23-2148796078.jpg"
        className="rounded float-end"
        alt="..."
        style={{
          height: "65vh",
          zIndex: "2",
        }}
      ></img>
      <div className="sidebox position-absolute"></div>
    </div>
  );
};

export default Contact;
