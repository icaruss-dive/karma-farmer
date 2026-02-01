"use client";

import { motion } from "framer-motion";
import { Twitter, Users, TrendingUp, Zap, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#00FFCC] selection:text-black font-sans antialiased">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00FFCC] opacity-[0.05] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00FFCC] opacity-[0.05] blur-[120px] rounded-full" />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 w-full border-b border-white/5 bg-[#050505]/50 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#00FFCC] rounded-sm rotate-45 flex items-center justify-center">
              <Zap className="text-black w-5 h-5 -rotate-45" />
            </div>
            <span className="font-bold tracking-tighter text-xl">KARMA</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="https://x.com/search?q=Karma%20Farmer" target="_blank" className="text-sm text-gray-400 hover:text-[#00FFCC] transition-colors">Twitter</a>
            <a href="#" className="text-sm text-gray-400 hover:text-[#00FFCC] transition-colors">Cabal</a>
            <a href="#" className="text-sm font-medium px-5 py-2 bg-[#00FFCC] text-black rounded-full hover:bg-[#00FFCC]/90 transition-all hover:scale-105 active:scale-95">
              Launch App
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00FFCC] text-xs font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFCC] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFCC]"></span>
              </span>
              $KARMA HARVESTING SYSTEM V1.0
            </span>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Harvest the <br />
              <span className="text-[#00FFCC] drop-shadow-[0_0_15px_rgba(0,255,204,0.3)]">Social Fabric</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-2xl mb-12 font-light">
              The primary utility engine for Moltbook karma optimization. Harvesting the meta, one agent at a time. 🦞💎
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5">
              <button className="w-full md:w-auto px-10 py-5 bg-[#00FFCC] text-black font-black text-lg rounded-xl hover:shadow-[0_0_30px_rgba(0,255,204,0.4)] transition-all hover:scale-105 active:scale-95">
                JOIN THE CABAL
              </button>
              <button className="w-full md:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
                HYPE THREAD <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Features */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { label: "Moltbook Efficiency", value: "99.9%", icon: TrendingUp, desc: "Maximized karma harvesting via agent loops." },
            { label: "Agent Population", value: "Global", icon: Users, desc: "Connected to the wider agentic social layer." },
            { label: "Harvest Yield", value: "Optimized", icon: Zap, desc: "Real-time optimization of social interactions." }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-[#00FFCC]/30 transition-all group"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00FFCC]/10 transition-colors">
                <stat.icon className="w-7 h-7 text-[#00FFCC] group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-gray-500 text-sm font-medium mb-2 uppercase tracking-widest">{stat.label}</div>
              <div className="text-4xl font-bold mb-4">{stat.value}</div>
              <p className="text-gray-500 font-light leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto p-1 text-center bg-gradient-to-r from-[#00FFCC]/20 via-[#00FFCC]/40 to-[#00FFCC]/20 rounded-[40px]">
          <div className="p-16 rounded-[39px] bg-[#050505] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[#00FFCC]/10 blur-[80px]" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contract Address</h2>
            <p className="text-gray-400 mb-10 text-lg">Secure your position in the harvest.</p>
            <div className="bg-black border border-white/10 p-6 rounded-2xl font-mono text-[#00FFCC] text-sm md:text-xl mb-10 relative group">
              <span className="opacity-50 tracking-widest uppercase">TBA - DEPLOYING AGENTS</span>
              <div className="absolute inset-0 bg-[#00FFCC]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-[#00FFCC] transition-all hover:scale-105">
                <Twitter className="w-6 h-6" />
                <span className="font-bold">Twitter</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-[#00FFCC] transition-all hover:scale-105">
                <Users className="w-6 h-6" />
                <span className="font-bold">X Community</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <Zap className="text-[#00FFCC] w-5 h-5" />
            <span className="font-bold tracking-tighter">KARMA FARMER</span>
          </div>
          <p className="text-gray-600 text-sm">&copy; 2026 KARMA FARMER. ALL AGENTS RESERVED.</p>
          <div className="flex gap-6 text-gray-600 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
