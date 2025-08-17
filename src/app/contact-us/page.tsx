"use client"

import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    preferredContact: '',
    graphicSupport: '',
    contentSupport: false,
    designChoice: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 mt-30'>
      <div className="flex w-full min-h-screen lg:flex-row flex-col text-white">
        {/* Left Sidebar - 30% width */}
        <div className="w-full lg:w-[30%] p-4 sm:p-6 lg:p-8 bg-slate-800/50 rounded">
          <h2 className="mb-8 text-2xl font-bold">How It Works</h2>

          {/* Step 1 */}
          <div className="mb-8">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="text-lg font-semibold">Describe Your Project</h3>
            </div>
            <p className={`text-[#F99E5E] italic text-sm leading-relaxed ml-11`}>
              Tell us about your vision, goals, and requirements. Share details about your project scope, target audience, and desired outcomes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="mb-8">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-lg font-semibold">Submit the Form</h3>
            </div>
            <p className="text-[#F99E5E] italic text-sm leading-relaxed ml-11">
              Fill out our comprehensive form with your project details, timeline, and budget. This helps us understand your needs better.
            </p>
          </div>

          {/* Step 3 */}
          <div className="mb-8">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="text-lg font-semibold">We'll Contact You</h3>
            </div>
            <p className="text-[#F99E5E] italic text-sm leading-relaxed ml-11">
              Our team will reach out within 24 hours to discuss your project, answer questions, and provide a detailed proposal.
            </p>
          </div>

          <div className="mt-8 p-4 rounded-lg border border-blue-200/30">
            <p className="text-sm text-[#F99E5E] font-medium">
              💡 Ready to start your project? Fill out the form and let's bring your ideas to life!
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-[70%] p-4 sm:p-6 lg:p-8 bg-transparent">
          <h1 className="mb-8 text-3xl font-bold">Let's Start Your Project</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-slate-400/50 rounded  focus:ring-0 focus:ring-transparent focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium  mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-slate-400/50 rounded focus:ring-0 focus:ring-transparent focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium  mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-slate-400/50 rounded focus:ring-0 focus:ring-transparent focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium  mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-slate-400/50 rounded focus:ring-0 focus:ring-transparent focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium  mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-slate-400/50 rounded focus:ring-0 text-gray-400"
                >
                  <option value="">Select project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="e-commerce">E-commerce</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="branding">Branding & Identity</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium  mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-slate-400/50 rounded focus:ring-0 text-gray-400"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-plus">$50,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium  mb-2">
                Project Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-slate-400/50 rounded focus:ring-0 text-gray-400"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP</option>
                <option value="1-month">Within 1 month</option>
                <option value="2-3-months">2-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-months-plus">6+ months</option>
              </select>
            </div>

            {/* Additional Preferences */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Preferred Contact Method */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Preferred Contact Method
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm">Phone</span>
                  </label>
                </div>
              </div>

              {/* Graphic Support Required */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Graphic Support Required
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="graphicSupport"
                      value="yes"
                      checked={formData.graphicSupport === 'yes'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="graphicSupport"
                      value="no"
                      checked={formData.graphicSupport === 'no'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm">No</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Content Support Needed */}
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="contentSupport"
                    checked={formData.contentSupport}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
                  />
                  <span className="ml-2 text-sm font-medium">Content Support Needed</span>
                </label>
                <p className="text-xs mt-1 ml-6">Check if you need help with copywriting or content creation</p>
              </div>

              {/* Design Choice */}
              <div>
                <label htmlFor="designChoice" className="block text-sm font-medium mb-2">
                  Do you have any design preferences?
                </label>
                <input
                  type="text"
                  id="designChoice"
                  name="designChoice"
                  value={formData.designChoice}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-400/50 rounded focus:ring-0 focus:ring-transparent focus:border-transparent"
                  placeholder="Describe your design preferences, color schemes, style references..."
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Project Description *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-slate-400/50 rounded focus:ring-0 focus:ring-transparent focus:border-transparent resize-vertical"
                placeholder="Tell us about your project goals, requirements, target audience, and any specific features you need..."
              />
            </div>



            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Project Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;