import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Text3D, MeshDistortMaterial, Sparkles} from '@react-three/drei';
import font from './font.json';
export default function LandingNav() {
  const name = "<Dement/>";

  return (
    <div className='z-100 bg-neutral-900 border-b-1 border-color-black-900 w-full'>
    <nav className="flex items-center justify-between flex-wrap b ml-1 mr-1 z-100 bg-color-black-200 rounded-full">
      <div className="h-16 w-40 bg-gradient-to-r black-200 to-indigo-500 rounded-full">
        <Canvas>
          <PerspectiveCamera makeDefault position={[3, .3, 6.4]} fov={80} />
          <CameraControls />
          <ambientLight intensity={.7} />
          <Text3D font={font} position={[-1, 0, 3.4]} rotation={[0, 0, 0]}>
            {name}
            <meshStandardMaterial color="#f39c12" roughness={1} metalness={0} />
          </Text3D>
          <Sparkles count={10} size={.1} color="#fff" position={[3, 0, 5]} scale={2} />
          <Text3D font={font} position={[-1, 0, 3.4]} rotation={[0, 0, 0]}>
            {name}
            <MeshDistortMaterial distort={0.2} speed={2} color="#2ecc70" />
          </Text3D>
        </Canvas>
      </div>
      <h1>Projects</h1>
    </nav>
    </div>
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