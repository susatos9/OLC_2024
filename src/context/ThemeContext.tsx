import { createContext, Dispatch, SetStateAction } from 'react';

export type MainData = {
  name: string;
  theme: string;
  text: string;
  image_url: string;
}

interface ThemeContextValue {
  state: MainData;
  setState: Dispatch<SetStateAction<MainData>>;
}

const ThemeContext = createContext<ThemeContextValue>({
  state: { name: '', theme: '', text: '', image_url: '' },
  setState: () => { },
});

export default ThemeContext;
