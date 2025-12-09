import React from 'react';
import { motion } from 'framer-motion';
import { SlideContent, SlideType } from '../types';
import { IconRenderer } from './IconRenderer';
import { SlideAgentMiddleware } from './Slide_AgentMiddleware';

interface SlideLayoutProps {
  slide: SlideContent;
}

// INSTANT TRANSITIONS CONFIGURATION
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0, // Instant
      staggerChildren: 0 // No delay between items
    }
  },
  exit: { opacity: 0, transition: { duration: 0 } }
};

const itemVariants = {
  hidden: { opacity: 1, y: 0, filter: 'blur(0px)' }, // Reset hidden state to visible defaults to prevent flicker
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0 } }
};

const techCardVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } }
};

export const SlideLayout: React.FC<SlideLayoutProps> = ({ slide }) => {
  
  const renderContent = () => {
    switch (slide.type) {
      case SlideType.AGENT_MIDDLEWARE:
        return <SlideAgentMiddleware slide={slide} />;

      case SlideType.TITLE:
        return (
          <div className="flex flex-col h-full justify-center items-start text-left max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
            <motion.div variants={itemVariants} className="flex items-center gap-4 md:gap-6 mb-8 md:mb-16 opacity-70">
              <span className="text-white font-mono text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase">Autonomous Infrastructure</span>
              <div className="w-px h-3 bg-white/30"></div>
              <span className="text-white font-mono text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase">V4.1.1 Production</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter mb-8 leading-[0.9] md:leading-[0.8] text-white break-words"
            >
              {slide.title}
            </motion.h1>
            
            <motion.div 
              variants={itemVariants} 
              className="w-full h-px bg-gradient-to-r from-indigo-500 to-transparent mb-12 opacity-50"
            />
            
            <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
               <div>
                  <h2 className="text-lg md:text-3xl text-indigo-400 font-mono tracking-widest mb-4 md:mb-6 uppercase">
                    {slide.subtitle}
                  </h2>
               </div>
               <div>
                  <p className="text-xl md:text-3xl font-light leading-tight text-gray-200 mb-6 border-l-2 border-white/20 pl-6">
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
          <div className="flex flex-col min-h-full pt-24 md:pt-32 pb-16 max-w-[1400px] mx-auto w-full px-6 md:px-12">
            {/* Header */}
            <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.05] pb-8">
              <motion.div variants={itemVariants}>
                 <h3 className="text-indigo-500 font-mono text-xs tracking-[0.3em] mb-4 uppercase font-bold">{slide.subtitle}</h3>
                 <h2 className="text-3xl md:text-7xl font-bold text-white tracking-tighter">{slide.title}</h2>
              </motion.div>
              {slide.content?.heading && (
                <motion.div variants={itemVariants} className="mt-6 md:mt-0 max-w-xl md:text-right">
                  <p className="text-gray-300 text-base md:text-xl font-light leading-relaxed">
                    {slide.content.heading}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Grid */}
            <div className={`grid grid-cols-1 ${slide.content?.points && slide.content.points.length > 3 ? 'md:grid-cols-2' : 'lg:grid-cols-3'} gap-4 md:gap-10`}>
              {slide.content?.points?.map((point, index) => (
                <motion.div 
                  key={index}
                  variants={techCardVariants}
                  className="group relative flex flex-col bg-white/[0.02] border border-white/5 p-6 md:p-8 hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500"
                >
                  <div className="mb-6 md:mb-8 flex items-start justify-between">
                     {/* Clean Icon - No Box */}
                     <div className="text-indigo-400 group-hover:text-white transition-colors duration-500">
                        {point.icon && (
                          <IconRenderer name={point.icon} className="w-6 h-6 md:w-8 md:h-8" />
                        )}
                     </div>
                    <span className="font-mono text-xs text-gray-700 group-hover:text-indigo-500/50 mt-1">0{index + 1}</span>
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-100 tracking-tight">
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
           <div className="flex flex-col min-h-full justify-center pt-24 pb-16 max-w-7xl mx-auto w-full px-6 md:px-12">
             <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Left: Heading & Context */}
                <div>
                   <h3 className="text-indigo-500 font-mono text-xs tracking-[0.3em] mb-4 md:mb-6 uppercase font-bold">{slide.subtitle}</h3>
                   <h2 className="text-4xl md:text-8xl font-bold mb-6 md:mb-10 tracking-tighter text-white leading-[0.9]">{slide.title}</h2>
                   <div className="w-16 md:w-24 h-1 bg-indigo-500 mb-6 md:mb-10"></div>
                   <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed">
                     {slide.content?.body}
                   </p>
                </div>

                {/* Right: Metrics - Compacted */}
                <div className="space-y-3 md:space-y-5">
                  {slide.content?.metrics?.map((metric, i) => (
                    <motion.div 
                      key={i}
                      variants={itemVariants}
                      className="group relative bg-[#080808] border border-white/5 p-4 md:p-6 lg:p-7 hover:border-indigo-500/30 transition-all duration-500"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-gray-500 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">{metric.label}</span>
                        <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600 tracking-tighter group-hover:from-indigo-400 group-hover:to-white transition-all duration-500">
                          {metric.value}
                        </span>
                      </div>
                      <p className="mt-2 md:mt-3 text-gray-400 text-xs md:text-sm border-t border-white/10 pt-2 md:pt-3 leading-tight">
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
          <div className="flex flex-col min-h-full pt-24 md:pt-24 max-w-7xl mx-auto w-full px-6 md:px-12 pb-16">
             <motion.div variants={itemVariants} className="mb-12 md:mb-20">
                <h3 className="text-indigo-500 font-mono text-xs tracking-[0.3em] mb-4 uppercase font-bold">{slide.subtitle}</h3>
                {/* Reduced main title size slightly for balance */}
                <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white">{slide.title}</h2>
             </motion.div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-b border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
               {slide.content?.columns?.map((col, i) => (
                 <motion.div 
                    key={i}
                    variants={techCardVariants}
                    // Reduced padding from p-16 to p-10/p-8 to accommodate 3 columns better
                    className="relative p-6 md:p-8 lg:p-10 flex flex-col group hover:bg-white/[0.02] transition-colors duration-500"
                 >
                    <div className="mb-6 md:mb-8">
                       <h4 className="text-xs md:text-sm font-mono text-gray-500 mb-2 uppercase tracking-widest">{col.title}</h4>
                       {/* Significantly reduced font size from 5xl to 4xl/3xl for neatness */}
                       <div className="text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-tight leading-tight">{col.price}</div>
                    </div>
                    
                    <ul className="space-y-4 md:space-y-6 mt-auto">
                      {col.features.map((feat, fi) => (
                        <li key={fi} className="flex items-start text-sm md:text-base text-gray-400 group-hover:text-gray-200 transition-colors">
                          <div className="mr-4 w-1.5 h-1.5 bg-indigo-500 mt-2 flex-shrink-0"></div>
                          <span className="font-light">{feat}</span>
                        </li>
                      ))}
                    </ul>
                 </motion.div>
               ))}
             </div>
             
             {/* Added summary body text if present */}
             {slide.content?.body && (
               <motion.div 
                 variants={itemVariants} 
                 className="mt-12 text-center border-t border-white/5 pt-8"
               >
                 {/* UPDATED: Reduced font size (text-xs md:text-sm) and max-width (max-w-6xl) to ensure single line fit */}
                 <p className="text-gray-400 text-xs md:text-sm font-mono tracking-tight opacity-80 max-w-6xl mx-auto">
                   {slide.content.body}
                 </p>
               </motion.div>
             )}
          </div>
        );
        
      case SlideType.TEAM:
        return (
          <div className="flex flex-col min-h-full pt-24 md:pt-24 max-w-[1400px] mx-auto w-full px-6 md:px-12 pb-16">
            <motion.div variants={itemVariants} className="mb-12 md:mb-20 border-b border-white/[0.05] pb-8">
              <h3 className="text-indigo-500 font-mono text-xs tracking-[0.3em] mb-4 uppercase font-bold">{slide.subtitle}</h3>
              <h2 className="text-3xl md:text-7xl font-bold text-white tracking-tighter">{slide.title}</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {slide.content?.members?.map((member, i) => (
                <motion.div
                  key={i}
                  variants={techCardVariants}
                  className="flex flex-col bg-white/[0.02] border border-white/5 p-6 md:p-8 hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-500"
                >
                  <div className="mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center text-indigo-400 font-mono text-sm border border-white/10">
                    {member.name.charAt(0)}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">{member.name}</h4>
                  <p className="text-indigo-400 font-mono text-[10px] md:text-xs tracking-widest uppercase mb-4">{member.role}</p>
                  <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed border-t border-white/10 pt-4">
                    {member.background}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case SlideType.ASK:
        return (
          <div className="flex flex-col min-h-full justify-center items-center text-center max-w-5xl mx-auto px-6 pt-24 pb-16">
             <motion.div variants={itemVariants} className="relative mb-12 md:mb-16">
               {/* Ambient Glow behind title */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
               
               <h3 className="text-indigo-400 font-mono text-[10px] md:text-xs tracking-[0.4em] mb-6 md:mb-8 uppercase">
                 {slide.subtitle}
               </h3>
               {/* UPDATED: tracking-tighter to tracking-tight for better word spacing */}
               <h2 className="text-4xl md:text-8xl font-bold leading-[0.9] text-white tracking-tight mix-blend-screen">
                 {slide.content?.heading}
               </h2>
             </motion.div>

             <motion.div 
              variants={itemVariants}
              className="text-gray-400 text-lg md:text-2xl font-light max-w-3xl mb-12 md:mb-20 leading-relaxed"
             >
               {slide.content?.body?.split('\n\n').map((paragraph, index) => (
                 <p key={index} className={index > 0 ? "mt-6 text-indigo-100/90 font-normal" : ""}>
                   {paragraph}
                 </p>
               ))}
             </motion.div>

             <div className="flex flex-col items-center gap-6">
               <motion.div variants={itemVariants}>
                 <a 
                  href="https://anoteroslogos.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-3 md:px-12 md:py-4 bg-transparent overflow-hidden cursor-pointer"
                 >
                   <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                   <span className="absolute inset-0 border border-white/20 group-hover:border-indigo-500/50 transition-colors duration-300"></span>
                   <span className="relative font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-white group-hover:text-indigo-300 transition-colors">anoteroslogos.com</span>
                 </a>
               </motion.div>

               <motion.div variants={itemVariants}>
                 <a 
                   href="mailto:peitho@anoteroslogos.com" 
                   className="text-gray-500 hover:text-white transition-colors duration-300 font-mono text-[10px] md:text-xs tracking-widest uppercase border-b border-transparent hover:border-white/30 pb-1"
                 >
                   peitho@anoteroslogos.com
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
                   <IconRenderer name="Github" className="w-5 h-5 md:w-6 md:h-6" />
                 </a>
               </motion.div>
             </div>
             
             <motion.div variants={itemVariants} className="mt-6 flex gap-4 opacity-30">
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
      className="w-full min-h-full flex flex-col relative z-10"
    >
      {renderContent()}
    </motion.div>
  );
};