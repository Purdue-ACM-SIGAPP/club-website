import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';

const projects = [
  {
    title: 'SafeWalk',
    image: '/images/safewalk.jpg',
    description:
      'Request a campus police escort via a modern, Uber-style app for student safety.',
  },
  {
    title: 'Purdue Laundry',
    image: '/images/laundry.jpg',
    description:
      'Monitor washer/dryer availability in residence halls—save time, skip lines.',
  },
  {
    title: 'CoRec Monitor',
    image: '/images/corec.jpg',
    description:
      'Check live data on CoRec gym traffic to plan better workouts.',
  },
  {
    title: 'BoilerFaves',
    image: '/images/boilerfaves.jpg',
    description:
      'Get alerts when your favorite dining hall items are being served. Now integrated with Purdue Dining’s official app.',
  },
];

const Projects = React.forwardRef((props, ref) => (
  <section id="projects" ref={ref} className="py-5 bg-light text-dark">
    <div className="container">
      <h2 className="fw-bold mb-5 text-center">Our Projects</h2>
      <div className="project-marquee">
        <div className="project-track">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="card-inner">
                <div className="card-front">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid rounded"
                  />
                  <h5 className="mt-2">{project.title}</h5>
                </div>
                <div className="card-back">
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
));

export default Projects;
