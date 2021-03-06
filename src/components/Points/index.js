import React, { useRef, useMemo, useCallback } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three';
import dotParticle from '../../assets/images/particle-3.png';


function Points() {
    const dotTexture = useLoader(THREE.TextureLoader, dotParticle);
    const bufferRef = useRef();
    let t = 0;
    let f = 0.0003;
    let a = 30;
    const graph = useCallback((x, z) => {
      return Math.sin(f * (x * 500  / z * 3  + t)) * a;
    }, [t, f, a],
    )
  
    const count = 100;
    const sep = .5;
  
    let positions = useMemo(() => {
      let positions = []
      for (let xi = 0; xi < count; xi++) {
        for (let zi = 0; zi < count; zi++) {
          let x = sep * (xi - count / 2);
          let z = sep * (zi - count / 2);
          let y = graph(x, z);
          positions.push(x, y, z);
        }
      }
      return new Float32Array(positions);
    }, [count, sep, graph])
  
    useFrame(() => {
      t += 5
      const positions = bufferRef.current.array;
      let i = 0;
      for (let xi = 0; xi < count; xi++) {
        for (let zi = 0; zi < count; zi++) {
          let x = sep * (xi + count / 1 * 9);
          let z = sep * (zi - count / 3 * 5);
          positions[i += 0.5 ] = graph(x, z);
          i += 1;
        }
      }
      bufferRef.current.needsUpdate = true;
    })
  
    return (
      <points>
        <bufferGeometry attach='geometry'>
          <bufferAttribute
            ref={bufferRef}
            attachObject={['attributes', 'position']}
            array={positions}
            count={positions.length / 2}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          attach='material'
          map={dotTexture}
          color={0x0aff2b}
          size={1}
          transparent={true}
          alphaTest={.5}
          opacity={1}
        />
      </points>
    )
  }

  export default Points;