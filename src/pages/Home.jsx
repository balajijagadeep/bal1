import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dumbbell, Users, Award, TrendingUp, Heart, Zap, Target } from 'lucide-react';

export const Home = () => {
  const stats = [
    { label: 'Years Experience', value: '10+', icon: Award },
    { label: 'Happy Clients', value: '500+', icon: Users },
    { label: 'Success Rate', value: '95%', icon: TrendingUp },
    { label: 'Expert Trainers', value: '15+', icon: Dumbbell },
  ];

  const services = [
    {
      icon: Dumbbell,
      title: 'Professional Training',
      description: 'Personalized workout plans designed by certified trainers to help you achieve your fitness goals.',
      gradient: 'from-primary/20 to-primary/5',
    },
    {
      icon: Heart,
      title: 'Nutrition Guidance',
      description: 'Customized diet plans and nutritional advice to fuel your body and optimize performance.',
      gradient: 'from-accent/20 to-accent/5',
    },
    {
      icon: Zap,
      title: 'Modern Equipment',
      description: 'State-of-the-art gym equipment and facilities to ensure the best training experience.',
      gradient: 'from-primary/20 to-primary/5',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface-dark to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(120_100%_50%_/_0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_hsl(0_100%_60%_/_0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold tracking-wider">
                TRANSFORM YOUR BODY & MIND
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-gradient-green animate-glow-green">UNLEASH</span>
              <br />
              <span className="text-foreground">YOUR</span>{' '}
              <span className="text-gradient-red animate-glow-red">POTENTIAL</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Transform your fitness journey with expert guidance, cutting-edge equipment, and a community that pushes you to be your best.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/pricing">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
                >
                  <Target className="mr-2 w-5 h-5" />
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold text-lg px-8 py-6 transition-all hover:scale-105"
                >
                  Book a Session
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/80 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
                    <CardContent className="p-6 text-center">
                      <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <div className="text-3xl sm:text-4xl font-bold text-gradient-green mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-background to-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient-green">Our</span> Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to transform your fitness journey
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full bg-card border-border hover:border-primary/50 transition-all group hover:scale-105">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(120_100%_50%_/_0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_hsl(0_100%_60%_/_0.15),transparent_50%)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient-green">Transform</span> Your Life?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have achieved their fitness goals with our expert guidance.
            </p>
            <Link to="/pricing">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-10 py-7 shadow-xl hover:shadow-primary/50 transition-all hover:scale-105"
              >
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
