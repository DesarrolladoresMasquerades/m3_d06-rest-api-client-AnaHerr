import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";

const API_URL = "http://localhost:5005";

export default function ProjectDetailsPage(props) {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();

  function getProjects(id) {
  axios.get(`${API_URL}/api/projects/${projectId}`)
  .then((response) => setProject(response.data))
  .catch((error)=>console.log(error))
}
//--------- put away in a folder ------------

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      <AddTask refreshProject={getProjects} projectId={projectId} />

      
    </div>
  );
}
