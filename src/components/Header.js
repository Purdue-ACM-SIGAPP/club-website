import React from 'react';

const Header = ({ activeSection }) => {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {['home', 'about', 'projects', 'officers', 'join'].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              ...styles.link,
              color: activeSection === id ? '#b1e8a6' : '#ffffff',
              borderBottom:
                activeSection === id
                  ? '2px solid #b1e8a6'
                  : '2px solid transparent',
            }}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgba(34, 34, 34, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '1rem 0.5rem',
    zIndex: 999,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
    width: '100%',
  },
  container: {
    maxWidth: '960px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  link: {
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    transition: 'color 0.3s ease, border-bottom 0.3s ease',
    paddingBottom: '4px',
  },
};

export default Header;
