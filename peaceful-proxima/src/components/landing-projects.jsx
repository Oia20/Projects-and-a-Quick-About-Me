import React, { forwardRef } from 'react';
import ProjectCard from './landing-projects-card.jsx';

const projects = [
  {
    title: 'FormBee',
    about: 'The open-source form backend for data privacy conscious developers.',
    photo: 'https://gliscfokeivkvdrwzlsv.supabase.co/storage/v1/object/public/Plugin%20images/1fb-port.png',
    techStack: ['Angular', 'Node.js/express', 'SCSS', "PostgreSQL", "Docker", "TypeORM", "SaaS", "TypeScript"],
    github: 'https://github.com/FormBee/FormBee',
    website: 'https://formbee.dev',
  },
  {
    title: 'Pop A Lock',
    about: 'Open-Source daily puzzle game, its like wordle, but with numbers and hints instead of letters.',
    photo: 'https://ayyjntjqttcwfulpvggm.supabase.co/storage/v1/object/public/artworks/Untitled%20design%20(6).png',
    techStack: ['React', 'TypeScript', 'NodeJS', 'ExpressJS', 'PostgreSQL', 'Docker', 'TailwindCSS', 'CSS', 'TypeORM'],
    github: 'https://github.com/Oia20/PopALockDaily',
    website: 'https://popalock.dement.dev/',
  },
  {
    title: 'Artist CMS Portfolio',
    about: 'My partners art portfolio with a CMS I built from scratch.',
    photo: 'https://gliscfokeivkvdrwzlsv.supabase.co/storage/v1/object/public/Plugin%20images/1art-port.png',
    techStack: ['Angular', 'C#', 'CSS', "PostgreSQL", "Docker", '\.Net', "S3", "TypeScript"],
    github: 'https://github.com/Oia20/artPortfolio',
    website: 'https://rosaliasart.com',
  },
  {
    title: '3D Portfolio',
    about: 'My personal 3D portfolio with an ocean theme floating in the sky.',
    photo: 'https://gliscfokeivkvdrwzlsv.supabase.co/storage/v1/object/public/Plugin%20images/13d-port.png',
    techStack: ['React', 'Three.js', 'CSS', 'Blender', 'JavaScript'],
    github: 'https://github.com/Oia20/personalPortfolio',
    website: 'https://dement.dev',
  },
  {
    title: '3D Room',
    about: 'A 3D room which has interactive objects that tell you about my interests.',
    photo: 'https://gliscfokeivkvdrwzlsv.supabase.co/storage/v1/object/public/Plugin%20images/13d-port.png',
    techStack: ['React', 'Three.js', 'CSS', 'Blender', 'JavaScript'],
    github: 'https://github.com/Oia20/OldPortfolioAbout',
    website: 'https://oia20.github.io/OldPortfolioAbout/',
  },
  {
    title: 'CropSQL',
    about: 'A web game I built to help people learn SQL. Implemented SQL logic from scatch.',
    photo: 'https://gliscfokeivkvdrwzlsv.supabase.co/storage/v1/object/public/Plugin%20images/1sql-port.png',
    techStack: ['C#', '\.Net', 'CSS', "MySQL", "Blazor"],
    github: 'https://github.com/Oia20/CropSQL',
    website: 'https://oia20.github.io/CropSQL/',
  },
  {
    title: 'Monthly Canvas',
    about: 'A simple project which displays a different painting every month. The server sleeps until requested to save compute, so it made load slowly.',
    photo: 'https://gliscfokeivkvdrwzlsv.supabase.co/storage/v1/object/public/Plugin%20images/1canvas-port.png',
    techStack: ['React', 'Docker', 'PostgreSQL', 'C#', 'JavaScript', '\.Net'],
    github: 'https://github.com/Oia20/monthly-canvas',
    website: 'https://gliscfokeivkvdrwzlsv.supabase.co/storage/v1/object/public/Plugin%20images/1canvas-port.png',
  },
  {
    title: 'Acre and Lot',
    about: 'A land aquisition website I built for a small family business.',
    photo: 'https://gliscfokeivkvdrwzlsv.supabase.co/storage/v1/object/public/Plugin%20images/1acrelot-port.png',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Oia20/landsite',
    website: 'https://acreandlot.com/',
  },
  {
    title: 'OCR Automation Discord Bot',
    about: 'Computer Vision, Text Extraction, and Automated data entry discord bot, saving 10+ hours of work a month.',
    photo: 'https://oia20.github.io/Projects/eye.png',
    techStack: ['Python', 'Google Cloud Platform', 'Open Computer Vision'],
    youtubeDemo: 'https://www.youtube.com/watch?v=8DBiJJX9OX0&ab_channel=JacobDementDemos',
  }

];

const Portfolio = () => {

  return (
    <>
    <h2 className="p-4 m-4 text-center text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#84D4FC] via-[#5484C4] to-[#5484C4] bg-clip-text text-transparent animate-text-glow">
          My Work
    </h2>
    <div className="p-4 flex-row flex gap-4 justify-center flex-wrap">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
    <div className='flex width-screen justify-center align-center m-6'>
    <button className='inline-block bg-[#4770D6] hover:bg-[#537A9D] text-white text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 hover:curser-pointer' onClick={() => window.location.href="https://github.com/Oia20"}>View more of my work on Github</button>
    </div>
    </>
  );
}

export default Portfolio;
