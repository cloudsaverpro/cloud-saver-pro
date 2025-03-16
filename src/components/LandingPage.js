import React, { useState, useEffect } from 'react';
import SEO from "../components/SEO";
import Navigation from './Navigation';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Contacts from './Contacts';
import ScrollToTopButton from './ScrollToTopButton';
import { PieChart, Cloud, DollarSign } from 'lucide-react';

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
            author: "Hitesh Mittal",
            role: "Director, ALFO Systems Pvt. Ltd.",
            image: "hitesh.jpg",
            link: "https://www.linkedin.com/in/hitesh-mittal-1a56a212/"
        },
        {
            quote: "Thanks to their cloud cost optimization, we saved over 50% in the first year. Highly recommend their expertise.",
            author: "Divyani Agarwal",
            role: "Founder, Pareto Aluminum Systems",
            image: "pareto-dark-logo.svg",
            link: "https://www.linkedin.com/in/divyani-agarwal-064b081b9/"
        }
    ];

    return (
        <div>
            <SEO title="Home" description="Welcome to Cloud Saver Pro" />
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} activeSection={activeSection} />
            <Hero />
            <Features features={features} />
            <Testimonials testimonials={testimonials} />
            <Contacts />
            <ScrollToTopButton showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
        </div>
    );
};

export default LandingPage;