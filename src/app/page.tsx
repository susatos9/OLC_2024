'use client'
import Button from '../components/Button';
import { useState } from 'react';
import Image from 'next/image';

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

  return (
    <div>
      <Button props={{ myInput: state, setMyInput: setState }} width={500} height={100} />
    </div>
  )
}
