import React from 'react';
import { motion } from 'framer-motion';

const groups = [
  ['CLOUD PLATFORMS', ['Microsoft Azure', 'Amazon Web Services (AWS)']],
  ['DEVOPS & CI/CD', ['Azure DevOps', 'CI/CD Pipelines', 'Jenkins', 'Git & GitHub', 'YAML']],
  ['OPERATING SYSTEMS', ['Linux', 'Windows']],
  ['CLOUD INFRASTRUCTURE', ['Azure VMs', 'Amazon EC2', 'VNet', 'VPC', 'Subnets', 'NSG', 'IAM', 'Load Balancing']],
  ['SCRIPTING & AUTOMATION', ['Bash / Shell Scripting', 'Azure CLI', 'PowerShell']],
  ['CONTAINERS & IaC', ['Docker', 'Kubernetes', 'Terraform', 'Ansible']],
  ['SECURITY & MONITORING', ['Microsoft Entra ID', 'RBAC', 'Azure Key Vault', 'Azure Monitor', 'Log Analytics']],
  ['DATA & SERVICES', ['Azure SQL', 'Blob Storage', 'File Storage', 'Azure App Service', 'Traffic Manager']],
];

export const SkillsSection: React.FC = () => (
  <section id="skills" className="relative overflow-hidden bg-[#080808] px-6 py-28 text-[#eee8df] sm:px-10 lg:px-20">
    <div className="mx-auto max-w-7xl">
      <div className="mb-5 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] text-[#d4af37]"><span>04 / TECH STACK</span><span className="h-px w-20 bg-[#d4af37]/40" /></div>
      <h2 className="mb-14 text-5xl font-black uppercase leading-[.88] tracking-[-.04em] sm:text-7xl">Tools I use<br /><span className="text-[#b79a68]">to ship.</span></h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map(([title, items]) => (
          <motion.div key={title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="min-h-[190px] border border-white/10 bg-[#0d0d0d] p-6 transition hover:-translate-y-1 hover:border-[#d4af37]/50">
            <p className="font-mono text-[9px] tracking-[0.18em] text-[#d4af37]">{title}</p>
            <div className="mt-5 flex flex-wrap gap-2">{(items as string[]).map((item) => <span key={item} className="text-sm text-[#c9c2ba]">{item}<span className="ml-2 text-[#514b45]">/</span></span>)}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
