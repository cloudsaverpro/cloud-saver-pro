import React from 'react';
import { Link } from 'gatsby';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <header className="container mx-auto px-4 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Optimize Your Cloud Costs Without Compromising Performance
        </h1>
        <p className="text-xl text-blue-700 mb-8">
          Expert cloud cost optimization services helping businesses save up to 40% on their cloud spending
        </p>
        <Link 
          to="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-blue-700"
        >
          Get Free Assessment <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </header>
  );
}