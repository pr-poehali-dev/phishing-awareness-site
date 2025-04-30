
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import PhishingStats from '@/components/home/PhishingStats';
import PhishingTypes from '@/components/home/PhishingTypes';
import PhishingQuiz from '@/components/home/PhishingQuiz';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <PhishingStats />
        
        <section className="py-12 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Что такое фишинг?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Фишинг</strong> — это вид интернет-мошенничества, целью которого является получение доступа к конфиденциальным данным пользователей — паролям, логинам, данным банковских карт и другой личной информации.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Мошенники маскируются под надёжные сервисы, банки, платежные системы или известные бренды, и отправляют поддельные сообщения со ссылками на фальшивые сайты, внешне неотличимые от настоящих.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              По данным за 2025 год, более 90% кибератак начинаются с фишинговых писем, а технологии обмана становятся всё изощреннее, используя искусственный интеллект и методы социальной инженерии.
            </p>
          </div>
        </section>
        
        <PhishingTypes />
        <PhishingQuiz />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
