import { Building2, Network, Users } from "lucide-react";
import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  subtitle: string;
  content: string;
  gradient: string;
  icon: "building" | "network" | "users";
}

const ContentSection = ({ title, subtitle, content, gradient, icon }: ContentSectionProps) => {
  const icons = {
    building: Building2,
    network: Network,
    users: Users
  };
  
  const Icon = icons[icon];

  return (
    <section className={`py-24 ${gradient}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/80 backdrop-blur rounded-2xl shadow-card mb-8">
            <Icon size={40} className="text-navy" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-h1 font-bold text-navy mb-4">
            {title}
          </h2>
          
          <p className="text-xl text-teal-700 font-medium mb-8">
            {subtitle}
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
