import type { MainData } from '../context/ThemeContext';
import Recipe from '../components/FoodCard';
import FoodCard from '../components/FoodCard';

interface Recipe {
  id: number;
  title: string;
  image: string;
}

interface FoodCardListProps {
  type?: string;
  data?: Recipe[]
}

export default function FoodCardList({ type, data = [] }: FoodCardListProps) {
  const FoodCardListStyle = {
    display: 'flex',
    'flex-direction': 'row',
    alignItems: 'flex-start',
    gap: '40px',
    alignSelf: 'stretch',
  };

  return (
    <div style={FoodCardListStyle} className="flex-row">
      {data.map((item, index) => (
        <FoodCard id={item.id} menu_name={item.title} base_image_url={item.image} cardtype={type} />
      ))}
    </div>
  );
}
