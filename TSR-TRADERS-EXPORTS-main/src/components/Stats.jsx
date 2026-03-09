import React from 'react';

const stats = [
    { label: 'Countries Served', value: '25+' },
    { label: 'Trusted Partners', value: '100+' },
    { label: 'Successful Shipments', value: '500+' },
    { label: 'Years of Experience', value: '10+' },
];

const Stats = () => {
    return (
        <div className="bg-gradient-to-r from-tsr-blue-dark to-tsr-blue-primary">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Trusted by businesses worldwide
                    </h2>
                    <p className="mt-3 text-xl text-blue-100 sm:mt-4">
                        Our track record speaks for itself. We deliver results.
                    </p>
                </div>
                <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/20 transition-colors duration-300 mt-4 sm:mt-0">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-100">
                                {stat.label}
                            </dt>
                            <dd className="order-1 text-5xl font-extrabold text-white tracking-tight">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
};

export default Stats;
