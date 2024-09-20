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
    title: 'FormBee',
    about: 'The open-source form backend for data privacy conscious developers.',
    photo: 'https://gliscfokeivkvdrwzlsv.supabase.co/storage/v1/object/public/Plugin%20images/1fb-port.png',
    techStack: ['Angular', 'Node.js/express', 'SCSS', "PostgreSQL", "Docker", "TypeORM", "SaaS", "TypeScript"],
    github: 'https://github.com/FormBee/FormBee',
    website: 'https://formbee.dev',
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
];

const Portfolio = () => {
  return (
    <>
    <h2 className="p-4 m-4 text-center text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#84D4FC] via-[#5484C4] to-[#5484C4] bg-clip-text text-transparent animate-text-glow">
          Projects
    </h2>
    <div className="p-4 flex-row flex gap-4 justify-center flex-wrap">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
    </>
  );
}

export default Portfolio;
