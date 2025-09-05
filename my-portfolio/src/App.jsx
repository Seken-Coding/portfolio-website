import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, MessageSquare, ChevronDown, Star, GitBranch, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Optimize scroll listener for active section detection
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Preload critical resources
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'font';
    preloadLink.href = '/fonts/inter.woff2';
    preloadLink.crossOrigin = 'anonymous';
    document.head.appendChild(preloadLink);
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      document.head.removeChild(preloadLink);
    };
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setMobileMenuOpen(false); // Close mobile menu when navigating
  }, []);

  const projects = useMemo(() => [
    {
      title: "Task Management App",
      description: "A responsive React application for managing daily tasks with local storage persistence, drag-and-drop functionality, and priority levels.",
      tech: ["React", "JavaScript", "CSS3", "Local Storage", "React DnD"],
      github: "https://github.com/alexdev/task-manager",
      demo: "https://task-manager-demo.netlify.app",
      status: "Completed"
    },
    {
      title: "Weather Dashboard",
      description: "A clean, intuitive weather application that consumes REST APIs with dynamic backgrounds that change based on weather conditions.",
      tech: ["HTML5", "JavaScript", "OpenWeather API", "CSS Grid", "Chart.js"],
      github: "https://github.com/alexdev/weather-dashboard",
      demo: "https://weather-dash-demo.vercel.app",
      status: "Completed"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and dark theme.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Vite", "Framer Motion"],
      github: "https://github.com/alexdev/portfolio-v2",
      demo: "https://alexdev-portfolio.netlify.app",
      status: "In Progress"
    }
  ], []);

  const skills = useMemo(() => [
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Git", level: 75 },
    { name: "Node.js", level: 65 }
  ], []);

  const technicalExpertise = useMemo(() => [
    {
      icon: Code,
      title: "Frontend Frameworks",
      items: ["React & Hooks", "Component Design", "State Management", "Modern JavaScript"],
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Briefcase,
      title: "Styling & UI",
      items: ["Tailwind CSS", "Responsive Design", "CSS Grid & Flexbox", "Animations"],
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Star,
      title: "Tools & Build",
      items: ["Vite", "NPM/Yarn", "Git & GitHub", "Browser DevTools"],
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: GitBranch,
      title: "Best Practices",
      items: ["Clean Code", "Accessibility", "Performance", "Testing Basics"],
      color: "from-orange-400 to-red-500"
    }
  ], []);

  // Memoize navigation items to prevent recreation
  const navigationItems = useMemo(() => ['home', 'about', 'projects', 'contact'], []);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alex.dev
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {navigationItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-2 py-1 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                  aria-label={`Navigate to ${section} section`}
                  aria-current={activeSection === section ? 'page' : undefined}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent rounded-md p-1 transition-colors"
              aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div 
            id="mobile-menu"
            className={`md:hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen 
                ? 'max-h-64 opacity-100 mt-4' 
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}
            aria-hidden={!mobileMenuOpen}
          >
            <nav className="flex flex-col space-y-3 py-4 border-t border-white/10" role="navigation" aria-label="Mobile navigation">
              {navigationItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-left py-2 px-4 rounded-lg transition-all hover:bg-white/10 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent ${
                    activeSection === section 
                      ? 'text-blue-400 bg-white/10' 
                      : 'text-gray-300'
                  }`}
                  aria-label={`Navigate to ${section} section`}
                  aria-current={activeSection === section ? 'page' : undefined}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen w-screen flex items-center justify-center relative" role="banner">
        <div className={`text-center px-4 sm:px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center" role="img" aria-label="Code icon representing web development">
              <Code size={32} className="sm:size-12 text-white" aria-hidden="true" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Passionate about creating clean, responsive web experiences with modern technologies and accessibility in mind
          </p>          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="View my portfolio projects"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Go to contact section"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-4 sm:space-x-6 flex-wrap gap-y-4" role="list" aria-label="Social media links">
            <a href="https://github.com/alexdev" className="text-gray-400 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md p-1" aria-label="Visit my GitHub profile" role="listitem" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="sm:size-6" aria-hidden="true" />
            </a>
            <a href="https://linkedin.com/in/alexdev" className="text-gray-400 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md p-1" aria-label="Connect with me on LinkedIn" role="listitem" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} className="sm:size-6" aria-hidden="true" />
            </a>
            <a href="mailto:alex@example.com" className="text-gray-400 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md p-1" aria-label="Send me an email" role="listitem">
              <Mail size={20} className="sm:size-6" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-black/20 w-screen" role="main">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              I'm a passionate frontend developer who loves building user-friendly applications and learning new technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">My Journey</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                I discovered my passion for web development through online courses and hands-on projects. 
                Starting with HTML and CSS, I quickly fell in love with JavaScript and React. I enjoy creating 
                responsive, accessible websites that provide great user experiences.
              </p>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                I'm constantly learning new technologies and best practices. Currently focused on improving my 
                React skills and exploring modern frontend frameworks. I believe in writing clean, maintainable 
                code and collaborating effectively with teams.
              </p>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <User className="text-blue-400" size={18} aria-hidden="true" />
                <span className="text-sm sm:text-base text-gray-300">Always learning, always building</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">Skills</h3>
              <div className="space-y-3 sm:space-y-4" role="list" aria-label="Technical skills and proficiency levels">
                {skills.map((skill) => (
                  <div key={skill.name} role="listitem">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400" aria-label={`${skill.level} percent proficiency`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name} skill level: ${skill.level}%`}>
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                        aria-hidden="true"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-black/10 w-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Frontend technologies and tools I work with to build modern web applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {technicalExpertise.map((category, index) => (
              <div key={index} className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* API Endpoints Demo */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8 text-white">Sample API Endpoints</h3>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="space-y-3">
                {[
                  { method: "GET", endpoint: "/api/users", desc: "Retrieve all users", color: "text-green-400" },
                  { method: "POST", endpoint: "/api/auth/login", desc: "User authentication", color: "text-blue-400" },
                  { method: "PUT", endpoint: "/api/users/:id", desc: "Update user profile", color: "text-yellow-400" },
                  { method: "DELETE", endpoint: "/api/users/:id", desc: "Delete user account", color: "text-red-400" }
                ].map((api, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                    <div className="flex items-center space-x-4">
                      <span className={`font-mono font-bold ${api.color} w-12`}>{api.method}</span>
                      <code className="text-gray-300 font-mono">{api.endpoint}</code>
                    </div>
                    <span className="text-gray-400 text-sm">{api.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 w-screen" role="region" aria-labelledby="projects-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Here are some projects I've worked on to practice and showcase my skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list" aria-label="Portfolio projects">
            {projects.map((project, index) => (
              <article 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 focus-within:ring-2 focus-within:ring-blue-400 will-change-transform"
                role="listitem"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span 
                    className={`px-3 py-1 rounded-full text-xs ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}
                    aria-label={`Project status: ${project.status}`}
                  >
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                      role="listitem"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md p-1"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github size={16} aria-hidden="true" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md p-1"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-black/20 w-screen" role="region" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and would love to discuss potential projects or collaborate on interesting ideas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12" role="list" aria-label="Contact methods">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10" role="listitem">
              <Mail className="mx-auto mb-4 text-blue-400" size={32} aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">
                <a href="mailto:alex@example.com" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md">
                  alex@example.com
                </a>
              </p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10" role="listitem">
              <Github className="mx-auto mb-4 text-blue-400" size={32} aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300">
                <a href="https://github.com/alexdev" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md" target="_blank" rel="noopener noreferrer">
                  github.com/alexdev
                </a>
              </p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10" role="listitem">
              <Linkedin className="mx-auto mb-4 text-blue-400" size={32} aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">
                <a href="https://linkedin.com/in/alexdev" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/alexdev
                </a>
              </p>
            </div>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900" aria-label="Download my resume">
              <ExternalLink size={20} aria-hidden="true" />
              <span>Download Resume</span>
            </button>
            <div className="flex space-x-4">
              <button className="flex-1 px-6 py-3 border border-blue-400/50 text-blue-400 rounded-full font-medium hover:bg-blue-400/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900" aria-label="Schedule a call with me">
                Schedule Call
              </button>
              <button className="flex-1 px-6 py-3 border border-purple-400/50 text-purple-400 rounded-full font-medium hover:bg-purple-400/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900" aria-label="Send me a message">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-white/10 w-screen" role="contentinfo">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 text-center">
          <p className="text-sm sm:text-base text-gray-400">
            © 2025 Alex Chen. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}