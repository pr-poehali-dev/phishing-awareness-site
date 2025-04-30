
import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Shield" size={28} className="text-primary" />
            <span className="text-xl font-bold">АнтиФишинг</span>
          </Link>
          
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/types" className="font-medium hover:text-primary transition-colors">
              Виды фишинга
            </Link>
            <Link to="/interactive" className="font-medium hover:text-primary transition-colors">
              Тренажер
            </Link>
            <Link to="/resources" className="font-medium hover:text-primary transition-colors">
              Полезные ресурсы
            </Link>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
