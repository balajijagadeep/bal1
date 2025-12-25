import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { toast } from 'sonner';

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: 'Basic',
      description: 'Perfect for beginners starting their fitness journey',
      monthlyPrice: 49,
      yearlyPrice: 490,
      popular: false,
      features: [
        'Access to gym equipment',
        'Basic workout plan',
        'Locker room access',
        'Free fitness assessment',
        '2 group classes per month',
        'Mobile app access',
      ],
      color: 'from-card to-card',
      borderColor: 'border-border',
      buttonVariant: 'outline',
    },
    {
      name: 'Standard',
      description: 'Most popular choice for serious fitness enthusiasts',
      monthlyPrice: 99,
      yearlyPrice: 990,
      popular: true,
      features: [
        'Everything in Basic',
        'Personalized training program',
        'Nutrition guidance',
        'Unlimited group classes',
        '2 personal training sessions/month',
        'Priority equipment access',
        'Guest passes (2/month)',
        'Progress tracking dashboard',
      ],
      color: 'from-primary/20 to-primary/5',
      borderColor: 'border-primary',
      buttonVariant: 'default',
    },
    {
      name: 'Premium',
      description: 'Ultimate package for maximum results and VIP treatment',
      monthlyPrice: 149,
      yearlyPrice: 1490,
      popular: false,
      features: [
        'Everything in Standard',
        '8 personal training sessions/month',
        'Custom meal plan with recipes',
        'Body composition analysis',
        'Supplement consultation',
        '24/7 gym access',
        'Free merchandise',
        'VIP locker',
        'Massage therapy (1/month)',
        'Guest passes (5/month)',
      ],
      color: 'from-accent/20 to-accent/5',
      borderColor: 'border-accent',
      buttonVariant: 'default',
    },
  ];

  const handleJoinPlan = (planName) => {
    toast.success(`You selected the ${planName} plan! Redirecting to checkout...`, {
      description: 'This is a demo. In production, this would redirect to payment.',
    });
  };

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
              <span className="text-gradient-green">Simple</span> Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Choose the perfect plan to transform your fitness journey. All plans include access to our premium facilities.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-card/50 border border-border rounded-full p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-full font-semibold transition-all relative ${
                  billingCycle === 'yearly'
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Yearly
                <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs">Save 17%</Badge>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 bg-gradient-to-b from-surface-dark to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={plan.popular ? 'md:scale-105' : ''}
              >
                <Card
                  className={`h-full bg-gradient-to-br ${plan.color} border-2 ${plan.borderColor} relative overflow-hidden group hover:scale-105 transition-transform`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>MOST POPULAR</span>
                    </div>
                  )}

                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold mb-2 text-foreground">{plan.name}</h3>
                      <p className="text-muted-foreground">{plan.description}</p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-bold text-gradient-green">
                          ${billingCycle === 'monthly' ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12)}
                        </span>
                        <span className="text-muted-foreground ml-2">/month</span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <p className="text-sm text-muted-foreground mt-2">
                          Billed annually at ${plan.yearlyPrice}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      size="lg"
                      onClick={() => handleJoinPlan(plan.name)}
                      className={`w-full font-semibold ${
                        plan.buttonVariant === 'default'
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/50'
                          : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                      } transition-all`}
                    >
                      {plan.popular ? (
                        <>
                          <Zap className="mr-2 w-5 h-5" />
                          Get Started Now
                        </>
                      ) : (
                        'Choose Plan'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-gradient-green">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'Can I cancel my membership anytime?',
                a: 'Yes! You can cancel your membership at any time with no penalties. We believe in earning your business every month.',
              },
              {
                q: 'Do you offer a free trial?',
                a: 'Yes, we offer a 7-day free trial for all new members. Experience our facilities and services before committing.',
              },
              {
                q: 'Can I upgrade or downgrade my plan?',
                a: 'Absolutely! You can change your plan at any time. Upgrades are effective immediately, and downgrades take effect at the next billing cycle.',
              },
              {
                q: 'Are personal training sessions included?',
                a: 'Personal training sessions are included in Standard (2/month) and Premium (8/month) plans. Basic plan members can purchase sessions separately.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, debit cards, and bank transfers. All payments are processed securely.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Still Have <span className="text-gradient-green">Questions</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Our team is here to help you find the perfect plan for your fitness goals.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-10 py-7 shadow-xl hover:shadow-primary/50 transition-all hover:scale-105"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
