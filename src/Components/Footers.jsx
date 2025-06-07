import React from 'react';
import { Mail } from 'lucide-react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import logo from '../assets/logo.png'; // Update this path if needed

const Footer = () => {
  return (
    <footer className="bg-[#0E1629] text-white py-8 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-6">
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-tr from-blue-500 to-green-400 rounded-full w-10 h-10 flex items-center justify-center">
            <img
              src={logo} // Replace with your actual logo path
              alt="SageAI Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-bold">
              Sage<span className="text-green-400">AI</span>
            </p>
            <p className="text-sm text-gray-300">Voice-powered expert guidance</p>
          </div>
        </div>

        <div className="flex items-center mt-4 md:mt-0 space-x-6">
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5" />
            <span>hello@sageai.com</span>
          </div>
          <div className="flex space-x-4 text-gray-300">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>
        </div>

        <div className="flex mt-4 md:mt-0 space-x-6 text-sm text-gray-300">
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-white">Terms of Service</a>
        </div>
      </div>

      <p className="text-center text-gray-400 text-sm mt-6">
        © 2025 SageAI. All rights reserved. Empowering conversations with AI expertise.
      </p>
    </footer>
  );
};

export default Footer;