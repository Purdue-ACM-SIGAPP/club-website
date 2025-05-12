import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.icons}>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="mailto:you@example.com" style={styles.link}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <button onClick={scrollToTop} style={styles.button}>
        <FontAwesomeIcon icon={faArrowUp} /> Top
      </button>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '1rem',
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center',
    marginTop: '2rem',
  },
  icons: {
    marginBottom: '1rem',
  },
  link: {
    margin: '0 1rem',
    color: 'white',
    textDecoration: 'none',
  },
  button: {
    backgroundColor: '#444',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

export default Footer;
