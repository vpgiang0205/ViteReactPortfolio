import { useState } from 'react';
import projects from './data.json'; // Import the projects data from 'data.json'
import "./works.css";

export default function Works() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 1;

  return (
    <div className='section__piority p-5'>
      <div className="work-content md:flex">
        <div className="work-info md:w-3/6">
          {projects.projects
            .slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage)
            .map((project, index) => (
              <div key={index} className="project-item">
                <h2 className='sections__Title'>{project.Name}</h2>
                <p>{project.Description}</p>
                <p className='my-2 text-green-400'>{project.Tech}</p>
                <div className='flex gap-3'>
                  <button className='button__Primary border border-white text-white px-4 py-2'>
                    Github
                  </button>
                  <button className='button__Primary border border-white text-white px-4 py-2'>
                    View Deloy
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="work__screen md:w-3/6 py-5">
          {projects.projects
            .slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage)
            .map((project, index) => (
              <img
                key={index}
                src={project.ImageUrl} // Assuming you have an ImageUrl property in your data
                alt={project.Name} // Use the project name as the alt text
              />
            ))}
        </div>
      </div>
      <nav className="pagination" aria-label="navigation for works">
        <ul className="pagination__list">
          {projects.projects.map((project, index) => (
            <li key={index} className={`pagination__item ${index + 1 === currentPage ? 'is-active' : ''}`}>
              <a
                aria-label={`Go to Page ${index + 1}`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
