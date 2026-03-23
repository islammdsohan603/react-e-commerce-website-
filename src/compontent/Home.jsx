import React from 'react';

const Home = ({ isMoon }) => {
  return (
    <div
      className={`w-full min-h-screen transition-all duration-500 ${
        isMoon ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
      id="home"
    >
      {/* Hero Section */}
      <div className="w-11/12 max-w-6xl mx-auto px-4 pt-40 pb-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className={`text-sm uppercase tracking-widest font-semibold mb-3 ${isMoon ? 'text-amber-400' : 'text-amber-600'}`}
          >
            স্বাগতম আমাদের প্ল্যাটফর্মে
          </p>
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight ${isMoon ? 'text-white' : 'text-gray-900'}`}
          >
            সেরা মানের খাবার, <br className="hidden sm:block" />
            <span className="text-amber-500">আপনার দোরগোড়ায়</span>
          </h1>
          <p
            className={`mt-5 text-base sm:text-lg max-w-2xl mx-auto ${isMoon ? 'text-gray-400' : 'text-gray-600'}`}
          >
            তাজা উপাদান, অনন্য স্বাদ এবং দ্রুত ডেলিভারি — আপনার প্রতিদিনের
            খাবারকে করি অসাধারণ।
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left - Food Card */}
          <div
            className={`rounded-2xl p-8 shadow-lg transition-all duration-300 hover:scale-[1.02] ${
              isMoon
                ? 'bg-gray-800 border border-gray-700'
                : 'bg-amber-50 border border-amber-200'
            }`}
          >
            <div className="text-4xl mb-4">🍽️</div>
            <h2
              className={`text-2xl font-bold mb-3 ${isMoon ? 'text-amber-400' : 'text-amber-700'}`}
            >
              তাজা ও সুস্বাদু খাবার
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed mb-6 ${isMoon ? 'text-gray-300' : 'text-gray-600'}`}
            >
              আমাদের শেফরা প্রতিদিন তাজা উপাদান দিয়ে রান্না করেন। প্রতিটি ডিশে
              থাকে ঘরোয়া স্বাদের ছোঁয়া, যা আপনার মন ভরিয়ে দেবে।
            </p>
            <button
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95 ${
                isMoon
                  ? 'bg-amber-500 hover:bg-amber-400'
                  : 'bg-amber-600 hover:bg-amber-700'
              }`}
            >
              এখনই অর্ডার করুন →
            </button>
          </div>

          {/* Right - Info Card */}
          <div
            className={`rounded-2xl p-8 shadow-lg transition-all duration-300 hover:scale-[1.02] ${
              isMoon
                ? 'bg-gray-800 border border-gray-700'
                : 'bg-white border border-gray-200'
            }`}
          >
            <div className="text-4xl mb-4">🚀</div>
            <h2
              className={`text-2xl font-bold mb-3 ${isMoon ? 'text-white' : 'text-gray-800'}`}
            >
              কেন আমাদের বেছে নেবেন?
            </h2>
            <ul
              className={`space-y-3 text-sm sm:text-base ${isMoon ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✔</span>
                <span>৩০ মিনিটের মধ্যে দ্রুত ডেলিভারি</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✔</span>
                <span>১০০% হালাল ও স্বাস্থ্যকর উপাদান</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✔</span>
                <span>সাশ্রয়ী মূল্যে সেরা মানের খাবার</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✔</span>
                <span>২৪/৭ কাস্টমার সাপোর্ট সুবিধা</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
