import React from 'react';
import Icon from '@/components/ui/Icon';

interface EmergencyActionItemProps {
  color: string;
  title: string;
  description: string;
  icon: string;
}

const colorClasses = {
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-500',
    titleColor: 'text-amber-800',
    textColor: 'text-amber-700'
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-500',
    titleColor: 'text-blue-800',
    textColor: 'text-blue-700'
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-500',
    titleColor: 'text-green-800',
    textColor: 'text-green-700'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-500',
    titleColor: 'text-purple-800',
    textColor: 'text-purple-700'
  }
};

const EmergencyActionItem: React.FC<EmergencyActionItemProps> = ({ 
  color, 
  title, 
  description, 
  icon 
}) => {
  const classes = colorClasses[color as keyof typeof colorClasses] || colorClasses.amber;
  
  return (
    <div className={`${classes.bg} border-l-4 ${classes.border} p-4 rounded`}>
      <h3 className={`font-semibold flex items-center ${classes.titleColor}`}>
        <Icon name={icon} className="mr-2 h-5 w-5" /> 
        {title}
      </h3>
      <p className={`text-sm ${classes.textColor} mt-1`}>
        {description}
      </p>
    </div>
  );
};

export default EmergencyActionItem;