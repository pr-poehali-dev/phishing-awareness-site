import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/Icon';

export interface ResourceItem {
  id: number;
  title: string;
  description: string;
  url: string;
  icon: string;
  type: string;
}

interface ResourceCardProps {
  resource: ResourceItem;
  linkText?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  resource, 
  linkText = "Посетить ресурс" 
}) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <Icon name={resource.icon} className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">{resource.title}</CardTitle>
          </div>
          <Badge variant="outline">{resource.type}</Badge>
        </div>
        <CardDescription className="mt-2">{resource.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <a 
          href={resource.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline flex items-center"
        >
          {linkText}
          <Icon name="ExternalLink" className="ml-1 h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;