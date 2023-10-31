import { useState } from 'react';
import projects from './data.json'; // Import the projects data from 'data.json'
import "./works.css"
export default function Works() {
  const [currentPage, setCurrentPage] = useState(1);

  // Define the number of projects to display per page
  const projectsPerPage = 1;
  return (
    <div className='section__piority bg-slate-700'>
      <div className="work-content flex">
        <div className="work-info w-3/6 bg-black">
          {projects.projects
            .slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage)
            .map((project, index) => (
              <div key={index} className="project-item">
                <h2 className='sections__Title'>{project.Name}</h2>
                <p>{project.Description}</p>
                <p className='my-2 text-green-400'>{project.Tech}</p>
                <div>
                <button className='button__Primary'>
                asdad
                </button>
                </div>
              </div>
            ))}
        </div>

        <div className="work__screen w-3/6 bg-white">
          <img src='https://pavlotarasenko.netlify.app/img/six-cities.webp' />
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
