import React from 'react';

const Officers = React.forwardRef((props, ref) => (
  <section id="officers" ref={ref} style={props.style}>
    <h2>Our Officers</h2>
    <p>
      SIGAPP is led by dedicated student officers who help plan events, mentor members, and keep the club moving forward. 
      Members are encouraged to grow into leadership roles over time.
    </p>
    <ul>
      <li>
        <strong>Soleil Pham</strong> — President<br />
        Sophomore in Computer Science, focused on Machine Intelligence & Cyber Security tracks.
      </li>
      <li>
        <strong>David Panek</strong> — Vice President<br />
        Junior in Computer Science, Machine Learning track.
      </li>
    </ul>
  </section>
));

export default Officers;
