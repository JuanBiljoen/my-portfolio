import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form"



export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dqge20c",
        "template_3xfymdr",
        form.current,
        "F-yuhLre4fD-EYstB"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (



    <div className="connect" id="connect" >
      <h2>Let's connect!</h2>
      <p>Feel free to contact me via the form below.</p>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea className="user-message" name="message" />
        <input className="send-button" type="submit" value="Send" />
      </form>
    </div>
  );
};