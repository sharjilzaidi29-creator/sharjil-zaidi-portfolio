import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => (
  <section id="about" className="relative overflow-hidden bg-[#070707] px-6 py-28 text-[#eee8df] sm:px-10 lg:px-20">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-[#d4af37]"><span>02 / ABOUT</span><span className="h-px w-20 bg-[#d4af37]/40" /></div>
      <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-[10px] tracking-[0.2em] text-[#756c63]">PROFILE // ENGINEERING FOCUS</p>
          <h2 className="mt-4 text-5xl font-black uppercase leading-[.9] tracking-[-.04em] sm:text-7xl">Cloud<br /><span className="text-[#b79a68]">Mindset.</span></h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.1 }} className="space-y-7">
          <p className="text-lg leading-8 text-[#d2cbc3]">I have a background in engineering and a strong technical focus on cloud computing and DevOps. My skills include Microsoft Azure, AWS, Linux, Git, and CI/CD pipelines.</p>
          <p className="text-sm leading-7 text-[#9d958d]">I enjoy exploring cloud technologies, solving technical challenges, and continuously expanding my knowledge to improve infrastructure management and deployment processes.</p>
          <div className="grid gap-4 pt-3 sm:grid-cols-3">
            {[
              ['FOCUS', 'Cloud Infrastructure'],
              ['AUTOMATION', 'CI/CD & IaC'],
              ['MINDSET', 'Reliable Systems'],
            ].map(([label, value]) => <div key={label} className="border border-white/10 bg-white/[0.025] p-5"><p className="font-mono text-[9px] tracking-[0.2em] text-[#d4af37]">{label}</p><p className="mt-2 text-sm text-[#d6cec5]">{value}</p></div>)}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
