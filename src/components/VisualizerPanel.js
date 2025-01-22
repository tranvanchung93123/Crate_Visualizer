import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const Visualizer = ({ length, width, height, quantity }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Render multiple crates based on quantity */}
      {Array.from({ length: quantity }, (_, i) => (
        <Box
          key={i}
          position={[i * 2, 0, 0]} // Adjust position for multiple crates
          args={[length / 100, height / 100, width / 100]} // Scale down to fit the scene
        >
          <meshStandardMaterial attach="material" color="blue" />
        </Box>
      ))}
    </Canvas>
  );
};

export default Visualizer;
