import type { MainData } from '../context/ThemeContext';
import FoodCard from '../components/FoodCard';

interface FoodCardListProps {
  type?: string
}

export default function FoodCardList({ type }: FoodCardListProps) {
  let dummyData = [['default1', 'default2'], ['default1', 'default2'], ['default1', 'default2']]
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
        {dummyData.map((data, index) => {
          return (
            <FoodCard key={index} menu_name={data[0]} cardtype={type} />
          )
        })}
      </div>
    </>
  )
}
