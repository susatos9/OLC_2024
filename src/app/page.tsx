'use client'
import { useState } from 'react';
import Image from 'next/image';
import GetProperty from '../utility_function/GetProperty';
import FoodCard from '../components/FoodCard';
import FoodCardList from '../components/FoodCardList';

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
      <FoodCardList
        myInput={state}
        setMyInput={setState}
      />
    </div>
  )
}
