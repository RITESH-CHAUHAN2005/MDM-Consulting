
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function About() {
  const features = [
    {
      title: "Creative Designs",
      description: "Eye-catching designs that capture your brand's essence and appeal to your target audience.",
      icon: <CheckCircle className="h-6 w-6 text-mdm-aqua" />
    },
    {
      title: "Tailored Strategies",
      description: "Custom marketing and growth strategies designed specifically for your business goals.",
      icon: <CheckCircle className="h-6 w-6 text-mdm-coral" />
    },
    {
      title: "Proven Results",
      description: "Track record of successful campaigns that deliver measurable business growth.",
      icon: <CheckCircle className="h-6 w-6 text-mdm-purple" />
    }
  ];

  return (
    <section id="about" className="section-padding bg-mdm-lightgrey">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-24 w-24 border-t-4 border-l-4 border-mdm-blue opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-4 border-r-4 border-mdm-purple opacity-60"></div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" 
                alt="MDM Consulting Team" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <div className="h-1 w-12 bg-mdm-coral mr-4"></div>
              <span className="text-mdm-blue font-medium uppercase tracking-wider text-sm">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Help Businesses <span className="gradient-text">Grow & Thrive</span> in the Digital Space
            </h2>
            <p className="text-gray-600 mb-8">
              At MDM Consulting, we're passionate about transforming businesses through strategic digital solutions. 
              Our team of experts combines creativity with data-driven strategies to elevate your brand, 
              engage your audience, and drive sustainable growth.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a 
              href="#services" 
              className="inline-flex items-center text-mdm-blue hover:text-mdm-purple font-medium transition-colors"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
