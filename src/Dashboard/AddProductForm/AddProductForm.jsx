import { useForm } from "react-hook-form";
import {
  FaPlus,
  FaBook,
  FaUserAlt,
  FaDollarSign,
  FaTags,
  FaFileImage,
  FaInfoCircle,
} from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

// imgbb API
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProductForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const imageFile = new FormData();
    imageFile.append("image", data.image[0]);

    try {
      // Upload image to imgbb
      const imageRes = await axios.post(image_hosting_api, imageFile);
      console.log("Image Upload Result:", imageRes.data);

      if (imageRes.data.success) {
        const newProduct = {
          title: data.title,
          author: data.author,
          price: parseFloat(data.price),
          category: data.category,
          description: data.description,
          image: imageRes.data.data.display_url,
        };

        // Post new product to backend
        const productRes = await axios.post("http://localhost:5000/products", newProduct);
        console.log("Product Upload Result:", productRes.data);

        // FIX: Access insertedId and acknowledged inside result object
        if (productRes.data?.result?.insertedId || productRes.data?.result?.acknowledged) {
          reset();
          toast.success(`${data.title || "Book"} has been added successfully! 🎉`);
        } else {
          toast.error("Failed to save product to server.");
        }
      } else {
        toast.error("Image upload failed.");
      }
    } catch (error) {
      console.error("Upload Error:", error);
      toast.error(`Upload Failed: ${error.message || "Something went wrong!"}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 px-4">
      <Toaster position="top-center" reverseOrder={false} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl p-10 bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-3xl shadow-2xl"
      >
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 text-center mb-10">
          📚 Add a New Book
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="input-group input-group-vertical">
              <span className="text-indigo-500"><FaBook /></span>
              <input
                type="text"
                placeholder="Book Title"
                {...register("title", { required: true })}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* Author */}
          <div>
            <label className="input-group input-group-vertical">
              <span className="text-indigo-500"><FaUserAlt /></span>
              <input
                type="text"
                placeholder="Author Name"
                {...register("author", { required: true })}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* Price */}
          <div>
            <label className="input-group input-group-vertical">
              <span className="text-indigo-500"><FaDollarSign /></span>
              <input
                type="number"
                step="0.01"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* Category */}
          <div>
            <label className="input-group input-group-vertical">
              <span className="text-indigo-500"><FaTags /></span>
              <select
                defaultValue=""
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="">Select category</option>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kids">Kids</option>
              </select>
            </label>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="input-group input-group-vertical">
              <span className="text-indigo-500"><FaInfoCircle /></span>
              <textarea
                placeholder="Short description"
                rows="4"
                {...register("description")}
                className="textarea textarea-bordered w-full"
              />
            </label>
          </div>

          {/* Image Upload */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              <FaFileImage className="text-indigo-500" />
              Upload Image*
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="btn bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white w-full flex items-center justify-center gap-2 text-lg shadow-lg rounded-xl"
            >
              <FaPlus />
              Add Product
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddProductForm;
