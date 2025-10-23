import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  linkedin?: string;
}

const TeamCard = ({ name, title, bio, linkedin }: TeamCardProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card className="p-8 hover:shadow-hover hover:-translate-y-2 transition-all duration-300 bg-white border-gray-200">
      <div className="flex flex-col items-center text-center">
        <Avatar className="w-24 h-24 mb-6 bg-gradient-primary">
          <AvatarFallback className="text-white text-2xl font-bold">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <h3 className="text-2xl font-bold text-navy mb-2">{name}</h3>
        <p className="text-royal font-semibold mb-2">{title}</p>
        <p className="text-gray-600 mb-6">{bio}</p>
        
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy hover:text-royal transition-colors"
          >
            <Linkedin size={20} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        )}
      </div>
    </Card>
  );
};

export default TeamCard;
