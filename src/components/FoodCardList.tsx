import type { MainData } from '../context/ThemeContext';
import Recipe from '../components/FoodCard';
import FoodCard from '../components/FoodCard';
import React from 'react';

interface Recipe {
  id: number;
  title: string;
  image: string;
}

interface FoodCardListProps {
  type?: string;
  data?: Recipe[]
}

const FoodCardList:React.FC<FoodCardListProps> = ({ type, data = [] }: FoodCardListProps) => {
  const FoodCardListStyle = {
    display: 'grid',
    gridTemplateColumn: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '40px',
  };

  return (
    <div style={FoodCardListStyle} className="">
      {data.map((item, index) => (
        <FoodCard key = {index} id={item.id} menu_name={item.title} base_image_url={item.image} cardtype={type} />
      ))}
    </div>
  );
}

export default React.memo(FoodCardList);
