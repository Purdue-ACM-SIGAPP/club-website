import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import STLModel from './STLModel';
import 'bootstrap/dist/css/bootstrap.min.css';

const CubeSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="bg-white d-flex flex-column align-items-center text-center py-5"
      style={{ minHeight: '100vh' }}
    >
      <div className="container">
        <p className="h5 text-muted mb-4">Purdue ACM</p>
        <h1 className="display-1 fw-bold text-dark mb-2">SIGAPP</h1>
      </div>

      <div className="w-100" style={{ height: '60vh' }}>
        <Canvas style={{ width: '100%', height: '100%' }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {inView && (
            <STLModel
              url="/models/3dlogo.stl"
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={1.5}
            />
          )}
        </Canvas>
      </div>
    </div>
  );
};

export default CubeSection;
