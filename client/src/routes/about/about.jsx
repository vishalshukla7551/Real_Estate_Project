import { FaBuilding, FaHandshake, FaUsers } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="px-10 py-16">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold">Who We Are</h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          NovaEstate is a premium real estate company dedicated to helping you
          find your dream home with ease. We offer the best properties at the
          best prices.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <FaBuilding className="text-yellow-500 text-6xl mx-auto" />
          <h2 className="text-2xl font-semibold mt-4">Our Mission</h2>
          <p className="mt-2 text-gray-500">
            Deliver top-quality properties with transparency and trust.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg">
          <FaHandshake className="text-yellow-500 text-6xl mx-auto" />
          <h2 className="text-2xl font-semibold mt-4">Our Values</h2>
          <p className="mt-2 text-gray-500">
            We value integrity, commitment, and customer satisfaction.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg">
          <FaUsers className="text-yellow-500 text-6xl mx-auto" />
          <h2 className="text-2xl font-semibold mt-4">Our Team</h2>
          <p className="mt-2 text-gray-500">
            A dedicated team of experts to guide you through your journey.
          </p>
        </div>
      </div>

      {/* Image & Stats */}
      <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/logo.png"
          alt="Real Estate"
          className="rounded-lg shadow-lg"
          width="20px"
        />
        <div>
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <p className="mt-4 text-gray-600">
            With over 16 years of experience, 200+ awards, and 2000+ properties
            sold, we guarantee a seamless experience in finding your dream
            home.
          </p>
        </div>
      </div>
    </div>
  );
}
