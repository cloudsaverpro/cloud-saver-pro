import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => (
    <section id="home" className="pt-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-20">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
                    Optimize Your Cloud Costs Without Compromise
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Expert consultation to reduce your cloud infrastructure expenses while maintaining performance
                </p>
                <a href="#contact">
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 
              transform hover:scale-105 transition-all duration-200 inline-flex items-center">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </a>
            </div>
        </div>
    </section>
);

export default Hero;
