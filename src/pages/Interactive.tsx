
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/Icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

interface Example {
  id: number;
  title: string;
  description: string;
  image: string;
  isFishing: boolean;
  clues: string[];
  explanation: string;
}

const Interactive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const examples: Example[] = [
    {
      id: 1,
      title: 'Письмо от Сбербанка',
      description: 'Вы получили следующее письмо на вашу электронную почту:',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      isFishing: true,
      clues: [
        'Адрес отправителя: security-alert@sberbank-verify.com (не официальный домен)',
        'В тексте присутствуют грамматические ошибки',
        'Срочное требование перейти по ссылке и ввести данные',
        'Угроза блокировки счета в случае бездействия'
      ],
      explanation: 'Это классический пример фишингового письма. Официальный домен Сбербанка - sberbank.ru. Банки никогда не запрашивают полные данные карты или пароли по электронной почте и не угрожают немедленной блокировкой счета.'
    },
    {
      id: 2,
      title: 'SMS о доставке посылки',
      description: 'Вам пришло SMS-сообщение:',
      image: 'https://images.unsplash.com/photo-1573221566340-81bdde00e00b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      isFishing: true,
      clues: [
        'Короткая ссылка, скрывающая настоящий адрес',
        'Отсутствие конкретной информации о посылке (номер, отправитель)',
        'Требование дополнительной оплаты',
        'Сообщение создает ощущение срочности'
      ],
      explanation: 'Это пример смишинга (SMS-фишинга). Настоящие службы доставки указывают номер отслеживания, не используют сокращенные ссылки и не требуют предоплату через подозрительные сайты.'
    },
    {
      id: 3,
      title: 'Страница входа в ВКонтакте',
      description: 'Вы нажали на ссылку и попали на эту страницу:',
      image: 'https://images.unsplash.com/photo-1614064645771-2d82c1241248?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      isFishing: true,
      clues: [
        'URL адрес: vk-login.ru (не официальный домен vk.com)',
        'Отсутствие SSL-сертификата (нет https)',
        'Мелкие отличия в дизайне от оригинального сайта',
        'Необычные поля для ввода (например, просьба ввести номер телефона и код из SMS одновременно)'
      ],
      explanation: 'Это фишинговый сайт, имитирующий страницу входа ВКонтакте. Всегда проверяйте домен сайта (должен быть vk.com) и наличие защищенного соединения (https).'
    },
    {
      id: 4,
      title: 'Письмо от работодателя',
      description: 'Вам на корпоративную почту пришло письмо:',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      isFishing: false,
      clues: [
        'Адрес отправителя соответствует корпоративному домену',
        'Письмо подписано реальным именем руководителя',
        'Нет срочных требований о переводе денег или вводе учетных данных',
        'Вложение имеет формат корпоративного документа'
      ],
      explanation: 'Это легитимное письмо от работодателя. Адрес отправителя соответствует корпоративному домену, содержание письма не требует срочных действий с финансами или учетными данными.'
    },
    {
      id: 5,
      title: 'Звонок из "банка"',
      description: 'Вам позвонили с номера +7 (800) 555-XX-XX и сообщили:',
      image: 'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      isFishing: true,
      clues: [
        'Звонящий торопит и создает ощущение паники',
        'Требует назвать CVV/CVC-код карты или полные данные карты',
        'Просит установить специальное приложение для "защиты"',
        'Предлагает перевести деньги на "безопасный счет"'
      ],
      explanation: 'Это пример вишинга (голосового фишинга). Сотрудники банка никогда не запрашивают CVV/CVC-код, полные данные карты и не предлагают перевести деньги на "безопасные счета". Даже если номер похож на официальный, он может быть подменен.'
    }
  ];

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer);
    if (answer === examples[currentIndex].isFishing) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < examples.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
  };

  const currentExample = examples[currentIndex];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-700 to-purple-800 py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Интерактивный тренажер</h1>
            <p className="text-xl max-w-3xl">
              Проверьте свои навыки распознавания фишинговых атак на практических примерах.
              Это поможет вам защититься от реальных угроз в будущем.
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <Tabs defaultValue="quiz" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="quiz">Тренажер</TabsTrigger>
              <TabsTrigger value="tips">Советы по защите</TabsTrigger>
            </TabsList>
            
            <TabsContent value="quiz" className="mt-6">
              {currentIndex < examples.length ? (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{currentExample.title}</CardTitle>
                      <Badge variant="outline">
                        Пример {currentIndex + 1} из {examples.length}
                      </Badge>
                    </div>
                    <CardDescription>{currentExample.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="rounded-md overflow-hidden h-64 bg-gray-100">
                      <img 
                        src={currentExample.image} 
                        alt={currentExample.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {!showExplanation ? (
                      <div className="flex justify-center gap-4 mt-6">
                        <Button 
                          variant="outline" 
                          onClick={() => handleAnswer(false)}
                          className="w-40"
                        >
                          <Icon name="Check" className="mr-2 h-4 w-4" />
                          Безопасно
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => handleAnswer(true)}
                          className="w-40"
                        >
                          <Icon name="AlertTriangle" className="mr-2 h-4 w-4" />
                          Фишинг
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4 mt-4">
                        <div className={`p-4 rounded-md ${selectedAnswer === currentExample.isFishing ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300'}`}>
                          <div className="flex items-center mb-2">
                            {selectedAnswer === currentExample.isFishing ? (
                              <>
                                <Icon name="CheckCircle" className="h-5 w-5 text-green-600 mr-2" />
                                <span className="font-medium">Правильно!</span>
                              </>
                            ) : (
                              <>
                                <Icon name="XCircle" className="h-5 w-5 text-red-600 mr-2" />
                                <span className="font-medium">Неправильно!</span>
                              </>
                            )}
                          </div>
                          <p className="text-sm">{currentExample.explanation}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">На что обратить внимание:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {currentExample.clues.map((clue, index) => (
                              <li key={index} className="text-sm">{clue}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </CardContent>
                  
                  <CardFooter className="flex justify-between">
                    <div>
                      <span className="text-sm text-gray-500">
                        Ваш счёт: {score} из {Math.min(currentIndex + 1, examples.length)}
                      </span>
                    </div>
                    {showExplanation && (
                      <Button onClick={handleNext}>
                        {currentIndex < examples.length - 1 ? 'Следующий пример' : 'Завершить'}
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Тренировка завершена!</CardTitle>
                    <CardDescription>
                      Вы прошли все примеры в нашем тренажере
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-6">
                      <span className="text-5xl font-bold block mb-4">{score} / {examples.length}</span>
                      <p className="text-lg">
                        {score === examples.length 
                          ? 'Отличный результат! Вы хорошо умеете распознавать фишинговые атаки.'
                          : score >= examples.length / 2 
                            ? 'Хороший результат, но есть над чем поработать.' 
                            : 'Вам стоит улучшить навыки распознавания фишинга.'}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button onClick={handleReset}>
                      Пройти тренажер снова
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="tips" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Советы по защите от фишинга</CardTitle>
                  <CardDescription>
                    Используйте эти рекомендации, чтобы обезопасить себя от фишинговых атак
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Icon name="ShieldCheck" className="mr-2 h-5 w-5 text-green-600" /> 
                        Проверяйте адреса отправителей и URL-адреса
                      </h3>
                      <p className="text-sm text-gray-600">
                        Всегда обращайте внимание на полный адрес электронной почты отправителя и URL-адрес сайта. 
                        Мошенники часто используют адреса, которые визуально похожи на оригинальные, но содержат 
                        незаметные изменения, дополнительные символы или другие домены.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Icon name="Lock" className="mr-2 h-5 w-5 text-green-600" /> 
                        Не переходите по подозрительным ссылкам
                      </h3>
                      <p className="text-sm text-gray-600">
                        Не нажимайте на ссылки в письмах или сообщениях от неизвестных отправителей. 
                        Если сообщение выглядит как от знакомой организации, но запрашивает личную информацию, 
                        лучше посетите официальный сайт, введя его адрес вручную в браузере.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Icon name="AlertTriangle" className="mr-2 h-5 w-5 text-yellow-600" /> 
                        Будьте осторожны с личными данными
                      </h3>
                      <p className="text-sm text-gray-600">
                        Легитимные организации никогда не запрашивают полные данные карт, пароли, 
                        PIN-коды или CVV-коды через электронную почту или телефон. Никогда не сообщайте 
                        такую информацию, даже если запрос кажется официальным.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Icon name="Shield" className="mr-2 h-5 w-5 text-green-600" /> 
                        Используйте двухфакторную аутентификацию
                      </h3>
                      <p className="text-sm text-gray-600">
                        Включите двухфакторную аутентификацию для всех важных аккаунтов, где это возможно. 
                        Это добавит дополнительный уровень защиты, даже если ваши учетные данные будут скомпрометированы.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Icon name="Scan" className="mr-2 h-5 w-5 text-green-600" /> 
                        Проверяйте подозрительные сообщения
                      </h3>
                      <p className="text-sm text-gray-600">
                        Ищите признаки фишинга: орфографические ошибки, нелогичные требования, создание 
                        атмосферы срочности, угрозы или слишком заманчивые предложения. 
                        Если что-то кажется слишком хорошим, чтобы быть правдой — это, вероятно, обман.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Interactive;
