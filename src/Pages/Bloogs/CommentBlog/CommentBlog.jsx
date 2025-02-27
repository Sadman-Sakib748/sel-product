import { useEffect, useState } from "react";
import axios from "axios";

const CommentBlog = () => {
    const [comments, setComments] = useState([]);
    const [replyData, setReplyData] = useState({}); // Tracks replies per comment
    const [loading, setLoading] = useState(false); // Loading state
    const [imageUpload, setImageUpload] = useState(null); // Image upload state

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:5000/comments")
            .then((response) => {
                setComments(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching comments:", error);
                setLoading(false);
            });
    }, []);

    const handleReplyChange = (commentId, value) => {
        setReplyData({ ...replyData, [commentId]: value });
    };

    const handleReplySubmit = async (commentId) => {
        if (!replyData[commentId]) return;

        const newReply = {
            name: "Anonymous", // Replace with logged-in user data if available
            body: replyData[commentId],
            profileImage: "https://i.pravatar.cc/64", // Placeholder or user avatar
        };

        try {
            await axios.post("http://localhost:5000/reply", { commentId, reply: newReply });

            // Update state with new reply
            setComments((prev) =>
                prev.map((comment) =>
                    comment._id === commentId
                        ? { ...comment, replies: [...(comment.replies || []), newReply] }
                        : comment
                )
            );
            setReplyData({ ...replyData, [commentId]: "" }); // Clear input field
        } catch (error) {
            console.error("Error posting reply:", error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUpload(reader.result); // Save the image URL in the state
            };
            reader.readAsDataURL(file); // Convert the file to a data URL
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Show a loading message
    }

    return (
        <div className="max-w-3xl mx-auto px-4">
            <div className="border-b border-gray-200 pb-2 mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{comments.length} COMMENTS</h2>
            </div>

            <div className="space-y-8">
                {comments.map((comment) => (
                    <div key={comment._id}>
                        <div className="flex gap-4">
                            <img
                                src={comment.profileImage || imageUpload || "https://i.pravatar.cc/64"}
                                alt="User avatar"
                                className="rounded-full h-14 w-14 object-cover"
                            />
                            <div className="flex-1">
                                <div className="space-y-1">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-800">{comment.name.toUpperCase()}</span>
                                        <span className="text-sm text-gray-500">
                                            {new Date(comment.timestamp).toLocaleString()}
                                        </span>
                                    </div>
                                    <p className="text-gray-700">{comment.body}</p>

                                    <button 
                                        className="text-xs font-bold text-gray-700 mt-2"
                                        onClick={() => handleReplyChange(comment._id, replyData[comment._id] || "")}
                                    >
                                        REPLY
                                    </button>

                                    {replyData[comment._id] !== undefined && (
                                        <div className="mt-2">
                                            <textarea
                                                value={replyData[comment._id]}
                                                onChange={(e) => handleReplyChange(comment._id, e.target.value)}
                                                className="w-full p-2 border border-gray-300 rounded"
                                                placeholder="Write a reply..."
                                            />
                                            <button
                                                onClick={() => handleReplySubmit(comment._id)}
                                                className="bg-gray-900 text-white px-3 py-1 mt-2 hover:bg-gray-800"
                                            >
                                                Post Reply
                                            </button>
                                        </div>
                                    )}

                                    {/* Display Replies */}
                                    {comment.replies?.length > 0 && (
                                        <div className="mt-4 space-y-4 border-l border-gray-200 pl-4">
                                            {comment.replies.map((reply, index) => (
                                                <div key={index} className="flex gap-3">
                                                    <img
                                                        src={reply.profileImage || "https://i.pravatar.cc/64"}
                                                        alt="Reply avatar"
                                                        className="rounded-full h-10 w-10 object-cover"
                                                    />
                                                    <div>
                                                        <span className="font-bold text-gray-800">{reply.name}</span>
                                                        <span className="text-sm text-gray-500 ml-2">
                                                            {new Date(reply.timestamp).toLocaleString()}
                                                        </span>
                                                        <p className="text-gray-700 mt-1">{reply.body}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-100 pt-2"></div>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <label htmlFor="image-upload" className="block text-gray-700">
                    Upload Profile Image:
                </label>
                <input
                    type="file"
                    id="image-upload"
                    onChange={handleImageChange}
                    className="w-full p-2 mt-2 border border-gray-300 rounded"
                />
            </div>
        </div>
    );
};

export default CommentBlog;
