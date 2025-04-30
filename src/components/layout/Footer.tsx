
import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Icon name="Shield" className="mr-2" />
              АнтиФишинг
            </h3>
            <p className="text-gray-400">
              Ваш надежный источник информации о фишинге и защите от кибермошенников.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Разделы сайта</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/types" className="text-gray-400 hover:text-white transition-colors">Виды фишинга</Link></li>
              <li><Link to="/interactive" className="text-gray-400 hover:text-white transition-colors">Тренажер</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Полезные ресурсы</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Официальные ресурсы</h4>
            <ul className="space-y-2">
              <li><a href="https://мвд.рф/тематические-страницы/item/8943517/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">МВД России</a></li>
              <li><a href="https://www.ncsc.gov.uk/collection/phishing-scams" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Национальный центр кибербезопасности (UK)</a></li>
              <li><a href="https://www.cisa.gov/phishing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">CISA</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Обновлено</h4>
            <p className="text-gray-400 flex items-center">
              <Icon name="Calendar" className="mr-2" size={16} />
              Апрель 2025
            </p>
            <p className="text-gray-400 mt-4">
              Последние данные о фишинговых атаках и методах защиты
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© 2025 АнтиФишинг. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
