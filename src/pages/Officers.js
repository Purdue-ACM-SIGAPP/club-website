import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Officers = React.forwardRef((props, ref) => (
  <section id="officers" ref={ref} className="py-5 bg-white text-dark">
    <div className="container">
      <h2 className="fw-bold mb-4">Our Officers</h2>
      <p className="mb-4">
        SIGAPP is led by passionate students who plan events, mentor newcomers,
        and guide the club forward. Leadership is open to any motivated member
        ready to grow.
      </p>
      <ul className="list-unstyled">
        <li>
          <strong>Soleil Pham</strong> — President
          <br />
          Sophomore in Computer Science, Machine Intelligence & Cyber Security
          tracks.
        </li>
        <li className="mt-3">
          <strong>David Panek</strong> — Vice President
          <br />
          Junior in Computer Science, Machine Learning track.
        </li>
      </ul>
    </div>
  </section>
));

export default Officers;
