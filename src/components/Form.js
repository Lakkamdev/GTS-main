import React from "react";
import "./Form.css"; // Import the CSS file

const Form = () => {
  return (
    <div id="form" className="form-container flex flex-col items-center py-10">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-white pb-5">GTS Careers</h1>
      </header>

      <div className="flex flex-col lg:flex-row w-full lg:w-10/12 gap-8">
        {/* Job Description Section */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-[#f06321] opacity-90 text-2xl font-semibold mb-4">
            Job Description
          </h2>
          <textarea
            className="w-full h-96 p-4 border rounded-xl resize-none bg-white text-gray-700 shadow-inner"
            readOnly
            value={`GTS Company Careers Benefits:\n\n1. Competitive Salary Packages\n2. Health and Wellness Programs\n3. Learning and Development Opportunities\n4. Flexible Work Environment\n5. Career Growth and Advancement\n6. Work-Life Balance Initiatives\n7. Employee Recognition Programs\n8. Collaborative and Inclusive Culture\n9. Cutting-Edge Technology Exposure\n10. Opportunities for Global Networking`}
          />
        </div>

        {/* Form Section */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-[#f06321] opacity-90 text-2xl font-semibold mb-4">
            Apply Now
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 border rounded-xl focus:ring-2 focus:ring-[#f06321]"
            />
            <input
              type="text"
              placeholder="Middle Name"
              className="p-3 border rounded-xl focus:ring-2 focus:ring-[#f06321]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 border rounded-xl focus:ring-2 focus:ring-[#f06321]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded-xl focus:ring-2 focus:ring-[#f06321]"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 border rounded-xl focus:ring-2 focus:ring-[#f06321]"
            />
            <select className="p-3 border rounded-xl focus:ring-2 focus:ring-[#f06321]">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              type="text"
              placeholder="Work Experience (in years)"
              className="p-3 border rounded-xl focus:ring-2 focus:ring-[#f06321]"
            />
            <input
              type="text"
              placeholder="Address"
              className="p-3 border rounded-xl focus:ring-2 focus:ring-[#f06321] col-span-2"
            />
            <input
              type="text"
              placeholder="City"
              className="p-3 border rounded-xl focus:ring-2 focus:ring-[#f06321]"
            />
            <input
              type="text"
              placeholder="State"
              className="p-3 border rounded-xl focus:ring-2 focus:ring-[#f06321]"
            />
            <input
              type="text"
              placeholder="Pin Code"
              className="p-3 border rounded-xl focus:ring-2 focus:ring-[#f06321]"
            />
            <input
              type="text"
              placeholder="Country"
              className="p-3 border rounded-xl focus:ring-2 focus:ring-[#f06321]"
            />
            <input
              type="text"
              placeholder="Social Media Links"
              className="p-3 border rounded-xl focus:ring-2 focus:ring-[#f06321] col-span-2"
            />

            {/* File Upload */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">
                Upload Resume:
              </label>
              <input
                type="file"
                className="w-full p-2 border rounded-xl bg-gray-50"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="col-span-2 bg-[#f06321] text-white font-bold py-3 rounded-xl hover:bg-[#c04b32] transition-all duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
