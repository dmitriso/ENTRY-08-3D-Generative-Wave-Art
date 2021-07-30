import React, { Suspense} from 'react';
import { Canvas} from '@react-three/fiber';
import Points from '../Points';
import CameraControls from '../CameraControls';

function AnimationCanvas() {
    return (
      <Canvas
        colorManagment={false}
        camera={{ position: [100, 10, 0], fov: 75 }}
      >
        <directionalLight color="white" position={[0,20,1]} intensity={10}/>
        <Suspense fallback={null}>
          <Points />
        </Suspense>
        <CameraControls />
      </Canvas>
    )
  }

  export default AnimationCanvas;