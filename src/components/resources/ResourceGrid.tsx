import React from 'react';
import ResourceCard, { ResourceItem } from './ResourceCard';

interface ResourceGridProps {
  resources: ResourceItem[];
  linkText?: string;
}

const ResourceGrid: React.FC<ResourceGridProps> = ({ resources, linkText }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {resources.map(resource => (
        <ResourceCard 
          key={resource.id} 
          resource={resource} 
          linkText={linkText} 
        />
      ))}
    </div>
  );
};

export default ResourceGrid;