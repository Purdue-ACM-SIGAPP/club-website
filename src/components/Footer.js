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
      <div style={styles.footerContent}>
        {/* Left-aligned text */}
        <div style={{ ...styles.sideText, textAlign: 'left' }}>
          Purdue ACM SIGAPP — Since 2013
        </div>

        {/* Center icons + button */}
        <div style={styles.centerContent}>
          <div style={styles.icons}>
            <a
              href="https://www.instagram.com/purduesigapp/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.3)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://github.com/Purdue-ACM-SIGAPP"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.3)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="mailto:officers@sigapp.club"
              style={styles.iconLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.3)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            >
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
        </div>

        {/* Right-aligned text */}
        <div style={{ ...styles.sideText, textAlign: 'right' }}>
          Learn • Create • Share • Connect
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '2rem 1rem',
    backgroundColor: '#121212',
    color: '#fff',
    borderTop: '1px solid #333',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  sideText: {
    flex: 1,
    minWidth: '150px',
    fontSize: '0.95rem',
    color: '#aaa',
  },
  centerContent: {
    flex: 2,
    minWidth: '280px',
    textAlign: 'center',
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
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
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
