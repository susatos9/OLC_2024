'use client'
import { useState } from 'react';
import Image from 'next/image';
import GetProperty from '../utility_function/GetProperty';
import FoodCard from '../components/FoodCard';

export type MainData = {
  name: string;
  theme: string;
  text: string;
  image_url: string;
}

export default function Home() {

  const [state, setState] = useState<MainData>({
    name: 'test',
    theme: 'blueTheme',
    text: 'test',
    image_url: 'test'
  });

  let texttest = 'helllo';

  return (
    <div>
      <FoodCard
        myInput={state}
        setMyInput={setState}
        image_url={GetProperty(state, 'image_url')}
        menu_name={GetProperty(state, 'name')}
      />
    </div>
  )
}
