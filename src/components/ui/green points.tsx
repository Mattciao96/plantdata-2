import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GreenPoints = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    // Function to generate a random number between min and max
    const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

    // Function to generate a random point
    const generateRandomPoint = () => {
      return {
        x: getRandomNumber(0, window.innerWidth),
        y: getRandomNumber(0, window.innerHeight),
      };
    };

    // Function to add a new point to the points array
    const addPoint = () => {
      setPoints((prevPoints) => [...prevPoints, generateRandomPoint()]);
    };

    // Add a new point every 1 second
    const interval = setInterval(() => {
      addPoint();
    }, 100);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {points.map((point, index) => (
        <motion.div
          key={index}
          className="w-1 h-1 rounded-full bg-green-400 shadow-neon absolute"
          style={{ top: point.y, left: point.x }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
};

export default GreenPoints;
