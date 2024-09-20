import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gradient-to-t from-slate-300 via-white to-slate-300 rounded-lg overflow-hidden shadow-lg p-4 w-96">
      <div className="mb-4">
        <img
          src={project.photo}
          alt={project.title}
          className="w-96 h-40 object-cover rounded-lg border border-gray-700"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.about}</p>
        <ul className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <li key={index} className="bg-gray-200 text-gray-800 border border-black px-3 py-1 rounded-full text-sm">
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Website
            </a>
          )}
          {project.youtubeDemo && (
            <a
              href={project.youtubeDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Youtube Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
