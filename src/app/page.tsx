'use client'
import Button from '../components/Button';
import TextThemed from '../components/TextThemed';
import { useState } from 'react';
import Image from 'next/image';
import GetProperty from '../utility_function/GetProperty';

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
      <Button props={{ myInput: state, setMyInput: setState }} width={500} height={100} />
      <TextThemed myInput={state} text={texttest} />
    </div>
  )
}
