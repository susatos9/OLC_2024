import { defaultHead } from 'next/head';
import FoodCardList from './FoodCardList';
import SearchField from './SearchField';
import TextThemed from './TextThemed';
import React, { useReducer, useEffect, ChangeEvent } from 'react';

interface MenuFieldProps {
  type: string
  text?: string
}

type Recipe = {
  id: number;
  title: string;
  image: string;
};

type State = {
  searchTerm: string;
  results: []; // Adjust the type based on the structure of your API response
  loading: boolean;
  error: string | null;
};

const initialState: State = {
  searchTerm: '',
  results: [],
  loading: false,
  error: null,
};

type Action =
  | { type: 'SET_SEARCH_TERM'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_RESULTS'; payload: [] }
  | { type: 'SET_ERROR'; payload: string | null };



// Reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_RESULTS':
      return { ...state, results: action.payload, loading: false, error: null };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default function({ type, text }: MenuFieldProps) {

  const [clicked, setClicked] = React.useState(false);
  const handleClick = () => {
    setClicked(true);
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value });
  };

  useEffect(() => {
    // Don't fetch if searchTerm is empty
    if (state.searchTerm === '') {
      dispatch({ type: 'SET_RESULTS', payload: [] });
      return;
    }

    // Fetch data from the API
    const fetchData = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${state.searchTerm}&apiKey=7411df78ae79487680bfc16df267c75f`);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        console.log(data);
        dispatch({ type: 'SET_RESULTS', payload: data.results });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Unknown error' });
      }
    };

    setClicked(false);

  }, [clicked]);


  let MenuFIeldStyle = {
    display: 'flex',
    'flex-direction': 'column',
    alignItems: 'center',
    gap: '40px',
    alignSelf: 'stretch',
  }

  return (
    <>
      <div style={MenuFIeldStyle}>
        {text ? <TextThemed text={text} /> : <></>}
        <SearchField clicked={handleClick} input={state} dispatch={dispatch} />
        <FoodCardList type={type} data={state.results} />
      </div>
    </>
  )
}
