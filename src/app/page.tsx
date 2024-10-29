'use client'

export type MainData = {
  name: string;
  theme: string;
  text: string;
}

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}
