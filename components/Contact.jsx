import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled, { css, keyframes } from 'styled-components';

// Keyframes for animations
const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
`;

// Styled Send Button with animations
const SendButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  color: #000;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  
  ${({ status }) => {
    switch (status) {
      case 'sending':
        return css`
          background: linear-gradient(to right, #ffbf00, #ffae00); /* Orange when sending */
          box-shadow: 0px 0px 15px 3px rgba(255, 191, 0, 0.4);
          cursor: not-allowed;
        `;
      case 'success':
        return css`
          background: linear-gradient(to right, #4ade80, #22c55e); /* Green on success */
          box-shadow: 0px 0px 20px 5px rgba(34, 197, 94, 0.4);
          &:hover {
            transform: scale(1.05);
          }
        `;
      case 'error':
        return css`
          background: linear-gradient(to right, #ff4c4c, #ff1a1a);
          box-shadow: 0px 0px 20px 5px rgba(255, 0, 0, 0.4);
          animation: ${shake} 0.3s ease-in-out; /* Shake effect */
        `;
      default:
        return css`
          background: linear-gradient(to right, #ff7e7e, #ff3b3b);
          box-shadow: 0px 0px 15px 3px rgba(255, 0, 0, 0.2);
          &:hover {
            background: linear-gradient(to right, #ff4c4c, #ff1a1a);
            transform: scale(1.05);
            box-shadow: 0px 0px 20px 5px rgba(255, 0, 0, 0.4);
          }
        `;
    }
  }}
`;

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending'); // Show sending state

    try {
      const response = await fetch('https://formspree.io/f/mldgpwqq', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success'); // Turn button green
        setTimeout(() => setStatus(''), 3000); // Reset after 3s
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatus('error'); // Shake effect on error
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
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

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6 w-full max-w-xl mt-16 md:mt-0 bg-[#292929] p-8 rounded-lg shadow-lg border border-red-300">
        {/* Name Input */}
        <div className="relative">
          <label className="absolute left-4 top-[-8px] text-sm text-gray-400 bg-[#292929] px-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 text-gray-300 bg-[#2b2b2b] rounded-md focus:outline-none border border-gray-600 focus:border-red-500"
            placeholder="Your name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <label className="absolute left-4 top-[-8px] text-sm text-gray-400 bg-[#292929] px-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 text-gray-300 bg-[#2b2b2b] rounded-md focus:outline-none border border-gray-600 focus:border-red-500"
            placeholder="Your email"
            required
          />
        </div>

        {/* Message Input */}
        <div className="relative">
          <label className="absolute left-4 top-[-8px] text-sm text-gray-400 bg-[#292929] px-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-4 text-gray-300 bg-[#2b2b2b] rounded-md focus:outline-none border border-gray-600 focus:border-red-500"
            placeholder="Your message"
            required
          ></textarea>
        </div>

        {/* Send Button */}
        <SendButton type="submit" status={status}>
          {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send'}
        </SendButton>

        {/* Status Message */}
        {status && status !== 'sending' && (
          <p className={`text-sm text-center ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
            {status === 'success' ? 'Message sent successfully!' : 'Error sending message. Try again.'}
          </p>
        )}
      </form>
    </motion.div>
  );
}
