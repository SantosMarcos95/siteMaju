"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../components/imagens/logo.jpeg";

export default function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isAtTop, setIsAtTop] = useState(true);

  const menuItems = [
    { name: "Início", href: "#hero" },
    { name: "Serviços", href: "#services" },
    { name: "Processo", href: "#process" },
    { name: "Sobre Mim", href: "#about" },
    { name: "Como Funciona", href: "#how-it-works" },
    { name: "Contato", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentActiveSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 50 &&
          window.scrollY < sectionTop + sectionHeight - 50
        ) {
          currentActiveSection = section.id;
        }
      });

      setActiveSection(currentActiveSection);
      setIsAtTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed to°p-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isAtTop ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="w-12 h-12 relative">
            <Image
              src={logo}
              alt="Logo da empresa"
              fill
              className="rounded-full object-cover bottom-1"
              priority
            />
          </div>
        </Link>
        <ul className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className={`${
                  isAtTop ? "text-white" : "text-gray-600"
                } hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "bg-gray-100 bg-opacity-50"
                    : ""
                }`}
                aria-current={
                  activeSection === item.href.slice(1) ? "page" : undefined
                }
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden ${
            isAtTop ? "text-white" : "text-gray-600"
          } hover:text-gray-800`}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 w-full text-left ${
                    activeSection === item.href.slice(1) ? "bg-gray-100" : ""
                  }`}
                  aria-current={
                    activeSection === item.href.slice(1) ? "page" : undefined
                  }
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
