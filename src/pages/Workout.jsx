import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Badge } from '../components/ui/badge';
import { Flame, Target, Trophy } from 'lucide-react';

export const Workout = () => {
  const workoutPlans = [
    {
      level: 'Beginner',
      icon: Target,
      color: 'from-primary/20 to-primary/5',
      badgeColor: 'bg-primary/20 text-primary',
      description: 'Perfect for those new to fitness or returning after a break',
      duration: '4-6 weeks',
      frequency: '3-4 days per week',
      exercises: [
        {
          day: 'Day 1: Upper Body',
          workouts: [
            { name: 'Push-ups', sets: '3 sets', reps: '8-12 reps' },
            { name: 'Dumbbell Shoulder Press', sets: '3 sets', reps: '10-12 reps' },
            { name: 'Lat Pulldown', sets: '3 sets', reps: '10-12 reps' },
            { name: 'Dumbbell Bicep Curls', sets: '3 sets', reps: '12-15 reps' },
            { name: 'Tricep Dips', sets: '3 sets', reps: '8-10 reps' },
          ],
        },
        {
          day: 'Day 2: Lower Body',
          workouts: [
            { name: 'Bodyweight Squats', sets: '3 sets', reps: '12-15 reps' },
            { name: 'Leg Press', sets: '3 sets', reps: '12-15 reps' },
            { name: 'Leg Curls', sets: '3 sets', reps: '12-15 reps' },
            { name: 'Calf Raises', sets: '3 sets', reps: '15-20 reps' },
            { name: 'Planks', sets: '3 sets', reps: '30-45 seconds' },
          ],
        },
        {
          day: 'Day 3: Cardio & Core',
          workouts: [
            { name: 'Treadmill Walk/Jog', sets: '1 set', reps: '20-25 minutes' },
            { name: 'Bicycle Crunches', sets: '3 sets', reps: '15-20 reps' },
            { name: 'Russian Twists', sets: '3 sets', reps: '20 reps' },
            { name: 'Dead Bug', sets: '3 sets', reps: '10-12 reps' },
            { name: 'Bird Dog', sets: '3 sets', reps: '10 reps each side' },
          ],
        },
      ],
    },
    {
      level: 'Intermediate',
      icon: Flame,
      color: 'from-accent/20 to-accent/5',
      badgeColor: 'bg-accent/20 text-accent',
      description: 'For those with 6+ months of consistent training experience',
      duration: '8-12 weeks',
      frequency: '4-5 days per week',
      exercises: [
        {
          day: 'Day 1: Chest & Triceps',
          workouts: [
            { name: 'Barbell Bench Press', sets: '4 sets', reps: '8-10 reps' },
            { name: 'Incline Dumbbell Press', sets: '4 sets', reps: '10-12 reps' },
            { name: 'Cable Flyes', sets: '3 sets', reps: '12-15 reps' },
            { name: 'Tricep Pushdowns', sets: '3 sets', reps: '12-15 reps' },
            { name: 'Overhead Tricep Extension', sets: '3 sets', reps: '10-12 reps' },
            { name: 'Diamond Push-ups', sets: '3 sets', reps: 'To failure' },
          ],
        },
        {
          day: 'Day 2: Back & Biceps',
          workouts: [
            { name: 'Deadlifts', sets: '4 sets', reps: '6-8 reps' },
            { name: 'Pull-ups', sets: '4 sets', reps: '8-12 reps' },
            { name: 'Barbell Rows', sets: '4 sets', reps: '8-10 reps' },
            { name: 'Face Pulls', sets: '3 sets', reps: '15-20 reps' },
            { name: 'Barbell Curls', sets: '3 sets', reps: '10-12 reps' },
            { name: 'Hammer Curls', sets: '3 sets', reps: '12-15 reps' },
          ],
        },
        {
          day: 'Day 3: Legs',
          workouts: [
            { name: 'Barbell Squats', sets: '4 sets', reps: '8-10 reps' },
            { name: 'Romanian Deadlifts', sets: '4 sets', reps: '10-12 reps' },
            { name: 'Leg Press', sets: '3 sets', reps: '12-15 reps' },
            { name: 'Leg Extensions', sets: '3 sets', reps: '12-15 reps' },
            { name: 'Leg Curls', sets: '3 sets', reps: '12-15 reps' },
            { name: 'Calf Raises', sets: '4 sets', reps: '15-20 reps' },
          ],
        },
        {
          day: 'Day 4: Shoulders & Abs',
          workouts: [
            { name: 'Military Press', sets: '4 sets', reps: '8-10 reps' },
            { name: 'Lateral Raises', sets: '4 sets', reps: '12-15 reps' },
            { name: 'Front Raises', sets: '3 sets', reps: '12-15 reps' },
            { name: 'Cable Crunches', sets: '4 sets', reps: '15-20 reps' },
            { name: 'Hanging Leg Raises', sets: '3 sets', reps: '12-15 reps' },
            { name: 'Plank Variations', sets: '3 sets', reps: '60 seconds' },
          ],
        },
      ],
    },
    {
      level: 'Advanced',
      icon: Trophy,
      color: 'from-primary/20 to-accent/10',
      badgeColor: 'bg-gradient-to-r from-primary/20 to-accent/20 text-foreground',
      description: 'For experienced athletes seeking maximum performance',
      duration: '12-16 weeks',
      frequency: '5-6 days per week',
      exercises: [
        {
          day: 'Day 1: Power Chest',
          workouts: [
            { name: 'Barbell Bench Press', sets: '5 sets', reps: '5 reps (heavy)' },
            { name: 'Weighted Dips', sets: '4 sets', reps: '6-8 reps' },
            { name: 'Incline Barbell Press', sets: '4 sets', reps: '8-10 reps' },
            { name: 'Cable Flyes (High/Mid/Low)', sets: '3 sets each', reps: '12-15 reps' },
            { name: 'Close-Grip Bench Press', sets: '4 sets', reps: '8-10 reps' },
          ],
        },
        {
          day: 'Day 2: Back Thickness',
          workouts: [
            { name: 'Conventional Deadlifts', sets: '5 sets', reps: '5 reps (heavy)' },
            { name: 'Weighted Pull-ups', sets: '4 sets', reps: '6-8 reps' },
            { name: 'Barbell Rows', sets: '4 sets', reps: '8-10 reps' },
            { name: 'T-Bar Rows', sets: '4 sets', reps: '10-12 reps' },
            { name: 'Cable Rows', sets: '3 sets', reps: '12-15 reps' },
            { name: 'Straight Arm Pulldowns', sets: '3 sets', reps: '15-20 reps' },
          ],
        },
        {
          day: 'Day 3: Leg Power',
          workouts: [
            { name: 'Back Squats', sets: '5 sets', reps: '5 reps (heavy)' },
            { name: 'Front Squats', sets: '4 sets', reps: '8-10 reps' },
            { name: 'Bulgarian Split Squats', sets: '4 sets', reps: '10-12 reps each' },
            { name: 'Leg Press', sets: '4 sets', reps: '15-20 reps' },
            { name: 'Walking Lunges', sets: '3 sets', reps: '20 steps' },
            { name: 'Calf Raises (Standing/Seated)', sets: '4 sets each', reps: '12-15 reps' },
          ],
        },
        {
          day: 'Day 4: Shoulders & Arms',
          workouts: [
            { name: 'Overhead Press', sets: '5 sets', reps: '6-8 reps' },
            { name: 'Dumbbell Lateral Raises', sets: '4 sets', reps: '12-15 reps' },
            { name: 'Face Pulls', sets: '4 sets', reps: '15-20 reps' },
            { name: 'Barbell Curls', sets: '4 sets', reps: '8-10 reps' },
            { name: 'Skull Crushers', sets: '4 sets', reps: '10-12 reps' },
            { name: 'Cable Curls & Pushdowns Superset', sets: '3 sets', reps: '15-20 reps' },
          ],
        },
        {
          day: 'Day 5: Back Width',
          workouts: [
            { name: 'Wide Grip Pull-ups', sets: '5 sets', reps: '8-12 reps' },
            { name: 'Lat Pulldowns', sets: '4 sets', reps: '10-12 reps' },
            { name: 'Single Arm Dumbbell Rows', sets: '4 sets', reps: '10-12 reps' },
            { name: 'Cable Pullovers', sets: '3 sets', reps: '12-15 reps' },
            { name: 'Hyperextensions', sets: '3 sets', reps: '15-20 reps' },
          ],
        },
        {
          day: 'Day 6: Leg Volume',
          workouts: [
            { name: 'Hack Squats', sets: '4 sets', reps: '12-15 reps' },
            { name: 'Romanian Deadlifts', sets: '4 sets', reps: '10-12 reps' },
            { name: 'Leg Extensions', sets: '4 sets', reps: '15-20 reps' },
            { name: 'Leg Curls', sets: '4 sets', reps: '15-20 reps' },
            { name: 'Goblet Squats', sets: '3 sets', reps: '20 reps' },
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface-dark to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_hsl(120_100%_50%_/_0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,_hsl(0_100%_60%_/_0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient-green">Workout</span> Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Scientifically designed workout programs for every fitness level. Build strength, gain muscle, and achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workout Plans Section */}
      <section className="py-16 bg-gradient-to-b from-surface-dark to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {workoutPlans.map((plan, planIndex) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={planIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: planIndex * 0.2 }}
              >
                <Card className={`bg-gradient-to-br ${plan.color} border-border/50 overflow-hidden`}>
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-2xl bg-background/50 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h2 className="text-3xl font-bold text-foreground">{plan.level}</h2>
                            <Badge className={plan.badgeColor}>{plan.level}</Badge>
                          </div>
                          <p className="text-muted-foreground">{plan.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-background/30 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">Duration</div>
                        <div className="text-lg font-semibold text-foreground">{plan.duration}</div>
                      </div>
                      <div className="bg-background/30 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">Frequency</div>
                        <div className="text-lg font-semibold text-foreground">{plan.frequency}</div>
                      </div>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      {plan.exercises.map((dayPlan, dayIndex) => (
                        <AccordionItem key={dayIndex} value={`item-${planIndex}-${dayIndex}`} className="border-border/50">
                          <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                            {dayPlan.day}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3 pt-4">
                              {dayPlan.workouts.map((workout, workoutIndex) => (
                                <div
                                  key={workoutIndex}
                                  className="flex items-center justify-between bg-background/30 backdrop-blur-sm rounded-lg p-4 hover:bg-background/50 transition-all"
                                >
                                  <div>
                                    <div className="font-semibold text-foreground mb-1">{workout.name}</div>
                                    <div className="text-sm text-muted-foreground">
                                      {workout.sets} × {workout.reps}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient-green">Training</span> Tips
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Progressive Overload</h3>
                  <p className="text-muted-foreground">
                    Gradually increase weight, reps, or sets over time to continuously challenge your muscles.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Proper Form</h3>
                  <p className="text-muted-foreground">
                    Focus on correct technique over heavy weights to prevent injuries and maximize results.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Rest & Recovery</h3>
                  <p className="text-muted-foreground">
                    Allow adequate rest between workouts. Muscles grow during recovery, not during training.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Consistency</h3>
                  <p className="text-muted-foreground">
                    Regular training is key. Stick to your program and results will follow.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Track Progress</h3>
                  <p className="text-muted-foreground">
                    Keep a workout log to monitor improvements and adjust your program accordingly.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Hydration</h3>
                  <p className="text-muted-foreground">
                    Stay hydrated before, during, and after workouts for optimal performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Workout;
