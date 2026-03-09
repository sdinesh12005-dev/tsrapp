import React, { useState } from 'react';
import { Send, ShoppingCart, MessageCircle } from 'lucide-react';

const OrderPlacement = () => {
    const [formData, setFormData] = useState({
        product: '',
        quantity: '',
        destination: '',
        notes: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsAppOrder = () => {
        const { product, quantity, destination, notes } = formData;

        // Construct the WhatsApp message
        const message = `*New Order Request*%0A%0A` +
            `*Product:* ${product || 'Not specific'}%0A` +
            `*Quantity:* ${quantity || 'Not specific'}%0A` +
            `*Destination:* ${destination || 'Not specific'}%0A` +
            `*Notes:* ${notes || 'None'}`;

        // Open WhatsApp
        const whatsappUrl = `https://wa.me/919042954268?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div id="order" className="py-24 bg-surface-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50/50 rounded-full opacity-50 blur-3xl"></div>
                <div className="absolute top-1/2 -left-24 w-72 h-72 bg-pink-50/50 rounded-full opacity-50 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:text-center mb-16">
                    <h2 className="text-base text-tsr-blue-primary font-semibold tracking-wide uppercase">Quick Order</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-tsr-blue-dark sm:text-4xl">
                        Place Your Order Instantly
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Fill in the details below and send your order directly to us via WhatsApp for immediate processing.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="bg-gradient-to-r from-tsr-blue-dark to-tsr-blue-primary py-8 px-8 flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white flex items-center">
                            <ShoppingCart className="mr-3 h-7 w-7" />
                            Order Form
                        </h3>
                        <span className="text-blue-100 text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Fast Track B2B</span>
                    </div>

                    <div className="p-8 sm:p-10 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="product" className="block text-sm font-semibold text-gray-700 mb-2">Product Name / Type</label>
                                <input
                                    type="text"
                                    name="product"
                                    id="product"
                                    value={formData.product}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-tsr-blue-primary focus:border-transparent transition-all outline-none"
                                    placeholder="e.g., Rice, Spices, Garments"
                                />
                            </div>
                            <div>
                                <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
                                <input
                                    type="text"
                                    name="quantity"
                                    id="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-tsr-blue-primary focus:border-transparent transition-all outline-none"
                                    placeholder="e.g., 500 kg, 1 Container"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="destination" className="block text-sm font-semibold text-gray-700 mb-2">Shipping Destination</label>
                            <input
                                type="text"
                                name="destination"
                                id="destination"
                                value={formData.destination}
                                onChange={handleChange}
                                className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-tsr-blue-primary focus:border-transparent transition-all outline-none"
                                placeholder="City, Country"
                            />
                        </div>

                        <div>
                            <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes</label>
                            <textarea
                                name="notes"
                                id="notes"
                                rows="3"
                                value={formData.notes}
                                onChange={handleChange}
                                className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-tsr-blue-primary focus:border-transparent transition-all outline-none resize-none"
                                placeholder="Any specific requirements?"
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <button
                                onClick={handleWhatsAppOrder}
                                className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:-translate-y-1 block"
                            >
                                <MessageCircle className="mr-2 h-6 w-6" />
                                Place Order via WhatsApp
                            </button>
                            <p className="mt-4 text-center text-sm text-gray-500">
                                This will open WhatsApp with your pre-filled details.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPlacement;
