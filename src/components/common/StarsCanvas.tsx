'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { StarBackground } from './Star-background';

export const StarsCanvas = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full h-auto fixed inset-0 z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};
