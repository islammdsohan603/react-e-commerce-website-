import React, { useState } from 'react';

const Cart = ({ food, index, isMoon }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const cardBg = isMoon
    ? 'linear-gradient(160deg, #122e2e, #0e2525)'
    : 'linear-gradient(160deg, #ffffff, #f4fdf9)';

  const cardBorder = isMoon ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)';

  const cardShadow = isMoon
    ? '0 8px 32px rgba(0,0,0,0.4)'
    : '0 8px 32px rgba(0,0,0,0.08)';

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col group transition-all duration-300"
      style={{
        background: cardBg,
        border: `1px solid ${cardBorder}`,
        boxShadow: cardShadow,
        animationDelay: `${index * 80}ms`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = isMoon
          ? '0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,107,74,0.2)'
          : '0 20px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,107,74,0.3)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = cardShadow;
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background: isMoon
              ? 'linear-gradient(to top, #0e2525cc, transparent)'
              : 'linear-gradient(to top, #ffffffaa, transparent)',
          }}
        />
        {food.category && (
          <span
            className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
            style={{ background: 'rgba(255,107,74,0.9)', color: '#fff' }}
          >
            {food.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h2
          className="text-lg font-bold mb-1 leading-snug transition-colors duration-300"
          style={{
            color: isMoon ? '#e8f5f0' : '#0d2f2f',
            fontFamily: 'Georgia, serif',
          }}
        >
          {food.name}
        </h2>

        {food.description && (
          <p
            className="text-sm mb-3 line-clamp-2 transition-colors duration-300"
            style={{ color: isMoon ? '#7ab8a8' : '#4a9080' }}
          >
            {food.description}
          </p>
        )}

        <div
          className="flex items-center justify-between mt-auto pt-4"
          style={{
            borderTop: `1px solid ${isMoon ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
          }}
        >
          <span className="text-2xl font-black" style={{ color: '#ff6b4a' }}>
            ৳{food.price}
          </span>

          <button
            onClick={handleAdd}
            className="px-5 py-2 rounded-xl text-sm font-bold transition-all duration-200 active:scale-95 cursor-pointer"
            style={{
              background: added
                ? '#16a34a'
                : 'linear-gradient(135deg, #ff6b4a, #e85530)',
              color: '#fff',
              boxShadow: added
                ? '0 0 16px rgba(22,163,74,0.4)'
                : '0 4px 16px rgba(255,107,74,0.35)',
            }}
          >
            {added ? '✓ যোগ হয়েছে' : 'কার্টে যোগ করুন'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
