import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = React.forwardRef((props, ref) => (
  <section id="about" ref={ref} className="py-5 bg-white text-dark">
    <div className="container">
      <h2 className="mb-4 fw-bold">WHAT WE DO</h2>
      <p className="mb-4">
        At SIGAPP, we bring ideas to life by building real-world apps for
        real-world needs. Whether you're new to coding or a seasoned developer,
        you’ll gain hands-on experience, collaborate with a talented team, and
        contribute to projects that matter.
      </p>
      <ul className="list-unstyled">
        <li>
          <strong>Real-World Apps:</strong> We build purposeful, impactful
          software.
        </li>
        <li>
          <strong>Real-World Experience:</strong> Our workflows mirror modern
          tech teams—without the pressure.
        </li>
        <li>
          <strong>Real-World Education:</strong> No experience needed—just
          curiosity.
        </li>
      </ul>
      <p className="mt-4">
        We work with <strong>React Native</strong>, <strong>ASP.NET</strong>,{' '}
        <strong>MongoDB</strong>, <strong>Docker</strong>, and{' '}
        <strong>Swift</strong>. Past tools include <strong>Flutter</strong> and{' '}
        <strong>Java</strong>.
      </p>
    </div>
  </section>
));

export default About;
