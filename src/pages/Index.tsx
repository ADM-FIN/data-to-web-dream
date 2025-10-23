import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustIndicators from "@/components/TrustIndicators";
import ContentSection from "@/components/ContentSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustIndicators />
      
      <div id="about">
        <ContentSection
          title="Business Transformation"
          subtitle="Rebuilding Banking from the Core"
          content="Finubit works with Bank Leumi to create deep business transformation. We begin at the core, reimagining the legacy systems that power the industry, and lead banks through a complete reinvention of their most essential processes. From infrastructure to operations, we build for the future. Our approach isn't just technical—it's transformational, touching every aspect of how modern banks operate and compete."
          gradient="bg-gradient-business"
          icon="building"
        />
        
        <ContentSection
          title="Technology"
          subtitle="Core-First. Event-Driven. Secure by Design."
          content="Our technology stack is built around cutting-edge principles: core-first architecture, event-driven flows, and full platformization. We don't build demos—we build production. From the first line of code, our systems are live, secure, and scalable. We write to run, not to simulate."
          gradient="bg-gradient-tech"
          icon="network"
        />
        
        <ContentSection
          title="Culture"
          subtitle="Dynamic. Productive. Impactful."
          content="At Finubit, every developer writes code that matters—code that's in production from day one. We move fast, impact early, and believe in hand-in-hand transformation: business and technology evolving together. We're a platform company in a dynamic environment where ideas are implemented, not shelved."
          gradient="bg-gradient-culture"
          icon="users"
        />
      </div>
    </div>
  );
};

export default Index;
