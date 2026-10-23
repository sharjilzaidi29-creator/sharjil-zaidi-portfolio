import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/sharjil-profile.jpg';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EDUCATION', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-[#eee8df]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,rgba(212,175,55,0.12),transparent_28%),radial-gradient(circle_at_20%_30%,rgba(50,75,110,0.18),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:80px_80px]" />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden rounded-full border border-[#d4af37]/60 md:flex"
        animate={{ x: cursor.x - (hovered ? 22 : 4), y: cursor.y - (hovered ? 22 : 4), width: hovered ? 44 : 8, height: hovered ? 44 : 8 }}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <a
            href="#"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="font-mono text-sm font-bold tracking-[0.3em] text-[#f1dfbd]"
          >
            SHARJIL.
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="text-[10px] tracking-[0.22em] text-[#a89f94] transition hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <a
            href="./Md_Sharjil_Zaidi_Resume.pdf"
            download
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-[#8c6d4f]/60 px-4 py-2 font-mono text-[10px] tracking-[0.18em] text-[#ead8c7] transition hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black"
          >
            DOWNLOAD CV ↗
          </a>
        </header>

        <div className="flex flex-1 items-center py-10 lg:py-14">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              <p className="mb-5 font-mono text-[10px] tracking-[0.32em] text-[#d4af37]">01 / CLOUD & DEVOPS ENGINEER</p>
              <h1 className="max-w-4xl font-sans text-[clamp(3.7rem,9vw,8rem)] font-black uppercase leading-[0.84] tracking-[-0.055em]">
                <span className="block text-white">BUILD.</span>
                <span className="block bg-gradient-to-r from-[#f8e8c8] via-[#c99e5d] to-[#725020] bg-clip-text text-transparent">AUTOMATE.</span>
                <span className="block text-[#a79d91]">SCALE.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-sm leading-7 text-[#aaa198] sm:text-base">
                Hey, I’m Sharjil Zaidi, a Cloud & DevOps Engineer passionate about building reliable cloud infrastructure and automating workflows with modern technologies.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="border border-[#d4af37] bg-[#d4af37] px-6 py-3 font-mono text-[10px] tracking-[0.2em] text-black transition hover:bg-transparent hover:text-[#f7e7c4]">EXPLORE PROJECTS ↘</a>
                <a href="#contact" className="border border-white/20 px-6 py-3 font-mono text-[10px] tracking-[0.2em] text-[#ddd5cc] transition hover:border-[#d4af37]">LET&apos;S CONNECT ↗</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[9px] tracking-[0.16em] text-[#766d63]">
                <span>AZURE</span><span>AWS</span><span>CI/CD</span><span>TERRAFORM</span><span>DOCKER</span><span>KUBERNETES</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: 25 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[420px]"
            >
              <div className="absolute -inset-8 rounded-full bg-[#d4af37]/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#8c6d4f]/50 bg-[#0c0b0a] p-2 shadow-[0_30px_100px_rgba(0,0,0,.75)]">
                <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d4af37]" />
                  <span className="font-mono text-[8px] tracking-[0.2em] text-[#ddd5cc]">AVAILABLE FOR OPPORTUNITIES</span>
                </div>
                <img src={profileImage} alt="Sharjil Zaidi profile" className="h-[500px] w-full object-cover object-top" />
                <div className="absolute inset-x-2 bottom-2 bg-gradient-to-t from-black via-black/70 to-transparent p-6 pt-20">
                  <p className="font-mono text-[9px] tracking-[0.22em] text-[#d4af37]">SHARJIL ZAIDI</p>
                  <p className="mt-1 text-lg font-semibold text-white">Cloud & DevOps Engineer</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between font-mono text-[8px] tracking-[0.2em] text-[#665f58]">
                <span>AZURE // DEVOPS</span><span>HYDERABAD, INDIA</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[8px] tracking-[0.2em] text-[#615a53]">
          <span>SCROLL TO EXPLORE</span><span>SHARJILZAIDI.DEV</span>
        </div>
      </div>
    </section>
  );
};
