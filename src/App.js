import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Officers from './pages/Officers';
import Join from './pages/Join';

 function App() {
   const [activeSection, setActiveSection] = useState('');
 
   const sectionRefs = {
     home: useRef(null),
     about: useRef(null),
     projects: useRef(null),
     officers: useRef(null),
     join: useRef(null),
   };
 
   useEffect(() => {
     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach(entry => {
           if (entry.isIntersecting) {
             setActiveSection(entry.target.id);
           }
         });
       },
       {
         threshold: 0.6, // 60% of section in view
       }
     );
 
     Object.values(sectionRefs).forEach(ref => {
       if (ref.current) observer.observe(ref.current);
     });
 
     return () => {
       Object.values(sectionRefs).forEach(ref => {
         if (ref.current) observer.unobserve(ref.current);
       });
     };
   }, []);
 
   return (
     <>
       <nav style={styles.nav}>
        {['home', 'about', 'projects', 'officers', 'join'].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              ...styles.link,
              color: activeSection === id ? '#00f' : '#fff',
            }}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
 
      <Home ref={sectionRefs.home} style={styles.section} />
      <About ref={sectionRefs.about} style={styles.section} />
      <Projects ref={sectionRefs.projects} style={styles.section} />
      <Officers ref={sectionRefs.officers} style={styles.section} />
      <Join ref={sectionRefs.join} style={styles.section} />
       <Footer/>
     </>
   );
 }
 
 const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#222',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    zIndex: 999,
  },
  link: {
    textDecoration: 'none',
    fontSize: '1.2rem',
    transition: 'color 0.3s ease',
  },
  section: {
    padding: '120px 20px',
    minHeight: '100vh',
    scrollMarginTop: '80px',
  },
};


export default App;