import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Dumbbell, Weight, Activity, Clock } from 'lucide-react';

export const Equipment = () => {
  const equipmentList = [
    {
      name: 'Treadmills',
      icon: Activity,
      description: 'High-performance treadmills with advanced tracking and multiple programs for cardio excellence.',
      features: ['Heart rate monitoring', 'Incline adjustment', 'Built-in programs'],
    },
    {
      name: 'Free Weights',
      icon: Dumbbell,
      description: 'Complete range of dumbbells and barbells for strength training and muscle building.',
      features: ['5-100 lbs dumbbells', 'Olympic barbells', 'Weight plates'],
    },
    {
      name: 'Cable Machines',
      icon: Weight,
      description: 'Versatile cable systems for targeted muscle training with smooth resistance.',
      features: ['Adjustable height', 'Multiple attachments', 'Smooth pulley system'],
    },
    {
      name: 'Rowing Machines',
      icon: Activity,
      description: 'Professional rowing machines for full-body cardio and endurance training.',
      features: ['Water/air resistance', 'Performance tracking', 'Ergonomic design'],
    },
    {
      name: 'Leg Press',
      icon: Weight,
      description: 'Heavy-duty leg press machines for building powerful lower body strength.',
      features: ['High weight capacity', 'Adjustable positions', 'Safety locks'],
    },
    {
      name: 'Bench Press',
      icon: Dumbbell,
      description: 'Professional-grade bench press stations for chest and upper body development.',
      features: ['Adjustable angles', 'Olympic bar compatible', 'Safety spotters'],
    },
    {
      name: 'Smith Machine',
      icon: Weight,
      description: 'Guided barbell system for safe and effective strength training.',
      features: ['Linear bearings', 'Multiple safety catches', 'Counter-balanced bar'],
    },
    {
      name: 'Functional Trainer',
      icon: Activity,
      description: 'Multi-functional cable system for dynamic and functional movements.',
      features: ['Dual cable system', '360° rotation', 'Multiple attachments'],
    },
    {
      name: 'Assault Bike',
      icon: Activity,
      description: 'High-intensity interval training bike for maximum calorie burn.',
      features: ['Fan resistance', 'Full-body workout', 'LCD display'],
    },
    {
      name: 'Kettlebells',
      icon: Dumbbell,
      description: 'Complete set of kettlebells for dynamic strength and conditioning workouts.',
      features: ['8-80 lbs range', 'Cast iron construction', 'Ergonomic handles'],
    },
    {
      name: 'Battle Ropes',
      icon: Activity,
      description: 'Heavy-duty ropes for explosive power and endurance training.',
      features: ['50ft length', 'Thick grip', 'High-intensity cardio'],
    },
    {
      name: 'TRX Suspension',
      icon: Weight,
      description: 'Suspension training system for bodyweight exercises and core strength.',
      features: ['Portable design', 'Full-body training', 'Adjustable straps'],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface-dark to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_hsl(120_100%_50%_/_0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient-green">Premium</span> Equipment
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              State-of-the-art fitness equipment designed to help you achieve maximum results safely and efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-16 bg-gradient-to-b from-surface-dark to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentList.map((equipment, index) => {
              const Icon = equipment.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="h-full bg-card border-border hover:border-primary/50 transition-all group hover:scale-105">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {equipment.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {equipment.description}
                      </p>
                      <div className="space-y-2 mt-auto">
                        {equipment.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient-green">World-Class</span> Facilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Our equipment is regularly maintained and updated to ensure you have the best training experience possible.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="bg-card/50 border-border">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Equipment Access</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">100+</div>
                  <p className="text-muted-foreground">Equipment Pieces</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">5000+</div>
                  <p className="text-muted-foreground">Sq. Ft. Training Space</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;
