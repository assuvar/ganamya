import React from 'react';

const Stats = () => {
    return (
        <section className="bg-brand-green py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8 text-center text-white">
                <div>
                    <div className="text-4xl font-bold">500+</div>
                    <div className="text-xs uppercase opacity-80 mt-1">Trained Students</div>
                </div>
                <div>
                    <div className="text-4xl font-bold">5+</div>
                    <div className="text-xs uppercase opacity-80 mt-1">Partner Colleges</div>
                </div>
                <div>
                    <div className="text-4xl font-bold">20+</div>
                    <div className="text-xs uppercase opacity-80 mt-1">Courses Offered</div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
