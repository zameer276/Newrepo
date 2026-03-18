import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="https://raw.githubusercontent.com/ratherzameer/dental-clinic-assets/main/logo.png" 
        alt="Dr. Mahee's Dental Clinic Logo" 
        className="h-12 w-auto object-contain"
        onError={(e) => {
          // Fallback if the image fails to load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className="hidden items-center gap-2" style={{ display: 'none' }}>
        <div className="bg-primary p-2 rounded-lg">
          <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span className="text-xl font-bold text-slate-900 tracking-tight">
          Dr Mahee's <span className="text-primary">Dental</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;
