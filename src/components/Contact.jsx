import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_zhjuk0z",      
        "template_h877fh3",     
        form.current,
        "R5-aVT597HS4rjqrm"      
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully ✅");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message ❌");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-linear-to-br from-[#1e1f26] to-[#111217] text-white flex items-center justify-center px-6 md:px-20 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

       
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider">
            CONTACT
          </h2>

          <p className="text-gray-400 mb-10 max-w-sm leading-relaxed">
            Have a project in mind or a question to ask?
            Feel free to reach out. I’m always open to new ideas and collaborations.
          </p>

          <div className="space-y-8 text-gray-300">
            <div>
              <h4 className="font-semibold text-white">Address</h4>
              <p className="text-sm">Malappuram, Kerala, 676562</p>
            </div>

            <div>
              <h4 className="font-semibold text-white">Phone</h4>
              <p className="text-sm">+91 9447324916</p>
            </div>

            <div>
              <h4 className="font-semibold text-white">E-mail</h4>
              <p className="text-sm">sinannm1212@gmail.com</p>
            </div>
          </div>
        </div>

        
        <div className="bg-[#2a2b31] p-10 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-semibold mb-8 text-center tracking-wide">
            CONTACT FORM
          </h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-8">

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2 text-sm"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your E-mail"
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2 text-sm"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2 text-sm resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black hover:bg-gray-800 transition-all py-3 rounded-xl font-semibold tracking-wider disabled:opacity-50"
            >
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
