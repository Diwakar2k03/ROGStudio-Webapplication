import React, { useState } from "react";

export default function User() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    eventType: "",
    eventDate: "",
    location: "",
    requirements: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(" http://localhost:5173/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Customer details submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          eventType: "",
          eventDate: "",
          location: "",
          requirements: "",
        });
      } else {
        alert("Failed to submit details!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-6">Customer Details</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Event Type */}
        <div>
          <label className="block text-sm font-medium">Event Type</label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Event</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate">Corporate</option>
            <option value="Photoshoot">Photoshoot</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Event Date */}
        <div>
          <label className="block text-sm font-medium">Event Date</label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

               {/* Location */}
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter event location"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Requirements */}
        <div>
          <label className="block text-sm font-medium">Requirements</label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            placeholder="Special requirements..."
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
