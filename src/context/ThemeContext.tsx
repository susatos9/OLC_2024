import { createContext, Dispatch, SetStateAction } from 'react';

export type Recipe = {
  id: number;
  image: string;
  imageType: string;
  title: string;
}

export type MainData = {
  name: string;
  theme: string;
  text: string;
  image_url: string;
  favorites: Recipe[];
  searchResult: Recipe[];
}

interface ThemeContextValue {
  state: MainData;
  setState: Dispatch<SetStateAction<MainData>>;
}

const ThemeContext = createContext<ThemeContextValue>({
  state: { name: '', theme: '', text: '', image_url: '', favorites: [], searchResult: [] },
  setState: () => { },
});

export default ThemeContext;
