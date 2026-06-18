"use client";

import Image from "next/image";
import { useState } from "react";

const translations = {
  es: {
    home: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos",
    experience: "Experiencia",
    contact: "Contacto",
    skills: "Habilidades",

    heroTitle: "Construyendo soluciones digitales modernas.",
      heroDescription:
      "Estudiante de Ingeniería de Software enfocado en Inteligencia Artificial, Analítica de Datos, Power BI y productos digitales escalables.",

      projectsTitle: "Proyectos Destacados",
      projectsDescription: "Mostrando productos digitales y sistemas de impacto.",

      aboutTitle:
      "La ingeniería se encuentra con el software y la innovación.",

      aboutDescription:
      "Combino ingeniería de software, inteligencia artificial, analítica de datos y conocimientos automotrices para crear productos digitales modernos enfocados en la eficiencia, la automatización y la experiencia del usuario.",
      skillsTitle: "Mis Habilidades",
      skillsDescription: "Tecnologías modernas y herramientas de ingeniería.",  

      experienceTitle: "Experiencia",
      experienceDescription: "Educación y trayectoria profesional.",

      contactTitle: "Construyamos algo grandioso juntos.",
      contactDescription: "Abierto a oportunidades en ingeniería de software, proyectos de IA, soluciones analíticas y productos digitales innovadores.",

    },

  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    skills: "Skills",

    heroTitle: "Building modern digital solutions.",
    heroDescription:
      "Software Engineering student focused on Artificial Intelligence, Data Analytics, Power BI and scalable digital products.",

      projectsTitle: "Featured Projects",
      projectsDescription: "Showcasing impactful digital products and systems.",

      aboutTitle:
      "Engineering meets software and innovation.",

      aboutDescription:
      "I combine software engineering, AI, analytics and automotive knowledge to create modern digital products focused on efficiency, automation and user experience.",

      skillsTitle: "My Skills",
      skillsDescription: "Modern technologies and engineering tools.",

      experienceTitle: "Experience",
      experienceDescription: "Education and professional journey.",

      contactTitle: "Let's build something great together.",
      contactDescription: "Open to software engineering opportunities, AI projects, analytics solutions and innovative digital products.",
  },
  
};
export default function PortfolioLanding() {

   const [language, setLanguage] = useState("en");

  const t = translations[language as keyof typeof translations];

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-100 font-sans overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* PREMIUM BACKGROUND */}
<div className="absolute inset-0 -z-10 overflow-hidden">

  {/* Main Gradient */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%)]" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.16),transparent_35%)]" />

  {/* Glow Orb Left */}
  <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[120px]" />

  {/* Glow Orb Right */}
  <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[120px]" />

  {/* Grid */}
  <div
    className="absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(56,189,248,0.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(56,189,248,0.15) 1px, transparent 1px)
      `,
      backgroundSize: "80px 80px",
    }}
  />

  {/* Noise Texture */}
  <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

</div>
  {/* Blur Circle 1 */}
  <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-sky-500/20 blur-[120px] rounded-full animate-pulse" />

  {/* Blur Circle 2 */}
  <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-cyan-400/20 blur-[140px] rounded-full animate-pulse" />

  {/* Grid Background */}
  <div
    className="absolute inset-0 opacity-[0.06]"
    style={{
      backgroundImage: `
        linear-gradient(to right, #38bdf8 1px, transparent 1px),
        linear-gradient(to bottom, #38bdf8 1px, transparent 1px)
      `,
      backgroundSize: "80px 80px",
    }}
  />

  {/* Radial Glow */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(circle at center, rgba(56,189,248,0.12), transparent 60%)",
    }}
  />

  {/* Floating Stars */}
  <div className="absolute inset-0">
    {[...Array(40)].map((_, i) => (
      <span
        key={i}
        className="absolute w-[2px] h-[2px] bg-sky-300 rounded-full animate-pulse"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </div>
</div>
      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-transparent/70 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">
            Edwin Nova Arévalo
          </h1>

          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#about" className="hover:text-sky-400 transition">{t.about}</a>
            <a href="#skills" className="hover:text-sky-400 transition">{t.skills}</a>
            <a href="#projects" className="hover:text-sky-400 transition">{t.projects}</a>
            <a href="#experience" className="hover:text-sky-400 transition">{t.experience}</a>
            <a href="#contact" className="hover:text-sky-400 transition">{t.contact}</a>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-1 rounded-lg transition ${
                  language === "es"
                    ? "bg-sky-500 text-slate-950"
                    : "border border-slate-700 text-slate-400"
                }`}
              >
                ES
              </button>

              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-lg transition ${
                  language === "en"
                    ? "bg-sky-500 text-slate-950"
                    : "border border-slate-700 text-slate-400"
                }`}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* HERO */}
<section className="pt-40 pb-24 px-6">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT SIDE */}
    <div>
      <p className="text-sky-400 mb-4 uppercase tracking-[0.3em] text-sm">
        Digital Engineer
      </p>

      <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
        {t.heroTitle}
      </h1>

      <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-10">
        {t.heroDescription}
      </p>

      <div className="flex flex-wrap gap-4">
        <button className="bg-sky-500 hover:bg-sky-400 transition px-6 py-3 rounded-2xl font-semibold text-slate-950 shadow-lg shadow-sky-500/20">
          View Projects
        </button>

        <button className="border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition px-6 py-3 rounded-2xl font-semibold">
          Download CV
        </button>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex justify-center">
      <div className="relative">

        <Image
          src="/images/Perfil.png"
          alt="Edwin Nova"
          width={450}
          height={450}
          priority
          className="rounded-3xl border border-slate-700 shadow-2xl"
        />

        <div className="absolute -bottom-6 -right-6 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-2xl px-5 py-4 shadow-xl">
          <h3 className="font-bold text-sky-400">
            Edwin Nova
          </h3>

          <p className="text-sm text-slate-400">
            Software Engineer Student
          </p>

          <p className="text-sm text-slate-400">
            Medellín, Colombia
          </p>
        </div>

      </div>
    </div>

  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sky-400 uppercase tracking-[0.2em] text-sm mb-4">
               {t.about}
            </p>

            <h2 className="text-4xl font-bold mb-6">
             {t.aboutTitle} 
            </h2>

            <p className="text-slate-400 leading-relaxed text-lg">
              {t.aboutDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-transparent/60 backdrop-blur-xl rounded-3xl border border-slate-800 p-8">
              <h3 className="text-4xl font-black text-sky-400">15+</h3>
              <p className="text-slate-400 mt-2">Technologies learned</p>
            </div>

            <div className="bg-transparent/60 backdrop-blur-xl rounded-3xl border border-slate-800 p-8">
              <h3 className="text-4xl font-black text-sky-400">10+</h3>
              <p className="text-slate-400 mt-2">Projects developed</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-sky-400 uppercase tracking-[0.2em] text-sm mb-4">
              {t.skills}
            </p>

            <h2 className="text-4xl font-bold">
              {t.skillsDescription}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Frontend",
                items: ["React", "Angular", "Tailwind", "JavaScript"],
              },
              {
                title: "Backend",
                items: ["Node.js", "Python", "Java", "C#"],
              },
              {
                title: "Data & AI",
                items: ["Power BI", "SQL", "Analytics", "Machine Learning"],
              },
              {
                title: "Engineering",
                items: ["Automotive", "Diagnostics", "Systems", "Optimization"],
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-transparent/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 hover:border-sky-400 transition"
              >
                <h3 className="text-xl font-bold mb-6">{skill.title}</h3>

                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="bg-slate-800 px-3 py-2 rounded-xl text-sm text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-sky-400 uppercase tracking-[0.2em] text-sm mb-4">
              {t.projects}
            </p>

            <h2 className="text-4xl font-bold">
              {t.projectsDescription}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Form CRUD Platform",
                image: "/images/Proyecto1.png",
                desc: "Platform with CRUD concept in a form.",
                technologies: ["React", "Node.js", "MySQL"],
              },
              {
                title: "mHealth Cardiovascular System",
                image: "/images/Proyecto2.png",
                desc: "Healthcare risk analysis system based on FHIR and SNOMED standards.",
                technologies: ["JSON", "FHIR", "SNOMED"],
              },
              {
                title: "Power BI Analytics Dashboards",
                image: "/images/Power Bi.png",
                desc: "Business intelligence dashboards focused on operational optimization.",
                technologies: ["Power BI", "DAX", "Data Modeling"],
              },
              {
                title: "Design Patterns Systems",
                image: "/images/Proyecto4.png",
                desc: "Software architecture implementations using Factory, Observer and Decorator.",
                technologies: ["Java", "C#", "Design Patterns"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-transparent/60 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden hover:-translate-y-1 transition duration-300"
              >
                {project.image && (
                  <div className="relative h-90">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800 rounded-full text-sm text-sky-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="bg-sky-500 hover:bg-sky-400 transition px-5 py-2 rounded-xl text-slate-950 font-semibold">
                      Demo
                    </button>

                    <button className="border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition px-5 py-2 rounded-xl font-semibold">
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-sky-400 uppercase tracking-[0.2em] text-sm mb-4">
              {t.experience}
            </p>

            <h2 className="text-4xl font-bold">
              {t.experienceDescription}
            </h2>
          </div>

          <div className="space-y-8 border-l border-slate-800 pl-8">
            {[
              {
                title: "Software Engineering",
                year: "Current",
                desc: "Focused on AI, scalable applications and modern software architecture.",
              },
              {
                title: "Power BI & Analytics",
                year: "2024",
                desc: "Business intelligence and operational dashboards.",
              },
              {
                title: "Mechanical Engineering",
                year: "Experience",
                desc: "Automotive systems and diagnostics expertise.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[42px] top-2 w-4 h-4 bg-sky-400 rounded-full" />

                <p className="text-sky-400 mb-2">{item.year}</p>

                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sky-400 uppercase tracking-[0.2em] text-sm mb-4">
            {t.contact}
          </p>

          <h2 className="text-5xl font-black mb-8">
            {t.contactTitle}
          </h2>

          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            {t.contactDescription}
          </p>

          <div className="flex justify-center flex-wrap gap-4">
            <button className="bg-sky-500 hover:bg-sky-400 transition px-8 py-4 rounded-2xl text-slate-950 font-bold">
              LinkedIn
            </button>

            <button className="border border-slate-700 hover:border-sky-400 hover:text-sky-400 transition px-8 py-4 rounded-2xl font-bold">
              GitHub
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
