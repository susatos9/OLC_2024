import { defaultHead } from 'next/head';
import FoodCardList from './FoodCardList';
import SearchField from './SearchField';
import TextThemed from './TextThemed';
import React, { useReducer, useEffect, useContext, ChangeEvent, useState, useCallback } from 'react';
import Button from './Button';
import ThemeContext, { MainData } from '../context/ThemeContext';
import FavoritesContextValue from '@/context/FavoritesContext';

interface FavoritesMenuFieldProps {
  type: string
  text?: string
}

export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};
// Reducer function

const formstyle = {
  display: 'flex',
  minWidth: '500px',
  minheight: '100%',
  padding: '16px 32px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  fontFamily: 'Nunito',
  fontSize: '24px',
  fontWeight: '700',
  color: 'black',
}



export default function({ type, text }: FavoritesMenuFieldProps) {
  const context = useContext(ThemeContext);
  const globalState = context.state;
  const setGlobalState = context.setState;

  const favoritesContex = useContext(FavoritesContextValue);

  const [favoritesSearchTerm, setFavoritesSearchTerm] = useState('');
  const [favoritesSearchResult, setFavoritesSearchResult] = useState<Recipe[]>([]);
  const handleFavoritesSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e) {
      e.preventDefault;
      setFavoritesSearchTerm(e.target.value);
    }
  }

  const favoritesSearch = useCallback((e: ChangeEvent<HTMLButtonElement>) => {
    if (favoritesSearchTerm === '') {
      setFavoritesSearchResult([]);
    }
    const regex = new RegExp(favoritesSearchTerm);
    setFavoritesSearchResult(globalState.favorites.filter(item => regex.test(item.title) ? item : null));
    console.log(favoritesSearchResult);
  }, [favoritesSearchTerm, globalState.favorites]);

  let FavoritesMenuFieldStyle = {
    display: 'flex',
    // 'flex-direction': 'column',
    alignItems: 'center',
    gap: '40px',
    alignSelf: 'stretch',
  };

  const checkEmptyArray = (array: Recipe[] | undefined) => {
    if (array === undefined) {
      return true;
    }
    if (array.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <FavoritesContextValue.Provider value={{ state: favoritesSearchResult ? favoritesSearchResult : [], setState: setFavoritesSearchResult }}>
      <div style={FavoritesMenuFieldStyle} className='flex-col'>
        {text && <TextThemed text={text} />}
        <form className="flex flex-row gap-10" onSubmit={(e) => e.preventDefault()}>
          <input
            value={favoritesSearchTerm}
            onChange={handleFavoritesSearch}
            type="text"
            name="search"
            style={formstyle}
            className="search-field:focus search-field:valid search-field:not(:placeholder-shown)"
          />
          <Button text="Search" buttonType="search" clicked={favoritesSearch} /> {/* No need for onClick, form submit handles it */}
        </form>
        <FoodCardList type={type} data={checkEmptyArray(favoritesSearchResult) ? globalState.favorites : favoritesSearchResult} />
      </div>
    </FavoritesContextValue.Provider>
  );
}
