'use client'
import FoodCardList from '../components/FoodCardList';
import { createContext, useContext, useState } from 'react';
import ThemeContext, { MainData } from '../context/ThemeContext';
import SearchField from '../components/SearchField';

const style = {
  display: 'flex',
  width: '1440px',
  padding: '80px 90px',
  alignItems: 'center',
  gap: '80px',
}


export default function Home() {

  const [state, setState] = useState<MainData>({
    name: 'test',
    theme: 'blueTheme',
    text: 'test',
    image_url: 'test'
  });
  useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={{ state, setState }}>
      <div className='flex-col' style={style}>
        <SearchField />
      </div>
    </ThemeContext.Provider>
  )
}


