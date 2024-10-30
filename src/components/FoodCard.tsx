import Button from '../components/Button';
import type { MainData } from '../app/page.tsx';
import TextThemed from '../components/TextThemed';
import GetProperty from '../utility_function/GetProperty';
import Image from 'next/image';

interface FoodCardProps {
  myInput: MainData
  setMyInput: (value: MainData) => void
  image_url: string
  menu_name: string
  imageWidth: number
  imageHeight: number
}
export default function FoodCard({ myInput, setMyInput }: FoodCardProps, image_url: string = 'https://picsum.photos/562/278', menu_name: string = 'default') {
  const FoodCardstyle = {
    display: 'flex',
    padding: '24px',
    'flex-direction': 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '23px',
    flex: '1 0 0',
    backgroundColor: 'white',
  }
  const image = {};

  return (<>
    <div className="" style={FoodCardstyle}>
      <img src={image_url} alt={menu_name} />
      <TextThemed myInput={myInput} text={menu_name} />
      <Button props={{ myInput: myInput, setMyInput: setMyInput }} width={500} height={100} />
    </div >
  </>
  )
}
