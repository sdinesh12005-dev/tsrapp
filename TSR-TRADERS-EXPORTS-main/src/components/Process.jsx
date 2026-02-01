import React from 'react';
import { FileText, ClipboardCheck, Truck, Handshake } from 'lucide-react';

const steps = [
    {
        name: 'Order Placement',
        description: 'Submit your requirements via our website or WhatsApp for a quick quote.',
        icon: FileText,
    },
    {
        name: 'Quality Check',
        description: 'We rigorously inspect all products to ensure they meet international standards.',
        icon: ClipboardCheck,
    },
    {
        name: 'Logistics & Dispatch',
        description: 'Our team handles packaging and logistics for timely and safe delivery.',
        icon: Truck,
    },
    {
        name: 'Delivery & Support',
        description: 'Receive your shipment with full documentation and post-delivery support.',
        icon: Handshake,
    },
];

const Process = () => {
    return (
        <div className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-16">
                    <h2 className="text-base text-tsr-blue-light font-semibold tracking-wide uppercase">How We Work</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Seamless Trade Workflow
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Experience a hassle-free trading process designed for transparency and efficiency.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={step.name} className="relative bg-white pt-4 text-center">
                                <div className="relative flex items-center justify-center mx-auto h-24 w-24 rounded-full bg-white border-4 border-tsr-blue-light z-10">
                                    <step.icon className="h-10 w-10 text-tsr-blue-dark" />
                                    <span className="absolute -top-2 -right-2 bg-brand-pink text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                                        {index + 1}
                                    </span>
                                </div>
                                <h3 className="mt-6 text-xl font-bold text-gray-900">{step.name}</h3>
                                <p className="mt-2 text-base text-gray-500">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;
