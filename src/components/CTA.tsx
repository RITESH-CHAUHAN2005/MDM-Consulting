
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function CTA() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timeSlot: '',
    message: ''
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTimeSlotChange = (value) => {
    setFormData(prev => ({ ...prev, timeSlot: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission to your backend
    toast({
      title: "Consultation Scheduled!",
      description: "We'll get in touch with you shortly.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      timeSlot: '',
      message: ''
    });
    setIsOpen(false);
  };

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-mdm-blue to-mdm-purple z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Grow Your Business Together
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Ready to take your business to the next level? Our team of experts is here to help you achieve your goals with tailored digital solutions.
          </p>
          
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="btn-accent text-lg px-8 py-6">
                Schedule a Free Consultation
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl">Schedule Your Free Consultation</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Smith" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(123) 456-7890" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="timeSlot" className="block text-sm font-medium mb-1">Preferred Time</label>
                  <Select value={formData.timeSlot} onValueChange={handleTimeSlotChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message (Optional)</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your business and how we can help..."
                    className="min-h-[100px]"
                  />
                </div>
                
                <Button type="submit" className="w-full">Schedule Consultation</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
