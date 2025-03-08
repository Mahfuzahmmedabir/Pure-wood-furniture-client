import React, { useState } from 'react';

const AddItems = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const categories = ['Sofa', 'Chair', 'Table', 'Bed', 'Cabinet', 'Shelf'];

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !category || !image) {
      alert('Please fill all fields!');
      return;
    }

    // Simulating form submission
    console.log('Title:', title);
    console.log('Category:', category);
    console.log('Image:', image);
    const furnitureInfo = { title, category, image };
 

    alert('Furniture information uploaded successfully!');

    // Clear form
    setTitle('');
    setCategory('');
    setImage(null);
  };

  return (
    <div className="">
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Upload Furniture Information
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Input */}
          <div>
            <label className="block font-medium">Furniture Title:</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Enter furniture title"
              className="w-full mt-1 p-2 border rounded-lg"
              required
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block font-medium">Category:</label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg"
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block font-medium">Upload Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full mt-1 p-2 border rounded-lg"
              required
            />
            {image && (
              <p className="mt-2 text-sm text-green-600">
                Selected: {image.name}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Upload Furniture
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
