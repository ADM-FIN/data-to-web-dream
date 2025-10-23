const TrustIndicators = () => {
  const partners = [
    "Bank Leumi",
    "Financial Partner",
    "Investment Group",
    "Global Bank",
    "Finance Corp",
    "Capital Partners"
  ];

  return (
    <section className="bg-white py-16 border-y border-gray-200">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-gray-600 mb-8 uppercase tracking-wide">
          Trusted by leading financial institutions
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="text-gray-400 font-semibold text-lg hover:text-navy transition-colors cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
