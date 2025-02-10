import React from 'react';

const FAQSection = () => {
  return (
    <section className="py-16 bg-[#1A202C] px-8">
      <h2 className="text-3xl font-extrabold text-center text-[#F6AD55] mb-8">
        FAQs
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-[#ECC94B] rounded-lg bg-[#2D3748] hover:bg-[#4A5568] transition duration-300"
        >
          <div className="collapse-title text-lg font-medium text-gray-100">
            Why is this platform valuable?
          </div>
          <div className="collapse-content text-gray-300">
            <p>
              It provides personalized tools and features to enhance your test
              preparation journey.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-[#ECC94B] rounded-lg bg-[#2D3748] hover:bg-[#4A5568] transition duration-300"
        >
          <div className="collapse-title text-lg font-medium text-gray-100">
            How do I track my progress?
          </div>
          <div className="collapse-content text-gray-300">
            <p>
              Log in to your account and navigate to the Analytics section to
              review detailed insights.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-[#ECC94B] rounded-lg bg-[#2D3748] hover:bg-[#4A5568] transition duration-300"
        >
          <div className="collapse-title text-lg font-medium text-gray-100">
            Is this platform free?
          </div>
          <div className="collapse-content text-gray-300">
            <p>
              Yes, the platform is free for all users to access and benefit from.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;