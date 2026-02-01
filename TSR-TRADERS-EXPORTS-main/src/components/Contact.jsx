import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div id="contact" className="py-12 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 lg:mb-16">
                    <h2 className="text-base text-tsr-blue-light font-semibold tracking-wide uppercase">Get In Touch</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Contact Us
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Have a question or want to start a partnership? Reach out to us directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-tsr-blue-light focus:border-tsr-blue-light"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-tsr-blue-light focus:border-tsr-blue-light"
                                    placeholder="Your Phone Number"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-tsr-blue-light focus:border-tsr-blue-light"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-tsr-blue-dark hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsr-blue-dark transition-colors duration-200"
                            >
                                Send Message <Send className="ml-2 h-4 w-4" />
                            </button>
                        </form>
                    </div>

                    {/* Info Card */}
                    <div className="bg-tsr-blue-dark rounded-2xl shadow-xl overflow-hidden p-8 text-white flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <MapPin className="h-6 w-6 text-tsr-blue-light mr-4 mt-1" />
                                    <span>
                                        Main Road Thiruvettanallur,<br />
                                        Tenkasi District,<br />
                                        Tamil Nadu - 627855
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="h-6 w-6 text-tsr-blue-light mr-4" />
                                    <a href="tel:9042954268" className="hover:text-tsr-blue-light transition-colors">+91 90429 54268</a>
                                </li>
                                <li className="flex items-center">
                                    <Mail className="h-6 w-6 text-tsr-blue-light mr-4" />
                                    <a href="mailto:sdinesh12005@gmail.com" className="hover:text-tsr-blue-light transition-colors">sdinesh12005@gmail.com</a>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8 pt-8 border-t border-blue-800">
                            <p className="text-sm text-blue-200">
                                Fully Registered Entity<br />
                                <span className="font-mono text-white">GST: 33BPMPS9494C2ZB</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
