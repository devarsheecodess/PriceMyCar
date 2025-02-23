import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';

const MainPage = () => {
  const [formData, setFormData] = useState({ year: 0, manufacturer: 0, condition: 0, fuel: 0, odometer: 0, transmission: 0, car_type: 0 });
  const [predictedPrice, setPredictedPrice] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.year || !formData.manufacturer || !formData.condition || !formData.fuel || !formData.odometer || !formData.transmission || !formData.car_type) {
        alert('Please fill all the fields');
        return;
      }
      const response = await axios.get('http://localhost:5000/predict', { params: formData });
      setPredictedPrice(response.data.price);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-5 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent"
        >
          Price My Car
        </motion.h1>

        {predictedPrice > 0 && (
          <h3 className="text-xl font-semibold text-blue-400 mb-5 rounded-lg shadow-md text-center">
            Predicted Price: {predictedPrice.toLocaleString("en-IN")}/-
          </h3>
        )}



        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Car Type */}
            <div className="space-y-2">
              <label htmlFor="car_type" className="block text-sm font-medium text-gray-300">
                Car Type
              </label>
              <select
                id="car_type"
                name="car_type"
                onChange={handleChange}
                value={formData.car_type || ""}
                required
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="" disabled>Select Car Type</option>
                <option value="0">Sedan</option>
                <option value="1">SUV</option>
                <option value="2">Truck</option>
                <option value="3">Convertible</option>
                <option value="4">Coupe</option>
                <option value="5">Minivan</option>
                <option value="6">Hatchback</option>
                <option value="7">Van</option>
                <option value="8">Wagon</option>
                <option value="9">Crossover</option>
                <option value="10">Luxury</option>
                <option value="11">Electric</option>
                <option value="12">Sports Car</option>
              </select>

            </div>

            {/* Manufacturer */}
            <div className="space-y-2">
              <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-300">
                Manufacturer
              </label>
              <select
                id="manufacturer"
                name="manufacturer"
                onChange={handleChange}
                value={formData.manufacturer || ""}
                required
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="" disabled>Select Manufacturer</option>
                <option value="0">Toyota</option>
                <option value="1">Ford</option>
                <option value="2">BMW</option>
                <option value="3">Honda</option>
                <option value="4">Mercedes</option>
              </select>
            </div>

            {/* Condition */}
            <div className="space-y-2">
              <label htmlFor="condition" className="block text-sm font-medium text-gray-300">
                Condition
              </label>
              <select
                id="condition"
                name="condition"
                onChange={handleChange}
                value={formData.condition || ""}
                required
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="" disabled>Select Condition</option>
                <option value="0">Fair</option>
                <option value="1">Good</option>
                <option value="2">Excellent</option>
                <option value="3">Like New</option>
              </select>
            </div>

            {/* Fuel Type */}
            <div className="space-y-2">
              <label htmlFor="fuel" className="block text-sm font-medium text-gray-300">
                Fuel Type
              </label>
              <select
                id="fuel"
                name="fuel"
                onChange={handleChange}
                value={formData.fuel || ""}
                required
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="" disabled>Select Fuel Type</option>
                <option value="0">Petrol</option>
                <option value="1">Diesel</option>
                <option value="2">Electric</option>
                <option value="3">Hybrid</option>
              </select>
            </div>

            {/* Transmission */}
            <div className="space-y-2">
              <label htmlFor="transmission" className="block text-sm font-medium text-gray-300">
                Transmission Type
              </label>
              <select
                id="transmission"
                name="transmission"
                onChange={handleChange}
                value={formData.transmission || ""}
                required
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="" disabled>Select Transmission</option>
                <option value="0">Manual</option>
                <option value="1">Automatic</option>
              </select>
            </div>

            {/* Odometer */}
            <div className="space-y-2">
              <label htmlFor="odometer" className="block text-sm font-medium text-gray-300">
                Kms Covered
              </label>
              <input
                type="number"
                id="odometer"
                name="odometer"
                onChange={handleChange}
                value={formData.odometer}
                min="0"
                required
                placeholder="Enter kilometers driven"
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Year */}
            <div className="space-y-2">
              <label htmlFor="year" className="block text-sm font-medium text-gray-300">
                Purchase Year
              </label>
              <input
                type="number"
                id="year"
                name="year"
                onChange={handleChange}
                value={formData.year}
                max="2025"
                required
                placeholder="Enter purchase year"
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            className="cursor-pointer w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Predict Price
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default MainPage;