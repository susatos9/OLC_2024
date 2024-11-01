
// @ts-nocheck
import Button from './Button';
import type { MainData } from '../context/ThemeContext';
import '../components/CSS/SearchField.css';
import React, { useReducer, useEffect, ChangeEvent } from 'react';

interface SearchFieldProps {
  type?: string
  text?: string
  clicked?: () => void
  input?: any
  dispatch?: any
}

export default function SearchField({ type, text, clicked, input, dispatch }: SearchFieldProps) {

  const [inputValue, setInputValue] = React.useState('');
  useEffect(() => {
    dispatch(inputValue);
  }, [inputValue, dispatch])

  useEffect(() => {
    if (input && input.searchTerm !== inputValue) {
      dispatch({ ...input, searchTerm: inputValue });
    }
    console.log(input.searchTerm)
  }, [input]);


  const style = {
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
  return (
    <>
      <form className='flex flex-row gap-10'>
        <input value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} type="text" name="search" style={style} className='search-field:focus search-field:valid search-field:not(:placeholder-shown)' />
        <Button text="Search" buttonType="search" clicked={clicked} />
      </form>
    </>
  )
}



