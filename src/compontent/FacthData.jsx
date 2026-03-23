import React, { Suspense } from 'react';
import FoodsData from './FoodsData';

const promiesData = fetch('/Prudects.json').then(res => res.json());

const SkeletonCard = ({ isMoon }) => (
  <div
    className={`rounded-2xl overflow-hidden animate-pulse ${isMoon ? 'bg-teal-900/40' : 'bg-gray-200'}`}
  >
    <div className={`h-52 ${isMoon ? 'bg-teal-800/40' : 'bg-gray-300'}`} />
    <div className="p-5 space-y-3">
      <div
        className={`h-4 rounded w-3/4 ${isMoon ? 'bg-teal-800/40' : 'bg-gray-300'}`}
      />
      <div
        className={`h-3 rounded w-1/2 ${isMoon ? 'bg-teal-800/30' : 'bg-gray-200'}`}
      />
      <div
        className={`h-8 rounded-xl w-full mt-4 ${isMoon ? 'bg-teal-800/20' : 'bg-gray-200'}`}
      />
    </div>
  </div>
);

const LoadingGrid = ({ isMoon }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(6)].map((_, i) => (
      <SkeletonCard key={i} isMoon={isMoon} />
    ))}
  </div>
);

const FacthData = ({ isMoon }) => {
  const bg = isMoon
    ? 'linear-gradient(135deg, #0d2f2f 0%, #0a1f1f 50%, #0d2b2b 100%)'
    : 'linear-gradient(135deg, #f0faf6 0%, #e6f7f1 50%, #f0faf6 100%)';

  return (
    <div
      className="min-h-screen w-full pt-28 pb-20 px-4 transition-all duration-500"
      style={{ background: bg }}
    >
      {/* Header */}
      <div className="text-center mb-14">
        <span
          className="inline-block text-xs font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-4"
          style={{
            background: isMoon
              ? 'rgba(255,107,74,0.15)'
              : 'rgba(255,107,74,0.12)',
            color: '#ff6b4a',
            border: '1px solid rgba(255,107,74,0.3)',
          }}
        >
          আমাদের মেনু
        </span>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight transition-colors duration-500"
          style={{
            color: isMoon ? '#e8f5f0' : '#0d2f2f',
            fontFamily: 'Georgia, serif',
          }}
        >
          তাজা খাবার, <span style={{ color: '#ff6b4a' }}>অসাধারণ স্বাদ</span>
        </h1>

        <p
          className="mt-4 text-base sm:text-lg max-w-xl mx-auto transition-colors duration-500"
          style={{ color: isMoon ? '#7ab8a8' : '#2d7a6a' }}
        >
          প্রতিটি ডিশ তৈরি হয় সতেজ উপাদান ও ভালোবাসা দিয়ে
        </p>

        <div className="flex items-center justify-center gap-3 mt-6">
          <div
            className="h-px w-16"
            style={{ background: 'rgba(255,107,74,0.4)' }}
          />
          <span style={{ color: '#ff6b4a' }}>✦</span>
          <div
            className="h-px w-16"
            style={{ background: 'rgba(255,107,74,0.4)' }}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto">
        <Suspense fallback={<LoadingGrid isMoon={isMoon} />}>
          <FoodsData promiesData={promiesData} isMoon={isMoon} />
        </Suspense>
      </div>
    </div>
  );
};

export default FacthData;
