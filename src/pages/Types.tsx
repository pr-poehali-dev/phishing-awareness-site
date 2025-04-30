
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/Icon';

const Types = () => {
  const phishingTypes = [
    {
      id: 1,
      title: 'Email-фишинг',
      description: 'Классический вид фишинга через поддельные электронные письма, имитирующие банки, сервисы и другие организации.',
      icon: 'Mail',
      signs: [
        'Поддельные адреса отправителей, похожие на настоящие',
        'Срочные требования о действиях с аккаунтом',
        'Запросы личных данных и реквизитов',
        'Грамматические ошибки и опечатки'
      ],
      examples: 'Письма о блокировке банковской карты, выигрыше в лотерею, проблемах с аккаунтом, требующие немедленной авторизации.'
    },
    {
      id: 2,
      title: 'Смишинг (SMS-фишинг)',
      description: 'Фишинг через SMS и текстовые сообщения в мессенджерах, использующий социальную инженерию.',
      icon: 'MessageSquare',
      signs: [
        'SMS с короткими ссылками на фишинговые сайты',
        'Сообщения о выигрышах или блокировке услуг',
        'Маскировка под службы доставки и госуслуги',
        'Требования срочно перезвонить на указанный номер'
      ],
      examples: 'SMS о доставке посылки с подозрительной ссылкой для отслеживания, сообщения о штрафах или налогах.'
    },
    {
      id: 3,
      title: 'Вишинг (Voice phishing)',
      description: 'Голосовой фишинг с использованием телефонных звонков для выманивания личной информации.',
      icon: 'Phone',
      signs: [
        'Звонки якобы от банков о подозрительных транзакциях',
        'Представление сотрудниками госорганов',
        'Создание атмосферы срочности и паники',
        'Использование технологий подмены номера'
      ],
      examples: 'Звонки от "службы безопасности банка" о подозрительной операции, требующие подтвердить данные карты или провести "защитный перевод".'
    },
    {
      id: 4,
      title: 'Фарминг (Pharming)',
      description: 'Перенаправление пользователей на поддельные сайты путем манипуляций с DNS-серверами.',
      icon: 'Globe',
      signs: [
        'Перенаправление на поддельные сайты без перехода по ссылкам',
        'Незначительные изменения в URL-адресе',
        'Отсутствие HTTPS-соединения',
        'Необычное поведение знакомых сайтов'
      ],
      examples: 'Автоматическое перенаправление на фейковую страницу банка при попытке зайти на официальный сайт.'
    },
    {
      id: 5,
      title: 'Целевой фишинг (Spear phishing)',
      description: 'Персонализированные фишинговые атаки, нацеленные на конкретных людей или организации.',
      icon: 'Target',
      signs: [
        'Использование личной информации жертвы',
        'Обращение по имени и должности',
        'Упоминание реальных коллег и проектов',
        'Высокое качество содержания без типичных признаков фишинга'
      ],
      examples: 'Письмо якобы от руководителя компании с запросом на срочный перевод средств или от коллеги с просьбой открыть "важный документ".'
    },
    {
      id: 6,
      title: 'Квишинг (QR-фишинг)',
      description: 'Новый вид фишинга с использованием поддельных QR-кодов для кражи данных.',
      icon: 'QrCode',
      signs: [
        'QR-коды на поддельных флаерах и рекламных материалах',
        'Наклейки с QR-кодами на настоящих рекламных щитах',
        'QR-коды в поддельных письмах и сообщениях',
        'Перенаправление на сайты, требующие личные данные'
      ],
      examples: 'Поддельный QR-код на столе ресторана, ведущий на фишинговый сайт для "оплаты счета" или на парковках для "оплаты стоянки".'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-purple-700 to-indigo-800 py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Виды фишинговых атак</h1>
            <p className="text-xl max-w-3xl">
              Фишинговые атаки постоянно эволюционируют, становясь всё более изощренными. 
              Познакомьтесь с основными типами фишинга, чтобы уметь распознавать их.
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phishingTypes.map(type => (
              <Card key={type.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Icon name={type.icon} className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Признаки:</h4>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    {type.signs.map((sign, index) => (
                      <li key={index} className="text-sm text-gray-700">{sign}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold mb-2">Примеры:</h4>
                  <p className="text-sm text-gray-700">{type.examples}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Types;
