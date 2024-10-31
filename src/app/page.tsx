'use client'
import FoodCardList from '../components/FoodCardList';
import { createContext, useContext, useState } from 'react';
import ThemeContext, { MainData } from '../context/ThemeContext';
import SearchField from '../components/SearchField';
import FoodCard from '../components/FoodCard';
import Button from '@/components/Button';



export default function Home() {

  const [state, setState] = useState<MainData>({
    name: 'test',
    theme: 'blueTheme',
    text: 'test',
    image_url: 'test'
  });

  const style = {
    display: 'flex',
    width: '100%',
    height: '100vh',
    padding: '80px 90px',
    alignItems: 'center',
    gap: '80px',
    justifyContent: 'center',
    backgroundColor: state.theme === 'blueTheme' ? '#FEB300' : '#12333A',
  }
  useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={{ state, setState }}>
      <div className='flex-col' style={style}>
        <SearchField />
        {/* <FoodCardList /> */}
        {/* <Button buttonType='changetheme' text='change theme' /> */}
      </div>
    </ThemeContext.Provider>
  )
}


