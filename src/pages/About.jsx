import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Award, Target, Heart, Users, CheckCircle2, Zap } from 'lucide-react';

export const About = () => {
  const achievements = [
    { icon: Award, title: 'Certified Professionals', description: 'All our trainers are certified by international fitness organizations' },
    { icon: Users, title: '500+ Success Stories', description: 'Helped transform the lives of over 500 clients' },
    { icon: Target, title: 'Goal-Oriented Approach', description: 'Customized programs designed to meet your specific goals' },
    { icon: Zap, title: 'Modern Methodology', description: 'Latest training techniques backed by science' },
  ];

  const values = [
    { icon: Heart, title: 'Passion', description: 'We love what we do and it shows in our results' },
    { icon: Target, title: 'Results-Driven', description: 'Every workout, every meal plan is designed for maximum impact' },
    { icon: Users, title: 'Community', description: 'Building a supportive environment where everyone thrives' },
    { icon: Award, title: 'Excellence', description: 'Committed to providing world-class training and service' },
  ];

  const whyChooseUs = [
    'Personalized training programs tailored to your fitness level',
    'Expert trainers with 10+ years of experience',
    'State-of-the-art equipment and facilities',
    'Flexible scheduling to fit your busy lifestyle',
    'Nutritional guidance and meal planning',
    'Ongoing support and motivation',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface-dark to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(120_100%_50%_/_0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient-green">About</span> Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're not just a gym – we're your partners in transformation, dedicated to helping you unlock your full potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-b from-surface-dark to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Our <span className="text-gradient-green">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At FitForge, we believe that fitness is not just about building muscle or losing weight – it's about creating a lifestyle that empowers you to be the best version of yourself.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to provide world-class training, expert guidance, and unwavering support to help you achieve your fitness goals and transform your life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-gradient-green">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading fitness training center that transforms lives through innovative training methods, personalized attention, and a community-driven approach that makes fitness accessible, enjoyable, and sustainable for everyone.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="text-gradient-green">Achievements</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => {
              const Icon = item.icon;
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
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-b from-background to-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                Why <span className="text-gradient-green">Choose Us</span>?
              </h2>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                Our <span className="text-gradient-red">Values</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-card/50 border-border hover:bg-card transition-all">
                        <CardContent className="p-6">
                          <Icon className="w-10 h-10 text-primary mb-3" />
                          <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
