import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();

  const validateForm = () => {
    const name = form.current.from_name.value.trim();
    const email = form.current.user_email.value.trim();
    const phone = form.current.user_phone.value.trim();
    const message = form.current.message.value.trim();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!name) return "Please enter your name.";
    if (!email || !emailRegex.test(email)) return "Please enter a valid email.";
    if (!phone || !phoneRegex.test(phone)) return "Please enter a 10-digit phone number.";
    if (!message) return "Please enter your message.";

    return null;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
      toast.error(errorMessage, { position: "top-right" });
      return;
    }

    emailjs
      .sendForm(
        "service_6dmiyzx", // Replace with your EmailJS Service ID
        "template_xxeyn07", // Replace with your EmailJS Template ID
        form.current,
        "pilFSvoqFoHBRuGBG" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully!", { position: "top-right" });
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message. Please try again.", { position: "top-right" });
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 rounded-lg p-10 backdrop-blur-lg bg-white/30 shadow-xl border border-white/10">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-md md:text-xl text-gray-700">Let's create something extraordinary together!</p>

          <div className="space-y-6">
            <ContactInfo icon={<IoLocationSharp />} text="Tenali, Andhra Pradesh" />
            <ContactInfo icon={<IoMdCall />} text="+91 9490612648" />
            <ContactInfo icon={<MdOutlineEmail />} text="rohithsai.g@gtands.com" />
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg backdrop-blur-lg">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <InputField type="text" name="from_name" placeholder="Your Name" />
            <InputField type="email" name="user_email" placeholder="Your Email" />
            <InputField type="tel" name="user_phone" placeholder="Your Phone" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all duration-200"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 text-lg bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105 duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

// Contact Info Card
const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
    <div className="bg-orange-500 text-white p-4 rounded-full">{icon}</div>
    <p className="text-gray-900 text-lg">{text}</p>
  </div>
);

// Input Field Component
const InputField = ({ type, name, placeholder }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all duration-200"
  />
);

export default ContactUs;
