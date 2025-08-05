import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { Sun, Battery, Zap, ArrowRight, Play, Leaf, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import AnimatedCounter from "../Common/AnimatedCounter.jsx";

const Hero = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      rotate: [0, 10, 0, -10, 0],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 1.5
      }
    }
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
      y: -3,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: {
      scale: 0.95,
      y: 0,
      transition: { duration: 0.1 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Solar Panels"
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-green-800/70 to-yellow-600/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-yellow-300/30 to-transparent rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Animated Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-20 text-yellow-300 opacity-40"
          variants={floatingVariants}
          animate="animate"
        >
          <Sun className="h-12 w-12" />
        </motion.div>
        <motion.div 
          className="absolute top-40 right-32 text-green-300 opacity-40"
          variants={floatingVariants}
          animate="animate"
        >
          <Battery className="h-8 w-8" />
        </motion.div>
        <motion.div 
          className="absolute bottom-32 left-32 text-blue-300 opacity-40"
          variants={floatingVariants}
          animate="animate"
        >
          <Zap className="h-10 w-10" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
          {/* Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-white/20 px-4 py-2 rounded-full inline-flex items-center text-sm border border-white/30">
              <Zap className="w-4 h-4 mr-2" />
              Leading Solar Solutions in Pakistan
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl font-bold leading-tight">
              <span className="block">Power Your Future</span>
              <span className="block bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent">with Clean Solar Energy</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-white/90 max-w-xl">
              Transform your energy costs with premium solar equipment. Join thousands across Pakistan saving up to 90% on bills.
            </motion.p>

            <motion.div variants={statsVariants} className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-yellow-300"><AnimatedCounter end={500} suffix="+" /></div>
                <p className="text-sm">Happy Customers</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-green-300"><AnimatedCounter end={50} suffix="MW+" /></div>
                <p className="text-sm">Installed Capacity</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-blue-300"><AnimatedCounter end={10} suffix="+" /></div>
                <p className="text-sm">Years Experience</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
              <motion.div variants={buttonHoverVariants} whileHover="hover" whileTap="tap">
                <Link to="/products" className="bg-gradient-to-r from-yellow-500 to-green-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
                  <span>Shop Solar Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div variants={buttonHoverVariants} whileHover="hover" whileTap="tap">
               
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
        <p className="text-xs text-white/70 mt-2">Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default Hero;
