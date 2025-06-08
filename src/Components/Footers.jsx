import React from 'react';
import { Mail } from 'lucide-react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0E1629] text-white py-10 px-6 md:px-16">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-gray-700 pb-8 gap-8">

        {/* Logo and Tagline */}
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-tr from-blue-500 to-green-400 rounded-full w-12 h-12 flex items-center justify-center">
            <img
              src={logo}
              alt="SageAI Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-bold">
              Sage<span className="text-green-400">AI</span>
            </p>
            <p className="text-sm text-gray-400">Voice-powered expert guidance</p>
          </div>
        </div>

        {/* Contact and Social */}
        <div className="flex flex-col md:items-start gap-3">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">hello@sageai.com</span>
          </div>
          <div className="flex gap-4 text-gray-400 mt-2">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 text-sm text-gray-400">
          <a href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 text-sm mt-6">
        © 2025 SageAI. All rights reserved. Empowering conversations with AI expertise.
      </p>
    </footer>
  );
};

export default Footer;
