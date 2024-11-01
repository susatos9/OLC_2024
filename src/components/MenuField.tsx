import { defaultHead } from 'next/head';
import FoodCardList from './FoodCardList';
import SearchField from './SearchField';
import TextThemed from './TextThemed';
import React, { useReducer, useEffect, ChangeEvent } from 'react';
import Button from './Button';

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



export default function({ type, text }: MenuFieldProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the form from reloading the page
    // Any other code needed when the search button is clicked can go here
    dispatch({ type: 'SET_LOADING', payload: true });
  };

  useEffect(() => {
    if (state.searchTerm === '') {
      dispatch({ type: 'SET_RESULTS', payload: [] });
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${state.searchTerm}&apiKey=7411df78ae79487680bfc16df267c75f`);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        console.log(data.results);
        dispatch({ type: 'SET_RESULTS', payload: data.results });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Unknown error' });
      }
    };

    fetchData();
  }, [state.searchTerm]);

  let MenuFieldStyle = {
    display: 'flex',
    'flex-direction': 'column',
    alignItems: 'center',
    gap: '40px',
    alignSelf: 'stretch',
  };

  if (type === 'Add To Favorites') {
    return (
      <div style={MenuFieldStyle}>
        {text && <TextThemed text={text} />}
        <form className="flex flex-row gap-10" onSubmit={handleSubmit}>
          <input
            value={state.searchTerm}
            onChange={handleSearch}
            type="text"
            name="search"
            style={formstyle}
            className="search-field:focus search-field:valid search-field:not(:placeholder-shown)"
          />
          <Button text="Search" buttonType="search" /> {/* No need for onClick, form submit handles it */}
        </form>
        <FoodCardList type={type} data={state.results} />
      </div>
    );
  }
}
