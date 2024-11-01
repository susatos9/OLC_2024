import FoodCard from '../components/FoodCard';

interface FoodCardListProps {
  type?: string;
  data?: {
    id: number;
    title: string;
    image: string;
    imageType: string;

  }[];
  onAddToFavorites?: any;
  onRemoveFromFavorites?: any;
}

export default function FoodCardList({ type, data = [], onAddToFavorites, onRemoveFromFavorites }: FoodCardListProps) {
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
        <FoodCard key={item.id} menu_name={item.title} base_image_url={item.image} cardtype={type} />
      ))}
    </div>
  );
}
