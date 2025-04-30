
import { icons } from 'lucide-react';
import React from 'react';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  fallback?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  className = '',
  fallback = 'AlertCircle',
}) => {
  const LucideIcon = icons[name as keyof typeof icons] || icons[fallback];

  return (
    <LucideIcon
      size={size}
      color={color}
      className={className}
    />
  );
};

export default Icon;
