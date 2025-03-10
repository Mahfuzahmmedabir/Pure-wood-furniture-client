


import { useState } from 'react';
import useAxiosOpen from '../../../hooks/useAxios';
const image_key = import.meta.env.VITE_IMG_HOSTING;
const image_Api = `https://api.imgbb.com/1/upload?key=${image_key}`;
const AddItems = () => {
  const axiosOpen = useAxiosOpen()
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    size: '',
    category: '',
    keyFeatures: '',
    image: null,
  });

  const categories = ['Sofa', 'Table', 'Chair', 'Bed', 'Cabinet'];

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = e => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Furniture Info:', formData);
    const images = { image: formData.image };
    console.log(images);
    const res = await axiosOpen.post(image_Api, images, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    alert('aaa');
    console.log(res.data.data.display_url);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Add Furniture
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Size</label>
          <input
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Upload Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Key Features
          </label>
          <textarea
            name="keyFeatures"
            value={formData.keyFeatures}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default AddItems;


