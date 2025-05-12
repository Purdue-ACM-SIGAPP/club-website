import React from 'react';

const Join = React.forwardRef((props, ref) => (
  <section id="join" ref={ref} style={props.style}>
    <h2>Join Us</h2>
    <p>
      Want to build cool apps, learn valuable skills, and be part of a great community?
      SIGAPP welcomes students of all experience levels. Whether you're brand new or already coding, there's a place for you.
    </p>
    <p>
      To get started, join our <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">Discord server</a>
      for meeting announcements, project updates, and more.
    </p>
  </section>
));

export default Join;
