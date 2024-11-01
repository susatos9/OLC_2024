
// @ts-nocheck
import { createContext, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType?: string;
}


interface ButtonProps {
  dimension?: { width?: number; height?: number };
  buttonType?: string;
  text?: string;
  clicked?: any;
  onAddToFavorites?: any;
  onRemoveFromFavorites?: any;
}

//Optional arguments should be passed by a single object

export default function Button({ dimension = {}, buttonType, text, clicked, onAddToFavorites }: ButtonProps) {
  const theme = useContext(ThemeContext);

  //Determine the button type and set the variable accordingly
  let onClicked;
  if (buttonType === 'changetheme') {
    let text = ''
    onClicked = () => {
      let mutatedMyInput = { ...theme.state, theme: theme.state.theme === 'orangeTheme' ? 'blueTheme' : 'orangeTheme' }; //Create new Object using spread operator so react detect pointer change
      theme.setState(mutatedMyInput);
    };
  } else if (buttonType === 'addtofavorites') {
    onClicked = () => { }
  } else if (buttonType === 'removefromfavorites') {
    onClicked = () => { }
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
