import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './works.css';
import ProjectItem from './Work';
import data from './data.json';

const ProjectsPerPage = 1;

const Works = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const currentProjects = data.slice(
    currentPage * ProjectsPerPage,
    (currentPage + 1) * ProjectsPerPage
  );

  return (
    <div className='section__piority p-5'>
      <div className="work-content md:flex">
        <div className="work-info md:w-3/6">
          {currentProjects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>

        {currentProjects.map((project, index) => (
          <div key={index} className="work__screen md:w-3/6 py-5">
            <img
              src={project.ImageUrl}
              alt={project.Name}
              data-aos="fade-up"
            />
          </div>
        ))}
      </div>

      <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={Math.ceil(data.length / ProjectsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination__list'}
        subContainerClassName={'pagination'}
        activeClassName={'pagination is-active'}
        pageClassName={'pagination'}
      />
    </div>
  );
};

export default Works;
