"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
}

const ComingSoon = ({
  title = "Coming Soon",
  subtitle = "i am not done yet, enjoy these cool moving lines and spinning tools"
}: ComingSoonProps) => {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [confetti, setConfetti] = useState<{ x: number; y: number; size: number; color: string }[]>([]);

  // Easter egg trigger
  const handleToolClick = () => {
    setClickCount(prev => prev + 1);
    
    if (clickCount + 1 >= 5 && !showEasterEgg) {
      setShowEasterEgg(true);
      generateConfetti();
    }
  };

  const generateConfetti = () => {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFD166', '#7A28CB', '#4361EE', '#F72585'];
    const newConfetti = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 20 - 20,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setConfetti(newConfetti);
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
    <div className="relative flex flex-col items-center justify-center w-full h-full min-h-[300px] md:min-h-[400px] bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl px-4 py-8 overflow-hidden">
      {/* Confetti easter egg */}
      {showEasterEgg && confetti.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full z-10"
          initial={{ 
            x: `${particle.x}%`, 
            y: `${particle.y}%`, 
            opacity: 1 
          }}
          animate={{ 
            y: '100%', 
            opacity: 0,
            rotate: Math.random() * 360 
          }}
          transition={{ 
            duration: Math.random() * 2 + 2,
            ease: 'easeOut' 
          }}
          style={{ 
            width: particle.size, 
            height: particle.size, 
            backgroundColor: particle.color 
          }}
        />
      ))}
      
      {/* Main content */}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 text-center z-10">
        {showEasterEgg ? "You found it! 🎉" : title}
      </h2>
      <p className="text-slate-600 dark:text-slate-300 text-center max-w-md mb-8 z-10">
        {showEasterEgg ? "Developer magic in progress..." : subtitle}
      </p>

      {/* Construction animation */}
      <div className="relative flex items-center justify-center w-20 h-20">
        {/* Tools group - clickable for easter egg */}
        <div 
          className="absolute flex items-center justify-center cursor-pointer group"
          onClick={handleToolClick}
          onKeyDown={(e) => e.key === 'Enter' && handleToolClick()}
          tabIndex={0}
          aria-label="Construction tools - click for a surprise"
          role="button"
        >
          {/* Hammer */}
          <motion.div
            className="absolute w-8 h-16 bg-gray-700 dark:bg-gray-200 rounded-md origin-bottom"
            animate={{ rotate: [0, -30, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.5,
              repeatType: "reverse",
              ease: "easeInOut" 
            }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-5 bg-blue-500 dark:bg-blue-400 rounded-sm" />
          </motion.div>

          {/* Wrench */}
          <motion.div
            className="absolute w-16 h-4 bg-orange-500 dark:bg-orange-400 rounded-full origin-center"
            style={{ borderRadius: '40% 40% 40% 40% / 100% 100% 100% 100%' }}
            animate={{ 
              rotate: [0, 180, 360],
              x: [0, 10, 0, -10, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "linear" 
            }}
          >
            <div className="absolute top-1/2 right-1 transform -translate-y-1/2 w-5 h-8 bg-orange-500 dark:bg-orange-400 rounded-md" />
          </motion.div>

          {/* Screwdriver */}
          <motion.div
            className="absolute w-3 h-14 bg-green-600 dark:bg-green-500 rounded-full"
            animate={{ 
              y: [0, -5, 0, 5, 0],
              rotate: [0, 10, 0, -10, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut" 
            }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-3 bg-gray-800 dark:bg-gray-200 rounded-sm" />
          </motion.div>
        </div>
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute h-px bg-slate-700 dark:bg-slate-300"
            style={{ 
              top: `${10 + (i * 8)}%`,
              left: 0,
              right: 0
            }}
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 8 + 12,
              ease: 'linear',
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-16 italic z-10">
        Hint: Try clicking the tools
      </p>
    </div>
  );
};

export default ComingSoon; 