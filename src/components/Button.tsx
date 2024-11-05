import { useContext, useState, useCallback } from 'react';
import ThemeContext from '../context/ThemeContext';
import FavoritesContextValue from '@/context/FavoritesContext';

interface ButtonProps {
  id?: number;
  dimension?: { width?: number; height?: number };
  buttonType?: string;
  text?: string;
  clicked?: any;
}

export default function Button({ id, dimension = {}, buttonType, text, clicked }: ButtonProps) {
  console.log(id);
  const { state, setState } = useContext(ThemeContext);
  const favoritesContext = useContext(FavoritesContextValue);
  const favoritesState = favoritesContext.state;
  const setFavoritesState = favoritesContext.setState;

  const addtofavorites = useCallback((id: number) => {
    console.log(id);
    const alreadyAdded = state.favorites.find(item => item.id === id);
    const alreadyAddedInFavorites = favoritesState.find(item => item.id === id);
    const selectedItem = state.searchResult.find(item => item.id === id);
    if (selectedItem && !alreadyAdded) {
      const updatedFavorites = [...state.favorites, selectedItem];
      setState({ ...state, favorites: updatedFavorites });
      setFavoritesState([...favoritesState, selectedItem]);
      console.log('Item added to favorites');
    } else {
      console.log('Item not found or alreadyAdded');
    }
  }, [state, setState, favoritesState, setFavoritesState]);

  const removefromfavorites = useCallback((id: number) => {
    console.log(id);
    const selectedItem = state.favorites.find(item => item.id === id);
    if (selectedItem) {
      const updatedFavorites = state.favorites.filter(item => item.id !== id);
      setFavoritesState(favoritesState.filter(item => item.id !== id).length !== 0 ? favoritesState.filter(item => item.id !== id) : [{
        id: 0,
        title: '',
        image: '',
        imageType: '',
      }]);
      setState({ ...state, favorites: updatedFavorites });
      console.log('Item removed from favorites');
    } else {
      console.log('Item not found');
    }
  }, [state, setState, favoritesState, setFavoritesState]);

  const toggleTheme = useCallback(() => {
    const newTheme = state.theme === 'orangeTheme' ? 'blueTheme' : 'orangeTheme';
    setState({ ...state, theme: newTheme });
  }, [state, setState]);

  // Determine the button action based on `buttonType`
  const onClicked = useCallback(() => {
    console.log('button clicked');
    console.log('buttonType is ' + buttonType)
    switch (buttonType) {
      case 'changetheme':
        toggleTheme();
        break;
      case 'Add To Favorites':
        id != null && addtofavorites(id);
        break;
      case 'Remove From Favorites':
        id != null && removefromfavorites(id);
        break;
      case 'search':
        clicked?.(id);
        break;
      default:
        break;
    }
  }, [buttonType, id, clicked, addtofavorites, removefromfavorites, toggleTheme]);

  // Define button styling
  const ButtonStyle = {
    display: 'flex',
    minWidth: dimension.width ? `${dimension.width}px` : 'auto',
    minHeight: dimension.height ? `${dimension.height}px` : 'auto',
    padding: '16px 32px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '4px',
    fontFamily: 'Nunito',
    fontSize: '24px',
    fontWeight: '700',
  };

  const themeStyle = {
    ...ButtonStyle,
    backgroundColor: state.theme === 'orangeTheme' ? '#fa6400' : '#12333A',
    color: '#ffffff',
  };

  return (
    <button style={themeStyle} onClick={onClicked}>
      {text}
    </button>
  );
}
