import React, { useState, useEffect } from "react";
import { NavigationMenuDemo } from "./Navbar";
import { FiMail, FiPhone, FiCalendar, FiBookOpen } from "react-icons/fi";
import { FiGithub, FiLinkedin, FiAtSign, FiMapPin, FiCode } from "react-icons/fi";
import { OrbitingCircles } from "./components/magicui/orbiting-circles";
import { IconCloudDemo } from "./components/IconCloudDemo";
import { MarqueeDemoVertical } from "./components/MarqueeDemo";
import { Marquee } from "./components/magicui/marquee";


function App() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        // Scrolling down
        setCurrentSection(prev => Math.min(prev + 1, 3));
      } else {
        // Scrolling up
        setCurrentSection(prev => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const scrollToSection = (sectionIndex) => {
    setCurrentSection(sectionIndex);
    const sections = document.querySelectorAll('section');
    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <NavigationMenuDemo />

      {/* Slide 1 - Hero Section */}
      <section className="relative min-h-screen flex transition-all duration-1000 ease-in-out" id="about">
        {/* Background with diagonal split */}
        <div className="absolute inset-0">
          {/* Left side - Light Gray Background */}
          <div className="absolute inset-0 bg-gray-100" style={{
            clipPath: 'polygon(0 0, 100% 0, 65% 100%, 0% 100%)'
          }}></div>
          
          {/* Right side - Black Background */}
          <div className="absolute inset-0 bg-black" style={{
            clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 65% 100%)'
          }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full flex">
          {/* Left Section Content */}
          <div className="w-1/2 flex flex-col justify-between p-12 relative">
            {/* Introduction Text */}
            <div className="flex-1 flex flex-col justify-center items-start">
              <p className="text-black text-lg md:text-xl mb-2 animate-fadeInUp animation-delay-100 hover:text-gray-700 transition-colors duration-300 hover:translate-x-2 transform">Hi, I am</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 animate-fadeInUp animation-delay-200 relative group cursor-pointer">
                <span className="inline-block animate-float-text">
                  Rachata Roongratree
                </span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mb-4 animate-fadeInUp animation-delay-300 relative group cursor-pointer">
                <span className="relative z-10 font-semibold tracking-wide inline-block animate-bounce-subtle">
                  Intern as a Software Developer
                </span>
              </p>
              
              <p className="text-gray-600 text-base md:text-lg max-w-lg leading-relaxed mb-8 animate-fadeInUp animation-delay-400">
                Who interested software development with a passion for creating applications and learn new techologies to enhance my skills.
              </p>
              
              {/* Information Cards */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8 animate-fadeInUp animation-delay-500">
                <div className="bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <FiMapPin className="text-white text-sm" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Location</div>
                      <div className="text-sm font-medium text-black">Chiang Mai, TH</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <FiMail className="text-white text-sm" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Email</div>
                      <div className="text-sm font-medium text-black">rachatarr46@gmail.com</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <FiCode className="text-white text-sm" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Primary Tool</div>
                      <div className="text-sm font-medium text-black">React.js</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <FiBookOpen className="text-white text-sm" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Faculty</div>
                      <div className="text-sm font-medium text-black">Computer Engineering</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call-to-Action Buttons */}
              <div className="flex gap-4 mb-8 animate-fadeInUp animation-delay-600">
                <a
                  href="#portfolio"
                  className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 transform shadow-lg"
                >
                  View Portfolio
                </a>
                <a
                  href="https://github.com/Rachatarr46"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 transform"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 right-0 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-float-slow"></div>
            <div className="absolute bottom-40 left-0 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-float-slow animation-delay-1000"></div>
          </div>
          
          {/* Right Section - Portrait Image */}
          <div className="w-1/2 flex items-end justify-start pl-8 md:pl-12 lg:pl-16">
            {/* Floating decorative elements */}
            <div className="absolute right-20 top-32 w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-20 animate-float-slow blur-xl"></div>
            <div className="absolute right-32 bottom-40 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-float blur-xl"></div>
            
            {/* Main image container with enhanced effects */}
            <div className="relative group">
              {/* Image container */}
              <div className="relative w-80 h-96 md:w-96 md:h-[28rem] lg:w-[32rem] lg:h-[36rem] bg-white rounded-lg overflow-hidden transform transition-all duration-700 hover:scale-105 hover:-rotate-1 group-hover:shadow-2xl">
                <img 
                  src="/image/background.png" 
                  alt="Portrait Background"
                  className="w-full h-full rounded-none transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    borderRadius: '0',
                    border: 'none',
                    outline: 'none'
                  }}
                />
                
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping animation-delay-1000 opacity-75"></div>
                  <div className="absolute bottom-6 left-8 w-1 h-1 bg-green-400 rounded-full animate-ping animation-delay-2000 opacity-75"></div>
                  <div className="absolute bottom-12 right-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping animation-delay-3000 opacity-75"></div>
                </div>
              </div>
              
              {/* Corner accent elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-bounce-subtle"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce-subtle animation-delay-1000"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-bounce-subtle animation-delay-2000"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full animate-bounce-subtle animation-delay-3000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2 - Skills */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-black relative overflow-hidden transition-all duration-1000 ease-in-out transform" id="skills">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          {/* Floating circles */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-indigo-500 rounded-full opacity-15 animate-float-slow"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-purple-500 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-600 rounded-full opacity-15 animate-float-slow"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg opacity-20 rotate-45 animate-pulse-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse-slow-reverse"></div>
        </div>
        <div className="w-full max-w-6xl px-4 md:px-8">
          <div className="text-center mb-12 pt-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 tracking-tight">
              SKILLS
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto px-4 font-medium tracking-wide">
              Here are the key areas where I excel and continue to grow
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                                                    {/* Programming Skills */}
            <div className="bg-white rounded-lg p-6 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 tracking-wide">Programming Skills</h3>
                </div>
              </div>
              
                                            
                      {/* IconCloud Demo */}
                      <div className="h-32 mb-6 flex items-center justify-center">
                        <IconCloudDemo />
                      </div>
                      
                      <style jsx>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
        `}</style>
              
                                                           <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">HTML/CSS</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Basic</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">React.js</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Basic</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Basic</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Python</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Basic</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Node.js</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Basic</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">MySQL</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Basic</span>
                  </div>
                </div>
                          </div>

            {/* Soft Skills */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 tracking-wide">Soft Skills</h3>
                  <p className="text-gray-600 text-sm font-medium">Personal & interpersonal</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Problem Solving</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Communication</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Time Management</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Emotional Intelligence</span>
                </div>
              </div>
            </div>

            {/* Languages Box */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18.5a6.5 6.5 0 01-6.5-6.5c0-3.5 2.5-6.5 6.5-6.5s6.5 3 6.5 6.5-2.5 6.5-6.5 6.5zM12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-700 tracking-wide">Languages</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Thai</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Native</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">English</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Basic</span>
                </div>
              </div>
            </div>

            {/* Advanced Skills Box */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700 tracking-wide">Learning Skills</h3>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">ML/AI</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Learning</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Supervised</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Learning</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Deep Learning</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3 - Portfolio */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-black relative overflow-hidden transition-all duration-1000 ease-in-out transform" id="portfolio">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          {/* Floating circles */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-indigo-500 rounded-full opacity-15 animate-float-slow"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-purple-500 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-600 rounded-full opacity-15 animate-float-slow"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg opacity-20 rotate-45 animate-pulse-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse-slow-reverse"></div>
        </div>
        
        <div className="relative z-10 w-full px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Portfolio</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Showcasing my recent projects and development skills through innovative solutions
            </p>
          </div>
          
          {/* Portfolio Showcase with Marquee */}
          <div className="w-full">
            {/* First Row - Main Projects */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Featured Projects</h3>
              <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem] -mx-4">
                {/* Project 1 - Color Sorting Robotic Arm */}
                <a href="https://github.com/Rachatarr46/Color-sorting-Robotic-Arm" target="_blank" rel="noopener noreferrer" className="group relative w-[28rem] h-[32rem] bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden cursor-pointer block" style={{ width: '28rem', height: '32rem' }}>
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  

                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-full h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                      <img 
                        src="/image/robotarm.jpg" 
                        alt="Color Sorting Robotic Arm Project"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        style={{
                          borderRadius: '0',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback SVG Icon */}
                      <svg className="w-24 h-24 text-white hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-4 py-2 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">2022</span>
                        <div className="flex items-center gap-2">
                          <span className="px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full">Backend</span>
                          {/* GitHub Icon next to Backend */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-green-100 rounded-full p-1.5 border border-green-200">
                              <svg className="w-4 h-4 text-green-800" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-white transition-colors duration-300">Color Sorting Robotic Arm</h3>
                      <p className="text-gray-600 mb-6 text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                        Advanced Arduino program for RGB color differentiation and robotic arm control with precision sorting capabilities and real-time processing.
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-orange-100 group-hover:text-orange-800 transition-all duration-300">Arduino</span>
                        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-orange-100 group-hover:text-orange-800 transition-all duration-300">C++</span>
                        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-orange-100 group-hover:text-orange-800 transition-all duration-300">Robotics</span>
                        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-orange-100 group-hover:text-orange-800 transition-all duration-300">Computer Vision</span>
                      </div>
                    </div>
                  </div>
                </a>
                
                {/* Project 2 - XAUUSD Trading Prediction */}
                <div className="group relative w-[28rem] h-[32rem] bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden cursor-pointer">
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-full h-80 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full">2024</span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">ML/AI</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-white transition-colors duration-300">XAUUSD Trading Prediction</h3>
                      <p className="text-gray-600 mb-6 text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                        Revolutionary Multi-Modal Fusion model for predicting XAUUSD trends using cutting-edge Machine Learning algorithms and neural networks.
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-green-100 group-hover:text-green-800 transition-all duration-300">LSTM</span>
                        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-green-100 group-hover:text-green-800 transition-all duration-300">Transformer</span>
                        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-green-100 group-hover:text-green-800 transition-all duration-300">MLP</span>
                        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-green-100 group-hover:text-green-800 transition-all duration-300">TensorFlow</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project 3 - CO-Workingspace */}
                <a href="https://github.com/KIFAKER86H/Working-Space-Booking-System-with-QR-Code" target="_blank" rel="noopener noreferrer" className="group relative w-[28rem] h-[32rem] bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden cursor-pointer block">
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* GitHub Link Icon - Moved to Full-Stack tag area */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-full h-80 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden" style={{ borderRadius: '0' }}>
                      <img 
                        src="/image/co-workingspace.png" 
                        alt="CO-Workingspace Project Interface"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        style={{
                          borderRadius: '0',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback SVG Icon */}
                      <svg className="w-24 h-24 text-white hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">2024 Q2</span>
                        <div className="flex items-center gap-2">
                          <span className="px-4 py-2 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">Full-Stack</span>
                          {/* GitHub Icon next to Full-Stack */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-purple-100 rounded-full p-1.5 border border-purple-200">
                              <svg className="w-4 h-4 text-purple-800" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-white transition-colors duration-300">CO-Workingspace</h3>
                      <p className="text-gray-600 mb-6 text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                        Comprehensive room booking system with advanced search, smart filtering, QR code generation, and real-time availability tracking.
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-blue-100 group-hover:text-blue-800 transition-all duration-300">React</span>
                        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-blue-100 group-hover:text-blue-800 transition-all duration-300">Node.js</span>
                      </div>
                    </div>
                  </div>
                </a>
                
                {/* Project 4 - AutotakecareOplant */}
                <a href="https://github.com/KIFAKER86H/AutotakecareOplant__1" target="_blank" rel="noopener noreferrer" className="group relative w-[28rem] h-[32rem] bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden cursor-pointer block">
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  

                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-full h-80 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                      <img 
                        src="/image/AutotakecareOplant.png" 
                        alt="AutotakecareOplant Project Interface"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        style={{
                          borderRadius: '0',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback SVG Icon */}
                      <svg className="w-24 h-24 text-white hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-4 py-2 bg-teal-100 text-teal-800 text-sm font-medium rounded-full">2024 Q3</span>
                        <div className="flex items-center gap-2">
                          <span className="px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">Backend</span>
                          {/* GitHub Icon next to Backend */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-emerald-100 rounded-full p-1.5 border border-emerald-200">
                              <svg className="w-4 h-4 text-emerald-800" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-white transition-colors duration-300">AutotakecareOplant</h3>
                      <p className="text-gray-600 mb-6 text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                        An intelligent microcontroller-based project designed to automatically monitor and maintain ornamental plants.
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-teal-100 group-hover:text-teal-800 transition-all duration-300">Microcontroller</span>
                        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-teal-100 group-hover:text-teal-800 transition-all duration-300">IoT</span>
                        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-teal-100 group-hover:text-teal-800 transition-all duration-300">Automation</span>
                      </div>
                    </div>
                  </div>
                </a>
                

                
                                  {/* Project 6 - Portfolio Website */}
                  <div className="group relative w-[28rem] h-[32rem] bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden cursor-pointer">
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="w-full h-80 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                        <img 
                          src="/image/porfolio-web.png" 
                          alt="Portfolio Website Project"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          style={{
                            borderRadius: '0',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback SVG Icon */}
                        <svg className="w-24 h-24 text-white hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-4 py-2 bg-pink-100 text-pink-800 text-sm font-medium rounded-full">2024 Q2</span>
                        <span className="px-4 py-2 bg-rose-100 text-rose-800 text-sm font-medium rounded-full">Full-Stack</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-white transition-colors duration-300">Portfolio Website</h3>
                      <p className="text-gray-600 mb-6 text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                        Modern, responsive portfolio website showcasing my projects and skills. Built with React, Tailwind CSS, and modern web technologies for optimal user experience.
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-pink-100 group-hover:text-pink-800 transition-all duration-300">React</span>
                        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-pink-100 group-hover:text-pink-800 transition-all duration-300">Tailwind CSS</span>
                        <span className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-pink-100 group-hover:text-pink-800 transition-all duration-300">Responsive</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Marquee>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Slide 4 - Contact */}
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-black transition-all duration-1000 ease-in-out transform overflow-hidden" id="contact">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-20 animate-float-slow blur-xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-float blur-xl"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-20 animate-pulse-slow blur-xl"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg opacity-20 rotate-45 animate-pulse-slow-reverse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-bounce-subtle"></div>
          
          {/* Decorative Lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-30"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center max-w-6xl px-8 animate-fadeInUp">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mb-6 animate-bounce-subtle">
              <FiMail className="text-4xl text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Connect</span>
            </h2>
            <p className="max-w-2xl text-xl text-gray-300 leading-relaxed">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together!
            </p>
          </div>
          
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            {/* Email Card */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiMail className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300">Email</h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-100 transition-colors duration-300">Send me a message anytime</p>
                <a
                  href="mailto:rachatarr46@gmail.com"
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold group-hover:text-white transition-colors duration-300 hover:gap-3"
                >
                  rachatarr46@gmail.com
                  <span className="text-lg transform group-hover:translate-x-1 transition-transform duration-300">↗</span>
                </a>
              </div>
            </div>
            
            {/* Phone Card */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiPhone className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300">Phone</h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-100 transition-colors duration-300">Call me directly</p>
                <a
                  href="tel:+0660571567"
                  className="inline-flex items-center gap-2 text-blue-500 font-semibold group-hover:text-white transition-colors duration-300 hover:gap-3"
                >
                  +66 60-571-567
                  <span className="text-lg transform group-hover:translate-x-1 transition-transform duration-300">↗</span>
                </a>
              </div>
            </div>
            
            {/* Social Card */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiGithub className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300">Social</h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-100 transition-colors duration-300">Connect with me online</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Rachatarr46"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-500 font-semibold group-hover:text-white transition-colors duration-300 hover:gap-3"
                  >
                    GitHub
                    <span className="text-lg transform group-hover:translate-x-1 transition-transform duration-300">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.3);
            }
            50% {
              opacity: 1;
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          @keyframes float-slow {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(180deg);
            }
          }
          
          @keyframes float-text {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-3px) rotate(0.5deg);
            }
            50% {
              transform: translateY(-5px) rotate(0deg);
            }
            75% {
              transform: translateY(-3px) rotate(-0.5deg);
            }
          }
          
          @keyframes pulse-slow {
            0%, 100% {
              opacity: 0.2;
              transform: scale(1);
            }
            50% {
              opacity: 0.4;
              transform: scale(1.05);
            }
          }
          
          @keyframes pulse-slow-reverse {
            0%, 100% {
              opacity: 0.2;
              transform: scale(1.05);
            }
            50% {
              opacity: 0.4;
              transform: scale(1);
            }
          }
          
          @keyframes bounce-subtle {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-2px);
            }
          }
          
          @keyframes orbit-slow {
            0% {
              transform: rotate(0deg) translateX(60px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(60px) rotate(-360deg);
            }
          }
          
          @keyframes orbit-medium {
            0% {
              transform: rotate(0deg) translateX(80px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(80px) rotate(-360deg);
            }
          }
          
          @keyframes orbit-fast {
            0% {
              transform: rotate(0deg) translateX(100px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(100px) rotate(-360deg);
            }
          }
          
          @keyframes orbit-c++ {
            0% {
              transform: rotate(0deg) translateX(120px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(120px) rotate(-360deg);
            }
          }
          
          @keyframes orbit-w {
            0% {
              transform: rotate(45deg) translateX(120px) rotate(-45deg);
            }
            100% {
              transform: rotate(405deg) translateX(120px) rotate(-405deg);
            }
          }
          
          @keyframes orbit-csharp {
            0% {
              transform: rotate(90deg) translateX(120px) rotate(-90deg);
            }
            100% {
              transform: rotate(450deg) translateX(120px) rotate(-450deg);
            }
          }
          
          @keyframes orbit-vue {
            0% {
              transform: rotate(135deg) translateX(120px) rotate(-135deg);
            }
            100% {
              transform: rotate(495deg) translateX(120px) rotate(-495deg);
            }
          }
          
          @keyframes orbit-css3 {
            0% {
              transform: rotate(180deg) translateX(120px) rotate(-180deg);
            }
            100% {
              transform: rotate(540deg) translateX(120px) rotate(-540deg);
            }
          }
          
          @keyframes orbit-sql {
            0% {
              transform: rotate(225deg) translateX(120px) rotate(-225deg);
            }
            100% {
              transform: rotate(585deg) translateX(120px) rotate(-585deg);
            }
          }
          
          @keyframes orbit-react {
            0% {
              transform: rotate(270deg) translateX(120px) rotate(-270deg);
            }
            100% {
              transform: rotate(630deg) translateX(120px) rotate(-630deg);
            }
          }
          
          @keyframes orbit-azure {
            0% {
              transform: rotate(315deg) translateX(120px) rotate(-315deg);
            }
            100% {
              transform: rotate(675deg) translateX(120px) rotate(-675deg);
            }
          }
          

          
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
          }
          
          .animate-bounce-in {
            animation: bounceIn 0.6s ease-out forwards;
            opacity: 0;
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-float-slow {
            animation: float-slow 4s ease-in-out infinite;
          }
          
          .animate-float-text {
            animation: float-text 4s ease-in-out infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
          
          .animate-pulse-slow-reverse {
            animation: pulse-slow-reverse 3s ease-in-out infinite;
          }
          
          .animate-bounce-subtle {
            animation: bounce-subtle 2s ease-in-out infinite;
          }
          
          .animate-orbit-slow {
            animation: orbit-slow 20s linear infinite;
          }
          
          .animate-orbit-medium {
            animation: orbit-medium 15s linear infinite;
          }
          
          .animate-orbit-fast {
            animation: orbit-fast 10s linear infinite;
          }
          
          /* Custom orbiting animations for Skills section */
          @keyframes orbit-1 {
            0% { transform: translate(-50%, -50%) rotate(0deg) translateX(40px) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg) translateX(40px) rotate(-360deg); }
          }
          
          @keyframes orbit-2 {
            0% { transform: translate(-50%, -50%) rotate(90deg) translateX(40px) rotate(-90deg); }
            100% { transform: translate(-50%, -50%) rotate(450deg) translateX(40px) rotate(-450deg); }
          }
          
          @keyframes orbit-3 {
            0% { transform: translate(-50%, -50%) rotate(180deg) translateX(40px) rotate(-180deg); }
            100% { transform: translate(-50%, -50%) rotate(540deg) translateX(40px) rotate(-540deg); }
          }
          
          @keyframes orbit-4 {
            0% { transform: translate(-50%, -50%) rotate(270deg) translateX(40px) rotate(-270deg); }
            100% { transform: translate(-50%, -50%) rotate(630deg) translateX(40px) rotate(-630deg); }
          }
          
          .animate-orbit-1 { animation: orbit-1 15s linear infinite; }
          .animate-orbit-2 { animation: orbit-2 15s linear infinite; }
          .animate-orbit-3 { animation: orbit-3 15s linear infinite; }
          .animate-orbit-4 { animation: orbit-4 15s linear infinite; }
          
          .animate-orbit-c++ {
            animation: orbit-c++ 25s linear infinite;
          }
          
          .animate-orbit-w {
            animation: orbit-w 20s linear infinite;
          }
          
          .animate-orbit-csharp {
            animation: orbit-csharp 18s linear infinite;
          }
          
          .animate-orbit-vue {
            animation: orbit-vue 22s linear infinite;
          }
          
          .animate-orbit-css3 {
            animation: orbit-css3 24s linear infinite;
          }
          
          .animate-orbit-sql {
            animation: orbit-sql 26s linear infinite;
          }
          
          .animate-orbit-react {
            animation: orbit-react 21s linear infinite;
          }
          
          .animate-orbit-azure {
            animation: orbit-azure 23s linear infinite;
          }
          
          .animate-orbit-html {
            animation: orbit-html 25s linear infinite;
          }
          
          .animate-orbit-css {
            animation: orbit-css 23s linear infinite;
          }
          
          .animate-orbit-js {
            animation: orbit-js 21s linear infinite;
          }
          
          .animate-orbit-react {
            animation: orbit-react 19s linear infinite;
          }
          
          .animate-orbit-nextjs {
            animation: orbit-nextjs 22s linear infinite;
          }
          
          .animate-orbit-nodejs {
            animation: orbit-nodejs 24s linear infinite;
          }
          
          .animate-orbit-php {
            animation: orbit-php 26s linear infinite;
          }
          
          .animate-orbit-mysql {
            animation: orbit-mysql 28s linear infinite;
          }
          
          .animate-orbit-python {
            animation: orbit-python 20s linear infinite;
          }
          
          .animate-orbit-supervised {
            animation: orbit-supervised 18s linear infinite;
          }
          
          .animate-orbit-deeplearning {
            animation: orbit-deeplearning 16s linear infinite;
          }
          
          .animate-orbit-git {
            animation: orbit-git 30s linear infinite;
          }
          
          .animation-delay-100 {
            animation-delay: 0.1s;
          }
          
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          
          .animation-delay-300 {
            animation-delay: 0.3s;
          }
          
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
          
          .animation-delay-500 {
            animation-delay: 0.5s;
          }
          
          .animation-delay-600 {
            animation-delay: 0.6s;
          }
          
          .animation-delay-1000 {
            animation-delay: 1s;
          }
          
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          
          section {
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          section:hover {
            transform: scale(1.02);
          }
        `}
      </style>
        {/* Custom CSS for orbital animations */}
        <style>{`
          @keyframes orbit-html {
            0% { transform: translate(-50%, -50%) rotate(0deg) translateX(200px) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg) translateX(200px) rotate(-360deg); }
          }
          
          @keyframes orbit-css {
            0% { transform: translate(-50%, -50%) rotate(30deg) translateX(200px) rotate(-30deg); }
            100% { transform: translate(-50%, -50%) rotate(390deg) translateX(200px) rotate(-390deg); }
          }
          
          @keyframes orbit-js {
            0% { transform: translate(-50%, -50%) rotate(60deg) translateX(200px) rotate(-60deg); }
            100% { transform: translate(-50%, -50%) rotate(420deg) translateX(200px) rotate(-420deg); }
          }
          
          @keyframes orbit-react {
            0% { transform: translate(-50%, -50%) rotate(90deg) translateX(200px) rotate(-90deg); }
            100% { transform: translate(-50%, -50%) rotate(450deg) translateX(200px) rotate(-450deg); }
          }
          
          @keyframes orbit-nextjs {
            0% { transform: translate(-50%, -50%) rotate(120deg) translateX(200px) rotate(-120deg); }
            100% { transform: translate(-50%, -50%) rotate(480deg) translateX(200px) rotate(-480deg); }
          }
          
          @keyframes orbit-nodejs {
            0% { transform: translate(-50%, -50%) rotate(150deg) translateX(200px) rotate(-150deg); }
            100% { transform: translate(-50%, -50%) rotate(510deg) translateX(200px) rotate(-510deg); }
          }
          
          @keyframes orbit-php {
            0% { transform: translate(-50%, -50%) rotate(180deg) translateX(200px) rotate(-180deg); }
            100% { transform: translate(-50%, -50%) rotate(540deg) translateX(200px) rotate(-540deg); }
          }
          
          @keyframes orbit-mysql {
            0% { transform: translate(-50%, -50%) rotate(210deg) translateX(200px) rotate(-210deg); }
            100% { transform: translate(-50%, -50%) rotate(570deg) translateX(200px) rotate(-570deg); }
          }
          
          @keyframes orbit-python {
            0% { transform: translate(-50%, -50%) rotate(240deg) translateX(200px) rotate(-240deg); }
            100% { transform: translate(-50%, -50%) rotate(600deg) translateX(200px) rotate(-600deg); }
          }
          
          @keyframes orbit-supervised {
            0% { transform: translate(-50%, -50%) rotate(270deg) translateX(200px) rotate(-270deg); }
            100% { transform: translate(-50%, -50%) rotate(630deg) translateX(200px) rotate(-630deg); }
          }
          
          @keyframes orbit-deeplearning {
            0% { transform: translate(-50%, -50%) rotate(300deg) translateX(200px) rotate(-300deg); }
            100% { transform: translate(-50%, -50%) rotate(660deg) translateX(200px) rotate(-660deg); }
          }
          
          @keyframes orbit-git {
            0% { transform: translate(-50%, -50%) rotate(330deg) translateX(200px) rotate(-330deg); }
            100% { transform: translate(-50%, -50%) rotate(690deg) translateX(200px) rotate(-690deg); }
          }
          
          .animate-orbit-html { animation: orbit-html 15s linear infinite; }
          .animate-orbit-css { animation: orbit-css 15s linear infinite; }
          .animate-orbit-js { animation: orbit-js 15s linear infinite; }
          .animate-orbit-react { animation: orbit-react 15s linear infinite; }
          .animate-orbit-nextjs { animation: orbit-nextjs 15s linear infinite; }
          .animate-orbit-nodejs { animation: orbit-nodejs 15s linear infinite; }
          .animate-orbit-php { animation: orbit-php 15s linear infinite; }
          .animate-orbit-mysql { animation: orbit-mysql 15s linear infinite; }
          .animate-orbit-python { animation: orbit-python 15s linear infinite; }
          .animate-orbit-supervised { animation: orbit-supervised 15s linear infinite; }
          .animate-orbit-deeplearning { animation: orbit-deeplearning 15s linear infinite; }
          .animate-orbit-git { animation: orbit-git 15s linear infinite; }
        `}</style>
    </>
  );
}

export default App;