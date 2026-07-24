import React from 'react';

export default function TrustRow() {
  return (
    <div className="bg-slate-50 border-b border-slate-200 py-4">
      <div className="shell">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-slate-600">
          <span>8,000+ Deep Cycles</span>
          <span className="trust-separator">|</span>
          <span>15-Year Designed Life</span>
          <span className="trust-separator">|</span>
          <span>Grade-A LiFePO4 Cells</span>
          <span className="trust-separator">|</span>
          <span>Local Pakistani Warranty</span>
        </div>
      </div>
    </div>
  );
}
