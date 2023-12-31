import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
    return (
        <div className="project-item">
            <h2 className='sections__Title'>{project.Name}</h2>
            <p>{project.Description}</p>
            <p className='my-2 text-green-400'>{project.Tech}</p>
            <div className='flex gap-3'>
                <Link to={project.Github}>
                    <button className='button__Primary border border-white text-white px-4 py-2'>
                        Github
                    </button>
                </Link>
                <Link to = {project.Deloy} className='button__Primary border border-white text-white px-4 py-2'>
                    View Deloy
                </Link>
            </div>
        </div>
    );
};

export default ProjectItem;
