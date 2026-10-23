import React from 'react';
import { motion } from 'framer-motion';

const links = [
  ['GITHUB', 'https://github.com/Sharjilzaidi29'],
  ['LINKEDIN', 'https://www.linkedin.com/in/sharjil-zaidi-b2996b421'],
  ['INSTAGRAM', 'https://www.instagram.com/sharjil__sheikh_'],
];

export const ContactSection: React.FC = () => (
  <footer id="contact" className="relative overflow-hidden bg-[#070707] px-6 py-28 text-[#eee8df] sm:px-10 lg:px-20">
    <div className="mx-auto max-w-7xl">
      <div className="mb-5 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-[#d4af37]"><span>06 / CONTACT</span><span className="h-px w-20 bg-[#d4af37]/40" /></div>
      <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="max-w-4xl text-6xl font-black uppercase leading-[.84] tracking-[-.05em] sm:text-8xl">Let&apos;s build<br /><span className="text-[#b79a68]">something reliable.</span></h2>
          <p className="mt-8 max-w-2xl text-sm leading-7 text-[#958d85]">Open to junior Cloud, DevOps, and Azure DevOps opportunities, infrastructure projects, and technical collaborations.</p>
          <a href="mailto:sharjilzaidi.dev@gmail.com" className="mt-8 inline-block text-xl font-semibold text-[#eee8df] underline decoration-[#d4af37]/60 underline-offset-8 transition hover:text-[#d4af37]">sharjilzaidi.dev@gmail.com</a>
        </motion.div>
        <div className="space-y-3">
          {links.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer" className="flex items-center justify-between border border-white/10 bg-[#0c0c0c] px-5 py-4 font-mono text-[10px] tracking-[0.18em] text-[#bcb4ab] transition hover:border-[#d4af37] hover:text-white"><span>{name}</span><span>↗</span></a>)}
          <a href="tel:+919552272435" className="flex items-center justify-between border border-white/10 bg-[#0c0c0c] px-5 py-4 font-mono text-[10px] tracking-[0.18em] text-[#bcb4ab] transition hover:border-[#d4af37] hover:text-white"><span>+91 95522 72435</span><span>CALL ↗</span></a>
          <a href="./Md_Sharjil_Zaidi_Resume.pdf" download className="mt-4 flex items-center justify-center border border-[#d4af37] bg-[#d4af37] px-5 py-4 font-mono text-[10px] font-bold tracking-[0.18em] text-black transition hover:bg-transparent hover:text-[#f1dfbd]">DOWNLOAD RESUME</a>
        </div>
      </div>
      <div className="mt-20 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 font-mono text-[8px] tracking-[0.18em] text-[#5d5751] sm:flex-row"><span>© {new Date().getFullYear()} SHARJIL ZAIDI</span><span>CLOUD // DEVOPS // AUTOMATION</span></div>
    </div>
  </footer>
);
