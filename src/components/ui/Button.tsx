import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const variants = {
  primary: [
    'bg-gradient-to-r from-orange-500 to-orange-600',
    'text-white font-medium',
    'hover:from-orange-600 hover:to-orange-700',
    'active:from-orange-700 active:to-orange-800',
    'shadow-sm hover:shadow',
    'border border-transparent'
  ].join(' '),
  secondary: [
    'bg-white',
    'text-gray-800 font-medium',
    'hover:bg-gray-50',
    'active:bg-gray-100',
    'border border-gray-200',
    'shadow-sm hover:shadow'
  ].join(' '),
  outline: [
    'bg-transparent',
    'text-orange-500 font-medium',
    'hover:bg-orange-50',
    'active:bg-orange-100',
    'border-2 border-orange-500'
  ].join(' ')
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg'
};

export function Button({ 
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center',
        'rounded-lg',
        'transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}