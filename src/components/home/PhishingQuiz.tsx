
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '../ui/Icon';

const PhishingQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'Какой из этих адресов, скорее всего, является фишинговым?',
      options: [
        'support@sberbank.ru',
        'support@sberbank-secure.com',
        'support@sber.ru',
        'info@sberbank.ru'
      ],
      correct: 1,
      explanation: 'Адрес support@sberbank-secure.com использует официальное название банка, но добавляет слово "secure", что является распространенным приемом фишеров.'
    },
    {
      question: 'Какой признак может указывать на фишинговое письмо?',
      options: [
        'Отсутствие персонального обращения',
        'Наличие логотипа компании',
        'Использование корпоративного шаблона',
        'Подпись с контактными данными'
      ],
      correct: 0,
      explanation: 'Фишинговые письма часто содержат общие обращения вроде "Уважаемый клиент" вместо вашего имени, так как злоумышленники рассылают их массово.'
    },
    {
      question: 'Какое действие наиболее безопасно при получении подозрительного письма от банка?',
      options: [
        'Перейти по ссылке и проверить URL в браузере',
        'Позвонить в банк по номеру из письма',
        'Связаться с банком по официальному номеру с сайта банка',
        'Ответить на письмо с просьбой о подтверждении'
      ],
      correct: 2,
      explanation: 'Всегда обращайтесь в банк или организацию по известным вам контактам с официального сайта, а не из полученного письма.'
    }
  ];

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setShowResult(false);
      setCurrentQuestion(nextQuestion);
    } else {
      // Quiz completed
      alert(`Тест завершен! Ваш результат: ${score} из ${questions.length}`);
      // Reset quiz
      setCurrentQuestion(0);
      setShowResult(false);
      setScore(0);
    }
  };

  // Проверка наличия вопросов
  if (!questions || questions.length === 0) {
    return (
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">Тест по фишингу</h2>
          <p className="text-center text-gray-600 mb-10">Вопросы загружаются...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3">Проверьте свои знания</h2>
        <p className="text-center text-gray-600 mb-10">Сможете ли вы распознать фишинговую атаку?</p>
        
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle>Вопрос {currentQuestion + 1} из {questions.length}</CardTitle>
            <CardDescription>{questions[currentQuestion].question}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <Button 
                  key={index}
                  variant={showResult 
                    ? index === questions[currentQuestion].correct 
                      ? "default" 
                      : "outline" 
                    : "outline"
                  }
                  className={`w-full justify-start ${
                    showResult && index === questions[currentQuestion].correct 
                      ? "bg-green-500 hover:bg-green-600" 
                      : ""
                  }`}
                  onClick={() => !showResult && handleAnswer(index)}
                  disabled={showResult}
                >
                  {option}
                  {showResult && index === questions[currentQuestion].correct && (
                    <Icon name="Check" className="ml-auto" />
                  )}
                </Button>
              ))}
            </div>
            
            {showResult && (
              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <p className="font-medium mb-2">Объяснение:</p>
                <p className="text-gray-700">{questions[currentQuestion].explanation}</p>
              </div>
            )}
          </CardContent>
          
          {showResult && (
            <CardFooter>
              <Button 
                className="w-full"
                onClick={handleNext}
              >
                {currentQuestion < questions.length - 1 ? 'Следующий вопрос' : 'Завершить тест'}
                <Icon name="ArrowRight" className="ml-2" />
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
};

export default PhishingQuiz;
