import type { MainData } from '../app/page.tsx';
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
      <div style={FoodCardListStyle}>
        <FoodCard myInput={myInput} setMyInput={setMyInput} />
        <FoodCard myInput={myInput} setMyInput={setMyInput} />
      </div>
    </>
  )
}
