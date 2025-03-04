"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
}

const ComingSoon = ({
  title = "Patience You Must Have",
  subtitle = "Under construction, this section is."
}: ComingSoonProps) => {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  // Easter egg trigger
  const handleGifClick = () => {
    setClickCount(prev => prev + 1);
    
    if (clickCount + 1 >= 3 && !showEasterEgg) {
      setShowEasterEgg(true);
    }
  };

  // Reset easter egg after some time
  useEffect(() => {
    if (showEasterEgg) {
      const timer = setTimeout(() => {
        setShowEasterEgg(false);
        setClickCount(0);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showEasterEgg]);
  
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full min-h-[400px] bg-[#0A0E17] rounded-xl px-4 py-8 overflow-hidden">
      {/* Star field background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{ 
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 3 + 2,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
      
      {/* Glow effect */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#4BD167] opacity-20 blur-[80px] z-0" />
      
      {/* Main content */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#FFE81F] mb-4 text-center z-10 font-mono">
        {showEasterEgg ? "The Force is Strong With You!" : title}
      </h2>
      
      {/* Yoda GIF container */}
      <motion.div 
        className="relative w-80 h-48 my-6 rounded-lg overflow-hidden cursor-pointer z-10 border-2 border-[#4BD167] shadow-[0_0_15px_rgba(75,209,103,0.5)]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleGifClick}
        onKeyDown={(e) => e.key === 'Enter' && handleGifClick()}
        tabIndex={0}
        role="button"
        aria-label="Yoda patience quote - click for a surprise"
      >
        <Image
          src="/yoda-patience.gif" // Place your GIF in the public folder
          alt="Yoda patience quote"
          fill
          style={{ objectFit: 'cover' }}
        />
        
        {/* Easter egg overlay */}
        {showEasterEgg && (
          <motion.div 
            className="absolute inset-0 bg-[#4BD167] bg-opacity-30 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
ow
          </motion.div>
        )}
      </motion.div>
      
      <p className="text-[#c0c0c0] text-center max-w-md mb-8 z-10 font-mono">
        {showEasterEgg ? "Completed soon, this will be." : subtitle}
      </p>
      
      {/* Lightsaber divider */}
      <div className="relative w-3/4 h-1 my-4 z-10">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4BD167] to-transparent"
          animate={{ 
            x: ['-100%', '100%']
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: 'linear'
          }}
        />
      </div>    
      
      <p className="text-xs text-[#888] mt-8 italic z-10 font-mono">
        click on yoda
      </p>
    </div>
  );
};

export default ComingSoon; 