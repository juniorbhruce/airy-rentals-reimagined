import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Home, DollarSign, Shield, Users, Calendar, Star, ArrowRight } from 'lucide-react';

export default function Host() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Earn extra income',
      description: 'Make money by sharing your space with travelers from around the world'
    },
    {
      icon: Shield,
      title: 'Host with confidence',
      description: 'Our Host Guarantee provides protection for your property'
    },
    {
      icon: Users,
      title: 'Join a community',
      description: 'Connect with other hosts and get support when you need it'
    },
    {
      icon: Calendar,
      title: 'Control your calendar',
      description: 'Set your own schedule and availability'
    }
  ];

  const steps = [
    {
      step: 1,
      title: 'Tell us about your place',
      description: 'Share basic info about your space, like location and how many guests can stay'
    },
    {
      step: 2,
      title: 'Make it stand out',
      description: 'Add photos, a description, and amenities to help guests imagine staying there'
    },
    {
      step: 3,
      title: 'Finish and publish',
      description: 'Set your price, house rules, and availability. Then publish your listing'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Become a Host
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Turn your extra space into extra income
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
                Start hosting
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why host with us?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join millions of hosts who have already discovered the benefits of hosting
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-card-hover transition-shadow">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How it works
              </h2>
              <p className="text-xl text-muted-foreground">
                Getting started is easy
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">$13,800</div>
                <p className="text-muted-foreground">Average annual earnings for hosts</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.7</div>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 fill-warning text-warning" />
                  <Star className="w-5 h-5 fill-warning text-warning" />
                  <Star className="w-5 h-5 fill-warning text-warning" />
                  <Star className="w-5 h-5 fill-warning text-warning" />
                  <Star className="w-5 h-5 fill-warning text-warning" />
                </div>
                <p className="text-muted-foreground">Average host rating</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Community support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to start hosting?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join our community of hosts and start earning today
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
                Get started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}