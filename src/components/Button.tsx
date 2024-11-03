import type { MainData } from '../context/ThemeContext';
import GetProperty from '../utility_function/GetProperty';
import { createContext, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { useState } from 'react';

interface ButtonProps {
  id?: number;
  dimension?: { width?: number; height?: number };
  buttonType?: string;
  text?: string;
  clicked?: any;
}

//Optional arguments should be passed by a single object

export default function Button({ id, dimension = {}, buttonType, text, clicked }: ButtonProps) {
  const context = useContext(ThemeContext);
  const state = context.state;
  const setState = context.setState;


  const [changeFavoriteButtonClicked, setchangeFavoriteButtonClicked] = useState(false);
  const handlechangeFavoriteButtonClicked = () => {
    setchangeFavoriteButtonClicked(changeFavoriteButtonClicked => !changeFavoriteButtonClicked);
    console.log(id);
    console.log(changeFavoriteButtonClicked);
  };

  const theme = useContext(ThemeContext);

  const addtofavorites = (id: number) => {
    const selectedItem = state.searchResult.find(item => item.id === id);
    if (selectedItem) {
      const selectedItemtoset = [...state.favorites, selectedItem];
      setState({ ...state, favorites: selectedItemtoset });
      console.log('error')
      return
    }
    console.log('item not found');
    return
  }

  const removefromfavorites = (id: number) => {
    const selectedItem = state.favorites.find(item => item.id === id);
    if (selectedItem) {
      const selectedItemtoset = state.favorites.filter(item => item.id !== id);
      setState({ ...state, favorites: selectedItemtoset });
      console.log('error')
      return
    }
    console.log('item not found');
    return
  }


  //Determine the button type and set the variable accordingly
  let onClicked;
  if (buttonType === 'changetheme') {
    onClicked = () => {
      let mutatedMyInput = { ...theme.state, theme: theme.state.theme === 'orangeTheme' ? 'blueTheme' : 'orangeTheme' }; //Create new Object using spread operator so react detect pointer change
      theme.setState(mutatedMyInput);
    };
  } else if (buttonType === 'addtofavorites') {
    onClicked = addtofavorites;
  } else if (buttonType === 'removefromfavorites') {
    onClicked = removefromfavorites;
  } else if (buttonType === 'search') {
    onClicked = clicked
  } else {
    onClicked = () => { }
  }

  //Style used in Button
  const ButtonStyle = {
    display: `flex`,
    minWidth: dimension ? `${dimension.width}px` : `100%`,
    minHeight: dimension ? `${dimension.height}px` : `100%`,
    padding: `16px 32px`,
    justifyContent: `center`,
    alignItems: `center`,
    gap: '10px',
    borderRadius: '4px',
    fontFamily: 'Nunito',
    fontSize: '24px',
    fontWeight: '700',
  }

  const orangeTheme = {
    ...ButtonStyle,
    backgroundColor: `#fa6400`,
    color: `#ffffff`,
  }

  const blueTheme = {
    ...ButtonStyle,
    backgroundColor: `#12333A`,
    color: `#ffffff`,
  }

  const style = theme.state.theme === 'orangeTheme' ? orangeTheme : blueTheme;

  return (
    <>
      <button className="" style={style} onClick={onClicked}>{text}</button>
    </>
  )
}
