import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap -mx-6">
          {/* Logo and Copyright Section */}
          <div className="w-full lg:w-1/3 px-6 mb-8 lg:mb-0">
            <div className="flex items-center mb-6">
              <Logo width="120px" />
            </div>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} DevUI. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Made with ❤️ for developers and creatives.
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-6 mb-8 lg:mb-0">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-gray-300">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/features"
                  className="hover:text-gray-100 text-gray-400 transition-all duration-300"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-gray-100 text-gray-400 transition-all duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/affiliate"
                  className="hover:text-gray-100 text-gray-400 transition-all duration-300"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  to="/press-kit"
                  className="hover:text-gray-100 text-gray-400 transition-all duration-300"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-6 mb-8 lg:mb-0">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-gray-300">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/account"
                  className="hover:text-gray-100 text-gray-400 transition-all duration-300"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="hover:text-gray-100 text-gray-400 transition-all duration-300"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-100 text-gray-400 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="hover:text-gray-100 text-gray-400 transition-all duration-300"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legals Section */}
          <div className="w-full lg:w-2/12 px-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-gray-300">
              Legals
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="hover:text-gray-100 text-gray-400 transition-all duration-300"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-gray-100 text-gray-400 transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/licensing"
                  className="hover:text-gray-100 text-gray-400 transition-all duration-300"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          <p>
            Follow us on{" "}
            <a
              href="https://twitter.com"
              className="text-blue-400 hover:underline transition-all duration-300"
            >
              Twitter
            </a>{" "}
            |{" "}
            <a
              href="https://facebook.com"
              className="text-blue-400 hover:underline transition-all duration-300"
            >
              Facebook
            </a>{" "}
            |{" "}
            <a
              href="https://linkedin.com"
              className="text-blue-400 hover:underline transition-all duration-300"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
