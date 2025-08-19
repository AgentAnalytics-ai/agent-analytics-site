import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'cta';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  withArrow,
  className = '',
  ...props
}) => {
  const variantClass =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : variant === 'secondary'
      ? 'bg-gray-200 text-black hover:bg-gray-300'
      : variant === 'outline'
      ? 'border border-blue-600 text-blue-600 hover:bg-blue-50'
      : variant === 'cta'
      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
      : '';

  const sizeClass =
    size === 'sm'
      ? 'text-sm px-3 py-1.5'
      : size === 'lg'
      ? 'text-lg px-5 py-3'
      : 'text-base px-4 py-2';

  return (
    <button
      className={`rounded transition ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <span className="ml-2">→</span>}
    </button>
  );
};

export default Button;
