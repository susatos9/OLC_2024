'use client'
import Button from '../components/Button';
import Image from 'next/image';
export type MainData = {
  name: string;
  theme: string;
  text: string;
  image_url: string;
}

export default function Home() {
  return (
    <div>
      <Button theme="orangeTheme" text="Button" />
    </div>
  )
}
