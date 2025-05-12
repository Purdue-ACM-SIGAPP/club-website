import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function AnimatedBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: '#ffffff',
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: { value: '#4b6844' }, // your SIGAPP green
          links: {
            enable: true,
            color: '#4b6844',
            distance: 150,
          },
          move: {
            enable: true,
            speed: 2,
          },
          number: {
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
      }}
    />
  );
}

export default AnimatedBackground;
