import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Contacts = () => {
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
        <section id="contact" className="py-20">
            <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Let's Optimize Your Cloud Costs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card bg-gray-50 p-4 rounded-lg shadow-lg">
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

                    <div className="flex flex-col p-4">
                        <div className="mt-2 text-gray-700 "> <p className="font-semibold group"> Alternatively, email us:</p> support@cloudsaverpro.com</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
