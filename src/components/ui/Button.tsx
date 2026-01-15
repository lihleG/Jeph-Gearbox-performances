import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset'; // ADD THIS
  disabled?: boolean; // ADD THIS
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon,
  fullWidth = false,
  type = 'button', // ADD DEFAULT VALUE
  disabled = false, // ADD DEFAULT VALUE
}) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-primary text-white shadow-lg hover:shadow-xl hover:bg-primary-dark orange-glow hover:orange-glow disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-secondary text-white shadow-lg hover:shadow-xl hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed',
    ghost: 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type} // ADD THIS
      disabled={disabled} // ADD THIS
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;