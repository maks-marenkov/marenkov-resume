"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 40; // Количество узлов

  // Генерируем случайные позиции для узлов
  const nodes = useMemo(() => {
    return [...Array(count)].map(() => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ] as [number, number, number],
      size: Math.random() * 0.1 + 0.05,
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Медленное вращение всей сети
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <group key={i}>
          {/* Сам узел (точка) */}
          <Sphere args={[node.size, 16, 16]} position={node.position}>
            <meshStandardMaterial 
              color="#10b981" 
              emissive="#10b981" 
              emissiveIntensity={2} 
            />
          </Sphere>

          {/* Линии связи (соединяем каждый узел со следующим) */}
          {i < nodes.length - 1 && (
            <line>
              <bufferGeometry>
                <float32BufferAttribute
                  attach="attributes-position"
                  count={2}
                  array={new Float32Array([...node.position, ...nodes[i + 1].position])}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#10b981" transparent opacity={0.2} />
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
        {/* Глубокий космос/сеть */}
        <color attach="background" args={["#020617"]} />
        <fog attach="fog" args={["#020617", 10, 25]} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <NetworkNodes />
        </Float>

        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}