import React from 'react';
import { FileText, ClipboardCheck, Truck, Handshake } from 'lucide-react';

const steps = [
    {
        name: 'Order Placement',
        description: 'Submit your requirements via our website or WhatsApp for a quick quote.',
        icon: FileText,
        href: '#order'
    },
    {
        name: 'Quality Check',
        description: 'We rigorously inspect all products to ensure they meet international standards.',
        icon: ClipboardCheck,
        href: '#about'
    },
    {
        name: 'Logistics & Dispatch',
        description: 'Our team handles packaging and logistics for timely and safe delivery.',
        icon: Truck,
        href: '#services'
    },
    {
        name: 'Delivery & Support',
        description: 'Receive your shipment with full documentation and post-delivery support.',
        icon: Handshake,
        href: '#contact'
    },
];

const Process = () => {
    return (
        <div className="py-24 bg-surface-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-tsr-blue-light/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tsr-blue-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:text-center mb-16">
                    <h2 className="text-base text-tsr-blue-primary font-semibold tracking-wide uppercase">How We Work</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-tsr-blue-dark sm:text-4xl">
                        Seamless Trade Workflow
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Experience a hassle-free trading process designed for transparency and efficiency.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent -z-10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <a key={step.name} href={step.href} className="relative group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/50 block hover:-translate-y-1">
                                <div className="relative flex items-center justify-center mx-auto h-24 w-24 rounded-full bg-white border-4 border-gray-50 shadow-sm group-hover:border-tsr-blue-light/30 transition-colors z-10">
                                    <step.icon className="h-10 w-10 text-tsr-blue-dark group-hover:text-tsr-blue-primary transition-colors" />
                                    <span className="absolute -top-2 -right-2 bg-tsr-accent text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                                        {index + 1}
                                    </span>
                                </div>
                                <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-tsr-blue-dark transition-colors text-center">{step.name}</h3>
                                <p className="mt-3 text-sm text-gray-500 leading-relaxed text-center">{step.description}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;
