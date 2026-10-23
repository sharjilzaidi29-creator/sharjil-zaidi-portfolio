import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    number: '01',
    title: 'E-Learning Web Application — CI/CD Automation',
    description: 'Implemented an automated CI/CD pipeline using Azure DevOps to build and deploy a Node.js web application to Azure App Service. Configured pipeline triggers, build artifacts, service connections, and deployment permissions, and troubleshot deployment issues using the Kudu Bash Console.',
    tech: ['Azure', 'Azure DevOps', 'Azure Repos', 'Azure Pipelines', 'Git', 'Linux', 'Node.js', 'App Service'],
    url: 'https://github.com/Sharjilzaidi29/MyElearningWebAppProj',
    metrics: ['CI BUILD', 'ARTIFACTS', 'CONTINUOUS DEPLOYMENT'],
  },
  {
    number: '02',
    title: 'High-Availability Web Infrastructure with Load Balancing',
    description: 'Deployed two IIS web servers on Azure Virtual Machines within an Azure Virtual Network and Availability Set. Configured an Azure Load Balancer with backend pool, health probe, and load-balancing rule, then tested traffic distribution and failover.',
    tech: ['Azure VMs', 'Load Balancer', 'VNet', 'IIS', 'Availability Sets', 'Entra ID', 'RBAC'],
    url: 'https://github.com/Sharjilzaidi29/Azure-HighAvailability-LoadBalancer-Project',
    metrics: ['HIGH AVAILABILITY', 'HEALTH PROBE', 'FAILOVER TEST'],
  },
];

export const ProjectsSection: React.FC = () => (
  <section id="work" className="relative bg-[#050505] px-6 py-28 text-[#eee8df] sm:px-10 lg:px-20">
    <div className="mx-auto max-w-7xl">
      <div className="mb-5 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-[#d4af37]"><span>03 / SELECTED WORK</span><span className="h-px w-20 bg-[#d4af37]/40" /></div>
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-4xl text-5xl font-black uppercase leading-[.88] tracking-[-.04em] sm:text-7xl">Systems that<br /><span className="text-[#b79a68]">actually ship.</span></h2>
        <p className="max-w-sm text-sm leading-6 text-[#89827b]">Hands-on Azure and DevOps work focused on deployment automation, infrastructure availability, networking, identity, and operational reliability.</p>
      </div>
      <div className="space-y-6">
        {projects.map((project) => (
          <motion.article key={project.number} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: .7 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 sm:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/80 to-transparent" />
            <span className="absolute right-5 top-1 font-mono text-[7rem] leading-none text-white/[0.025]">{project.number}</span>
            <div className="relative grid gap-9 lg:grid-cols-[1fr_280px]">
              <div>
                <div className="mb-4 font-mono text-[10px] tracking-[0.22em] text-[#d4af37]">PROJECT {project.number}</div>
                <h3 className="max-w-3xl text-3xl font-bold uppercase leading-tight tracking-[-.025em] text-white sm:text-5xl">{project.title}</h3>
                <p className="mt-6 max-w-3xl text-sm leading-7 text-[#aaa29a]">{project.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">{project.tech.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 font-mono text-[9px] tracking-[0.08em] text-[#c6beb6]">{item}</span>)}</div>
              </div>
              <div className="flex flex-col justify-between gap-7 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                <div className="space-y-3">{project.metrics.map((metric) => <div key={metric} className="border border-white/10 px-4 py-3 font-mono text-[9px] tracking-[0.14em] text-[#b5aca3]">✓ {metric}</div>)}</div>
                <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center border border-[#8c6d4f] px-5 py-3 font-mono text-[10px] tracking-[0.18em] text-[#ead8c7] transition hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black">VIEW ON GITHUB ↗</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
