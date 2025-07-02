// ListingVisualizer.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud } from "lucide-react";

const ListingVisualizer = () => {
  const [formData, setFormData] = useState({
    title: "",
    features: [],
    description: "",
    image: null,
  });

  const featureOptions = ["Pool", "Smart Home", "Ocean View", "Garage", "Garden"];

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
    <section className="min-h-screen bg-black text-white py-16 px-6 md:px-16">
      <h1 className="text-4xl font-bold text-center mb-10">Visualize Your Property Listing</h1>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Form Section */}
        <div className="space-y-6">
          <input
            type="text"
            placeholder="Listing Title"
            className="w-full bg-slate-900 p-4 rounded-lg text-white border border-slate-700"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <textarea
            rows={4}
            placeholder="Short Description"
            className="w-full bg-slate-900 p-4 rounded-lg text-white border border-slate-700"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <div className="flex flex-wrap gap-2">
            {featureOptions.map((f) => (
              <button
                key={f}
                onClick={() => handleFeatureToggle(f)}
                className={`px-4 py-2 rounded-full border ${
                  formData.features.includes(f)
                    ? "bg-emerald-500 border-emerald-400 text-black"
                    : "border-slate-700 text-slate-300"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <label className="cursor-pointer block">
            <div className="border border-dashed border-slate-700 rounded-lg p-6 text-center">
              <UploadCloud className="mx-auto mb-2" />
              <p className="text-slate-400">Upload Listing Image</p>
            </div>
            <input type="file" onChange={handleImageUpload} className="hidden" />
          </label>
        </div>

        {/* Preview Section */}
        <motion.div
          className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {formData.image && (
            <img src={formData.image} alt="Preview" className="w-full rounded-md mb-4" />
          )}
          <h2 className="text-2xl font-bold text-emerald-400">{formData.title || "Listing Title"}</h2>
          <p className="text-slate-300 mt-2">{formData.description || "A beautiful modern property..."}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {formData.features.map((f, i) => (
              <span
                key={i}
                className="bg-emerald-700/20 text-emerald-300 px-3 py-1 rounded-full text-sm"
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
