import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "The motivational training at Gnanamaya completely changed my perspective. I wasn't just learning to code, I was learning how to think like a professional. I secured a job within 2 months of finishing.",
            name: "Rahul Sharma",
            role: "Software Engineer at TCS",
            avatar: "https://i.pravatar.cc/150?u=1"
        },
        {
            quote: "The mentorship here is unmatched. My mentor Vaishnavi Reddy provided insights that no textbook could ever cover. The hands-on project portfolio helped me stand out in interviews.",
            name: "Ananya Rao",
            role: "UI Designer at Infosys",
            avatar: "https://i.pravatar.cc/150?u=2"
        },
        {
            quote: "Joining Gnanamaya was the best decision for my career. The practical sessions were extremely thorough. They really go the extra mile to ensure every student succeeds.",
            name: "Karthik Reddy",
            role: "Data Analyst at Wipro",
            avatar: "https://i.pravatar.cc/150?u=3"
        }
    ];

    return (
        <section id="testimonials" className="py-20 max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
                <span className="text-brand-green text-xs font-bold uppercase tracking-widest">Success Stories</span>
                <h2 className="text-3xl font-bold mt-2">What Our Students Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-green-50 p-8 rounded-2xl relative">
                        <div className="flex text-yellow-400 mb-4">★★★★★</div>
                        <p className="text-brand-navy/70 italic text-sm leading-relaxed">"{testimonial.quote}"</p>
                        <div className="mt-8 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                                <img src={testimonial.avatar} alt={testimonial.name} />
                            </div>
                            <div>
                                <div className="font-bold text-sm">{testimonial.name}</div>
                                <div className="text-xs text-brand-navy/50">{testimonial.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
