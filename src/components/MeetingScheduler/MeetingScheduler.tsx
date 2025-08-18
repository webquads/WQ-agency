"use client";

import { HeadingText } from "@/components/HeadingText/HeadingText";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCalendar,
  FiCheck,
  FiClock,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiUser,
} from "react-icons/fi";

const MeetingScheduler = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
    date: "",
    time: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const projectTypes = [
    "Website Development",
    "E-commerce Solution",
    "Web Application",
    "UI/UX Design",
    "Mobile App Development",
    "Other",
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.projectType)
      newErrors.projectType = "Please select a project type";
    if (!formData.description.trim())
      newErrors.description = "Project description is required";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a time";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after submission
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            projectType: "",
            description: "",
            date: "",
            time: "",
          });
        }, 5000);
      }, 1500);
    }
  };

  // Get tomorrow's date as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <section className="py-16 bg-gradient-to-br">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Schedule a Consultation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discuss your project with our experts and get a detailed plan with
              pricing. We&apos;re here to turn your ideas into reality.
            </p> */}
            <HeadingText
              heading=" Schedule a Consultation"
              subHeading="         Discuss your project with our experts and get a detailed plan with
              pricing. We're here to turn your ideas into reality."
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="md:flex">
              {/* Left side - Information */}
              <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">
                      Let&apos;s Build Something Amazing
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-blue-500 p-2 rounded-lg mr-4">
                          <FiUser className="text-xl" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Expert Consultation</h4>
                          <p className="text-blue-100 text-sm">
                            Meet with our senior developers and designers
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-blue-500 p-2 rounded-lg mr-4">
                          <FiMessageSquare className="text-xl" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Project Planning</h4>
                          <p className="text-blue-100 text-sm">
                            Get a detailed roadmap for your project
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-blue-500 p-2 rounded-lg mr-4">
                          <FiCalendar className="text-xl" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Transparent Pricing</h4>
                          <p className="text-blue-100 text-sm">
                            Receive a detailed quote with no hidden fees
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-blue-500">
                    <p className="text-blue-200 text-sm">
                      After scheduling, you&apos;ll receive a confirmation email
                      with meeting details and a calendar invitation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="md:w-3/5 p-8">
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FiCheck className="text-green-600 text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Meeting Scheduled!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for scheduling a consultation. We&apos;ve sent a
                      confirmation to your email.
                    </p>
                    <p className="text-sm text-gray-500">
                      Redirecting back to form...
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          className="block text-gray-700 font-medium mb-2"
                          htmlFor="name"
                        >
                          Full Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition ${
                              errors.name
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                            }`}
                            placeholder="John Doe"
                          />
                          <FiUser className="absolute right-3 top-3.5 text-gray-400" />
                        </div>
                        {errors.name && (
                          <p className="mt-1 text-red-500 text-sm">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          className="block text-gray-700 font-medium mb-2"
                          htmlFor="email"
                        >
                          Email Address *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition ${
                              errors.email
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                            }`}
                            placeholder="john@example.com"
                          />
                          <FiMail className="absolute right-3 top-3.5 text-gray-400" />
                        </div>
                        {errors.email && (
                          <p className="mt-1 text-red-500 text-sm">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          className="block text-gray-700 font-medium mb-2"
                          htmlFor="phone"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 focus:outline-none transition"
                            placeholder="+1 (555) 123-4567"
                          />
                          <FiPhone className="absolute right-3 top-3.5 text-gray-400" />
                        </div>
                      </div>

                      <div>
                        <label
                          className="block text-gray-700 font-medium mb-2"
                          htmlFor="projectType"
                        >
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition ${
                            errors.projectType
                              ? "border-red-500 focus:ring-red-200"
                              : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                          }`}
                        >
                          <option value="">Select a project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.projectType && (
                          <p className="mt-1 text-red-500 text-sm">
                            {errors.projectType}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          className="block text-gray-700 font-medium mb-2"
                          htmlFor="date"
                        >
                          Preferred Date *
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            min={minDate}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition ${
                              errors.date
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                            }`}
                          />
                          <FiCalendar className="absolute right-3 top-3.5 text-gray-400" />
                        </div>
                        {errors.date && (
                          <p className="mt-1 text-red-500 text-sm">
                            {errors.date}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          className="block text-gray-700 font-medium mb-2"
                          htmlFor="time"
                        >
                          Preferred Time *
                        </label>
                        <div className="relative">
                          <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition ${
                              errors.time
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                            }`}
                          >
                            <option value="">Select a time</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                          <FiClock className="absolute right-3 top-3.5 text-gray-400" />
                        </div>
                        {errors.time && (
                          <p className="mt-1 text-red-500 text-sm">
                            {errors.time}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-gray-700 font-medium mb-2"
                        htmlFor="description"
                      >
                        Project Description *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition ${
                          errors.description
                            ? "border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                        }`}
                        placeholder="Tell us about your project, goals, and requirements..."
                      ></textarea>
                      {errors.description && (
                        <p className="mt-1 text-red-500 text-sm">
                          {errors.description}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Scheduling...
                        </>
                      ) : (
                        "Schedule Your Consultation"
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetingScheduler;
