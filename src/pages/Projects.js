import React from 'react';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

const Projects = React.forwardRef((props, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" ref={ref} className="py-5 bg-light text-dark">
      <div className="container">
        <h2 className="fw-bold mb-5 text-center">Our Projects</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className="px-3" key={index}>
              <div
                className="card shadow-sm h-100"
                style={{ minHeight: '360px', maxWidth: '350px', margin: '0 auto' }}
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    height: '180px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '0.375rem',
                    borderTopRightRadius: '0.375rem',
                  }}
                />
                <div className="card-body d-flex flex-column justify-content-between" style={{ minHeight: '150px' }}>
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
});

export default Projects;
