import Navigation from "@/components/Navigation";
import TeamCard from "@/components/TeamCard";

const Team = () => {
  const teamMembers = [
    {
      name: "Jaime Schcolnik",
      title: "CEO",
      bio: "Former CIO @ Bank Leumi",
      linkedin: "#"
    },
    {
      name: "Lior Nobel",
      title: "COO",
      bio: "Former cyber leader @ 8200",
      linkedin: "#"
    },
    {
      name: "Shay Dan",
      title: "VP R&D",
      bio: "Former CTO @ Leumi Bank",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-h1 font-bold text-navy mb-6">
              Meet the people building Finubit.
            </h1>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
