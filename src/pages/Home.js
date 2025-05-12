import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = React.forwardRef((props, ref) => (
  <section
    id="home"
    ref={ref}
    className="d-flex align-items-center text-center bg-light"
    style={{ minHeight: '100vh' }}
  >
    <div className="container">
      <h1 className="display-3 fw-bold text-dark">WHO ARE WE?</h1>
      <h2 className="h4 text-success mb-4">Purdue ACM SIGAPP</h2>
      <p className="lead text-muted">
        Purdue ACM SIGAPP is Purdue University's premier app development club.
        We're a sub-chapter of the national Association for Computing Machinery
        (ACM), and part of the Special Interest Group for Applied Computing.
      </p>
    </div>
  </section>
));

export default Home;

// import React from 'react';

// const Home = React.forwardRef((props, ref) => (
//     <section id="home" ref={ref} style={{ ...styles.section, ...props.style }}>
//     <div style={styles.container}>
//       <h1 style={styles.title}>WHO ARE WE?</h1>
//       <h2 style={styles.subtitle}>Purdue ACM SIGAPP</h2>
//       <p style={styles.description}>
//         Purdue ACM SIGAPP is Purdue University's premier app development club. We're a sub-chapter of the national Association for Computing Machinery (ACM), and part of the Special Interest Group for Applied Computing.
//       </p>
//     </div>
//   </section>
// ));
// const styles = {
//     section: {
//       background: 'linear-gradient(to right, #f7f7f7, #e8f5e9)',
//       padding: '6rem 2rem',
//       textAlign: 'center',
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     container: {
//       maxWidth: '800px',
//       margin: '0 auto',
//     },
//     title: {
//       fontSize: '4rem',
//       fontWeight: '900',
//       marginBottom: '0.5rem',
//       color: '#1a1a1a',
//       letterSpacing: '0.05em',
//     },
//     subtitle: {
//       fontSize: '1.5rem',
//       fontWeight: '600',
//       marginBottom: '2rem',
//       color: '#4caf50',
//     },
//     description: {
//       fontSize: '1.1rem',
//       lineHeight: '1.75',
//       color: '#333',
//       marginBottom: '1.5rem',
//     },
//   };

//   export default Home;
