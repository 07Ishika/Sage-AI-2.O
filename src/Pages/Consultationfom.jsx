import React, { useState } from "react";
import {
  FaUser,
  FaBriefcase,
  FaPhone,
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLink,
} from "react-icons/fa";

function ConsultantRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    phoneNumber: "",
    whatsappNumber: "",
    telegram: "",
    email: "",
    address: "",
    locationUrl: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone.trim());
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isValidURL = (url) =>
  /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/.test(url.trim());


  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      profession,
      phoneNumber,
      whatsappNumber,
      telegram,
      email,
      address,
      locationUrl,
    } = formData;

    if (
      !name ||
      !profession ||
      !phoneNumber ||
      !whatsappNumber ||
      !telegram ||
      !email ||
      !address ||
      !locationUrl
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (!isValidPhone(phoneNumber) || !isValidPhone(whatsappNumber)) {
      alert("Phone numbers must be 10-digit numeric values.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isValidURL(locationUrl)) {
      alert("Please enter a valid URL (starting with http/https).");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  const fields = [
    { label: "Name", name: "name", icon: <FaUser /> },
    { label: "Profession", name: "profession", icon: <FaBriefcase /> },
    { label: "Phone Number", name: "phoneNumber", icon: <FaPhone /> },
    { label: "WhatsApp Number", name: "whatsappNumber", icon: <FaWhatsapp /> },
    { label: "Telegram ID", name: "telegram", icon: <FaTelegram /> },
    { label: "Email", name: "email", icon: <FaEnvelope /> },
    { label: "Location URL", name: "locationUrl", icon: <FaLink /> },
  ];

  const professionOptions = [
    "Doctor",
    "CA",
    "Lawyer",
    "Psychiatrist",
    "Traffic Police",
    "Real Estate Researcher (Agent)",
    "Neuroscientist",
    "Nutritionist",
    "Counsellor",
    "Veterinarian",
    "Relationship Coach",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b0138] via-[#0b1e3d] to-[#0b1e3d] flex justify-center items-center p-6">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-8 w-full max-w-4xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-300/10 via-orange-300/10 to-transparent z-0 rounded-2xl" />

        <div className="relative z-10">
         <h2 className="text-3xl font-bold text-orange-100 mb-6 text-center">
            Consultant Registration
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm"
          >
            {fields.map(({ label, name, icon }) => (
              <div key={name} className="flex flex-col">
                <label className="mb-2 text-orange-200 font-medium flex items-center gap-2">
                  {icon}
                  {label}
                </label>

                {name === "profession" ? (
                  <select
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg bg-white/80 text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select a profession</option>
                    {professionOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={
                      name.includes("email")
                        ? "email"
                        : name.includes("locationUrl")
                        ? "url"
                        : "text"
                    }
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    required
                    className="px-4 py-3 rounded-lg bg-white/80 text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                )}
              </div>
            ))}

            <div className="md:col-span-2 flex flex-col">
              <label className="mb-2 text-orange-200 font-medium flex items-center gap-2">
                <FaMapMarkerAlt />
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={4}
                placeholder="Enter your address"
                required
                className="px-4 py-3 rounded-lg bg-white/80 text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              />
            </div>

            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-orange-400 text-white font-semibold py-4 px-12 rounded-full hover:scale-105 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConsultantRegistrationForm;
