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
          style={styles.iconLink}
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="mailto:you@example.com" style={styles.iconLink}>
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </div>

      <button
        onClick={scrollToTop}
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#9ddf92')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#b1e8a6')}
      >
        <FontAwesomeIcon icon={faArrowUp} /> Back to Top
      </button>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '2rem 1rem',
    backgroundColor: '#121212',
    color: '#fff',
    textAlign: 'center',
    borderTop: '1px solid #333',
    // marginTop: '4rem',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '1rem',
  },
  iconLink: {
    color: '#bbb',
    fontSize: '1.5rem',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  },
  button: {
    backgroundColor: '#b1e8a6',
    color: '#000',
    border: 'none',
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '6px',
    transition: 'background-color 0.3s ease',
  },
};

export default Footer;
