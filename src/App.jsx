import React, { useState, useEffect } from "react";
import { NavigationMenuDemo } from "./Navbar";
import { FiMail } from "react-icons/fi";
import { FiGithub, FiLinkedin, FiAtSign, FiMapPin, FiBookOpen, FiCode } from "react-icons/fi";
import { OrbitingCircles } from "./components/magicui/orbiting-circles";
import { IconCloudDemo } from "./components/IconCloudDemo";

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
              <p className="text-black text-xl mb-2 animate-fadeInUp animation-delay-100 hover:text-gray-700 transition-colors duration-300 hover:translate-x-2 transform">Hi, I am</p>
              <h1 className="text-6xl font-bold text-black mb-4 animate-fadeInUp animation-delay-200 relative group cursor-pointer">
                <span className="inline-block animate-float-text">
                  Rachata Roongratree
                </span>
              </h1>
              <p className="text-gray-600 text-xl mb-4 animate-fadeInUp animation-delay-300 relative group cursor-pointer">
                <span className="relative z-10 font-semibold tracking-wide inline-block animate-bounce-subtle">
                  Intern as a Software Developer
                </span>
              </p>
              
              <p className="text-gray-600 text-lg max-w-lg leading-relaxed mb-8 animate-fadeInUp animation-delay-400">
                Who interested software development with a passion for creating applications and learn new techologies to enhance my skills.
              </p>
              
              {/* Information Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8 animate-fadeInUp animation-delay-500">
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
                      <FiBookOpen className="text-white text-sm" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Faculty</div>
                      <div className="text-sm font-medium text-black">Computer Engineering</div>
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
                  href="https://github.com"
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
          <div className="w-1/2 flex items-center justify-center">
            <div className="w-80 h-96 bg-gray-300 rounded-lg flex items-center justify-center animate-fadeInUp animation-delay-600">
              <span className="text-gray-600 text-lg">Portrait Image</span>
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
        <div className="w-full max-w-6xl px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Skills</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Here are the key areas where I excel and continue to grow
            </p>
          </div>
          
                      {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {/* Programming Skills */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Programming Skills</h3>
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
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Soft Skills</h3>
                  <p className="text-gray-600">Personal & interpersonal</p>
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
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18.5a6.5 6.5 0 01-6.5-6.5c0-3.5 2.5-6.5 6.5-6.5s6.5 3 6.5 6.5-2.5 6.5-6.5 6.5zM12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Languages</h3>
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
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Learning Skills</h3>
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
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 transition-all duration-1000 ease-in-out transform" id="portfolio">
        <div className="animate-fadeInUp">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Portfolio</h2>
          <p className="max-w-xl text-lg text-gray-700 mb-8">
            Here are some of my recent works, showcasing my design and development skills.
          </p>
          {/* เพิ่มเนื้อหา portfolio ตามต้องการ */}
        </div>
      </section>

      {/* Slide 4 - Contact */}
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-white transition-all duration-1000 ease-in-out transform" id="contact">
        {/* วงกลมพื้นหลังสีส้ม */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-300 rounded-b-full -z-10 animate-float"></div>
        
        {/* เนื้อหา Contact */}
        <div className="flex flex-col items-center mt-32 animate-fadeInUp">
          <h2 className="text-5xl font-bold text-black mb-4">
            Contact <span className="text-orange-500">Me</span>
          </h2>
          <p className="max-w-xl text-lg text-gray-700 mb-8 text-center">
            Feel free to reach out for collaboration, work, or just to say hi!
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:rachatarr46@gmail.com"
              className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-all text-lg border border-white flex items-center gap-3 hover:scale-105 transform"
              style={{ letterSpacing: "0.5px" }}
            >
              <FiMail className="text-2xl" />
              rachatarr46@gmail.com
              <span className="text-lg">↗</span>
            </a>
            <a
              href="tel:+0660571567"
              className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-all text-lg border border-white flex items-center gap-3 hover:scale-105 transform"
              style={{ letterSpacing: "0.5px" }}
            >
              +066-057-1567
              <span className="text-lg">↗</span>
            </a>
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
        <style jsx>{`
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