import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_g355jvc",
        "template_bf9nway",
        {
          to_email: "jivumafoods@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "SHMjJZCWqPnsIi-Lf"
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600">
          We'd love to hear from you. Let us know how we can help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Visit Us</h3>
              <p className="text-gray-600">
                SURVEY NO. 77 PAIKI, PLOT NO. 39, KHODIYAR INDUSTRIAL AREA,
                <br />
                MAVDI BYPASS ROAD, MAVDI, RAJKOT,
                <br />
                Gujarat, 360004
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Call Us</h3>
              <p className="text-gray-600">+91-9998534321</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Email Us</h3>
              <p className="text-gray-600">jivumafoods@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Business Hours</h3>
              <p className="text-gray-600">24 hrs</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors disabled:bg-orange-300">
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-center">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
