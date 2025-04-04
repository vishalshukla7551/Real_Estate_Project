import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="px-10 pt-20 pb-20 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">Get in Touch</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Have any questions? We're here to help. Reach out to us anytime.
        </p>
      </div>
      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-16">
        <div className="flex flex-col items-center p-10 bg-white shadow-2xl rounded-2xl transition-transform hover:scale-105">
          <FaPhone className="text-yellow-500 text-6xl mb-6" />
          <h2 className="text-2xl font-semibold mb-2">Call Us</h2>
          <p className="text-gray-600 text-lg">+91 7408108617</p>
        </div>

        <div className="flex flex-col items-center p-10 bg-white shadow-2xl rounded-2xl transition-transform hover:scale-105">
          <FaEnvelope className="text-yellow-500 text-6xl mb-6" />
          <h2 className="text-2xl font-semibold mb-2">Email Us</h2>
          <p className="text-gray-600 text-lg">terravision200@gmail.com</p>
        </div>

        <div className="flex flex-col items-center p-10 bg-white shadow-2xl rounded-2xl transition-transform hover:scale-105">
          <FaMapMarkerAlt className="text-yellow-500 text-6xl mb-6" />
          <h2 className="text-2xl font-semibold mb-2">Visit Us</h2>
          <p className="text-gray-600 text-lg">I-441,Gali No. 7,Govindpuram,Ghaziabad,Uttar Pradesh</p>
        </div>
      </div>
    </div>
  );
}
