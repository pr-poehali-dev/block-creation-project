
import React from 'react';

type AdvantageProps = {
  number: string;
  title: string;
  description: string;
  className?: string;
};

const AdvantageCard: React.FC<AdvantageProps> = ({ 
  number, 
  title, 
  description,
  className = ""
}) => {
  return (
    <div className={`rounded-3xl border border-gray-200 p-6 ${className}`}>
      <div className="mb-2 text-lg font-semibold">{number}</div>
      <h3 className="mb-4 text-xl font-bold text-blue-600">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const AdvantagesSection: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-10">НАШИ ПРЕИМУЩЕСТВА</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AdvantageCard 
          number="1" 
          title="КАЧЕСТВО" 
          description="Мы используем только сертифицированные и оригинальные материалы в ремонте смартфонов, для обеспечения высокого качества ремонта и точности диагностики."
        />
        
        <AdvantageCard 
          number="2" 
          title="СОТРУДНИКИ" 
          description="Сотрудники отбираются после прохождения испытательного срока, благодаря чему у нас работают 100% квалифицированные и опытные специалисты."
        />
        
        <AdvantageCard 
          number="3" 
          title="ЦЕНА" 
          description="Мы проанализировали рынок с похожими услугами и составили наши цены на основе самых выгодных цен по городу."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AdvantageCard 
            number="4" 
            title="ГАРАНТИЯ" 
            description="Предоставление гарантии на все виды ремонтных услуг, что обеспечивает защиту интересов клиентов."
          />
          
          <AdvantageCard 
            number="5" 
            title="СКОРОСТЬ" 
            description="Оперативное выполнение работ в установленные сроки, минимизация времени ожидания ремонта."
          />
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
