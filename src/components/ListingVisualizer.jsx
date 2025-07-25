"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud } from "lucide-react";

const featureOptions = ["Pool", "Smart Home", "Ocean View", "Garage", "Garden"];

const ListingVisualizer = () => {
  const [formData, setFormData] = useState({
    title: "",
    features: [],
    description: "",
    image: null,
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setFormData({ ...formData, image: URL.createObjectURL(file) });
  };

  const handleFeatureToggle = (feature) => {
    const isSelected = formData.features.includes(feature);
    const newFeatures = isSelected
      ? formData.features.filter((f) => f !== feature)
      : [...formData.features, feature];
    setFormData({ ...formData, features: newFeatures });
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-16">
      <motion.h1
        className="text-center text-4xl md:text-5xl font-bold mb-12 text-emerald-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🏡 Visualize Your Property Listing
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Form Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Listing Title"
            className="w-full bg-slate-900 p-4 rounded-xl text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />

          <textarea
            rows={4}
            placeholder="Short Description"
            className="w-full bg-slate-900 p-4 rounded-xl text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />

          <div className="flex flex-wrap gap-3">
            {featureOptions.map((f) => {
              const selected = formData.features.includes(f);
              return (
                <button
                  key={f}
                  onClick={() => handleFeatureToggle(f)}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                    selected
                      ? "bg-emerald-500 border-emerald-500 text-black shadow-md"
                      : "bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <label className="cursor-pointer block">
            <div className="border-2 border-dashed border-slate-600 rounded-xl p-6 text-center hover:bg-slate-800 transition">
              <UploadCloud className="mx-auto mb-2 text-emerald-400" size={28} />
              <p className="text-slate-400">Click to Upload Listing Image</p>
            </div>
            <input type="file" onChange={handleImageUpload} className="hidden" />
          </label>
        </motion.div>

        {/* Preview Section */}
        <motion.div
          className="bg-slate-900 p-6 rounded-2xl border border-slate-700 shadow-2xl"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="w-full rounded-xl mb-4 object-cover h-64"
            />
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2">
            {formData.title || "Listing Title"}
          </h2>
          <p className="text-slate-300">{formData.description || "A beautiful modern property..."}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {formData.features.map((f, i) => (
              <span
                key={i}
                className="bg-emerald-600/20 text-emerald-300 px-3 py-1 rounded-full text-sm"
              >
                {f}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ListingVisualizer;
