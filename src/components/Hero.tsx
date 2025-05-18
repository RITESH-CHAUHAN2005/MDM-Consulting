
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center pt-16">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mdm-blue to-mdm-purple opacity-90 z-0"></div>
      
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-mdm-aqua rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-mdm-coral rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Empower Your Business Growth With <span className="text-mdm-coral">MDM Consulting</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 md:max-w-lg">
              Social Media, Web Design & Graphics that Inspire Engagement & Success
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button className="btn-accent w-full sm:w-auto" onClick={() => navigate('/signup')}>Get Started</Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-mdm-blue w-full sm:w-auto"
                onClick={scrollToServices}
              >
                Our Services
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              {[
                { number: "500+", label: "Clients" },
                { number: "1000+", label: "Projects" },
                { number: "10+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-2">
                  <p className="text-3xl md:text-4xl font-bold text-white">{stat.number}</p>
                  <p className="text-white/80 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block relative animate-fade-in-left">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" 
              alt="Business Professional" 
              className="rounded-lg shadow-xl object-cover"
            />
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="bg-green-500 h-3 w-3 rounded-full mr-2"></div>
                <span className="font-semibold text-mdm-charcoal">Growing Business</span>
              </div>
              <div className="mt-2 h-10 bg-gray-100 rounded overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-mdm-blue to-mdm-purple"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
