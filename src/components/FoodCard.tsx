import Button from '../components/Button';
import type { MainData } from '../app/page.tsx';
import TextThemed from '../components/TextThemed';
import GetProperty from '../utility_function/GetProperty';
import Image from 'next/image';

interface FoodCardProps {
  myInput: MainData
  setMyInput: (value: MainData) => void
  image_url?: string
  menu_name?: string
  imageWidth?: number
  imageHeight?: number
}



export default function FoodCard(
  { myInput, setMyInput }: FoodCardProps,
  base_image_url: string = 'https://picsum.photos',
  menu_name: string = 'default',
  imageWidth: number = 562,
  imageHeight: number = 278,
) {
  const foodCardstyle = {
    display: 'flex',
    padding: '24px',
    'flex-direction': 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '23px',
    flex: '1 0 0',
    backgroundColor: 'white',
  }

  const imageStyle = {
    width: imageWidth ? imageWidth : '562px',
    height: imageHeight ? imageHeight : '278px',
  }

  let image_url = `${base_image_url}/${imageWidth}/${imageHeight}`;
  const image = {};

  return (<>
    <div className="" style={foodCardstyle}>
      <img src={image_url} alt={menu_name} />
      <TextThemed myInput={myInput} text={menu_name} />
      <Button props={{ myInput: myInput, setMyInput: setMyInput }} width={500} height={100} />
    </div >
  </>
  )
}
