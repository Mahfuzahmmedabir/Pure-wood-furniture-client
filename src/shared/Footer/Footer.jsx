import React, { useState } from 'react';
import { FaFacebookSquare, FaPhoneAlt, FaWhatsappSquare } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { ImFacebook2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div>
      {/* <footer class="bg-gray-900 text-white py-10">
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-5">
    
   
    <div>
      <h2 class="text-2xl font-bold">FurniStyle</h2>
      <p class="text-sm mt-3">Elegant, durable, and stylish furniture for your home and office. Crafted with passion, designed for comfort.</p>
    </div>

  
    <div>
      <h3 class="text-lg font-semibold">Quick Links</h3>
      <ul class="mt-3 space-y-2">
        <li><a href="#" class="hover:text-gray-400">Home</a></li>
        <li><a href="#" class="hover:text-gray-400">Shop</a></li>
        <li><a href="#" class="hover:text-gray-400">About Us</a></li>
        <li><a href="#" class="hover:text-gray-400">Contact</a></li>
      </ul>
    </div>

  
    <div>
      <h3 class="text-lg font-semibold">Customer Support</h3>
      <ul class="mt-3 space-y-2">
        <li><a href="#" class="hover:text-gray-400">FAQs</a></li>
        <li><a href="#" class="hover:text-gray-400">Shipping & Returns</a></li>
        <li><a href="#" class="hover:text-gray-400">Privacy Policy</a></li>
        <li><a href="#" class="hover:text-gray-400">Terms & Conditions</a></li>
      </ul>
    </div>

   
    <div>
      <h3 class="text-lg font-semibold">Contact Us</h3>
      <p class="mt-3 text-sm">📍 123 Furniture St, City, Country</p>
      <p class="text-sm">📞 +123 456 7890</p>
      <p class="text-sm">✉ support@furnistyle.com</p>
      
     
      <div class="mt-4 flex space-x-4">
        <a href="#" class="hover:text-gray-400">🔵 Facebook</a>
        <a href="#" class="hover:text-gray-400">📸 Instagram</a>
        <a href="#" class="hover:text-gray-400">🐦 Twitter</a>
      </div>
    </div>

  </div>

 
  <div class="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
    &copy; 2025 FurniStyle. All rights reserved.
  </div>
</footer> */}

      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-5">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold">Pure Wood</h2>
            <p className="text-sm mt-3">
              Elegant, durable, and stylish furniture for your home and office.
              Crafted with passion, designed for comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold">Customer Support</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-3 text-[17px] flex items-center gap-2">
              <FaLocationDot /> 123 Furniture St, City, Country
            </p>
            <p className="text-[17px] flex  items-center gap-2">
              <FaPhoneAlt className="text-green-400"></FaPhoneAlt> +123 456 7890
            </p>
            <p className="text-[17px] flex  items-center gap-2">
              <MdEmail /> support@purewood.com
            </p>

            {/* Social Media Links */}
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="hover:text-gray-400 flex items-center gap-2 "
              >
                <ImFacebook2 className="text-blue-700  text-xl"></ImFacebook2>{' '}
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-gray-400  flex items-center gap-2 text-xl"
              >
                <FaWhatsappSquare className="bg-[#4FCE5D] text-xl"></FaWhatsappSquare>
                Whatsapp
              </a>

              <a href="#" className="hover:text-gray-400">
                🐦 Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Pure Wood. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
