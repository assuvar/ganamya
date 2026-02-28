import React from 'react';

const Partners = () => {
    const partners = [
        { name: "Montfort College", logo: "/montfort.jpg" },
        { name: "St. Francis College", logo: "/st_francis.jpg" },
        { name: "Presidency College", logo: "/presidency.jpg" },
        { name: "Cambridge Institute of Technology", logo: "/cambridge.jpg" },
    ];
    return (
        <section className="py-12 bg-white">
            <p className="text-center text-brand-navy/50 text-xs font-bold uppercase tracking-widest mb-8">
                Trusted by Partner Colleges
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 px-8">
                {partners.map((partner) => (
                    <img
                        key={partner.name}
                        src={partner.logo}
                        alt={partner.name}
                        className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition duration-300"
                    />
                ))}
            </div>
        </section>
    );
};

export default Partners;
