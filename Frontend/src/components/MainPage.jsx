import React from 'react';
import { motion } from 'framer-motion';

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 "
        >
          Price My Car
        </motion.h1>

        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          action="/predict" 
          method="POST"
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
                required
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="" disabled selected>Select Car Type</option>
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
                required
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="" disabled selected>Select Manufacturer</option>
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
                required
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="" disabled selected>Select Condition</option>
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
                required
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="" disabled selected>Select Fuel Type</option>
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
                required
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="" disabled selected>Select Transmission</option>
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
                min="1950" 
                max="2024" 
                required 
                placeholder="Enter purchase year"
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="cursor-pointer w-full mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Predict Price
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default MainPage;