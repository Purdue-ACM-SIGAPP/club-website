import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { STLLoader } from 'three-stdlib';

const STLModel = ({ url, color = '#b1e8a6', ...props }) => {
  const geometry = useLoader(STLLoader, url);
  const meshRef = useRef();

  // ✅ Rotate around Z-axis
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} {...props}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default STLModel;
