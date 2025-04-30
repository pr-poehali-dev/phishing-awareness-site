import React from 'react';
import EmergencyActionItem from './EmergencyActionItem';

const emergencyActions = [
  {
    id: 1,
    color: 'amber',
    title: 'Действуйте быстро',
    description: 'Если вы подозреваете, что стали жертвой фишинга, немедленно измените пароли к затронутым аккаунтам с другого устройства.',
    icon: 'Clock'
  },
  {
    id: 2,
    color: 'blue',
    title: 'Свяжитесь с банком',
    description: 'Если речь идет о финансовых данных, немедленно свяжитесь с вашим банком по официальному номеру, указанному на обратной стороне карты.',
    icon: 'Building'
  },
  {
    id: 3,
    color: 'green',
    title: 'Сообщите о фишинге',
    description: 'Сообщите о фишинговом сайте или письме в ФинЦЕРТ Банка России, Роскомнадзор или используя специализированные сервисы.',
    icon: 'FileText'
  },
  {
    id: 4,
    color: 'purple',
    title: 'Включите дополнительную защиту',
    description: 'Активируйте двухфакторную аутентификацию для всех важных аккаунтов и используйте разные пароли для разных сервисов.',
    icon: 'Shield'
  }
];

const EmergencyActions: React.FC = () => {
  return (
    <div className="mt-16 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Что делать, если вы стали жертвой фишинга?</h2>
      
      <div className="space-y-4">
        {emergencyActions.map(action => (
          <EmergencyActionItem
            key={action.id}
            color={action.color}
            title={action.title}
            description={action.description}
            icon={action.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default EmergencyActions;