import React from "react";

interface InfoCardProps {
  title: string;
  icon: React.ElementType;
  items: string[];
}
const InfoCard: React.FC<InfoCardProps> = ({ title, icon: Icon, items }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <div className="flex justify-center mb-6">
        <Icon className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;
