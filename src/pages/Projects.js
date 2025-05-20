import React from 'react';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css';
import laundry from '../images/Purdue Laundry.png';
import walk from '../images/SafeWalk.jpg';
import corec from '../images/Purdue CoRec Monitor.png';
import fav from '../images/BoilerFaves.png';

const projects = [
  {
    title: 'SafeWalk',
    image: walk,
    description:
      'SafeWalk was an app for students to request a police escort should they feel unsafe on campus. A modernization of the blue buttons on campus in an Uber-like experience to increase student usage.',
  },
  {
    title: 'Purdue Laundry',
    image: laundry,
    description:
      'Purdue Laundry consolidated statuses on washers and dryers in residence halls in an easy-to-use interface, allowing students to find the best time for a trip to the laundry room. An essential time-saver in the dorms.',
  },
  {
    title: 'CoRec Monitor',
    image: corec,
    description:
      'The CoRec Monitor app displays data to students about the current usage of CoRec facilities, allowing for better workout planning and less time wasted walking to the CoRec only to find the desired machines are all taken.',
  },
  {
    title: 'BoilerFaves',
    image: fav,
    description:
      'BoilerFaves was a simple app allowing a student to identify their favorite items on the dining court menus and be notified when that item is available for the day. Never miss potstickers again! This functionality has since been incorporated into the official Purdue Dining app.',
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
            <div key={index} className="d-flex justify-content-center">
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front */}
          <div className="flip-card-front">
            <img src={project.image} alt={project.title} />
            <h5 className="mt-3">{project.title}</h5>
          </div>

          {/* Back */}
          <div className="flip-card-back">
            <h5>{project.title}</h5>
            <p className="small text-muted">{project.description}</p>
          </div>
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