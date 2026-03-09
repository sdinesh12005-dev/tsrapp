import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Image as ImageIcon } from 'lucide-react';
import mdProfile from '../assets/md-profile.jpg';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const { name, phone, message } = formData;
        
        // WhatsApp number of the contact
        const phoneNumber = "919042954268"; 
        
        // Construct the message text
        const text = `Hello TSR Traders!\n\nName: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`;
        
        // Open WhatsApp link in a new tab
        const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(waLink, '_blank');
    };

    return (
        <div id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-tsr-blue-primary font-semibold tracking-wide uppercase">Get In Touch</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-tsr-blue-dark sm:text-4xl">
                        Contact Us
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Have a question or want to start a partnership? Reach out to us directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden p-8 sm:p-10 flex flex-col justify-between">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-tsr-blue-primary focus:border-transparent transition-all outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-tsr-blue-primary focus:border-transparent transition-all outline-none"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-tsr-blue-primary focus:border-transparent transition-all outline-none resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-gradient-to-r from-tsr-blue-dark to-tsr-blue-primary hover:from-tsr-blue-primary hover:to-tsr-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsr-blue-dark transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Send Message <Send className="ml-2 h-5 w-5" />
                            </button>
                        </form>
                    </div>

                    {/* Info Card */}
                    <div className="bg-gradient-to-br from-tsr-blue-dark to-gray-900 rounded-3xl shadow-2xl overflow-hidden p-8 sm:p-10 text-white flex flex-col justify-between relative">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-tsr-blue-primary/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                            <ul className="space-y-8">
                                <li className="flex items-start group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-tsr-blue-primary transition-colors">
                                        <MapPin className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-6">
                                        <p className="text-sm font-medium text-blue-200 mb-1">Our Location</p>
                                        <a 
                                            href="https://www.google.com/maps/search/?api=1&query=Main+Road+Thiruvettanallur,+Tenkasi+District+-+627855" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-lg font-semibold hover:text-tsr-blue-light transition-colors block"
                                        >
                                            Main Road Thiruvettanallur,<br />
                                            Tenkasi District - 627855
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-tsr-blue-primary transition-colors">
                                        <Phone className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-6">
                                        <p className="text-sm font-medium text-blue-200 mb-1">Phone Number</p>
                                        <a href="tel:9042954268" className="text-lg font-semibold hover:text-tsr-blue-light transition-colors block">+91 90429 54268</a>
                                    </div>
                                </li>
                                <li className="flex items-start group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-tsr-blue-primary transition-colors">
                                        <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-6">
                                        <p className="text-sm font-medium text-blue-200 mb-1">Email Address</p>
                                        <a href="mailto:sdinesh12005@gmail.com" className="text-lg font-semibold hover:text-tsr-blue-light transition-colors block">sdinesh12005@gmail.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-blue-200">Registered Entity</p>
                                    <p className="font-mono text-white mt-1">GST: 33BPMPS9494C2ZB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Photo Slots Section */}
                <div className="mt-16 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden p-8 sm:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Slot 1 */}
                        <div className="relative group rounded-2xl overflow-hidden bg-gray-100 aspect-video flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-tsr-blue-primary transition-colors duration-300">
                             <div className="text-center p-6 cursor-pointer">
                                 <ImageIcon className="mx-auto h-12 w-12 text-gray-400 group-hover:text-tsr-blue-primary transition-colors mb-3" />
                                 <p className="text-lg font-bold text-gray-800 group-hover:text-tsr-blue-primary">Owner</p>
                                 <p className="text-sm font-medium text-gray-600 mt-1">Photo Slot</p>
                                 <p className="text-xs text-gray-400 mt-1">Replace with an image</p>
                             </div>
                             {/* Uncomment and add src below when actual images are available */}
                             {/* <img src="/path/to/owner.jpg" alt="Owner" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /> */}
                        </div>

                        {/* Slot 2 */}
                        <div className="relative group overflow-hidden bg-gray-100 aspect-square max-w-[350px] mx-auto rounded-[2.5rem] flex items-center justify-center border-4 border-white hover:border-tsr-blue-primary transition-all duration-300 shadow-xl">
                             <img src={mdProfile} alt="Managing Director" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                             <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-16 pb-6 px-6 z-10 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                                 <p className="text-xl font-bold text-white text-center tracking-wide leading-tight drop-shadow-lg">Managing Director</p>
                             </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Contact;
