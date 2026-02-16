"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Send,
  Database,
  Shield,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Zap,
  Network,
  GraduationCap,
  BookOpen,
  Award
} from "lucide-react";
import Scene from "@/components/ServerCore";
import TypewriterEffect from "@/components/TypewriterEffect";

const skills = [
  "Linux (Debian/Ubuntu)", "Docker & Containerization", "Ansible Automation",
  "Zabbix / Prometheus", "Cisco CCNA", "MikroTik RouterOS",
  "Python Scripting", "Bash", "Git / GitLab CI",
  "Proxmox VE", "FreeIPA", "Huawei Enterprise"
];

const achievements = [
  {
    title: "Оптимизация сети",
    value: "-40% Latency",
    desc: "Снизил задержку в сети за счет оптимизация STP и уменьшения широковещательного шторма."
  },
  {
    title: "Uptime систем",
    value: "99.99%",
    desc: "Внедрил отказоустойчивые кластеры Proxmox, обеспечив непрерывность бизнес-процессов."
  },
  {
    title: "Автоматизация",
    value: "2x Faster",
    desc: "Сократил время развертывания инфраструктуры с помощью Ansible плейбуков."
  }
];

const experience = [
  {
    company: "ООО 'СитиТелеком'",
    role: "Начальник тех. поддержки / Сетевой инженер",
    period: "Октябрь 2022 — Май 2024",
    desc: [
      "Администрирование L1-L3 сетевой инфраструктуры (Cisco, Eltex, MikroTik).",
      "Развертывание и поддержка систем мониторинга (Zabbix, Grafana).",
      "Автоматизация рутинных задач с помощью Bash и Ansible.",
      "Диагностика сложных сетевых проблем (Wireshark, TCPdump)."
    ]
  },
  {
    company: "Администрация города Армавир",
    role: "Ведущий специалист фин. управления",
    period: "Июль 2024 — Ноябрь 2024",
    desc: [
      "Обеспечение 99.9% доступности серверов финансовых систем.",
      "Миграция рабочих станций на отечественное ПО (Linux-стек).",
      "Управление закупками IT-оборудования (44-ФЗ)."
    ]
  }
];

const conferences = [
  {
    name: "Open IT LAB",
    role: "Networking & Architecture",
    topics: ["BaseALT", "IDECO"],
    date: "2026"
  }
];

const education = [
  {
    institution: "Московский технологический институт",
    specialty: "Интернет технологии и мобильные приложения",
    period: "до 2028",
    type: "Высшее образование",
    icon: <GraduationCap size={18} />
  },
  {
    institution: "ГБПОУ КК АЮТ",
    specialty: "Сетевой и системный администратор",
    period: "2024",
    type: "Среднее профессиональное",
    icon: <BookOpen size={18} />
  },
  {
    institution: "Cisco Systems",
    specialty: "CCNA (Cisco Certified Network Associate)",
    period: "Certified",
    type: "Сертификация",
    icon: <Award size={18} />
  },
  {
    institution: "ООО Навигатор",
    specialty: "Преподаватель по сетевому и системному администрированию и ИБ",
    period: "Диплом",
    type: "Доп. образование",
    icon: <Shield size={18} />
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen text-emerald-500 font-mono selection:bg-emerald-500 selection:text-black antialiased">
      
      <Scene />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-32 space-y-32">
        
        <section className="min-h-[70vh] flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs text-emerald-800 mb-4 tracking-[0.3em] font-bold">
              SYSTEM_STATUS: ONLINE // ENCRYPTION: AES-256
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              <span className="text-emerald-500">root@</span>marenkov<span className="animate-pulse">:~#</span>
            </h1>
            
            <div className="space-y-2 mb-8">
              <h2 className="text-2xl md:text-3xl text-emerald-400 flex items-center gap-3">
                <ChevronRight className="text-emerald-600" />
                Maxim Marenkov
              </h2>
              <div className="text-slate-500 text-sm pl-8 italic">
                {">"} Network Engineer & DevOps Specialist
              </div>
            </div>

            <TypewriterEffect 
              text="Инженер по сетевой инфраструктуре и автоматизации. Проектирую отказоустойчивые системы, внедряю CI/CD и обеспечиваю мониторинг Enterprise-уровня."
              className="max-w-2xl text-slate-400 leading-relaxed border-l-2 border-emerald-900 pl-6 py-2 bg-emerald-950/5"
              delay={0.5}
              speed={40}
            />
          </motion.div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-10 text-emerald-400 border-b border-emerald-900 pb-2 w-fit">
            <Zap size={20} />
            <span className="text-xl tracking-widest uppercase">/sys/metrics</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.4)" }}
                className="group p-6 border border-emerald-900/30 bg-black/40 backdrop-blur-md relative overflow-hidden"
              >
                <div className="text-3xl font-bold text-white mb-2 tracking-tighter">{item.value}</div>
                <div className="text-emerald-500 text-xs font-bold mb-3 uppercase tracking-widest">
                  <TypewriterEffect text={item.title} delay={0.2} />
                </div>
                <TypewriterEffect text={item.desc} className="text-xs text-slate-500 leading-tight" speed={50} />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-10 text-emerald-400 border-b border-emerald-900 pb-2 w-fit">
            <Cpu size={20} />
            <span className="text-xl tracking-widest uppercase">/usr/bin/tools</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="group border border-emerald-900/50 p-3 bg-black/20 backdrop-blur-sm flex items-center justify-between"
              >
                <TypewriterEffect 
                  text={skill} 
                  className="text-xs text-slate-400 group-hover:text-emerald-400 transition-colors"
                  delay={i * 0.05}
                />
                <div className="w-1 h-1 bg-emerald-900 group-hover:bg-emerald-500 transition-all shadow-[0_0_5px_#10b981]" />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience">
          <div className="flex items-center gap-3 mb-10 text-emerald-400 border-b border-emerald-900 pb-2 w-fit">
            <Database size={20} />
            <span className="text-xl tracking-widest uppercase">/var/log/experience</span>
          </div>

          <div className="space-y-6">
            {experience.map((job, i) => (
              <motion.div 
                key={i}
                className="group relative p-8 border border-emerald-900/30 bg-black/60 backdrop-blur-lg rounded-sm"
              >
                <div className="flex flex-col md:flex-row justify-between mb-6">
                  <div>
                    <div className="text-[10px] text-emerald-700 font-bold mb-1 tracking-widest uppercase">
                      {job.period}
                    </div>
                    <h4 className="text-xl font-bold text-white tracking-tight uppercase">
                      <TypewriterEffect text={job.role} speed={30} />
                    </h4>
                    <div className="text-emerald-500 text-sm mt-1">@ {job.company}</div>
                  </div>
                </div>

                <div className="space-y-3 border-l border-emerald-900/50 pl-6">
                  {job.desc.map((item, idx) => (
                    <div key={idx} className="flex gap-4 text-sm text-slate-400">
                      <span className="text-emerald-900 shrink-0">[{idx}]</span>
                      <TypewriterEffect text={item} delay={0.5 + idx * 0.1} speed={40} />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-10 text-emerald-400 border-b border-emerald-900 pb-2 w-fit">
            <GraduationCap size={20} />
            <span className="text-xl tracking-widest uppercase">/mnt/storage/education</span>
          </div>

          <div className="grid gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="group p-6 border border-emerald-900/30 bg-black/40 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-950/20 border border-emerald-900/50 text-emerald-500 group-hover:scale-110 transition-transform">
                    {edu.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-emerald-800 font-bold uppercase tracking-widest mb-1">
                      {edu.type}
                    </div>
                    <h4 className="text-white font-bold text-lg leading-tight">
                      <TypewriterEffect text={edu.specialty} delay={0.1} />
                    </h4>
                    <div className="text-slate-500 text-xs mt-1">{edu.institution}</div>
                  </div>
                </div>
                <div className="text-emerald-600 font-mono text-sm font-bold border border-emerald-900/50 px-4 py-1">
                  {edu.period}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-10 text-emerald-400 border-b border-emerald-900 pb-2 w-fit">
            <Network size={20} />
            <span className="text-xl tracking-widest uppercase">/var/log/events</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {conferences.map((conf, i) => (
              <motion.div
                key={i}
                className="p-5 border border-emerald-900/40 bg-black/40 backdrop-blur-md group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-white font-bold text-lg group-hover:text-emerald-400 transition-colors">
                    {conf.name}
                  </h4>
                  <span className="text-[10px] text-emerald-700">{conf.date}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {conf.topics.map((topic, idx) => (
                    <span key={idx} className="text-[9px] bg-emerald-950/30 text-slate-500 px-2 py-0.5 border border-emerald-900/20 uppercase">
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="pb-32">
          <div className="border border-emerald-500/20 bg-emerald-500/5 p-8 md:p-12 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30" />
            
            <h2 className="text-3xl font-bold text-white text-center mb-12 tracking-tighter uppercase font-mono">
              Establish Connection
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <a href="tel:+79385283022" className="group flex flex-col items-center gap-4 p-6 border border-emerald-900/30 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300">
                <div className="p-3 rounded-full bg-emerald-950/20 text-emerald-500 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <span className="text-slate-300 font-mono text-sm">+7 (938) 528-30-22</span>
              </a>

              <a 
                href="https://t.me/maks_marenkov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 p-6 border border-emerald-900/30 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-emerald-950/20 text-emerald-500 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0)] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  <Send size={24} />
                </div>
                <span className="text-slate-300 font-mono text-sm tracking-tight">@maks_marenkov</span>
              </a>

              <a href="mailto:m.maks1240@gmail.com" className="group flex flex-col items-center gap-4 p-6 border border-emerald-900/30 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300">
                <div className="p-3 rounded-full bg-emerald-950/20 text-emerald-500 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <span className="text-slate-300 font-mono text-sm truncate w-full text-center">m.maks1240@gmail.com</span>
              </a>
            </div>

            <div className="mt-16 pt-8 border-t border-emerald-900/30 text-center">
              <motion.a 
                href="https://github.com/maks-marenkov"
                target="_blank"
                className="text-[10px] text-emerald-900 hover:text-emerald-400 transition-colors tracking-[0.5em] font-bold uppercase"
              >
                GITHUB://MAKS-MARENKOV
              </motion.a>
            </div>
          </div>
        </section>
      </div>
      
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
