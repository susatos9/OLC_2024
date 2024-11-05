import { useState, useContext, createContext, Dispatch, SetStateAction } from 'react';


export type Recipe = {
  id: number;
  image: string;
  imageType: string;
  title: string;
}

interface FavoritesContextValue {
  state: Recipe[];
  setState:  Dispatch<SetStateAction<Recipe[]>>;
}

const FavoritesContextValue = createContext<FavoritesContextValue>({
  state: [],
  setState: () => { },
});

export default FavoritesContextValue
