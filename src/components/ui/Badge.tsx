import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  animate?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  animate = false,
}) => {
  const variants = {
    primary: 'bg-primary/10 border border-primary/30 text-primary',
    secondary: 'bg-secondary/10 border border-gray-700 text-gray-300',
    outline: 'border border-primary text-primary',
  };
  
  const animationClass = animate ? 'animate-pulse-slow' : '';
  
  return (
    <div className={`inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm ${variants[variant]} ${animationClass} ${className}`}>
      <div className={`w-2 h-2 rounded-full mr-3 ${variant === 'primary' ? 'bg-primary' : 'bg-gray-300'}`}></div>
      <span className="text-sm font-semibold tracking-wider">{children}</span>
    </div>
  );
};

export default Badge;