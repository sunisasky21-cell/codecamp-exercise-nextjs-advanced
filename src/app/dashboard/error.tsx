
'use client'; // Error boundaries ต้องเป็น Client Components เสมอ

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-6 bg-red-50 rounded-xl border border-red-200">
      <h2 className="text-xl font-bold text-red-700 mb-2">เกิดข้อผิดพลาดในการโหลดข้อมูล Dashboard</h2>
      <p className="text-sm text-red-600 mb-4">{error.message || 'กรุณาลองใหม่อีกครั้ง'}</p>
      <button
        onClick={() => reset()} 
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
      >
        ลองใหม่อีกครั้ง
      </button>
    </div>
  );
}