import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import GLTFModel from './GLTFModel';
import './CubeSection.css'; // Create this

const CubeSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      if (bgRef.current) {
        bgRef.current.style.setProperty('--x', `${x}%`);
        bgRef.current.style.setProperty('--y', `${y}%`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={ref} className="cube-section-wrapper">
      <div className="animated-bg" ref={bgRef}></div>

      <div className="content text-center">
        <p className="h5 text-muted mb-4">Purdue ACM</p>
        <h1 className="display-1 fw-bold text-dark mb-2">SIGAPP</h1>

        <div className="model-container">
          <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 100] }}>
            {/* <ambientLight intensity={0.5} /> */}
            <ambientLight intensity={1.5} />
            <directionalLight position={[20, 50, 50]} intensity={10} />
            {/* <pointLight position={[10, 10, 10]} /> */}
            {inView && (
              <GLTFModel
                url="/models/3dlogo.glb"
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={50}
              />
            )}
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default CubeSection;
