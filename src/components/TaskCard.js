import { Link } from "react-router-dom";

export default function TaskCard(props){
    const {
        task: { _id, title, description, tasks },
      } = props;

    return(
        <div className="ProjectCard card">
        <Link to={`/proj${_id}`}>
            <h3>{title}</h3>
        </Link>
        <p style={{ maxWidth: "400px" }}>{description} </p>
        <ul>
            {tasks.map((task)=> (<li key={task._id}></li>
            ))};
            {/*if I want to delete call a service on the api like so 'deleteOneTask(taskId)' */}
        </ul>

        </div>
    )
}