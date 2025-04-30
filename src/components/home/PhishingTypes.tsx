
import { Button } from '@/components/ui/button';
import Icon from '../ui/Icon';
import { Link } from 'react-router-dom';

const PhishingTypes = () => {
  const types = [
    {
      title: 'Email-фишинг',
      icon: 'Mail',
      description: 'Самый распространенный тип фишинга через поддельные письма от банков, сервисов и компаний.',
      color: 'bg-blue-100'
    },
    {
      title: 'Смишинг (SMS)',
      icon: 'MessageSquare',
      description: 'Фишинг через SMS-сообщения, часто маскируется под уведомления от банков или доставки.',
      color: 'bg-green-100'
    },
    {
      title: 'Вишинг (голосовой)',
      icon: 'Phone',
      description: 'Телефонные звонки от мошенников, притворяющихся сотрудниками банков или госслужб.',
      color: 'bg-yellow-100'
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Основные виды фишинга</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {types.map((type, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`p-5 ${type.color}`}>
                <Icon name={type.icon} size={32} className="text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild>
            <Link to="/types">
              Узнать больше о видах фишинга
              <Icon name="ArrowRight" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PhishingTypes;
