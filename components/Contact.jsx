import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Styled button component using the desired effect
const SendButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  color: #000; /* Text color */
  background: linear-gradient(to right, #ff7e7e, #ff3b3b); /* Red gradient */
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  box-shadow: 0px 0px 15px 3px rgba(255, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(to right, #ff4c4c, #ff1a1a); /* Darker red gradient on hover */
    transform: scale(1.05); /* Scale effect on hover */
    box-shadow: 0px 0px 20px 5px rgba(255, 0, 0, 0.4); /* Enhanced shadow on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 20px 5px rgba(255, 0, 0, 0.4); /* Shadow on focus */
  }
`;

export default function Contact() {
  // State to handle form data
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 justify-evenly mx-auto items-center"
    >
      {/* Contact Title */}
      <h3 className="absolute top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact Me
      </h3>

      {/* Contact Form Container */}
      <div className="flex flex-col space-y-6 w-full max-w-lg mt-16 md:mt-0 bg-[#292929] p-8 rounded-lg shadow-lg border border-red-300">
        {/* Name Input */}
        <div className="relative">
          <label className="absolute left-4 top-[-8px] text-sm text-gray-400 bg-[#292929] px-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 text-gray-300 bg-[#2b2b2b] rounded-md focus:outline-none border border-gray-600 focus:border-red-500"
            placeholder="Your name"
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <label className="absolute left-4 top-[-8px] text-sm text-gray-400 bg-[#292929] px-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 text-gray-300 bg-[#2b2b2b] rounded-md focus:outline-none border border-gray-600 focus:border-red-500"
            placeholder="Your email"
          />
        </div>

        {/* Message Input */}
        <div className="relative">
          <label className="absolute left-4 top-[-8px] text-sm text-gray-400 bg-[#292929] px-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-4 text-gray-300 bg-[#2b2b2b] rounded-md focus:outline-none border border-gray-600 focus:border-red-500"
            placeholder="Your message"
          ></textarea>
        </div>

        {/* Styled Send Button with the desired effect */}
        <SendButton type="submit">Send</SendButton>
      </div>
    </motion.div>
  );
}
