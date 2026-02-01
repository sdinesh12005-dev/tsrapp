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
        <div id="order" className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
                <div className="absolute top-1/2 -left-24 w-72 h-72 bg-pink-50 rounded-full opacity-50 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:text-center mb-16">
                    <h2 className="text-base text-tsr-blue-light font-semibold tracking-wide uppercase">Quick Order</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Place Your Order Instantly
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Fill in the details below and send your order directly to us via WhatsApp for immediate processing.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="bg-tsr-blue-dark py-6 px-8 flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white flex items-center">
                            <ShoppingCart className="mr-3 h-6 w-6" />
                            Order Form
                        </h3>
                        <span className="text-blue-200 text-sm font-medium">Fast Track B2B Ordering</span>
                    </div>

                    <div className="p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="product" className="block text-sm font-medium text-gray-700">Product Name / Type</label>
                                <input
                                    type="text"
                                    name="product"
                                    id="product"
                                    value={formData.product}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-tsr-blue-light focus:border-tsr-blue-light"
                                    placeholder="e.g., Rice, Spices, Garments"
                                />
                            </div>
                            <div>
                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                                <input
                                    type="text"
                                    name="quantity"
                                    id="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-tsr-blue-light focus:border-tsr-blue-light"
                                    placeholder="e.g., 500 kg, 1 Container"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Shipping Destination</label>
                            <input
                                type="text"
                                name="destination"
                                id="destination"
                                value={formData.destination}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-tsr-blue-light focus:border-tsr-blue-light"
                                placeholder="City, Country"
                            />
                        </div>

                        <div>
                            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Additional Notes</label>
                            <textarea
                                name="notes"
                                id="notes"
                                rows="3"
                                value={formData.notes}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-tsr-blue-light focus:border-tsr-blue-light"
                                placeholder="Any specific requirements?"
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <button
                                onClick={handleWhatsAppOrder}
                                className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-md text-lg font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:-translate-y-1"
                            >
                                <MessageCircle className="mr-2 h-6 w-6" />
                                Place Order via WhatsApp
                            </button>
                            <p className="mt-3 text-center text-xs text-gray-500">
                                This will open WhatsApp with your pre-filled order details.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPlacement;
