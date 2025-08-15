import React, { useState } from "react";

const navLinks = [
  { name: "About me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact Me", href: "#contact" },
];

export function NavigationMenuDemo() {
  const [active, setActive] = useState("");

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-center px-8 py-4">
        <h1 className="text-2xl font-bold text-white tracking-wide animate-fadeIn"></h1>
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative text-white font-semibold transition-colors duration-300 hover:text-yellow-400 px-2 py-1
                  ${active === link.href ? "text-yellow-400" : ""}
                `}
                onClick={() => setActive(link.href)}
              >
                <span className="nav-underline"></span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1s ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .nav-underline {
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, #f39c12, #8e44ad);
            opacity: 0;
            transform: scaleX(0);
            transition: all 0.3s;
          }
          a:hover .nav-underline, a.text-yellow-400 .nav-underline {
            opacity: 1;
            transform: scaleX(1);
          }
        `}
      </style>
    </nav>
  );
}