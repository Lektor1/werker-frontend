import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from '../assets/logo.png';
export function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-brandBlack border-t border-white/10 pt-16 pb-8 text-brandWhite/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a
              href="#hero"
              onClick={scrollToTop}
              className="flex items-center gap-2 text-brandWhite mb-6 inline-flex"
            >
              {/* <div className="bg-primary p-1.5 rounded-sm">
                <Wrench size={20} className="text-brandWhite" />
              </div> */}

              <img
                src={logo}
                alt="Werker Logo"
                className="w-8 h-8 object-contain"
                style={{ width: "40px", height: "auto" }}
              />
              <span className="font-display font-bold text-xl tracking-wide">
                WERKER
              </span>
            </a>
            <p className="max-w-sm mb-6">
              Precision engineering for residential and commercial heating,
              cooling, and plumbing systems. Built to last.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-brandWhite font-bold uppercase tracking-wider text-sm mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-primary transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  className="hover:text-primary transition-colors"
                >
                  Equipment Shop
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-brandWhite font-bold uppercase tracking-wider text-sm mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Warranty Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Licensing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>
            &copy; {new Date().getFullYear()} Werker Technical Systems. All
            rights reserved.
          </p>
          <p className="mt-2 md:mt-0">Licensed & Insured #HVAC-8922</p>
        </div>
      </div>
    </footer>
  );
}
