import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteProductId, setDeleteProductId] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:5000/products");
                const data = await response.json();

                if (response.ok) {
                    setProducts(data);
                } else {
                    setError(data.error || "Failed to fetch products.");
                }
            } catch (err) {
                setError("Error: " + err.message);
            }
        };

        fetchProducts();
    }, []);

    // Called when user confirms deletion in modal
    const handleConfirmDelete = async () => {
        if (!deleteProductId) return;

        try {
            const response = await fetch(`http://localhost:5000/products/${deleteProductId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setProducts((prevProducts) =>
                    prevProducts.filter((product) => product._id !== deleteProductId)
                );
                toast.success("Product deleted successfully");
            } else {
                const data = await response.json();
                toast.error(data.error || "Failed to delete product.");
            }
        } catch (err) {
            toast.error("Error: " + err.message);
        } finally {
            setIsModalOpen(false);
            setDeleteProductId(null);
        }
    };

    // Called when user cancels deletion in modal
    const handleCancelDelete = () => {
        setIsModalOpen(false);
        setDeleteProductId(null);
    };

    // Open modal and set which product ID to delete
    const openDeleteModal = (id) => {
        setDeleteProductId(id);
        setIsModalOpen(true);
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Product List</h2>
            {error && <p className="text-red-600 mb-4">{error}</p>}

            {products.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border px-4 py-2">#</th>
                                <th className="border px-4 py-2">Image</th>
                                <th className="border px-4 py-2">Title</th>
                                <th className="border px-4 py-2">Author</th>
                                <th className="border px-4 py-2">Category</th>
                                <th className="border px-4 py-2">Rating</th>
                                <th className="border px-4 py-2">Description</th>
                                <th className="border px-4 py-2">Edit</th>
                                <th className="border px-4 py-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={product._id} className="text-center">
                                    <td className="border px-4 py-2">{index + 1}</td>
                                    <td className="border px-2 py-2">
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-20 h-16 object-cover mx-auto rounded"
                                            />
                                        ) : (
                                            "No image"
                                        )}
                                    </td>
                                    <td className="border px-4 py-2">{product.title}</td>
                                    <td className="border px-4 py-2">{product.author}</td>
                                    <td className="border px-4 py-2">{product.category}</td>
                                    <td className="border px-4 py-2">{product.rating}</td>
                                    <td className="border px-4 py-2 text-left">{product.description}</td>
                                    <td className="border px-4 py-2 text-left">edit</td>
                                    <td className="border px-4 py-2 text-left">
                                        <button
                                            onClick={() => openDeleteModal(product._id)}
                                            className="text-red-600 hover:text-red-800 font-semibold"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Confirm Modal */}
            <ConfirmModal
                isOpen={isModalOpen}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
                title="Delete Product"
                message="Are you sure you want to delete this product?"
            />
        </div>
    );
};

export default ProductList;
