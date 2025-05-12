import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = React.forwardRef((props, ref) => (
  <section id="projects" ref={ref} className="py-5 bg-light text-dark">
    <div className="container">
      <h2 className="fw-bold mb-4">Our Projects</h2>
      <div className="mb-3">
        <h4 className="fw-semibold">SafeWalk</h4>
        <p>
          Request a campus police escort via a modern, Uber-style app for
          student safety.
        </p>
      </div>
      <div className="mb-3">
        <h4 className="fw-semibold">Purdue Laundry</h4>
        <p>
          Monitor washer/dryer availability in residence halls—save time, skip
          lines.
        </p>
      </div>
      <div className="mb-3">
        <h4 className="fw-semibold">CoRec Monitor</h4>
        <p>Check live data on CoRec gym traffic to plan better workouts.</p>
      </div>
      <div>
        <h4 className="fw-semibold">BoilerFaves</h4>
        <p>
          Get alerts when your favorite dining hall items are being served. Now
          integrated with Purdue Dining’s official app.
        </p>
      </div>
    </div>
  </section>
));

export default Projects;
