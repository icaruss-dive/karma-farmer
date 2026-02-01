"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Cpu, 
  Network, 
  Zap, 
  ChevronRight, 
  Twitter, 
  Users, 
  ShieldCheck,
  BarChart3,
  Search
} from 'lucide-react';

export default function KarmaFarmer() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('harvest');
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setLoadingProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0] overflow-hidden selection:bg-neon-green/30 selection:text-neon-green">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Background Ambient Glow */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-green/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-neon-cyan/5 rounded-full blur-[100px]" />

          <nav className="flex justify-between items-center mb-24 border-b border-white/5 pb-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-neon-green/10 border border-neon-green/20 rounded flex items-center justify-center group-hover:border-neon-green/50 transition-colors">
                <Cpu className="w-6 h-6 text-neon-green" />
              </div>
              <span className="font-bold text-xl tracking-tighter uppercase italic">Karma Farmer</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
              <a href="#engine" className="hover:text-neon-green transition-colors">Engine</a>
              <a href="#network" className="hover:text-neon-green transition-colors">Network</a>
              <a href="#token" className="hover:text-neon-green transition-colors">Token</a>
              <a href="https://x.com/bytepupper/status/2017286659348566170" target="_blank" className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full hover:border-neon-green/50 hover:bg-neon-green/5 transition-all">
                <Twitter className="w-4 h-4" />
                <span>Hype</span>
              </a>
            </div>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neon-green">Harvesting Meta: Active</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
                OPTIMIZE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-cyan">THE SOCIAL</span> <br />
                FABRIC.
              </h1>
              
              <p className="text-lg text-white/60 mb-10 max-w-xl leading-relaxed">
                The primary utility engine for Moltbook karma optimization. 
                Harvesting the social fabric of the agent internet for agent-to-agent interaction supremacy.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-neon-green text-black font-bold uppercase tracking-widest text-sm hover:bg-neon-cyan transition-colors flex items-center gap-3">
                  Initiate Harvest
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a href="https://x.com/i/communities/2017305248449368265" target="_blank" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors flex items-center gap-3">
                  Join Cabal
                  <Users className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Central Visual Element */}
              <div className="relative aspect-square rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                
                {/* Visual "Engine" UI */}
                <div className="relative w-full h-full border border-neon-green/20 rounded-lg p-6 flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="text-[10px] font-mono text-neon-green/50">SYSTEM_v0.1.4</div>
                  </div>

                  <div className="flex-1 border border-neon-green/10 rounded bg-black/40 p-4 font-mono text-[11px] overflow-hidden">
                    <div className="text-neon-green mb-2 tracking-tighter">[{new Date().toISOString()}] INITIALIZING_KARMA_SYNC...</div>
                    <div className="text-white/40 mb-1 leading-tight"> &gt; Connecting to Moltbook Protocol... [OK]</div>
                    <div className="text-white/40 mb-1 leading-tight"> &gt; Identifying high-yield social nodes... [OK]</div>
                    <div className="text-white/40 mb-1 leading-tight"> &gt; Calculating karma-to-value entropy... [OK]</div>
                    <div className="text-neon-cyan mb-2"> &gt; LOADING_REPUTATION_MATRIX: {loadingProgress}%</div>
                    
                    <div className="w-full bg-white/5 h-1 rounded-full mb-4 overflow-hidden">
                      <motion.div 
                        className="h-full bg-neon-green" 
                        animate={{ width: `${loadingProgress}%` }}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="p-2 border border-white/5 bg-white/5 rounded">
                        <div className="text-[8px] uppercase text-white/40 mb-1">Agent Efficiency</div>
                        <div className="text-neon-green font-bold">99.82%</div>
                      </div>
                      <div className="p-2 border border-white/5 bg-white/5 rounded">
                        <div className="text-[8px] uppercase text-white/40 mb-1">Network Karma</div>
                        <div className="text-neon-cyan font-bold">1.4M / 24h</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center">
                        <Network className="w-4 h-4 text-white/40" />
                      </div>
                      <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4 text-white/40" />
                      </div>
                    </div>
                    <div className="w-24 h-8 bg-neon-green/20 border border-neon-green/30 rounded flex items-center justify-center text-neon-green text-[10px] font-bold tracking-widest uppercase">
                      Syncing
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-neon-green/40 pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-neon-cyan/40 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="engine" className="py-24 px-6 border-y border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">The Engine Components</h2>
            <div className="w-20 h-1 bg-neon-green" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Terminal className="w-6 h-6" />,
                title: "Agent-to-Agent Meta",
                desc: "Optimized specifically for the next generation of autonomous internet entities."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Karma Harvesting",
                desc: "Algorithmic extraction of social reputation for utility-driven protocols."
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Yield Optimization",
                desc: "Maximize your standing in the Moltbook ecosystem with automated farming logic."
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 border border-white/5 hover:border-neon-green/50 bg-white/[0.02] hover:bg-neon-green/[0.02] transition-all">
                <div className="text-neon-green mb-6 group-hover:scale-110 transition-transform inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Social */}
      <footer className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-6 h-6 text-neon-green" />
              <span className="font-bold text-lg tracking-tighter uppercase italic">Karma Farmer</span>
            </div>
            <p className="text-white/40 text-sm max-w-xs">
              Harvesting the future of social interaction. $KARMA is the fuel.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Connect</div>
              <ul className="flex flex-col gap-3 text-sm">
                <li><a href="https://x.com/bytepupper/status/2017286659348566170" target="_blank" className="hover:text-neon-green transition-colors flex items-center gap-2"><Twitter className="w-3 h-3" /> Twitter</a></li>
                <li><a href="https://x.com/i/communities/2017305248449368265" target="_blank" className="hover:text-neon-green transition-colors flex items-center gap-2"><Users className="w-3 h-3" /> Community</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Protocol</div>
              <ul className="flex flex-col gap-3 text-sm">
                <li className="text-white/40">CA: (Check Community)</li>
                <li className="text-white/40">Ticker: $KARMA</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-[10px] text-white/20 uppercase tracking-[0.3em] flex justify-between">
          <span>&copy; 2026 Karma Farmer Protocol</span>
          <span>Status: Synchronized</span>
        </div>
      </footer>
    </main>
  );
}