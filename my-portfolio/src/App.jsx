import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, MessageSquare, ChevronDown, Star, GitBranch } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const projects = [
    {
      title: "Task Management App",
      description: "A responsive React app for managing daily tasks with local storage persistence.",
      tech: ["React", "JavaScript", "CSS3", "Local Storage"],
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      title: "Weather Dashboard",
      description: "Clean weather app consuming REST APIs with dynamic backgrounds.",
      tech: ["HTML5", "JavaScript", "Weather API", "CSS Grid"],
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      title: "Personal Blog",
      description: "Static blog built with modern web technologies and responsive design.",
      tech: ["HTML5", "CSS3", "JavaScript", "Git"],
      github: "#",
      demo: "#",
      status: "In Progress"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 75 },
    { name: "React", level: 65 },
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "Git", level: 70 },
    { name: "Node.js", level: 45 }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Background Pattern Overlay for High-Res Screens */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="w-full max-w-none px-6 xl:px-12 2xl:px-24 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              YourName.dev
            </h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen w-full flex items-center justify-center relative px-6 xl:px-12 2xl:px-24">
        <div className={`text-center transition-all duration-1000 w-full max-w-5xl mx-auto ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
              <Code size={48} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Junior Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl xl:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Passionate about creating clean, responsive web experiences with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-md sm:max-w-none mx-auto">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 flex-wrap">
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 xl:py-32 bg-black/20 w-full">
        <div className="w-full px-6 xl:px-12 2xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I'm a passionate junior developer eager to contribute to meaningful projects and continue learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-12 xl:gap-20 items-center max-w-7xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I discovered my passion for web development through online courses and hands-on projects. 
                While I'm early in my career, I bring enthusiasm, fresh perspectives, and a strong 
                commitment to writing clean, maintainable code.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I enjoy problem-solving and learning new technologies. My goal is to join a team where 
                I can contribute while growing as a developer.
              </p>
              <div className="flex items-center space-x-4">
                <User className="text-blue-400" size={20} />
                <span className="text-gray-300">Always learning, always growing</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 xl:py-32 w-full">
        <div className="w-full px-6 xl:px-12 2xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are some projects I've worked on to practice and showcase my skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 max-w-none">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 xl:py-32 bg-black/20 w-full">
        <div className="w-full px-6 xl:px-12 2xl:px-24 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and would love to hear about potential projects or roles
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <Mail className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">your.email@example.com</p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <Github className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300">github.com/yourusername</p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <Linkedin className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">linkedin.com/in/yourname</p>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1">
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 w-full">
        <div className="w-full px-6 xl:px-12 2xl:px-24 text-center">
          <p className="text-gray-400">
            © 2025 Your Name. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}