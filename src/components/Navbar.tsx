import React, { useEffect, useState } from "react";
import { Menu, X, Wrench } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Shop",
      href: "#shop",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      // Navigate to home page with hash
      navigate("/" + href);
      // We need a small timeout to let the page render before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-gradient-to-r from-[#d94a18] via-primary to-[#ff7a45] shadow-lg py-4" : "bg-gradient-to-r from-[#d94a18] via-primary to-[#ff7a45] py-6"}`}
    >
      {/* Subtle technical pattern overlay for the navbar */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:20px_20px] opacity-10 pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-10">
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-3 group"
        >
          {/* High contrast logo chip */}

          {/* <div className="bg-brandBlack p-2.5 rounded-md shadow-inner group-hover:scale-105 transition-transform">
            <Wrench size={22} className="text-primary" />
          </div> */}
          <img src={logo} alt="Werker Logo" className="w-8 h-8 object-contain" style={{ width: '60px', height: 'auto' }}  />
          <span className="font-display font-bold text-2xl tracking-wide text-brandWhite drop-shadow-sm" style={{ fontSize: '40px'}} >
            WERKER
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-brandWhite/90 hover:text-brandWhite font-semibold text-sm uppercase tracking-wider transition-all hover:drop-shadow-md relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="bg-brandBlack text-brandWhite px-6 py-2.5 rounded-sm font-bold hover:bg-brandWhite hover:text-brandBlack transition-colors shadow-md"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brandWhite p-2 hover:bg-black/10 rounded-sm transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brandBlack border-t border-white/10 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-brandWhite text-lg font-medium py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="bg-primary text-brandWhite text-center px-6 py-3 mt-2 rounded-sm font-bold"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
