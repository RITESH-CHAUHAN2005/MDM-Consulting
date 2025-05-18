
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Portfolio() {
  const [category, setCategory] = useState('all');
  const navigate = useNavigate();
  
  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'web', name: 'Web Design' },
    { id: 'social', name: 'Social Media' },
    { id: 'graphic', name: 'Graphic Design' }
  ];
  
  const portfolioItems = [
    {
      id: 1,
      title: "Modern E-commerce Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500",
      description: "Responsive e-commerce platform with advanced features and seamless checkout."
    },
    {
      id: 2,
      title: "Social Media Campaign",
      category: "social",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500",
      description: "Engaging social campaign that increased audience engagement by 200%."
    },
    {
      id: 3,
      title: "Corporate Brand Identity",
      category: "graphic",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500",
      description: "Complete brand overhaul including logo, color palette, and brand guidelines."
    },
    {
      id: 4,
      title: "Financial Services Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500",
      description: "Professional website design for a leading financial consulting firm."
    },
    {
      id: 5,
      title: "Product Packaging Design",
      category: "graphic",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500",
      description: "Award-winning packaging design that increased retail sales by 40%."
    },
    {
      id: 6,
      title: "Social Media Branding",
      category: "social",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500",
      description: "Consistent and engaging social media visual identity across platforms."
    }
  ];
  
  const filteredItems = category === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === category);
  
  const handleViewAllProjects = () => {
    navigate('/projects');
    // Ensure smooth scroll to top of projects page
    setTimeout(() => {
      const projectsTop = document.getElementById('projects-top');
      if (projectsTop) {
        projectsTop.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  return (
    <section id="portfolio" className="section-padding bg-mdm-lightgrey">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-mdm-coral mr-4"></div>
            <span className="text-mdm-blue font-medium uppercase tracking-wider text-sm">Our Portfolio</span>
            <div className="h-1 w-12 bg-mdm-coral ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore Our <span className="gradient-text">Creative Work</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse through our portfolio of successful projects that have helped businesses achieve their goals
            and stand out in their respective industries.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={category === cat.id ? "default" : "outline"}
              className={category === cat.id 
                ? "bg-mdm-blue hover:bg-mdm-blue/90" 
                : "hover:text-mdm-blue"}
              onClick={() => setCategory(cat.id)}
            >
              {cat.name}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md group card-effect">
              <div className="overflow-hidden h-64">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-mdm-coral mb-2 uppercase font-medium">
                  {categories.find(cat => cat.id === item.category)?.name}
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-secondary" onClick={handleViewAllProjects}>View All Projects</Button>
        </div>
      </div>
    </section>
  );
}
