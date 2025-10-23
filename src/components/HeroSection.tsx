import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(var(--navy)) 1px, transparent 1px),
            linear-gradient(0deg, hsl(var(--navy)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <div className="inline-block animate-fade-up">
            <span className="inline-block bg-teal/20 text-navy px-4 py-2 rounded-full text-sm font-medium">
              Core Banking Infrastructure
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-hero font-bold text-navy mt-8 mb-6 animate-fade-up animation-delay-200">
            Rebuilding Banking from the Core
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-400">
            Finubit partners with leading financial institutions to create deep business transformation. 
            We begin at the core, reimagining the legacy systems that power the industry.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up animation-delay-600">
            <a href="#about">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-white px-8 py-6 text-lg hover:shadow-hover hover:-translate-y-1 transition-all group"
              >
                About Our Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-teal/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-royal/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default HeroSection;
