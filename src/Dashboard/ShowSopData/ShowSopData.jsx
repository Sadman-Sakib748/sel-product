import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import big from './../../assets/touchicon.png';
import LoadingPage from '../../Pages/LoadingPage/LoadingPage';

const ShowSopData = () => {
    const { email } = useLoaderData();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch cart items
    const fetchCartItems = useCallback(() => {
        if (!email) return;
        setLoading(true);
        axios
            .get(`http://localhost:5000/carts?email=${email}`)
            .then((res) => {
                setCartItems(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching cart items:", err);
                setLoading(false);
            });
    }, [email]);

    useEffect(() => {
        fetchCartItems();
    }, [fetchCartItems]);

    // Delete individual cart item
    const handleDelete = (itemId) => {
        axios
            .delete(`http://localhost:5000/carts/${itemId}`)
            .then(() => {
                setCartItems((prevItems) => prevItems.filter(item => item._id !== itemId));
            })
            .catch((err) => {
                console.error("Failed to delete item:", err);
            });
    };

    // Cancel button - simply reloads the cart to original state
    const handleCancel = () => {
        fetchCartItems();
    };

    if (!email) {
        return <p className="text-red-500 text-center mt-10">Please provide an email to fetch cart items.</p>;
    }

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <div className="min-h-screen py-10 px-6">
            <h2 className="text-3xl font-bold mb-4">Cart Items for {email}</h2>
            <p className="text-gray-500 mb-6">Total Items: {cartItems.length}</p>

            <div className="mb-6 space-x-4">
                <button
                    onClick={fetchCartItems}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Refresh Cart
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="px-6 py-3">Image</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Quantity</th>
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item._id} className="border-t hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <img
                                        src={item.image || big}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                </td>
                                <td className="px-6 py-4 font-medium">{item.name}</td>
                                <td className="px-6 py-4">{item.quantity}</td>
                                <td className="px-6 py-4 font-bold text-gray-700">${item.price}</td>
                                <td className="px-6 py-4 space-x-2">
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                                    >
                                        cencel
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowSopData;
