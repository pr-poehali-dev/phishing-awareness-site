import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ResourcesTabs from '@/components/resources/ResourcesTabs';
import EmergencyActions from '@/components/resources/EmergencyActions';

const Resources: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-green-700 to-teal-700 py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Полезные ресурсы</h1>
            <p className="text-xl max-w-3xl">
              Здесь собраны надежные источники информации, инструменты для проверки подозрительных сайтов 
              и образовательные материалы для повышения вашей осведомленности о фишинге.
            </p>
          </div>
        </section>
        
        <section className="py-16 container mx-auto px-4">
          <ResourcesTabs />
          <EmergencyActions />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;