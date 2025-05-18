
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Facebook, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you shortly.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-mdm-coral mr-4"></div>
            <span className="text-mdm-blue font-medium uppercase tracking-wider text-sm">Contact Us</span>
            <div className="h-1 w-12 bg-mdm-coral ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In <span className="gradient-text">Touch With Us</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have a question or ready to start your next project? Reach out to us using the form below
            or contact us directly through our information.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      className="w-full"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="w-full"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="w-full min-h-[150px]"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full btn-primary">Send Message</Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-mdm-blue/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-mdm-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email Us</h4>
                  <p className="text-gray-600 mb-1">For general inquiries:</p>
                  <a href="mailto:info@mdmconsulting.com" className="text-mdm-blue hover:underline">
                    info@mdmconsulting.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-mdm-purple/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-mdm-purple" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Call Us</h4>
                  <p className="text-gray-600 mb-1">Monday-Friday, 9am-5pm:</p>
                  <a href="tel:+15551234567" className="text-mdm-purple hover:underline">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-mdm-coral/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-mdm-coral" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Visit Us</h4>
                  <p className="text-gray-600">
                    123 Business Avenue<br />
                    Suite 200<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="font-medium text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com"
                    className="bg-mdm-lightgrey hover:bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-gray-700" />
                  </a>
                  <a 
                    href="https://www.twitter.com"
                    className="bg-mdm-lightgrey hover:bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5 text-gray-700" />
                  </a>
                  <a 
                    href="https://www.instagram.com"
                    className="bg-mdm-lightgrey hover:bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-gray-700" />
                  </a>
                  <a 
                    href="https://www.linkedin.com"
                    className="bg-mdm-lightgrey hover:bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700" />
                  </a>
                  <a 
                    href="https://www.github.com"
                    className="bg-mdm-lightgrey hover:bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
