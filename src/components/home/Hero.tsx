
import { Button } from '@/components/ui/button';
import Icon from '../ui/Icon';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Защитите себя от <span className="text-primary">фишинговых атак</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Узнайте, как распознавать современные фишинговые схемы, защищать свои данные и безопасно пользоваться интернетом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/interactive">
                  Начать обучение
                  <Icon name="BookOpen" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/types">
                  Узнать о типах фишинга
                  <Icon name="ExternalLink" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1563770660941-10ad18e54ee0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Кибербезопасность" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
