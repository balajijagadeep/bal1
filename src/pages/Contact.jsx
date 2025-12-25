import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Mock form submission
    toast.success('Message sent successfully!', {
      description: 'We\'ll get back to you within 24 hours.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Fitness Street, Gym District',
      subContent: 'New York, NY 10001',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      subContent: 'Mon-Fri: 6AM - 10PM',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@fitforge.com',
      subContent: 'We reply within 24 hours',
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      content: 'Mon-Fri: 5AM - 11PM',
      subContent: 'Sat-Sun: 6AM - 10PM',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface-dark to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(120_100%_50%_/_0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient-green">Get In</span> Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions or ready to start your fitness journey? We're here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gradient-to-b from-surface-dark to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card border-border hover:border-primary/50 transition-all group hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">{info.title}</h3>
                      <p className="text-muted-foreground text-sm mb-1">{info.content}</p>
                      <p className="text-muted-foreground text-xs">{info.subContent}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gradient-green">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary min-h-[150px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg hover:shadow-primary/50 transition-all"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card border-border h-full">
                <CardContent className="p-0 h-full">
                  <div className="relative w-full h-full min-h-[500px] rounded-lg overflow-hidden">
                    {/* Mock Map - Replace with actual Google Maps embed */}
                    <div className="absolute inset-0 bg-gradient-to-br from-surface-dark to-background flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-20 h-20 text-primary mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-foreground mb-2">FitForge Gym</h3>
                        <p className="text-muted-foreground">123 Fitness Street</p>
                        <p className="text-muted-foreground">New York, NY 10001</p>
                        <Button
                          variant="outline"
                          className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          onClick={() => window.open('https://maps.google.com', '_blank')}
                        >
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Follow <span className="text-gradient-green">Our Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stay connected with us on social media for fitness tips, inspiration, and community updates.
            </p>
            <div className="flex justify-center space-x-4">
              {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((platform, index) => (
                <motion.button
                  key={platform}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-card border border-border hover:border-primary flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                >
                  {platform[0]}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
