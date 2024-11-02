
// @ts-nocheck
import Button from '../components/Button';
import type { MainData } from '../context/ThemeContext';
import TextThemed from '../components/TextThemed';
import GetProperty from '../utility_function/GetProperty';
import Image from 'next/image';

interface FoodCardProps {
  mykey?: number;
  base_image_url?: string;
  menu_name?: string;
  imageWidth?: number;
  imageHeight?: number;
  cardtype?: string;
}

export default function FoodCard({ mykey, base_image_url, menu_name, imageWidth, imageHeight, cardtype }: FoodCardProps) {
  cardtype = cardtype ? cardtype : 'default';
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
    width: imageWidth ? imageWidth : 562,
    height: imageWidth ? imageHeight : 278,
  }

  // let image_url: string = 'https://picsum.photos' + `/${imageStyle.width}/${imageStyle.height}`;
  let image_url = base_image_url ? base_image_url : 'https://picsum.photos' + `/${imageStyle.width}/${imageStyle.height}`;
  const image = {};

  return (<>
    <div className="" style={foodCardstyle}>
      <img src={image_url} alt={menu_name} />
      {/* TextThemed(menu_name)} #another way to use TextThemed components */}
      <TextThemed text={menu_name} />
      <Button key={mykey} text={cardtype} />
    </div >
  </>
  )
}
