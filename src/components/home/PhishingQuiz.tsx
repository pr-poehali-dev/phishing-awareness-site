
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
    }
  ];

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3">Проверьте свои знания</h2>
        <p className="text-center text-gray-600 mb-10">Сможете ли вы распознать фишинговую атаку?</p>
        
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle>Вопрос {currentQuestion + 1}</CardTitle>
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
                Перейти к тренажеру
                <Icon name="ArrowRight" />
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
};

export default PhishingQuiz;
