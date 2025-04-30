
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '../ui/Icon';

const PhishingStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Фишинговых атак ежегодно</CardTitle>
          <Icon name="BarChart4" className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">3.4 млрд</div>
          <p className="text-xs text-muted-foreground">В 2024 году число атак выросло на 18%</p>
        </CardContent>
      </Card>
      
      <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Средний ущерб от атаки</CardTitle>
          <Icon name="DollarSign" className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">$1.6 млн</div>
          <p className="text-xs text-muted-foreground">Для организаций среднего размера</p>
        </CardContent>
      </Card>
      
      <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Рост целевого фишинга</CardTitle>
          <Icon name="TrendingUp" className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">65%</div>
          <p className="text-xs text-muted-foreground">Увеличение случаев целевого фишинга за 2024</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhishingStats;
