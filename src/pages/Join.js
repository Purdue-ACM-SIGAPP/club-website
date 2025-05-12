import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Join = React.forwardRef((props, ref) => (
  <section id="join" ref={ref} className="py-5 bg-success text-white">
    <div className="container text-center">
      <h2 className="fw-bold mb-3">Join Us</h2>
      <p className="lead mb-3">
        Want to build real apps, learn new skills, and work on a fun team?
        SIGAPP is open to all experience levels.
      </p>
      <p>
        Hop in our{' '}
        <a
          href="https://discord.com/invite/MxFEARj"
          className="text-white text-decoration-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord server
        </a>{' '}
        to get started!
      </p>
    </div>
  </section>
));

export default Join;
