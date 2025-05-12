import React from 'react';

const Projects = React.forwardRef((props, ref) => (
  <section id="projects" ref={ref} style={props.style}>
    <h2>Our Projects</h2>

    <h3>SafeWalk</h3>
    <p>
      A modern safety app allowing students to request a police escort via an Uber-like interface.
      Designed to replace blue emergency buttons with a more accessible experience.
    </p>

    <h3>Purdue Laundry</h3>
    <p>
      See live washer/dryer availability in residence halls, helping students optimize laundry times.
    </p>

    <h3>CoRec Monitor</h3>
    <p>
      Check real-time usage of CoRec equipment so students can plan better workout sessions.
    </p>

    <h3>BoilerFaves</h3>
    <p>
      A favorite dish alert system for Purdue dining courts. Get notified when your favorite item is served.
      Now merged with the official Purdue Dining app!
    </p>
  </section>
));

export default Projects;
