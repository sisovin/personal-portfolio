import React, { useState, useEffect } from 'react';
import { Project, ProjectDetails } from 'shared/types/project';
import { fetchProjects } from 'shared/api/project';
import ProjectCard from '../ui/Card';
import ProjectModal from '../ui/Dialog';

const ProjectsGrid: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    const loadProjects = async () => {
      const fetchedProjects = await fetchProjects();
      setProjects(fetchedProjects);
    };

    loadProjects();
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(filter.toLowerCase())
  );

  const handleProjectClick = (project: ProjectDetails) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <h1>Projects</h1>
      <input
        type="text"
        placeholder="Filter projects"
        value={filter}
        onChange={handleFilterChange}
      />
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProjectsGrid;
