import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div 
      className={cn(
        'bg-white rounded-xl shadow-md',
        'transition-all duration-300 ease-in-out',
        'hover:shadow-xl hover:-translate-y-1',
        'border border-gray-100/50',
        className
      )}
    >
      {children}
    </div>
  );
}