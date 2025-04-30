
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/Icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Resources = () => {
  const officialResources = [
    {
      id: 1,
      title: 'МВД России',
      description: 'Официальные рекомендации по безопасности и информация о том, как подать заявление о мошенничестве.',
      url: 'https://мвд.рф/тематические-страницы/item/8943517/',
      icon: 'ShieldCheck',
      type: 'Государственный орган'
    },
    {
      id: 2,
      title: 'ФинЦЕРТ Банка России',
      description: 'Центр мониторинга и реагирования на компьютерные атаки в кредитно-финансовой сфере.',
      url: 'https://www.cbr.ru/fincert/',
      icon: 'Building',
      type: 'Финансовый регулятор'
    },
    {
      id: 3,
      title: 'Роскомнадзор',
      description: 'Информация о блокировке фишинговых сайтов и форма для сообщения о противоправном контенте.',
      url: 'https://rkn.gov.ru/',
      icon: 'Network',
      type: 'Государственный орган'
    },
    {
      id: 4,
      title: 'Национальный координационный центр по компьютерным инцидентам',
      description: 'Государственная система обнаружения, предупреждения и ликвидации последствий компьютерных атак.',
      url: 'https://cert.gov.ru/',
      icon: 'Shield',
      type: 'Государственный центр'
    }
  ];

  const educationalResources = [
    {
      id: 1,
      title: 'Лаборатория Касперского: База знаний',
      description: 'Информационные статьи, обучающие материалы и актуальные данные о фишинге.',
      url: 'https://www.kaspersky.ru/resource-center/threats/phishing-examples',
      icon: 'BookOpen',
      type: 'Образовательный ресурс'
    },
    {
      id: 2,
      title: 'SecurityLab.ru',
      description: 'Новости кибербезопасности, аналитика и информация о последних фишинговых кампаниях.',
      url: 'https://www.securitylab.ru/',
      icon: 'FileText',
      type: 'Информационный портал'
    },
    {
      id: 3,
      title: 'Stop-Phishing.ru',
      description: 'Проект, посвященный борьбе с фишингом, с описанием актуальных схем мошенничества.',
      url: 'https://stop-phishing.ru/',
      icon: 'ShieldBan',
      type: 'Специализированный портал'
    },
    {
      id: 4,
      title: 'Академия Яндекса',
      description: 'Обучающие курсы и статьи по информационной безопасности и распознаванию фишинга.',
      url: 'https://academy.yandex.ru/posts/chto-takoe-fishing-i-kak-ot-nego-zashchititsya',
      icon: 'GraduationCap',
      type: 'Обучающий ресурс'
    }
  ];

  const tools = [
    {
      id: 1,
      title: 'VirusTotal',
      description: 'Сервис для проверки подозрительных ссылок и файлов на наличие вредоносного кода.',
      url: 'https://www.virustotal.com/',
      icon: 'Search',
      type: 'Инструмент анализа'
    },
    {
      id: 2,
      title: 'Проверка URL от Kaspersky',
      description: 'Бесплатный онлайн-сервис для анализа подозрительных ссылок.',
      url: 'https://opentip.kaspersky.com/',
      icon: 'Link',
      type: 'Инструмент проверки'
    },
    {
      id: 3,
      title: 'PhishTank',
      description: 'Сообщество по обнаружению и отслеживанию фишинговых сайтов.',
      url: 'https://phishtank.org/',
      icon: 'AlertTriangle',
      type: 'База данных фишинга'
    },
    {
      id: 4,
      title: 'Google Safe Browsing',
      description: 'Инструмент для проверки безопасности веб-сайтов от Google.',
      url: 'https://transparencyreport.google.com/safe-browsing/search',
      icon: 'Globe',
      type: 'Защитный сервис'
    }
  ];

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
          <Tabs defaultValue="official" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="official">Официальные ресурсы</TabsTrigger>
              <TabsTrigger value="educational">Образовательные ресурсы</TabsTrigger>
              <TabsTrigger value="tools">Инструменты проверки</TabsTrigger>
            </TabsList>
            
            <TabsContent value="official" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {officialResources.map(resource => (
                  <Card key={resource.id} className="hover:shadow-md transition-shadow">
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
                        Посетить ресурс
                        <Icon name="ExternalLink" className="ml-1 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="educational" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educationalResources.map(resource => (
                  <Card key={resource.id} className="hover:shadow-md transition-shadow">
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
                        Перейти к материалам
                        <Icon name="ExternalLink" className="ml-1 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map(tool => (
                  <Card key={tool.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <div className="bg-primary/10 p-2 rounded-full mr-3">
                            <Icon name={tool.icon} className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{tool.title}</CardTitle>
                        </div>
                        <Badge variant="outline">{tool.type}</Badge>
                      </div>
                      <CardDescription className="mt-2">{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a 
                        href={tool.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        Открыть инструмент
                        <Icon name="ExternalLink" className="ml-1 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Что делать, если вы стали жертвой фишинга?</h2>
            
            <div className="space-y-4">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <h3 className="font-semibold flex items-center text-amber-800">
                  <Icon name="Clock" className="mr-2 h-5 w-5" /> 
                  Действуйте быстро
                </h3>
                <p className="text-sm text-amber-700 mt-1">
                  Если вы подозреваете, что стали жертвой фишинга, немедленно измените пароли к затронутым аккаунтам с другого устройства.
                </p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-semibold flex items-center text-blue-800">
                  <Icon name="Building" className="mr-2 h-5 w-5" /> 
                  Свяжитесь с банком
                </h3>
                <p className="text-sm text-blue-700 mt-1">
                  Если речь идет о финансовых данных, немедленно свяжитесь с вашим банком по официальному номеру, указанному на обратной стороне карты.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-semibold flex items-center text-green-800">
                  <Icon name="FileText" className="mr-2 h-5 w-5" /> 
                  Сообщите о фишинге
                </h3>
                <p className="text-sm text-green-700 mt-1">
                  Сообщите о фишинговом сайте или письме в ФинЦЕРТ Банка России, Роскомнадзор или используя специализированные сервисы.
                </p>
              </div>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                <h3 className="font-semibold flex items-center text-purple-800">
                  <Icon name="Shield" className="mr-2 h-5 w-5" /> 
                  Включите дополнительную защиту
                </h3>
                <p className="text-sm text-purple-700 mt-1">
                  Активируйте двухфакторную аутентификацию для всех важных аккаунтов и используйте разные пароли для разных сервисов.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
