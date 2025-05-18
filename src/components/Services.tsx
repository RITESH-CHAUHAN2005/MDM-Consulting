
import React, { useState } from 'react';
import { Globe, Layout, Image, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function Services() {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timeSlot: '',
    message: ''
  });

  const services = [
    {
      title: "Social Media Management",
      description: "Engage your audience with strategic social media campaigns that build brand awareness and drive conversions.",
      icon: <Users className="h-10 w-10 text-mdm-blue" />,
      features: ["Content Strategy", "Community Management", "Analytics & Reporting"]
    },
    {
      title: "Custom Web Design",
      description: "Stand out with responsive, user-friendly websites that reflect your brand and convert visitors into customers.",
      icon: <Layout className="h-10 w-10 text-mdm-purple" />,
      features: ["Responsive Design", "SEO Optimization", "E-commerce Solutions"]
    },
    {
      title: "Graphic Design",
      description: "Capture attention with stunning visuals that communicate your message and strengthen your brand identity.",
      icon: <Image className="h-10 w-10 text-mdm-coral" />,
      features: ["Brand Identity", "Marketing Materials", "Digital Assets"]
    },
    {
      title: "Business Growth Consulting",
      description: "Achieve your business goals with strategic advice and actionable plans tailored to your unique challenges.",
      icon: <Globe className="h-10 w-10 text-mdm-aqua" />,
      features: ["Market Analysis", "Growth Strategy", "Performance Tracking"]
    }
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleConsultation = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Consultation Scheduled!",
      description: "Thanks for booking a consultation. We'll get back to you shortly.",
    });
    setShowForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      timeSlot: '',
      message: ''
    });
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-mdm-coral mr-4"></div>
            <span className="text-mdm-blue font-medium uppercase tracking-wider text-sm">Our Services</span>
            <div className="h-1 w-12 bg-mdm-coral ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Solutions for <span className="gradient-text">Business Growth</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a full suite of services designed to elevate your business in today's competitive digital landscape.
            From engaging social media content to stunning web designs, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-0 bg-gradient-to-b from-mdm-blue to-mdm-purple group-hover:h-full transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="mb-5">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-mdm-aqua mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="btn-primary" onClick={handleConsultation}>Schedule a Consultation</Button>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <h3 className="text-xl font-bold mb-4">Schedule a Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input 
                    id="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input 
                    id="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time Slot</label>
                  <select 
                    id="timeSlot" 
                    value={formData.timeSlot} 
                    onChange={handleInputChange} 
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mdm-blue"
                  >
                    <option value="">Select a time slot</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (1PM - 5PM)</option>
                    <option value="evening">Evening (6PM - 8PM)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                  <Textarea 
                    id="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    className="w-full min-h-[100px]"
                  />
                </div>
                <div className="flex justify-end space-x-4 pt-2">
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
