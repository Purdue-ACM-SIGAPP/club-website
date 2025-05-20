import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CubeSection from './components/CubeSection';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Officers from './pages/Officers';
import Join from './pages/Join';

function App() {
  const [hasAutoScrolled, setHasAutoScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = {
    cube: useRef(null),
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    officers: useRef(null),
    join: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  useEffect(() => {
    const cube = sectionRefs.cube.current;
    const home = sectionRefs.home.current;

    if (!cube || !home || hasAutoScrolled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when LESS than 60% of Cube is visible
        if (entry.intersectionRatio < 0.4) {
          home.scrollIntoView({ behavior: 'smooth' });
          setHasAutoScrolled(true);
        }
      },
      {
        threshold: [0.4, 1.0], // Detect transition around 60% visible
      }
    );

    observer.observe(cube);

    return () => observer.disconnect();
  }, [sectionRefs.cube, sectionRefs.home, hasAutoScrolled]);

  return (
    <>
      <section id="cube" ref={sectionRefs.cube}>
        <CubeSection />
      </section>
      <Header activeSection={activeSection} />
      <section id="home" ref={sectionRefs.home} style={styles.section}>
        <Home />
      </section>
      <section id="about" ref={sectionRefs.about} style={styles.section}>
        <About />
      </section>
      <section id="projects" ref={sectionRefs.projects} style={styles.section}>
        <Projects />
      </section>
      <section id="officers" ref={sectionRefs.officers} style={styles.section}>
        <Officers />
      </section>
      <section id="join" ref={sectionRefs.join} style={styles.section}>
        <Join />
      </section>
      <Footer />
    </>
  );
}

const styles = {
  section: {
    // padding: '6rem 1rem',
    // minHeight: '100vh',
    scrollMarginTop: '60px',
  },
};

export default App;
