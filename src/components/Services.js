import React from 'react';
import { Cloud, DollarSign, BarChart2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      Icon: Cloud,
      title: "Cloud Architecture Review",
      description: "Comprehensive analysis of your current cloud infrastructure to identify optimization opportunities."
    },
    {
      Icon: DollarSign,
      title: "Cost Optimization",
      description: "Strategic recommendations to reduce cloud spending while maintaining performance."
    },
    {
      Icon: BarChart2,
      title: "Monitoring Setup",
      description: "Implementation of cost monitoring and alerting systems for ongoing optimization."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold text-blue-900 mb-12 text-center">How We Help</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map(({ Icon, title, description }) => (
          <div key={title} className="bg-white p-6 rounded-xl shadow-md">
            <Icon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}