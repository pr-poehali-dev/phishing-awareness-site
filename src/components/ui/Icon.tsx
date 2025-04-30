
import * as LucideIcons from 'lucide-react';
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
  // Проверяем, существует ли иконка с таким именем
  const IconComponent = (LucideIcons as Record<string, React.ComponentType<any>>)[name] || 
                         (LucideIcons as Record<string, React.ComponentType<any>>)[fallback];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found, fallback "${fallback}" also not found`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
    />
  );
};

export default Icon;
