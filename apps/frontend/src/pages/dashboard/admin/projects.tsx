import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useProjects } from '../../../../hooks/useProjects';
import { Project, ProjectCreate, ProjectUpdate } from '../../../../types/project';
import { Button } from '../../../../components/ui/Button';
import { Form } from '../../../../components/ui/Form';
import { Dialog } from '../../../../components/ui/Dialog';

const AdminProjects = () => {
  const router = useRouter();
  const { projects, loading, error, createProject, updateProject, deleteProject } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  const handleCreateProject = (project: ProjectCreate) => {
    createProject(project);
    setIsDialogOpen(false);
  };

  const handleUpdateProject = (project: ProjectUpdate) => {
    updateProject(project);
    setSelectedProject(null);
    setIsDialogOpen(false);
  };

  const handleDeleteProject = (projectId: number) => {
    deleteProject(projectId);
  };

  const openCreateDialog = () => {
    setSelectedProject(null);
    setIsDialogOpen(true);
  };

  const openUpdateDialog = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <div>
      <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <h1>Project Management</h1>
        <Button onClick={() => router.push('/dashboard')}>Back to Dashboard</Button>
      </header>
      <main className="p-4">
        <Button onClick={openCreateDialog}>Create New Project</Button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="border p-4 rounded">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <Button onClick={() => openUpdateDialog(project)}>Edit</Button>
                <Button onClick={() => handleDeleteProject(project.id)}>Delete</Button>
              </div>
            ))}
          </div>
        )}
      </main>
      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <Form
          initialValues={selectedProject || { title: '', description: '', content: '' }}
          onSubmit={selectedProject ? handleUpdateProject : handleCreateProject}
        />
      </Dialog>
    </div>
  );
};

export default AdminProjects;
