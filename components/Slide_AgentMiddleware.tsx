import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideContent } from '../types';
import { IconRenderer } from './IconRenderer';

interface SlideProps {
  slide: SlideContent;
}

const CodeTerminal: React.FC = () => {
  const [viewState, setViewState] = useState<'html' | 'processing' | 'json'>('html');
  const [logs, setLogs] = useState<string[]>([]);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    
    const cycle = async () => {
      while (isMounted.current) {
        // 1. HTML View
        setViewState('html');
        setLogs([]);
        await new Promise(r => setTimeout(r, 2000));
        if (!isMounted.current) break;

        // 2. Processing View (Terminal Logs)
        setViewState('processing');
        
        const logSteps = [
          { text: "analyzing_dom_structure...", delay: 200 },
          { text: "stripping_html_noise...", delay: 300 },
          { text: "compressing_payload...", delay: 400 },
          { text: "optimizaton_complete :: -60% size", highlight: true, delay: 600 }
        ];

        for (const step of logSteps) {
          if (!isMounted.current) break;
          setLogs(prev => [...prev, step.text]);
          await new Promise(r => setTimeout(r, step.delay));
        }
        
        await new Promise(r => setTimeout(r, 800)); // Pause to read final result
        if (!isMounted.current) break;

        // 3. JSON View
        setViewState('json');
        await new Promise(r => setTimeout(r, 3500)); // Hold success
      }
    };
    
    cycle();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div className="w-full h-full bg-[#050505] border border-white/10 rounded-lg overflow-hidden font-mono text-xs md:text-sm flex flex-col shadow-2xl relative group">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02] shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        <div className="ml-4 text-white/30 text-[10px] tracking-widest uppercase truncate">anoteros-cli — v4.2.1</div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 md:p-6 flex-1 relative overflow-hidden flex flex-col">
        {/* Command Input - Responsive */}
        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8 opacity-80 shrink-0 overflow-x-auto scrollbar-hide whitespace-nowrap">
          <span className="text-green-500 select-none">➜</span>
          <span className="text-blue-400 select-none">~</span>
          <div className="flex gap-1.5 md:gap-2 text-[10px] md:text-sm">
             <span className="text-gray-300">const</span>
             <span className="text-white">data</span>
             <span className="text-gray-300">=</span>
             <span className="text-purple-400">await</span>
             <span className="text-yellow-200">anoteros.wrap</span>
             <span className="text-gray-400">("https://amazon.com/...");</span>
          </div>
        </div>

        {/* Dynamic Transformation Area */}
        <div className="relative w-full flex-1 min-h-[200px]">
          <AnimatePresence mode="wait">
             {viewState === 'html' && (
                <motion.div
                  key="html"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 text-gray-600 font-mono text-[10px] leading-relaxed overflow-hidden"
                >
                   {`<div id="a-page">
  <div class="a-section a-spacing-none">
    <div id="ppd" class="a-section a-spacing-normal">
      <span id="productTitle" class="a-size-large product-title-word-break">
        Sony WH-1000XM5 Wireless Noise Canceling Headphones
      </span>
      <div class="a-section a-spacing-none a-spacing-top-mini">
        <span class="a-price" data-a-size="l" data-a-color="base">
          <span class="a-offscreen">$348.00</span>
          <span aria-hidden="true">
            <span class="a-price-symbol">$</span>
            <span class="a-price-whole">348<span class="a-price-decimal">.</span></span>
            <span class="a-price-fraction">00</span>
          </span>
        </span>
        <div id="availability" class="a-section a-spacing-base">
          <span class="a-size-medium a-color-success">In Stock</span>
        </div>
      </div>
    </div>
  </div>
</div>`}
                  {/* Overlay gradient to fade out bottom */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]" />
                </motion.div>
             )}

             {viewState === 'processing' && (
               <motion.div
                 key="processing"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="absolute inset-0 flex flex-col justify-center px-4"
               >
                  <div className="space-y-3 font-mono text-xs md:text-sm">
                    {logs.map((log, i) => (
                       <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-3"
                       >
                          <span className="text-gray-600">
                             {i === logs.length - 1 ? ">" : "+"}
                          </span>
                          <span className={log.includes("-60%") ? "text-green-400 font-bold tracking-wide" : "text-gray-400"}>
                             {log}
                          </span>
                       </motion.div>
                    ))}
                    <motion.div 
                       initial={{ opacity: 0 }}
                       animate={{ opacity: [0, 1, 0] }}
                       transition={{ repeat: Infinity, duration: 0.8 }}
                       className="w-2 h-4 bg-indigo-500/50"
                    />
                  </div>
               </motion.div>
             )}

             {viewState === 'json' && (
               <motion.div
                 key="json"
                 initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                 animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.4 }}
                 className="absolute inset-0"
               >
                 <div className="relative p-4 md:p-6 bg-indigo-950/10 border border-indigo-500/20 rounded-lg shadow-[0_0_30px_rgba(99,102,241,0.1)] h-full overflow-hidden">
                   <div className="absolute top-0 right-0 flex gap-2">
                     <div className="p-2 text-[8px] text-green-400 border-l border-b border-indigo-500/20 rounded-bl bg-[#050505] font-bold">
                        -60% SIZE
                     </div>
                     <div className="p-2 text-[8px] text-indigo-400 border-l border-b border-indigo-500/20 rounded-bl bg-[#050505]">
                        SIG_0x7F2
                     </div>
                   </div>
                   <pre className="font-mono text-xs md:text-sm leading-relaxed overflow-hidden">
                     <span className="text-gray-400">{`{`}</span>
                     {`\n  `}
                     <span className="text-indigo-300">"entity"</span>
                     <span className="text-gray-400">: </span>
                     <span className="text-green-400">"Product"</span>
                     <span className="text-gray-400">,</span>
                     {`\n  `}
                     <span className="text-indigo-300">"title"</span>
                     <span className="text-gray-400">: </span>
                     <span className="text-green-400">"Sony Headphones"</span>
                     <span className="text-gray-400">,</span>
                     {`\n  `}
                     <span className="text-indigo-300">"price"</span>
                     <span className="text-gray-400">: </span>
                     <span className="text-yellow-400">348.00</span>
                     <span className="text-gray-400">,</span>
                     {`\n  `}
                     <span className="text-indigo-300">"currency"</span>
                     <span className="text-gray-400">: </span>
                     <span className="text-green-400">"USDC"</span>
                     {`\n`}
                     <span className="text-gray-400">{`}`}</span>
                   </pre>
                 </div>
               </motion.div>
             )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const SlideAgentMiddleware: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col min-h-full justify-center pt-24 pb-16 max-w-[1400px] mx-auto w-full px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
        
        {/* Left Column: Code Visualization */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-auto aspect-[4/3] lg:aspect-square flex items-center justify-center order-2 lg:order-1"
        >
           <CodeTerminal />
        </motion.div>

        {/* Right Column: Value Props */}
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="flex flex-col justify-center order-1 lg:order-2"
        >
           <div className="mb-10">
              <h3 className="text-indigo-500 font-mono text-xs tracking-[0.3em] mb-4 uppercase font-bold">
                 {slide.subtitle}
              </h3>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-tight mb-6">
                 {slide.title}
              </h2>
              {slide.content?.heading && (
                <p className="text-xl text-gray-400 font-light border-l-2 border-indigo-500/50 pl-6">
                  {slide.content.heading}
                </p>
              )}
           </div>

           <div className="space-y-4 md:space-y-6">
             {slide.content?.points?.map((point, i) => (
               <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-start gap-5 p-2 md:p-4 rounded-lg hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5 group"
               >
                  <div className="flex-shrink-0 mt-1 text-indigo-400 group-hover:text-white transition-colors duration-300">
                     {point.icon && <IconRenderer name={point.icon} className="w-6 h-6 md:w-8 md:h-8" />}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-100 mb-1">{point.title}</h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                      {point.description}
                    </p>
                  </div>
               </motion.div>
             ))}
           </div>

           {/* Protocol Tags Footer - Updated Style */}
           {slide.content?.tags && (
             <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 pt-6 border-t border-white/5"
             >
                <span className="text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em] mb-3 block">Supported Standards</span>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {slide.content.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] md:text-xs font-mono uppercase tracking-wider text-gray-400 group flex items-center gap-2">
                      <span className="text-indigo-500/70">::</span>
                      {tag}
                    </span>
                  ))}
                </div>
             </motion.div>
           )}
        </motion.div>

      </div>
    </div>
  );
};