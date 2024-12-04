import React, { useState, useEffect } from 'react';
import logo from '../images/csp.png'
import { ArrowRight, Cloud, DollarSign, PieChart, Mail, Menu, X, ChevronUp } from 'lucide-react';

const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Handle scroll to top button visibility
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);

            // Update active section based on scroll position
            const sections = ['home', 'features', 'testimonials', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const bounds = element.getBoundingClientRect();
                    return bounds.top <= 100 && bounds.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const features = [
        {
            title: "Cost Analysis",
            description: "Deep dive into your cloud infrastructure to identify unnecessary expenses and resource waste",
            icon: <PieChart className="w-6 h-6" />,
            stats: "40% Average Savings"
        },
        {
            title: "Optimization Strategy",
            description: "Customized recommendations for resource rightsizing and usage optimization",
            icon: <Cloud className="w-6 h-6" />,
            stats: "24/7 Monitoring"
        },
        {
            title: "Cost Monitoring",
            description: "Ongoing monitoring and alerts to prevent cost overruns",
            icon: <DollarSign className="w-6 h-6" />,
            stats: "Real-time Alerts"
        }
    ];

    const testimonials = [
        {
            quote: "Reduced our AWS costs by 40% in just two months. Incredible ROI.",
            author: "Sarah Chen",
            role: "CTO, TechStart Inc",
            image: "/api/placeholder/64/64"
        },
        {
            quote: "Their expertise in cloud architecture saved us thousands monthly.",
            author: "Michael Rodriguez",
            role: "Head of Infrastructure, DataFlow",
            image: "/api/placeholder/64/64"
        }
    ];

    const NavLink = ({ href, children }) => (
        <a
            href={href}
            className={`text-gray-600 hover:text-blue-600 px-4 py-2 transition-colors duration-200
        ${activeSection === href.slice(1) ? 'text-blue-600 font-semibold' : ''}`}
        >
            {children}
        </a>
    );

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({
        loading: false,
        success: false,
        error: null
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ loading: true, success: false, error: null });

        try {
            const myForm = e.target;
            const formData = new FormData(myForm);
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString()
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setFormStatus({
                loading: false,
                success: true,
                error: null
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setFormStatus(prev => ({ ...prev, success: false }));
            }, 5000);

        } catch (error) {
            console.log(error.message);
            setFormStatus({
                loading: false,
                success: false,
                error: 'Failed to send message'
            });
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 font-bold text-xl text-blue-600">
                            <img alt="CloudSaverPro.com" src={logo} width="220"/>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-4">
                            <NavLink href="#home">Home</NavLink>
                            <NavLink href="#features">Features</NavLink>
                            <NavLink href="#testimonials">Testimonials</NavLink>
                            <NavLink href="#contact">Contact</NavLink>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
                        <a href="#home" className="block px-3 py-2 rounded-md hover:bg-gray-100">Home</a>
                        <a href="#features" className="block px-3 py-2 rounded-md hover:bg-gray-100">Features</a>
                        <a href="#testimonials" className="block px-3 py-2 rounded-md hover:bg-gray-100">Testimonials</a>
                        <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-gray-100">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
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

            {/* Features Section */}
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

            {/* Testimonials Section */}
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
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className="w-16 h-16 rounded-full"
                                    />
                                    <div>
                                        <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                                        <p className="font-semibold">{testimonial.author}</p>
                                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                        Let's Optimize Your Cloud Costs
                    </h2>

                    {formStatus.success && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-600 rounded-lg">
                            Message sent successfully! We'll get back to you soon.
                        </div>
                    )}

                    {formStatus.error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
                            {formStatus.error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="group">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 
              outline-none transition-all duration-200 group-hover:border-blue-300"
                            />
                        </div>
                        <div className="group">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 
              outline-none transition-all duration-200 group-hover:border-blue-300"
                            />
                        </div>
                        <div className="group">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={4}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 
              outline-none transition-all duration-200 group-hover:border-blue-300"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={formStatus.loading}
                            className={`w-full bg-blue-600 text-white px-6 py-3 rounded-lg 
            hover:bg-blue-700 transform hover:scale-102 transition-all duration-200 
            inline-flex items-center justify-center
            ${formStatus.loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                        >
                            {formStatus.loading ? (
                                <>
                                    Sending...
                                    <span className="ml-2 animate-spin">⏳</span>
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Mail className="ml-2 w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </section>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full 
          shadow-lg hover:bg-blue-700 transition-all duration-200 
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <ChevronUp className="w-6 h-6" />
            </button>
        </div>
    );
};

export default LandingPage;