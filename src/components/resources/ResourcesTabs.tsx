import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ResourceGrid from './ResourceGrid';
import { officialResources, educationalResources, tools } from '@/data/resourcesData';

const ResourcesTabs: React.FC = () => {
  return (
    <Tabs defaultValue="official" className="max-w-6xl mx-auto">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="official">Официальные ресурсы</TabsTrigger>
        <TabsTrigger value="educational">Образовательные ресурсы</TabsTrigger>
        <TabsTrigger value="tools">Инструменты проверки</TabsTrigger>
      </TabsList>
      
      <TabsContent value="official" className="mt-6">
        <ResourceGrid 
          resources={officialResources} 
          linkText="Посетить ресурс" 
        />
      </TabsContent>
      
      <TabsContent value="educational" className="mt-6">
        <ResourceGrid 
          resources={educationalResources} 
          linkText="Перейти к материалам" 
        />
      </TabsContent>
      
      <TabsContent value="tools" className="mt-6">
        <ResourceGrid 
          resources={tools} 
          linkText="Открыть инструмент" 
        />
      </TabsContent>
    </Tabs>
  );
};

export default ResourcesTabs;