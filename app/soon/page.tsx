"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ComingSoon from '@/components/ComingSoon';

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
}

const ComingSoonPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-background">
      <ComingSoon 
        title="working on it still, i am" 
        subtitle="" 
      />
    </div>
  );
};

export default ComingSoonPage; 