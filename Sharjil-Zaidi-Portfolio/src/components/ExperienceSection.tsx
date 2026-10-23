import React from 'react';
import { motion } from 'framer-motion';

export const ExperienceSection: React.FC = () => (
  <section id="experience" className="bg-[#050505] px-6 py-28 text-[#eee8df] sm:px-10 lg:px-20">
    <div className="mx-auto max-w-7xl">
      <div className="mb-5 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-[#d4af37]"><span>05 / EDUCATION & CREDENTIALS</span><span className="h-px w-20 bg-[#d4af37]/40" /></div>
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-5xl font-black uppercase leading-[.88] tracking-[-.04em] sm:text-7xl">Engineering<br /><span className="text-[#b79a68]">background.</span></h2>
          <div className="mt-10 border-l border-[#d4af37]/40 pl-6">
            <p className="font-mono text-[10px] tracking-[0.18em] text-[#d4af37]">2022 — 2026</p>
            <h3 className="mt-3 text-xl font-semibold text-white">B.E. / B.Tech — Civil Engineering</h3>
            <p className="mt-2 text-sm leading-6 text-[#8f8881]">Babasaheb Naik College of Engineering, Pusad (Amravati University)</p>
            <p className="mt-4 font-mono text-xs text-[#b9b0a7]">CGPA 7.43</p>
          </div>
        </motion.div>
        <div className="space-y-4">
          {[
            ['OCI CERTIFIED ARCHITECT ASSOCIATE', 'Oracle University', 'Aug 2026'],
            ['AZURE DEVOPS TRAINING — AZ-400 ALIGNED', 'Naresh IT, Hyderabad', 'Training'],
            ['LINUX ADMINISTRATION TRAINING', 'Naresh IT, Hyderabad', 'Training'],
          ].map(([title, org, date], index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="border border-white/10 bg-[#0b0b0b] p-6">
              <div className="flex items-start justify-between gap-5"><p className="font-mono text-[9px] tracking-[0.16em] text-[#d4af37]">CERTIFICATION {String(index + 1).padStart(2, '0')}</p><span className="font-mono text-[9px] text-[#625c56]">{date}</span></div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3><p className="mt-2 text-sm text-[#8f8881]">{org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
