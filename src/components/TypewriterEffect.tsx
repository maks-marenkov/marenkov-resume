"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TypewriterEffectProps {
  text: string;
  delay?: number;
  speed?: number; // символов в секунду
  className?: string;
}

export default function TypewriterEffect({ 
  text, 
  delay = 0, 
  speed = 40, // 40 символов в секунду
  className 
}: TypewriterEffectProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Появится, когда 50% элемента в видимости

  const characters = Array.from(text);

  return (
    <div ref={ref} className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ 
            delay: delay + index / speed, 
            duration: 0.01 // Мгновенное появление символа
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}