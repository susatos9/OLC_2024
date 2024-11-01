
// @ts-nocheck
import type { MainData } from '../context/ThemeContext';
import GetProperty from '../utility_function/GetProperty';
import { createContext, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function TextThemed({ text }: { text?: string }) {
  text = text ?? 'default';
  const theme = useContext(ThemeContext);
  const textThemeStyle = {
    TextAlign: 'center',
    /* Display lg/Bold */
    fontFamily: 'Nunito',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '60px', /* 125% */
    letterSpacing: '-0.96px',
    color: theme.state.theme === 'orangeTheme' ? '#fa6400' : '#12333A',
  }
  return (
    <>
      <div className="" style={textThemeStyle}>
        <p className="" style={{}}>{text}</p>
      </div >
    </>
  )
}
