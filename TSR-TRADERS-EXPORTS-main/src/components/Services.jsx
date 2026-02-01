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
        <div id="services" className="py-12 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-tsr-blue-light font-semibold tracking-wide uppercase">Our Capabilities</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Comprehensive Trade Services
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We provide end-to-end solutions for all your trading and export needs, powered by experience and dedication.
                    </p>
                </div>

                <div className="mt-10 lg:mt-20">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {services.map((service) => (
                            <div key={service.name} className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-tsr-blue-dark text-white shadow-lg">
                                        <service.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-xl leading-6 font-bold text-gray-900">{service.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    {service.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Services;
