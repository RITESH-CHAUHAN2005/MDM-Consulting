
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      text: "MDM Consulting completely transformed our online presence. Their web design and social media strategy increased our lead generation by 75% in just three months. Highly recommend their services!",
      stars: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director, GrowFast",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      text: "The graphic design work from MDM Consulting has been instrumental in refreshing our brand. Their team is creative, responsive, and truly understands our business objectives.",
      stars: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder, Bloom Boutique",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "Working with MDM Consulting was a game-changer for our small business. Their strategic approach to social media management has helped us build a loyal customer base and increase sales.",
      stars: 5
    },
    {
      id: 4,
      name: "David Wilson",
      position: "VP of Sales, Enterprise Solutions",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      text: "The business growth consulting we received from MDM was exactly what we needed to scale. Their insights were practical, and the implementation support was outstanding.",
      stars: 4
    },
    {
      id: 5,
      name: "Jessica Thompson",
      position: "Creative Director, Design Studio",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "I've worked with many design firms, but MDM Consulting's attention to detail and creative approach is unmatched. They delivered a brand identity that perfectly captures our essence.",
      stars: 5
    },
    {
      id: 6,
      name: "Robert Martinez",
      position: "Owner, Local Cafe Chain",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      text: "Since working with MDM Consulting on our social media strategy, our engagement has increased by 120% and foot traffic to our locations is up by 35%. Incredible results!",
      stars: 5
    },
    {
      id: 7,
      name: "Linda Nakamura",
      position: "Founder, Tech Startup",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "MDM Consulting helped us navigate the complex digital landscape with ease. Their comprehensive strategy covered everything from web design to social media, giving us a cohesive online presence.",
      stars: 5
    },
    {
      id: 8,
      name: "Thomas Wright",
      position: "Director, Educational Institute",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      text: "The web design and social media management services provided by MDM Consulting have significantly improved our student enrollment. Their understanding of our target audience was spot on.",
      stars: 4
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-mdm-coral mr-4"></div>
            <span className="text-mdm-blue font-medium uppercase tracking-wider text-sm">Testimonials</span>
            <div className="h-1 w-12 bg-mdm-coral ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear directly from our clients about their experiences working with MDM Consulting
            and the results we've helped them achieve.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-mdm-purple/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-mdm-blue/10 rounded-full -ml-16 -mb-16"></div>
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex mb-6 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill={i < currentTestimonial.stars ? "#FF6B6B" : "none"}
                    stroke={i < currentTestimonial.stars ? "#FF6B6B" : "#CBD5E0"}
                    className="w-5 h-5"
                  />
                ))}
              </div>
              
              {/* Testimonial text */}
              <blockquote className="mb-8 text-lg md:text-xl text-gray-700 italic">
                "{currentTestimonial.text}"
              </blockquote>
              
              {/* Client info */}
              <div className="flex items-center flex-col md:flex-row">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-mdm-aqua"
                />
                <div className="md:ml-4 mt-4 md:mt-0 text-center md:text-left">
                  <h4 className="font-bold">{currentTestimonial.name}</h4>
                  <p className="text-gray-600">{currentTestimonial.position}</p>
                </div>
                
                <div className="ml-auto flex gap-2 mt-6 md:mt-0">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={showPrev}
                    className="rounded-full h-10 w-10"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={showNext}
                    className="rounded-full h-10 w-10"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`mx-1 h-2 w-2 rounded-full transition-all ${
                  i === currentIndex ? "bg-mdm-blue w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
