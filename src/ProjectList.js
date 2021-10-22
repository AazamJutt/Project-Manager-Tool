import { Link } from "react-router-dom";

const ProjectList = ({projects, title}) => {
    return ( 
        <div className="projects-list">
            <h2>{title}</h2>
            {projects.map((project) => (
                <div className="project-preview" key={project.id} >
                    <div>
                        <Link to={`/projects/${project.id}`}>
                            <h2>{ project.title }</h2> 
                        </Link>
                            <p>Due-Date: { project.due }</p>
                            <p>Client: { project.client }</p>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default ProjectList;