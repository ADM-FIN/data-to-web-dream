import Navigation from "@/components/Navigation";
import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

const Careers = () => {
  const jobs = [
    {
      title: "Senior Backend Engineer",
      department: "Engineering",
      location: "Tel Aviv"
    },
    {
      title: "Frontend React Developer",
      department: "Engineering",
      location: "Tel Aviv"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Tel Aviv"
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Tel Aviv"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-h1 font-bold text-navy mb-6">
              We're hiring. Join us in building the core of tomorrow's finance.
            </h1>
          </div>
          
          {/* Job Listings */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-h2 font-bold text-navy mb-8">Open Positions</h2>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="text-h3 font-bold text-navy mb-6 text-center">
                Get in Touch
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="gap-2 hover:border-navy hover:text-navy"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                </Button>
                
                <Button
                  className="gap-2 bg-gradient-primary text-white hover:shadow-hover"
                  asChild
                >
                  <a href="mailto:careers@finubit.com">
                    <Mail size={20} />
                    careers@finubit.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
