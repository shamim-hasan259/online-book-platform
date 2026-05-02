import { FaBook } from "react-icons/fa";
import { FaBolt, FaLock } from "react-icons/fa";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
            <div className="flex flex-col items-center justify-center mb-3">
              <FaBook size={40} />
            </div>
            <h3 className="font-semibold text-lg">Huge Collection</h3>
            <p className="text-sm text-gray-500 mt-2">
              Explore thousands of books across multiple categories.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
            <div className="flex flex-col justify-center items-center mb-3">
              {" "}
              <FaBolt size={40} color="#FF8C00" />
            </div>
            <h3 className="font-semibold text-lg">Fast Access</h3>
            <p className="text-sm text-gray-500 mt-2">
              Find and borrow books instantly without any hassle.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
            <div className="flex flex-col justify-center items-center  mb-3">
              <FaLock size={40} color="#FFB800" />
            </div>
            <h3 className="font-semibold text-lg">Secure System</h3>
            <p className="text-sm text-gray-500 mt-2">
              Your data is and protected with modern security.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
            <div className="flex flex-col justify-center items-center  mb-3">
              {" "}
              <MdOutlineAppSettingsAlt size={45} color="#6C63FF" />
            </div>
            <h3 className="font-semibold text-lg">Fully Responsive</h3>
            <p className="text-sm text-gray-500 mt-2">
              Enjoy a seamless experience on mobile, tablet, and desktop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
