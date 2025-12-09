import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SlideContent } from '../types';
import { IconRenderer } from './IconRenderer';

interface SlideProps {
  slide: SlideContent;
}

interface LogEntry {
  id: string;
  timestamp: string;
  type: 'INFO' | 'WARN' | 'TX' | 'CRIT';
  message: string;
  latency: string;
}

const generateLog = (): LogEntry => {
  const types: ('INFO' | 'WARN' | 'TX')[] = ['INFO', 'INFO', 'INFO', 'TX', 'TX', 'WARN'];
  const type = types[Math.floor(Math.random() * types.length)];
  const id = Math.random().toString(36).substring(7).toUpperCase();
  const date = new Date();
  const time = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}.${date.getMilliseconds().toString().padStart(3, '0')}`;
  
  let message = "";
  let latency = `${Math.floor(Math.random() * 40) + 10}ms`;

  switch(type) {
    case 'TX':
      message = `Settlement :: ${id} :: ${(Math.random() * 0.5).toFixed(4)} USDC transferred`;
      latency = `${Math.floor(Math.random() * 100) + 50}ms`;
      break;
    case 'WARN':
      message = `High throughput on Shard_${Math.floor(Math.random() * 5)} :: Rate limiting active`;
      latency = `120ms`;
      break;
    default:
      const msgs = [
        `GEO Audit :: Parsing DOM structure for node_${Math.floor(Math.random() * 99)}`,
        `Mesh Sync :: Peer discovery handshake accepted`,
        `Graph Extraction :: Triplet verification success`,
        `Consensus :: Block #${Math.floor(Math.random() * 1000000)} finalized`
      ];
      message = msgs[Math.floor(Math.random() * msgs.length)];
  }

  return { id, timestamp: time, type, message, latency };
};

export const SlideTelemetry: React.FC<SlideProps> = ({ slide }) => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [metrics, setMetrics] = useState({
    tps: 842,
    latency: 24,
    nodes: 12403,
    uptime: 99.99
  });

  // Log generation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => [generateLog(), ...prev].slice(0, 12));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Metrics jitter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        tps: prev.tps + Math.floor(Math.random() * 20) - 10,
        latency: Math.max(12, Math.min(45, prev.latency + Math.floor(Math.random() * 6) - 3)),
        nodes: prev.nodes + (Math.random() > 0.8 ? 1 : 0),
        uptime: 99.99
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-full justify-center pt-24 pb-16 max-w-[1400px] mx-auto w-full px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full"
      >
        
        {/* Header Section */}
        <div className="lg:col-span-12 mb-8 flex justify-between items-end border-b border-white/10 pb-6">
          <div>
            <h3 className="text-indigo-500 font-mono text-xs tracking-[0.3em] mb-2 uppercase font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              {slide.subtitle}
            </h3>
            <h2 className="text-4xl font-bold text-white tracking-tighter">{slide.title}</h2>
          </div>
          <div className="text-right hidden md:block">
             <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Network Status</div>
             <div className="text-green-400 font-mono font-bold">OPERATIONAL</div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="lg:col-span-8 grid grid-cols-2 gap-4">
           {/* Metric Card 1 */}
           <div className="bg-[#050505] border border-white/10 p-6 flex flex-col justify-between h-40">
              <div className="flex justify-between items-start">
                 <IconRenderer name="Activity" className="text-indigo-500 w-5 h-5" />
                 <span className="text-[10px] text-gray-500 font-mono uppercase">TPS (Live)</span>
              </div>
              <div>
                 <div className="text-4xl font-mono text-white">{metrics.tps}</div>
                 <div className="text-xs text-gray-500 mt-1">Transactions Per Second</div>
              </div>
           </div>

           {/* Metric Card 2 */}
           <div className="bg-[#050505] border border-white/10 p-6 flex flex-col justify-between h-40">
              <div className="flex justify-between items-start">
                 <IconRenderer name="Zap" className="text-yellow-500 w-5 h-5" />
                 <span className="text-[10px] text-gray-500 font-mono uppercase">Latency</span>
              </div>
              <div>
                 <div className="text-4xl font-mono text-white">{metrics.latency}<span className="text-lg text-gray-600">ms</span></div>
                 <div className="text-xs text-gray-500 mt-1">Global Settlement Finality</div>
              </div>
           </div>

           {/* Metric Card 3 */}
           <div className="bg-[#050505] border border-white/10 p-6 flex flex-col justify-between h-40">
              <div className="flex justify-between items-start">
                 <IconRenderer name="Server" className="text-blue-500 w-5 h-5" />
                 <span className="text-[10px] text-gray-500 font-mono uppercase">Active Nodes</span>
              </div>
              <div>
                 <div className="text-4xl font-mono text-white">{metrics.nodes.toLocaleString()}</div>
                 <div className="text-xs text-gray-500 mt-1">Distributed Mesh Agents</div>
              </div>
           </div>

           {/* Metric Card 4 */}
           <div className="bg-[#050505] border border-white/10 p-6 flex flex-col justify-between h-40">
              <div className="flex justify-between items-start">
                 <IconRenderer name="ShieldCheck" className="text-green-500 w-5 h-5" />
                 <span className="text-[10px] text-gray-500 font-mono uppercase">SLA Uptime</span>
              </div>
              <div>
                 <div className="text-4xl font-mono text-white">{metrics.uptime}%</div>
                 <div className="text-xs text-gray-500 mt-1">Rolling 30-day Average</div>
              </div>
           </div>
        </div>

        {/* Live Terminal Log */}
        <div className="lg:col-span-4 bg-[#050505] border border-white/10 font-mono text-xs overflow-hidden relative flex flex-col">
           <div className="bg-white/5 p-2 px-4 text-[10px] text-gray-400 uppercase tracking-wider border-b border-white/5 flex justify-between">
              <span>System Event Log</span>
              <span className="text-indigo-400">./tail -f</span>
           </div>
           <div className="p-4 space-y-3 overflow-hidden relative flex-1">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none z-10" />
              {logs.map((log) => (
                 <motion.div 
                    key={log.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-2 text-[10px] md:text-xs"
                 >
                    <span className="text-gray-600 shrink-0">[{log.timestamp}]</span>
                    <span className={`shrink-0 font-bold w-10 ${
                       log.type === 'INFO' ? 'text-blue-400' :
                       log.type === 'WARN' ? 'text-yellow-500' :
                       log.type === 'TX' ? 'text-green-400' : 'text-red-500'
                    }`}>{log.type}</span>
                    <span className="text-gray-300 truncate">{log.message}</span>
                 </motion.div>
              ))}
           </div>
        </div>

      </motion.div>
    </div>
  );
};