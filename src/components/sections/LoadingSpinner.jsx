import React from 'react';
import { Loader2 } from 'lucide-react';

function LoadingSpinner({ size = 'md' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className={`${sizeClasses[size]} text-blue-500 animate-spin`} />
    </div>
  );
}

export { LoadingSpinner };