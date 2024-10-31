import type { MainData } from '../context/ThemeContext';
import FoodCard from '../components/FoodCard';

interface FoodCardListProps {
  myInput: MainData
  setMyInput: (value: MainData) => void
}

export default function FoodCardList({ myInput, setMyInput }: FoodCardListProps) {
  const FoodCardListStyle = {
    display: 'flex',
    'flex-direction': 'row',
    alignItems: 'flex-start',
    gap: '40px',
    alignSelf: 'stretch',
  }
  return (
    <>
      <div style={FoodCardListStyle} className='flex-row'>
        {/* {FoodCard('https://picsum.photos/200/300', 'test', 200, 300)} */}
        <FoodCard />
        <FoodCard />
      </div>
    </>
  )
}
