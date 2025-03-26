import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm">
        <div className="flex flex-col justify-start">
          <img src={assets.logo} className="mb-2 w-32" alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600 text-justify mt-2">
            Bazario Shop is a leading e-commerce platform that provides quality
            products across various categories including fashion, electronics,
            and home essentials. We strive to offer the best prices and customer
            service in the industry.
          </p>
        </div>

        <div className="flex flex-col justify-start">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a href="tel:+919876543210" className="hover:text-black">
                +91-98765 43210
              </a>
            </li>
            <li>
              <a
                href="mailto:connecttthere@gmail.com"
                className="hover:text-black"
              >
                connecttthere@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-start">
          <p className="text-xl font-medium mb-5">FOLLOW US</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          © 2025 akankshhaa - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
