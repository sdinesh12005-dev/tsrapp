import React from 'react';
import { ShieldCheck, Globe, Star } from 'lucide-react';

const About = () => {
    return (
        <div id="about" className="py-12 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-10 lg:mb-16">
                    <h2 className="text-base text-tsr-blue-light font-semibold tracking-wide uppercase">About Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Building Trust in Global Trade
                    </p>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative mb-8 lg:mb-0">
                        <div className="absolute inset-0 bg-tsr-blue-light blur-3xl opacity-20 rounded-full"></div>
                        <img
                            className="relative rounded-2xl shadow-xl w-full object-cover h-64 lg:h-96"
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            alt="Business meeting"
                        />
                    </div>

                    {/* Content Side */}
                    <div>
                        <p className="mt-4 text-lg text-gray-500">
                            At <span className="font-bold text-tsr-blue-dark">TSR Traders And Exports</span>, we are committed to bridging the gap between quality manufacturers and global markets. With years of experience and a robust network, we ensure smooth and efficient trade operations.
                        </p>
                        <p className="mt-4 text-lg text-gray-500">
                            Our mission is to provide reliable, high-quality, and cost-effective trading solutions to our clients worldwide. We value integrity and transparency in every deal.
                        </p>

                        <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-tsr-blue-dark">
                            <div className="flex items-center">
                                <ShieldCheck className="h-6 w-6 text-tsr-blue-dark mr-3" />
                                <span className="text-lg font-bold text-gray-900">Government Registered</span>
                            </div>
                            <p className="mt-2 text-gray-600 font-mono">GST No: 33BPMPS9494C2ZB</p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-tsr-blue-light text-white">
                                        <Globe className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg leading-6 font-medium text-gray-900">Global Reach</h5>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-tsr-blue-light text-white">
                                        <Star className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg leading-6 font-medium text-gray-900">Premium Quality</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
