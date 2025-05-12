import React from 'react';

const Home = React.forwardRef((props, ref) => (
  <section id="home" ref={ref} style={props.style}>
    <h1>SIGAPP</h1>
    <h2>Purdue ACM SIGAPP</h2>
    <p>Purdue’s premier app development club!</p>
  </section>
));

export default Home;
