import { Card } from "@/components/ui/card";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

interface JobCardProps {
  title: string;
  department: string;
  location: string;
}

const JobCard = ({ title, department, location }: JobCardProps) => {
  return (
    <Card className="p-6 hover:border-teal transition-all duration-300 group cursor-pointer bg-white border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-royal transition-colors">
            {title}
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Briefcase size={16} />
              <span>{department}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{location}</span>
            </div>
          </div>
        </div>
        
        <ArrowRight 
          className="text-navy group-hover:translate-x-1 transition-transform flex-shrink-0" 
          size={24} 
        />
      </div>
    </Card>
  );
};

export default JobCard;
