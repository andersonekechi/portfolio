'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from './useReducedMotion';

function Lines({ nodes, edges }: { nodes: [number, number, number][]; edges: [number, number][] }) {
  return (
    <group>
      {edges.map(([a, b], i) => {
        const points = [new THREE.Vector3(...nodes[a]), new THREE.Vector3(...nodes[b])];
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        return <lineSegments key={`e-${i}`} geometry={geo}><lineBasicMaterial color="#00ff88" transparent opacity={0.18} /></lineSegments>;
      })}
    </group>
  );
}

function TerminalObject() {
  const group = useRef<THREE.Group>(null!);
  const reducedMotion = useReducedMotion();

  const nodes = useMemo(() => {
    const count = 24;
    const pts: [number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      const r = 1.6 + Math.sin(i * 1.7) * 0.3;
      pts.push([Math.cos(a) * r, Math.sin(i * 0.8) * 0.8, Math.sin(a) * r]);
    }
    return pts;
  }, []);

  const edges = useMemo(() => {
    const e: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      e.push([i, (i + 1) % nodes.length]);
      e.push([i, (i + 6) % nodes.length]);
      if (i < nodes.length / 2) e.push([i, (i + 3) % (nodes.length / 2)]);
    }
    return e;
  }, [nodes]);

  useFrame((state) => {
    if (reducedMotion) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.12;
    group.current.rotation.x = Math.sin(t * 0.2) * 0.08;
    group.current.position.y = Math.sin(t * 0.3) * 0.1;
  });

  const ringGeo = useMemo(() => new THREE.TorusGeometry(1.6, 0.03, 16, 80), []);
  const outerGeo = useMemo(() => new THREE.TorusGeometry(2.0, 0.02, 16, 96), []);

  return (
    <group ref={group}>
      {nodes.map((pos, i) => (
        <mesh key={`n-${i}`} position={pos}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshBasicMaterial color="#00ff88" />
        </mesh>
      ))}
      <Lines nodes={nodes} edges={edges} />

      <mesh geometry={ringGeo} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#00ff88" transparent opacity={0.5} />
      </mesh>
      <mesh geometry={outerGeo} rotation={[Math.PI / 2.3, 0, 0]}>
        <meshBasicMaterial color="#00ff88" transparent opacity={0.2} />
      </mesh>

      {Array.from({ length: 5 }).map((_, i) => {
        const pts = [new THREE.Vector3((i - 2) * 0.8, -1.4, 0), new THREE.Vector3((i - 2) * 0.8, 1.4, 0)];
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        return <lineSegments key={`s-${i}`} geometry={geo}><lineBasicMaterial color="#00ff88" transparent opacity={0.07} /></lineSegments>;
      })}

      <gridHelper args={[5, 24, '#00ff8808', '#00ff8803']} position={[0, -2.4, 0]} />
    </group>
  );
}

export default function Terminal() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.1} />
      <TerminalObject />
    </Canvas>
  );
}