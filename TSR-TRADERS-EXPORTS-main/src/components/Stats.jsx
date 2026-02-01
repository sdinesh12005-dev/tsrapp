import React from 'react';
import { Users, CheckCircle, Clock, Globe } from 'lucide-react';

const Stats = () => {
    return (
        <div className="bg-tsr-blue-dark py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Why Partner With TSR Traders?
                    </h2>
                    <p className="mt-3 text-xl text-blue-200 sm:mt-4">
                        We are a dynamic, fast-growing export company dedicated to excellence.
                    </p>
                </div>
                <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                    <div className="flex flex-col">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
                            Quality Assurance
                        </dt>
                        <dd className="order-1 text-5xl font-extrabold text-white flex justify-center items-center">
                            <CheckCircle className="h-10 w-10 mr-2 text-green-400" /> 100%
                        </dd>
                    </div>
                    <div className="flex flex-col mt-10 sm:mt-0">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
                            Support
                        </dt>
                        <dd className="order-1 text-5xl font-extrabold text-white flex justify-center items-center">
                            <Clock className="h-10 w-10 mr-2 text-brand-pink" /> 24/7
                        </dd>
                    </div>
                    <div className="flex flex-col mt-10 sm:mt-0">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
                            Global Reach
                        </dt>
                        <dd className="order-1 text-5xl font-extrabold text-white flex justify-center items-center">
                            <Globe className="h-10 w-10 mr-2 text-tsr-blue-light" /> Growing
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default Stats;
