import React from 'react';

const About = React.forwardRef((props, ref) => (
  <section id="about" ref={ref} style={props.style}>
    <h2>Who We Are</h2>
    <p>
      SIGAPP (Special Interest Group for Applied Computing) is a sub-club of Purdue’s ACM chapter...
    </p>
    <ul>
      <li><strong>Real-World Apps:</strong> Projects that last.</li>
      <li><strong>Real-World Experience:</strong> Stress-free teamwork.</li>
      <li><strong>Real-World Education:</strong> No experience needed.</li>
    </ul>
    <p>
      We use <strong>React Native</strong>, <strong>ASP.NET</strong>, and explore <strong>MongoDB</strong>, <strong>Docker</strong>, etc.
    </p>
  </section>
));

export default About;
