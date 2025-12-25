import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Apple, Salad, Coffee, Utensils, CheckCircle2 } from 'lucide-react';

export const Diet = () => {
  const [activeTab, setActiveTab] = useState('weight-loss');

  const dietPlans = {
    'weight-loss': {
      title: 'Weight Loss Plan',
      description: 'Calorie-controlled diet designed to help you shed fat while maintaining muscle mass.',
      color: 'from-accent/20 to-accent/5',
      meals: [
        {
          time: 'Breakfast (7:00 AM)',
          icon: Coffee,
          items: ['2 whole eggs + 2 egg whites scrambled', 'Oatmeal with berries', 'Green tea'],
          calories: '350 kcal',
        },
        {
          time: 'Mid-Morning Snack (10:00 AM)',
          icon: Apple,
          items: ['Greek yogurt', 'Handful of almonds', 'Apple'],
          calories: '200 kcal',
        },
        {
          time: 'Lunch (1:00 PM)',
          icon: Utensils,
          items: ['Grilled chicken breast (150g)', 'Brown rice (1 cup)', 'Mixed vegetables', 'Side salad'],
          calories: '450 kcal',
        },
        {
          time: 'Afternoon Snack (4:00 PM)',
          icon: Apple,
          items: ['Protein shake', 'Banana'],
          calories: '180 kcal',
        },
        {
          time: 'Dinner (7:00 PM)',
          icon: Salad,
          items: ['Grilled fish (150g)', 'Quinoa', 'Steamed broccoli', 'Mixed greens'],
          calories: '400 kcal',
        },
      ],
      totalCalories: '1580 kcal/day',
    },
    'muscle-gain': {
      title: 'Muscle Gain Plan',
      description: 'High-protein, calorie-surplus diet to support muscle growth and strength gains.',
      color: 'from-primary/20 to-primary/5',
      meals: [
        {
          time: 'Breakfast (7:00 AM)',
          icon: Coffee,
          items: ['4 whole eggs', 'Whole wheat toast (2 slices)', 'Avocado', 'Orange juice'],
          calories: '550 kcal',
        },
        {
          time: 'Mid-Morning Snack (10:00 AM)',
          icon: Apple,
          items: ['Protein shake with banana', 'Peanut butter (2 tbsp)', 'Oats'],
          calories: '400 kcal',
        },
        {
          time: 'Lunch (1:00 PM)',
          icon: Utensils,
          items: ['Lean beef (200g)', 'Sweet potato (large)', 'Mixed vegetables', 'Brown rice'],
          calories: '700 kcal',
        },
        {
          time: 'Pre-Workout (4:00 PM)',
          icon: Apple,
          items: ['Banana', 'Rice cakes', 'Honey'],
          calories: '250 kcal',
        },
        {
          time: 'Post-Workout (6:00 PM)',
          icon: Apple,
          items: ['Whey protein shake', 'Dextrose'],
          calories: '300 kcal',
        },
        {
          time: 'Dinner (8:00 PM)',
          icon: Salad,
          items: ['Grilled chicken (200g)', 'Pasta', 'Vegetables', 'Olive oil'],
          calories: '650 kcal',
        },
      ],
      totalCalories: '2850 kcal/day',
    },
    'fitness': {
      title: 'Maintenance Plan',
      description: 'Balanced nutrition to maintain your current physique while optimizing performance.',
      color: 'from-primary/20 to-accent/10',
      meals: [
        {
          time: 'Breakfast (7:30 AM)',
          icon: Coffee,
          items: ['3 eggs omelet', 'Whole grain toast', 'Mixed berries', 'Coffee'],
          calories: '420 kcal',
        },
        {
          time: 'Mid-Morning Snack (10:30 AM)',
          icon: Apple,
          items: ['Protein bar', 'Banana'],
          calories: '250 kcal',
        },
        {
          time: 'Lunch (1:00 PM)',
          icon: Utensils,
          items: ['Turkey breast (150g)', 'Quinoa', 'Roasted vegetables', 'Hummus'],
          calories: '500 kcal',
        },
        {
          time: 'Afternoon Snack (4:00 PM)',
          icon: Apple,
          items: ['Greek yogurt', 'Nuts mix', 'Honey'],
          calories: '280 kcal',
        },
        {
          time: 'Dinner (7:30 PM)',
          icon: Salad,
          items: ['Salmon (150g)', 'Brown rice', 'Asparagus', 'Side salad'],
          calories: '550 kcal',
        },
      ],
      totalCalories: '2000 kcal/day',
    },
  };

  const tips = [
    'Drink at least 3-4 liters of water daily',
    'Eat every 2-3 hours to keep metabolism active',
    'Include protein in every meal',
    'Avoid processed foods and sugary drinks',
    'Plan and prep meals in advance',
    'Track your calorie intake consistently',
    'Get adequate sleep for recovery',
    'Supplement with vitamins if needed',
  ];

  const currentPlan = dietPlans[activeTab];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface-dark to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(0_100%_60%_/_0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient-red">Nutrition</span> Plans
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Customized diet plans designed by nutrition experts to fuel your fitness journey and achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diet Plans Section */}
      <section className="py-16 bg-gradient-to-b from-surface-dark to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="weight-loss" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-card/50 p-1">
              <TabsTrigger value="weight-loss" className="text-base data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                Weight Loss
              </TabsTrigger>
              <TabsTrigger value="muscle-gain" className="text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Muscle Gain
              </TabsTrigger>
              <TabsTrigger value="fitness" className="text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Maintenance
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className={`bg-gradient-to-br ${currentPlan.color} border-border/50 mb-8`}>
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-3 text-foreground">{currentPlan.title}</h2>
                    <p className="text-lg text-muted-foreground mb-4">{currentPlan.description}</p>
                    <div className="text-2xl font-bold text-primary">{currentPlan.totalCalories}</div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  {currentPlan.meals.map((meal, index) => {
                    const Icon = meal.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="bg-card border-border hover:border-primary/30 transition-all">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-3">
                                  <h3 className="text-xl font-bold text-foreground">{meal.time}</h3>
                                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                    {meal.calories}
                                  </span>
                                </div>
                                <ul className="space-y-2">
                                  {meal.items.map((item, idx) => (
                                    <li key={idx} className="text-muted-foreground flex items-start">
                                      <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Healthy <span className="text-gradient-green">Eating</span> Tips
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple guidelines to help you stay on track with your nutrition goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all hover:scale-105">
                  <CardContent className="p-6 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{tip}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Diet;
