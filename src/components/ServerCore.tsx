"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, Stars, Float } from "@react-three/drei";
import * as THREE from "three";

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  const count = 50;

  const nodes = useMemo(() => {
    return [...Array(count)].map(() => ({
      position: [(Math.random() - 0.5) * 25, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 15] as [number, number, number],
      size: Math.random() * 0.08 + 0.04,
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const targetRotationY = mouse.x * 0.3;
      const targetRotationX = -mouse.y * 0.3;
      
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <group key={i}>
          <Sphere args={[node.size, 16, 16]} position={node.position}>
            <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={1.5} />
          </Sphere>
          
          {/* Исправленный блок линий */}
          {i < nodes.length - 1 && (
            <line>
              <bufferGeometry>
                <float32BufferAttribute
                  attach="attributes-position"
                  count={2}
                  // Мы передаем массив данных в args, как того требует TS
                  args={[new Float32Array([...node.position, ...nodes[i + 1].position]), 3]}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#10b981" transparent opacity={0.15} />
            </line>
          )}
        </group>
      ))}
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-[#020617]">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <fog attach="fog" args={["#020617", 10, 30]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#10b981" />
        <NetworkNodes />
        <Stars radius={100} depth={50} count={3000} factor={4} fade speed={0.5} />
      </Canvas>
    </div>
  );
}
