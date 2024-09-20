import React from 'react';
import { Canvas } from '@react-three/fiber';
import ProjectCard from './landing-projects-card.jsx';
import './HeroSection.css';
import { PerspectiveCamera, Text3D, MeshDistortMaterial, Sparkles} from '@react-three/drei';


const HeroSection = () => {
  const scrollToProjects = () => {
    window.scrollTo({ top: 1250, behavior: 'smooth' });
  };

  return (
    <section className="relative bg-black text-white min-h-screen flex justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-linear-gradient-to-r from-[#fff] via-[#fff] to-[#5484C4]">
      {/* Add a linear gradient from top to bottom. */}
      <div className='gradient-thingy'></div>
      <div className='absolute z-100 h-screen w-screen'>
        <Canvas style={{ top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }} camera={{ fov: 50, position: [0, 0, 0] }}>
          <Sparkles position={[0, 0, -1]} scale={2} color={"#cyan"} size={25} count={30} speed={.1} opacity={0.1} />
        </Canvas>
      </div>
      {/* Content */}
      <div className="relative z-10 text-center space-y-6 max-w-4xl p-6 lg:mt-10 self-center lg:self-start">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://gliscfokeivkvdrwzlsv.supabase.co/storage/v1/object/public/Plugin%20images/me.png"
            alt="Your Name"
            className="w-48 h-48 sm:w-48 sm:h-48 rounded-full shadow-xl border-4 border-[#537A9D] transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#84D4FC] via-[#5484C4] to-[#5484C4] bg-clip-text text-transparent animate-text-glow">
          Hi! I'm Jacob Dement!
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl md:text-2xl opacity-80">
          Full Stack Software Engineer
        </p>

        {/* Call to Action Button */}
        <button
        onClick={scrollToProjects}
        className="inline-block bg-[#4770D6] hover:bg-[#537A9D] text-white text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 hover:curser-pointer">See My Work</button>

      </div>
    </section>
  );
};

export default HeroSection;
