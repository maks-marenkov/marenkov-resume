"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, Stars, Float } from "@react-three/drei";
import * as THREE from "three";

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  const count = 60; // Немного добавим плотности

  const nodes = useMemo(() => {
    return [...Array(count)].map(() => ({
      position: [
        (Math.random() - 0.5) * 30, 
        (Math.random() - 0.5) * 25, 
        (Math.random() - 0.5) * 20
      ] as [number, number, number],
      size: Math.random() * 0.08 + 0.04,
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // 1. Постоянное медленное фоновое вращение
      const time = state.clock.getElapsedTime();
      groupRef.current.rotation.y = time * 0.05;

      // 2. Добавляем наклон в зависимости от мыши (Lerp для плавности)
      // mouse.x/y возвращают значения от -1 до 1
      const targetRotationX = -mouse.y * 0.2;
      const targetRotationY = mouse.x * 0.2 + (time * 0.05); // Смешиваем мышь и авто-вращение
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.1);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <group key={i}>
          <Sphere args={[node.size, 16, 16]} position={node.position}>
            <meshStandardMaterial 
              color="#10b981" 
              emissive="#10b981" 
              emissiveIntensity={1.5} 
            />
          </Sphere>
          
          {/* Линии между узлами */}
          {i < nodes.length - 1 && (
            <line>
              <bufferGeometry>
                <float32BufferAttribute
                  attach="attributes-position"
                  count={2}
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
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 45 }}
        dpr={[1, 2]} // Оптимизация для Retina дисплеев
      >
        <fog attach="fog" args={["#020617", 15, 35]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#10b981" />
        
        {/* Float дает легкое покачивание всей системе */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <NetworkNodes />
        </Float>

        <Stars 
          radius={100} 
          depth={50} 
          count={4000} 
          factor={4} 
          fade 
          speed={0.5} 
        />
      </Canvas>
    </div>
  );
}
