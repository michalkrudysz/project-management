import "./App.scss";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ShowProject from "./components/ShowProject.jsx";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });

  function handleStartedAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
      tasks: [],
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: [...prevState.project, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }
  function deleteCurrentProject(projectId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        project: prevState.project.filter(
          (project) => project.id !== projectId
        ),
        selectedProjectId: undefined,
      };
    });
  }
  function handleAddTaskToProject(projectId, taskDescription) {
    setProjectState((prevState) => {
      const updatedProjects = prevState.project.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: [
              ...project.tasks,
              { id: Math.random(), description: taskDescription },
            ],
          };
        }
        return project;
      });

      return {
        ...prevState,
        project: updatedProjects,
      };
    });
  }
  function handleDeleteTaskFromProject(projectId, taskId) {
    setProjectState((prevState) => {
      const updatedProjects = prevState.project.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== taskId),
          };
        }
        return project;
      });

      return {
        ...prevState,
        project: updatedProjects,
      };
    });
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartedAddProject} />;
  } else {
    const project = projectState.project.find(
      (project) => project.id === projectState.selectedProjectId
    );
    content = (
      <ShowProject
        data={project}
        addTask={(taskDescription) =>
          handleAddTaskToProject(
            projectState.selectedProjectId,
            taskDescription
          )
        }
        deleteTask={(taskId) =>
          handleDeleteTaskFromProject(projectState.selectedProjectId, taskId)
        }
        deleteProject={deleteCurrentProject}
      />
    );
  }

  return (
    <main className="main">
      <ProjectSidebar
        onStartAddProject={handleStartedAddProject}
        project={projectState.project}
        selectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
