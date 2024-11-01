// @ts-nocheck
'use client'
import { createContext, useContext, useState } from 'react';
import ThemeContext, { MainData } from '../context/ThemeContext';
import Button from '@/components/Button';
import MenuField from '@/components/MenuField';

interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType?: string;
}

interface MenuFieldProps {
  type: string;
  text?: string;
  favorites?: Recipe[];
  onAddToFavorites?: (recipe: Recipe) => void;
  onRemoveFromFavorites?: (recipeId: number) => void;
}

export default function Home() {
  const [state, setState] = useState<MainData>({
    name: 'test',
    theme: 'blueTheme',
    text: 'test',
    image_url: 'test'
  });

  const [favorites, setFavorites] = useState<Recipe[]>([]);

  const style = {
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: '80px 90px',
    alignItems: 'center',
    gap: '80px',
    justifyContent: 'center',
    backgroundColor: state.theme === 'blueTheme' ? '#FEB300' : '#12333A',
  }
  useContext(ThemeContext);

  const handleAddToFavorites = (recipe: Recipe) => {
    setFavorites([...favorites, recipe]);
  };

  const handleRemoveFromFavorites = (recipeId: number) => {
    setFavorites(favorites.filter(recipe => recipe.id !== recipeId));
  };

  return (
    <ThemeContext.Provider value={{ state, setState }}>
      <div className='flex-col' style={style}>
        <Button text="Change Theme" buttonType="changetheme" />
        <MenuField
          type='Remove From Favorites'
          text='Favorites'
          favorites={favorites}
          onRemoveFromFavorites={handleRemoveFromFavorites}
        />
        <MenuField
          type='Add To Favorites'
          onAddToFavorites={handleAddToFavorites}
          favorites={favorites}
        />
      </div>
    </ThemeContext.Provider>
  )
}
