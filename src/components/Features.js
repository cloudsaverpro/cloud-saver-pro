import React from 'react';

const Features = ({ features }) => (
    <section id="features" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                How We Help
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-lg 
                  transform hover:-translate-y-1 transition-all duration-200"
                    >
                        <div className="text-blue-600 mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-gray-600 mb-4">{feature.description}</p>
                        <div className="text-blue-600 font-semibold">{feature.stats}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Features;
