
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function SignupPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const handleSignupChange = (e) => {
    const { id, value } = e.target;
    setSignupForm(prev => ({ ...prev, [id]: value }));
  };

  const handleLoginChange = (e) => {
    const { id, value } = e.target;
    setLoginForm(prev => ({ ...prev, [id]: value }));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would handle the signup submission to your backend
    toast({
      title: "Account created!",
      description: "Welcome to MDM Consulting!",
    });
    
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the login submission to your backend
    toast({
      title: "Welcome back!",
      description: "You've successfully logged in.",
    });
    
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-mdm-blue to-mdm-purple py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome to MDM Consulting
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Create an account or login to get started with our services
          </p>
        </div>
        
        <Tabs defaultValue="signup" className="mt-8">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signup">
            <form className="space-y-6" onSubmit={handleSignupSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={signupForm.name}
                    onChange={handleSignupChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={signupForm.email}
                    onChange={handleSignupChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={signupForm.password}
                    onChange={handleSignupChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={signupForm.confirmPassword}
                    onChange={handleSignupChange}
                  />
                </div>
              </div>
              
              <div>
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="login">
            <form className="space-y-6" onSubmit={handleLoginSubmit}>
              <div>
                <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <Input
                    id="login-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={loginForm.email}
                    onChange={handleLoginChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <Input
                    id="login-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={loginForm.password}
                    onChange={handleLoginChange}
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a href="#" className="font-medium text-mdm-blue hover:text-mdm-blue/80">
                    Forgot your password?
                  </a>
                </div>
              </div>
              
              <div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6">
          <Link to="/" className="text-center block text-sm text-mdm-blue hover:text-mdm-blue/80">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
