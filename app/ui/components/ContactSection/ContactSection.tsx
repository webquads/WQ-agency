import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/ui/components/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle, Send, Phone, MapPin, X } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessType: "",
    message: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  // World map dots pattern (simplified version)
  const WorldMapDots = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
      <svg
        width="280"
        height="160"
        viewBox="0 0 280 160"
        className="opacity-80"
      >
        {/* Simplified world map using dots */}
        {/* North America */}
        {Array.from({ length: 15 }, (_, i) => (
          <circle
            key={`na-${i}`}
            cx={40 + (i % 5) * 8}
            cy={40 + Math.floor(i / 5) * 8}
            r="1.5"
            fill="#3B82F6"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}

        {/* Europe */}
        {Array.from({ length: 12 }, (_, i) => (
          <circle
            key={`eu-${i}`}
            cx={120 + (i % 4) * 6}
            cy={35 + Math.floor(i / 4) * 6}
            r="1.5"
            fill="#3B82F6"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}

        {/* Asia */}
        {Array.from({ length: 20 }, (_, i) => (
          <circle
            key={`as-${i}`}
            cx={160 + (i % 6) * 8}
            cy={30 + Math.floor(i / 6) * 8}
            r="1.5"
            fill="#3B82F6"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        ))}

        {/* Africa */}
        {Array.from({ length: 18 }, (_, i) => (
          <circle
            key={`af-${i}`}
            cx={115 + (i % 4) * 7}
            cy={70 + Math.floor(i / 4) * 8}
            r="1.5"
            fill="#3B82F6"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.08}s` }}
          />
        ))}

        {/* South America */}
        {Array.from({ length: 12 }, (_, i) => (
          <circle
            key={`sa-${i}`}
            cx={60 + (i % 3) * 8}
            cy={90 + Math.floor(i / 3) * 8}
            r="1.5"
            fill="#3B82F6"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}

        {/* Australia */}
        {Array.from({ length: 8 }, (_, i) => (
          <circle
            key={`au-${i}`}
            cx={210 + (i % 4) * 6}
            cy={120 + Math.floor(i / 4) * 6}
            r="1.5"
            fill="#3B82F6"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
        ))}

        {/* Connection lines */}
        <line
          x1="80"
          y1="60"
          x2="130"
          y2="50"
          stroke="#3B82F6"
          strokeWidth="1"
          opacity="0.3"
          className="animate-pulse"
        />
        <line
          x1="140"
          y1="45"
          x2="180"
          y2="55"
          stroke="#3B82F6"
          strokeWidth="1"
          opacity="0.3"
          className="animate-pulse"
        />
        <line
          x1="120"
          y1="80"
          x2="160"
          y2="75"
          stroke="#3B82F6"
          strokeWidth="1"
          opacity="0.3"
          className="animate-pulse"
        />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lets Elevate Your SEO
          </h1>
          <h2 className="text-2xl md:text-3xl italic text-orange-400 font-light">
            Get In Touch Today!
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Panel */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            {/* World Map */}
            <div className="mb-8">
              <WorldMapDots />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone
                  </p>
                  <p className="text-lg font-medium">+1 (800) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-300">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Office
                  </p>
                  <p className="text-lg font-medium">
                    859 Dream Avenue, New York
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 bg-green-600/20 rounded-lg hover:bg-green-600/30 transition-colors duration-300 group"
                >
                  <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors duration-300 group"
                >
                  <X className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-pink-600/20 rounded-lg hover:bg-pink-600/30 transition-colors duration-300 group"
                >
                  <Send className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Us a Message
            </h3>
            <p className="text-gray-400 mb-8">
              You can use the contact form below to send us a message directly.
              We will get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              {/* Business Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Business Type
                </label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange("businessType", value)
                  }
                >
                  <SelectTrigger className="bg-gray-900/50 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500/20">
                    <SelectValue placeholder="E-commerce" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem
                      value="ecommerce"
                      className="text-gray-300 focus:bg-gray-700"
                    >
                      E-commerce
                    </SelectItem>
                    <SelectItem
                      value="agency"
                      className="text-gray-300 focus:bg-gray-700"
                    >
                      Agency
                    </SelectItem>
                    <SelectItem
                      value="saas"
                      className="text-gray-300 focus:bg-gray-700"
                    >
                      SaaS
                    </SelectItem>
                    <SelectItem
                      value="others"
                      className="text-gray-300 focus:bg-gray-700"
                    >
                      Others
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea
                  placeholder="Type your opinion"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 min-h-[120px] resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02]"
              >
                Submit Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
