import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const EmailForm = () => {
  const [sendername, setSenderName] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    emailjs.init("I3DnisvYrfkPlxjpy");
  }, []);

  const sendMail = () => {
    const params = {
      sendername,
      to,
      message,
    };

    const serviceID = "service_uqjphyf"; // Email Service ID
    const templateID = "template_zud8aun"; // Email Template ID

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        alert("Email sent successfully!!");
      })
      .catch((error) => {
        console.error("Email sending error:", error);
      });
  };

  return (
    <>
      <div className="lg:px-12 px-6 flex-row w-full lg:mt-0 mt-8">
        <p className="mb-2">Nume:</p>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Scrie acum..."
          required
          className="py-2 px-6 border-solid border-2 border-black rounded-md w-full"
          value={sendername}
          onChange={(e) => setSenderName(e.target.value)}
        />
        <p className="mb-2 mt-6">Email:</p>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Scrie adresa..."
          required
          className="py-2 px-6 border-solid border-2 border-black rounded-md w-full"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <p className="mb-2 mt-6">Mesaj:</p>
        <textarea
          id="message"
          name="message"
          placeholder="Scrie un mesaj..."
          required
          className="py-2 px-6 border-solid border-2 border-black rounded-md w-full h-[15vh]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div>
          <button
            type="submit"
            className="py-2 px-6 border-solid border-2 border-black rounded-md w-full mt-4 bg-gradient-to-br from-orange-500 to-yellow-500 transition-shadow-transform duration-150 ease-linear hover:shadow-lg hover:bg-gradient-to-br hover:from-orange-600 hover:to-yellow-500"
            onClick={sendMail}
          >
            Trimite
          </button>
        </div>
      </div>
    </>
  );
};

export default EmailForm;
