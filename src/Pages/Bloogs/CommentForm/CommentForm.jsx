import { useState } from "react";
import axios from "axios";

const CommentForm = () => {
    const [formData, setFormData] = useState({
        comment: "",
        name: "",
        email: "",
        website: "",
    });
    const [message, setMessage] = useState(""); // Success/Error Message

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/comment", formData);
            console.log("Comment submitted:", response.data);

            setMessage("Comment posted successfully! 🎉");
            setFormData({ comment: "", name: "", email: "", website: "" }); // Reset form
        } catch (error) {
            console.error("Error submitting comment:", error);
            setMessage("Failed to post comment. Please try again. ❌");
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-4">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">REPLY TO ARTICLE</h2>
                <p className="text-gray-700 mt-1">PLEASE DO NOT USE OFFENSIVE VOCABULARY.</p>
            </div>

            {message && (
                <p className={`mb-4 ${message.includes("failed") ? "text-red-600" : "text-green-600"}`}>{message}</p>
            )}

            <p className="text-gray-700 mb-4">Your email address will not be published. Required fields are marked *</p>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <textarea
                        name="comment"
                        className="w-full p-3 bg-gray-100 border-0 rounded-none min-h-[180px]"
                        placeholder="Comment *"
                        required
                        value={formData.comment}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input
                        type="text"
                        name="name"
                        className="p-3 bg-gray-100 border-0 rounded-none"
                        placeholder="Name *"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        className="p-3 bg-gray-100 border-0 rounded-none"
                        placeholder="Email *"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="url"
                        name="website"
                        className="p-3 bg-gray-100 border-0 rounded-none"
                        placeholder="Website"
                        value={formData.website}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex justify-end">
                    <button type="submit" className="bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
                        Post Comment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CommentForm;
