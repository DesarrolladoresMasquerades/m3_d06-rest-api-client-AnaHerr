import { useState } from "react";
import ProjectsListPage from "../pages/ProjectsListPage";
import axios from "axios";


export default function AddTask(props){

    const API_URL = "http://localhost:5005";

    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    function handleSubmit(event){
        event.preventDefault();

        axios
        .post(`${API_URL}/api/tasks`, formData)
        .then((__) =>{
            props.refreshProject();
            setFormData({
                title: "",
                description: "",
            });
        })
    }

    function handleChange(event){
        const key = event.target.name 
        const value = event.target.value
        setFormData(formData =>({...formData,[key]: value }))
    }

    return(
        <div className="AddTask">
        <h3>Add a task</h3>

        <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input 
        type="text" 
        name="title" 
        value={formData.title} 
        onChange={handleChange} />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
        </form>
      </div>
    )
}