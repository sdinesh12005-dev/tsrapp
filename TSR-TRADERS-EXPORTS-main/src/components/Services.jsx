import React from 'react';
import { Globe, Truck, TrendingUp, Package } from 'lucide-react';

const services = [
    {
        name: 'Global Export',
        description: 'Seamlessly connecting local products to international markets with efficient export solutions.',
        icon: Globe,
    },
    {
        name: 'Logistics & Shipping',
        description: 'Reliable transportation and logistics services ensuring your goods reach their destination on time.',
        icon: Truck,
    },
    {
        name: 'Trading Solutions',
        description: 'Expert market analysis and trading strategies to maximize your business potential.',
        icon: TrendingUp,
    },
    {
        name: 'Product Sourcing',
        description: 'Sourcing high-quality raw materials and finished goods tailored to your specific requirements.',
        icon: Package,
    },
];

const Services = () => {
    return (
        <div id="services" className="py-20 lg:py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-16">
                    <h2 className="text-base text-tsr-blue-primary font-semibold tracking-wide uppercase">Our Capabilities</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-tsr-blue-dark sm:text-4xl">
                        Comprehensive Trade Services
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We provide end-to-end solutions for all your trading and export needs, powered by experience and dedication.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={service.name}
                            className="relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-tsr-blue-light/20 to-transparent rounded-full opacity-50 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative">
                                <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-tsr-blue-dark to-tsr-blue-primary text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="h-7 w-7" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-tsr-blue-primary transition-colors">{service.name}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
