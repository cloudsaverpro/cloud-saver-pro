import React from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = ({ showScrollTop, scrollToTop }) => (
    <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full 
          shadow-lg hover:bg-blue-700 transition-all duration-200 
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
        <ChevronUp className="w-6 h-6" />
    </button>
);

export default ScrollToTopButton;