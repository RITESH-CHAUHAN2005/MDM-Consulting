import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function ProjectsPage() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      description: "Fully responsive e-commerce platform with advanced product filtering, secure checkout, and customer dashboard.",
      client: "Fashion Retailer",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results: "150% increase in online sales within first 3 months",
      caseStudy: "Our client needed a modern e-commerce solution to replace their outdated platform. We built a fully responsive site with advanced filtering, secure payments, and a customer dashboard. The result was a 150% increase in online sales within 3 months and a 40% decrease in cart abandonment."
    },
    {
      id: 2,
      title: "Brand Identity Refresh",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      description: "Complete brand overhaul including new logo, color palette, typography, and brand guidelines.",
      client: "Financial Services Firm",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
      results: "27% increase in brand recognition measured through consumer surveys",
      caseStudy: "Working with a well-established financial services firm, we conducted market research that revealed their brand was perceived as outdated. We developed a comprehensive rebrand that maintained their professional reputation while modernizing their visual identity. Post-launch surveys showed a 27% increase in brand recognition and positive sentiment."
    },
    {
      id: 3,
      title: "Social Media Growth Campaign",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      description: "Strategic social media content and advertising campaign across multiple platforms.",
      client: "Fitness Startup",
      technologies: ["Instagram", "Facebook", "TikTok", "Canva"],
      results: "Grew audience from 5k to 50k followers in 4 months",
      caseStudy: "Our fitness startup client needed to build brand awareness quickly in a competitive market. We developed a multi-platform strategy focusing on authentic content that showcased real customer transformations. The campaign featured targeted ads and influencer partnerships, growing their following from 5,000 to over 50,000 in just 4 months."
    },
    {
      id: 4,
      title: "Restaurant Booking System",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      description: "Custom online reservation system with table management and customer notification system.",
      client: "Restaurant Chain",
      technologies: ["Vue.js", "Firebase", "Twilio API"],
      results: "Reduced no-shows by 35% and increased table turnover efficiency"
    },
    {
      id: 5,
      title: "Product Packaging Design",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      description: "Innovative packaging design for a new product line that stood out on retail shelves.",
      client: "Organic Food Brand",
      technologies: ["Adobe Illustrator", "3D Rendering", "Packaging Mockups"],
      results: "Product sold out within 48 hours of launch in all target markets"
    },
    {
      id: 6,
      title: "Corporate Training Platform",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      description: "Learning management system with course creation tools, progress tracking, and certification.",
      client: "Enterprise Technology Company",
      technologies: ["React", "Redux", "Node.js", "MySQL"],
      results: "90% course completion rate compared to 40% with previous system"
    },
    {
      id: 7,
      title: "Video Marketing Campaign",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      description: "Series of engaging short-form videos for product launch campaign.",
      client: "Tech Accessories Brand",
      technologies: ["Premier Pro", "After Effects", "YouTube", "TikTok"],
      results: "5.2 million views across platforms within launch week"
    },
    {
      id: 8,
      title: "Real Estate Listing Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      description: "Custom property listing website with advanced search, virtual tours, and agent dashboard.",
      client: "Regional Real Estate Agency",
      technologies: ["React", "MongoDB", "Google Maps API", "AWS"],
      results: "Reduced cost-per-lead by 42% compared to third-party platforms"
    }
  ];

  const [filter, setFilter] = React.useState('All');
  const [showCaseStudy, setShowCaseStudy] = React.useState<number | null>(null);
  const categories = ['All', 'Web Design', 'Web Development', 'Web App', 'Graphic Design', 'Social Media'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const toggleCaseStudy = (id: number) => {
    if (showCaseStudy === id) {
      setShowCaseStudy(null);
    } else {
      setShowCaseStudy(id);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-br from-mdm-blue to-mdm-purple" id="projects-top">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Our Creative Portfolio
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Explore our collection of successful projects that have helped businesses achieve their goals
                and stand out in their respective industries.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-16 px-4 bg-white">
          <div className="container-custom">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  className={filter === category ? "bg-mdm-blue" : ""}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-mdm-blue/10 text-mdm-blue px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-gray-100 px-2 py-1 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-mdm-coral font-medium">{project.client}</span>
                      <Button 
                        variant="link" 
                        className="text-mdm-blue p-0"
                        onClick={() => toggleCaseStudy(project.id)}
                      >
                        {showCaseStudy === project.id ? 'Hide Case Study' : 'View Case Study'}
                      </Button>
                    </div>
                    
                    {/* Case Study Expanded Section */}
                    {showCaseStudy === project.id && project.caseStudy && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-lg mb-2">Case Study</h4>
                        <p className="text-gray-700">{project.caseStudy}</p>
                        
                        <div className="mt-4">
                          <h5 className="font-medium text-sm text-gray-700 mb-1">Key Results:</h5>
                          <p className="text-mdm-coral font-medium">{project.results}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
