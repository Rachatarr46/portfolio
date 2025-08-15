import React, { useEffect, useRef, useState } from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, 
  FaPython, FaGitAlt, FaDocker, FaAws
} from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiTensorflow, SiMongodb, SiTypescript } from "react-icons/si";

interface IconCloudDemoProps {}

export function IconCloudDemo({}: IconCloudDemoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;
    
    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));
    
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) return;
    
    const interval = setInterval(() => {
      setRotation(prev => ({
        x: prev.x + 0.5,
        y: prev.y + 0.3
      }));
    }, 50);
    
    return () => clearInterval(interval);
  }, [isDragging]);

  const icons = [
    <FaHtml5 key="html" className="w-8 h-8 text-orange-500" />,
    <FaCss3Alt key="css" className="w-8 h-8 text-blue-500" />,
    <FaJs key="js" className="w-8 h-8 text-yellow-500" />,
    <FaReact key="react" className="w-8 h-8 text-blue-400" />,
    <FaNodeJs key="node" className="w-8 h-8 text-green-500" />,
    <FaPhp key="php" className="w-8 h-8 text-purple-500" />,
    <FaPython key="python" className="w-8 h-8 text-blue-600" />,
    <FaGitAlt key="git" className="w-8 h-8 text-orange-600" />,
    <SiNextdotjs key="next" className="w-8 h-8 text-black" />,
    <SiMysql key="mysql" className="w-8 h-8 text-blue-700" />,
    <SiTensorflow key="tensorflow" className="w-8 h-8 text-orange-500" />,
    <FaDocker key="docker" className="w-8 h-8 text-blue-500" />,
    <FaAws key="aws" className="w-8 h-8 text-orange-600" />,
    <SiMongodb key="mongodb" className="w-8 h-8 text-green-600" />,
    <SiTypescript key="typescript" className="w-8 h-8 text-blue-600" />
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full perspective-1000"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="relative w-full h-full transform-style-preserve-3d transition-transform duration-100"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
      >
        {icons.map((icon, index) => {
          const phi = Math.acos(-1 + (2 * index) / icons.length);
          const theta = Math.sqrt(icons.length * Math.PI) * phi;
          
          const x = Math.cos(theta) * Math.sin(phi) * 120;
          const y = Math.sin(theta) * Math.sin(phi) * 120;
          const z = Math.cos(phi) * 120;

          return (
            <div
              key={index}
              className="absolute transform-style-preserve-3d transition-all duration-300 hover:scale-110"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                zIndex: Math.round(z + 200)
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                {icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
