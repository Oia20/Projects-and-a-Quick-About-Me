import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Text3D, MeshDistortMaterial } from '@react-three/drei';
import font from './font.json';

export default function LandingNav() {
  const name = "<Dement/>";

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 b ">
      <div className="h-16 w-42 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full shadow-xl">
        <Canvas>
          <ambientLight intensity={1.2} />
          <PerspectiveCamera makeDefault position={[3, .3, 6.4]} />
          <CameraControls />
          <Text3D font={font} position={[-1, 0, 3.4]} rotation={[0, 0, 0]}>
            {name}
            <MeshDistortMaterial distort={0.2} speed={2} color="yellow" />
          </Text3D>
        </Canvas>
      </div>
    </nav>
  );
}

function CameraControls() {
  const { camera } = useThree();
  const mouse = useRef([0, 0]);

  const onMouseMove = (event) => {
    mouse.current = [
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1,
    ];
  };

  useFrame(() => {
    camera.rotation.y += (mouse.current[0] * 0.1 - camera.rotation.y) * 0.1;
    camera.rotation.x += (-mouse.current[1] * 0.1 - camera.rotation.x) * 0.1;
  });

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return null;
}