import React from 'react';
import { motion } from 'framer-motion';
import { SlideContent, SlideType } from '../types';
import { IconRenderer } from './IconRenderer';

interface SlideLayoutProps {
  slide: SlideContent;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1
    }
  },
  exit: { opacity: 0, transition: { duration: 0.4 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
};

const techCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const SlideLayout: React.FC<SlideLayoutProps> = ({ slide }) => {
  
  const renderContent = () => {
    switch (slide.type) {
      case SlideType.TITLE:
        return (
          <div className="flex flex-col h-full justify-center items-start text-left max-w-7xl mx-auto px-6 relative z-10">
            <motion.div variants={itemVariants} className="flex items-center gap-6 mb-16 opacity-70">
              <span className="text-white font-mono text-[10px] tracking-[0.4em] uppercase">Private & Confidential</span>
              <div className="w-px h-3 bg-white/30"></div>
              <span className="text-white font-mono text-[10px] tracking-[0.4em] uppercase">V4.1.1 Production</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter mb-8 leading-[0.8] text-white"
            >
              {slide.title}
            </motion.h1>
            
            <motion.div 
              variants={itemVariants} 
              className="w-full h-px bg-gradient-to-r from-indigo-500 to-transparent mb-12 opacity-50"
            />
            
            <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
               <div>
                  <h2 className="text-xl md:text-3xl text-indigo-400 font-mono tracking-widest mb-6 uppercase">
                    {slide.subtitle}
                  </h2>
               </div>
               <div>
                  <p className="text-2xl md:text-3xl font-light leading-tight text-gray-200 mb-6 border-l-2 border-white/20 pl-6">
                    {slide.content?.heading}
                  </p>
                  <p className="text-gray-500 font-mono text-xs md:text-sm tracking-wide pl-6 opacity-60">
                    {slide.content?.body}
                  </p>
               </div>
            </motion.div>
          </div>
        );

      case SlideType.PROBLEM:
      case SlideType.SOLUTION:
      case SlideType.TECH:
      case SlideType.COMPETITION:
        return (
          <div className="flex flex-col h-full pt-16 md:pt-24 max-w-[1400px] mx-auto w-full px-6 md:px-12">
            {/* Header */}
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.05] pb-8">
              <motion.div variants={itemVariants}>
                 <h3 className="text-indigo-500 font-mono text-xs tracking-[0.3em] mb-4 uppercase font-bold">{slide.subtitle}</h3>
                 <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">{slide.title}</h2>
              </motion.div>
              {slide.content?.heading && (
                <motion.div variants={itemVariants} className="mt-8 md:mt-0 max-w-xl text-right">
                  <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                    {slide.content.heading}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Grid */}
            <div className={`grid grid-cols-1 ${slide.content?.points && slide.content.points.length > 3 ? 'md:grid-cols-2' : 'lg:grid-cols-3'} gap-6 lg:gap-10`}>
              {slide.content?.points?.map((point, index) => (
                <motion.div 
                  key={index}
                  variants={techCardVariants}
                  className="group relative flex flex-col bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500"
                >
                  <div className="mb-8 flex items-start justify-between">
                     {/* Clean Icon - No Box */}
                     <div className="text-indigo-400 group-hover:text-white transition-colors duration-500">
                        {point.icon && (
                          <IconRenderer name={point.icon} className="w-8 h-8" />
                        )}
                     </div>
                    <span className="font-mono text-xs text-gray-700 group-hover:text-indigo-500/50 mt-1">0{index + 1}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 text-gray-100 tracking-tight">
                    {point.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case SlideType.MARKET:
        return (
           <div className="flex flex-col h-full justify-center max-w-7xl mx-auto w-full px-6 md:px-12">
             <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                
                {/* Left: Heading & Context */}
                <div>
                   <h3 className="text-indigo-500 font-mono text-xs tracking-[0.3em] mb-6 uppercase font-bold">{slide.subtitle}</h3>
                   <h2 className="text-6xl md:text-8xl font-bold mb-10 tracking-tighter text-white leading-[0.9]">{slide.title}</h2>
                   <div className="w-24 h-1 bg-indigo-500 mb-10"></div>
                   <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                     {slide.content?.body}
                   </p>
                </div>

                {/* Right: Metrics */}
                <div className="space-y-6 md:space-y-8">
                  {slide.content?.metrics?.map((metric, i) => (
                    <motion.div 
                      key={i}
                      variants={itemVariants}
                      className="group relative bg-[#080808] border border-white/5 p-8 lg:p-10 hover:border-indigo-500/30 transition-all duration-500"
                    >
                      <div className="flex flex-col gap-2">
                        <span className="text-gray-500 font-mono text-xs tracking-[0.2em] uppercase">{metric.label}</span>
                        <span className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600 tracking-tighter group-hover:from-indigo-400 group-hover:to-white transition-all duration-500">
                          {metric.value}
                        </span>
                      </div>
                      <p className="mt-4 text-gray-400 text-sm border-t border-white/10 pt-4">
                        {metric.detail}
                      </p>
                    </motion.div>
                  ))}
                </div>

             </motion.div>
           </div>
        );

      case SlideType.BUSINESS:
      case SlideType.ROADMAP:
        return (
          <div className="flex flex-col h-full pt-16 md:pt-24 max-w-7xl mx-auto w-full px-6 md:px-12">
             <motion.div variants={itemVariants} className="mb-20">
                <h3 className="text-indigo-500 font-mono text-xs tracking-[0.3em] mb-4 uppercase font-bold">{slide.subtitle}</h3>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white">{slide.title}</h2>
             </motion.div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-b border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
               {slide.content?.columns?.map((col, i) => (
                 <motion.div 
                    key={i}
                    variants={techCardVariants}
                    className="relative p-12 lg:p-16 flex flex-col group hover:bg-white/[0.02] transition-colors duration-500"
                 >
                    <div className="mb-8">
                       <h4 className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-widest">{col.title}</h4>
                       <div className="text-4xl md:text-5xl text-white font-medium tracking-tighter">{col.price}</div>
                    </div>
                    
                    <ul className="space-y-6 mt-auto">
                      {col.features.map((feat, fi) => (
                        <li key={fi} className="flex items-start text-base text-gray-400 group-hover:text-gray-200 transition-colors">
                          <div className="mr-4 w-1.5 h-1.5 bg-indigo-500 mt-2 flex-shrink-0"></div>
                          <span className="font-light">{feat}</span>
                        </li>
                      ))}
                    </ul>
                 </motion.div>
               ))}
             </div>
          </div>
        );
        
      case SlideType.TEAM:
        return (
          <div className="flex flex-col h-full pt-16 md:pt-24 max-w-[1400px] mx-auto w-full px-6 md:px-12">
            <motion.div variants={itemVariants} className="mb-20 border-b border-white/[0.05] pb-8">
              <h3 className="text-indigo-500 font-mono text-xs tracking-[0.3em] mb-4 uppercase font-bold">{slide.subtitle}</h3>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">{slide.title}</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {slide.content?.members?.map((member, i) => (
                <motion.div
                  key={i}
                  variants={techCardVariants}
                  className="flex flex-col bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-500"
                >
                  <div className="mb-6 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-indigo-400 font-mono text-sm border border-white/10">
                    {member.name.charAt(0)}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">{member.name}</h4>
                  <p className="text-indigo-400 font-mono text-xs tracking-widest uppercase mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm font-light leading-relaxed border-t border-white/10 pt-4">
                    {member.background}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case SlideType.ASK:
        return (
          <div className="flex flex-col h-full justify-center items-center text-center max-w-5xl mx-auto px-6">
             <motion.div variants={itemVariants} className="relative mb-20">
               {/* Ambient Glow behind title */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
               
               <h3 className="text-indigo-400 font-mono text-xs tracking-[0.4em] mb-8 uppercase">
                 {slide.subtitle}
               </h3>
               <h2 className="text-5xl md:text-8xl font-bold leading-[0.9] text-white tracking-tighter mix-blend-screen">
                 {slide.content?.heading}
               </h2>
             </motion.div>

             <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-xl md:text-2xl font-light max-w-3xl mb-24 leading-relaxed"
             >
               {slide.content?.body}
             </motion.p>

             <div className="flex flex-col items-center gap-6">
               <motion.div variants={itemVariants}>
                 <a 
                  href="https://anoteroslogos.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-12 py-4 bg-transparent overflow-hidden cursor-pointer"
                 >
                   <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                   <span className="absolute inset-0 border border-white/20 group-hover:border-indigo-500/50 transition-colors duration-300"></span>
                   <span className="relative font-mono text-sm tracking-[0.3em] uppercase text-white group-hover:text-indigo-300 transition-colors">anoteroslogos.com</span>
                 </a>
               </motion.div>

               <motion.div variants={itemVariants}>
                 <a 
                   href="mailto:Peitho@anoteroslogos.com" 
                   className="text-gray-500 hover:text-white transition-colors duration-300 font-mono text-xs tracking-widest uppercase border-b border-transparent hover:border-white/30 pb-1"
                 >
                   Peitho@anoteroslogos.com
                 </a>
               </motion.div>

               <motion.div variants={itemVariants} className="mt-2">
                 <a 
                   href="https://github.com/DelovoyMotiv/anteroslogos" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-500 hover:text-white transition-colors duration-300"
                   aria-label="GitHub Repository"
                 >
                   <IconRenderer name="Github" className="w-6 h-6" />
                 </a>
               </motion.div>
             </div>
             
             <motion.div variants={itemVariants} className="mt-20 flex gap-4 opacity-30">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
             </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full h-full p-4 md:p-8 flex flex-col relative z-10 overflow-hidden"
    >
      {renderContent()}
    </motion.div>
  );
};