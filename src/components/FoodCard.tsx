import Button from '../components/Button';
import type { MainData } from '../context/ThemeContext';
import TextThemed from '../components/TextThemed';
import GetProperty from '../utility_function/GetProperty';
import Image from 'next/image';

interface FoodCardProps {
  base_image_url?: string;
  menu_name?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function FoodCard(props: FoodCardProps) {
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
    width: props.imageWidth ? props.imageWidth : 562,
    height: props.imageWidth ? props.imageHeight : 278,
  }

  let image_url: string = 'https://picsum.photos' + `/${imageStyle.width}/${imageStyle.height}`;
  const image = {};

  return (<>
    <div className="" style={foodCardstyle}>
      <img src={image_url} alt={props.menu_name} />
      {/* TextThemed(menu_name)} #another way to use TextThemed components */}
      <TextThemed text={props.menu_name} />
      <Button />
    </div >
  </>
  )
}
