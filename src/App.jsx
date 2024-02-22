import "./App.scss";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
  return (
    <main className="main">
      <ProjectSidebar />
      <NewProject />
    </main>
  );
}

export default App;
