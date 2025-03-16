import React from 'react';

const Testimonials = ({ testimonials }) => (
    <section id="testimonials" className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Client Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg 
                  transform hover:-translate-y-1 transition-all duration-200"
                    >
                        <div className="flex items-start space-x-4">
                            <img
                                src={require(`../images/${testimonial.image}`).default}
                                alt={testimonial.author}
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                                <a target="_blank" rel="noreferrer" className="text-blue-600 hover:underline duration-200" href={testimonial.link}><p className="font-semibold">{testimonial.author}</p></a>
                                <p className="text-gray-500 text-sm">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Testimonials;
