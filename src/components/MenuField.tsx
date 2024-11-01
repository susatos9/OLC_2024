import FoodCardList from './FoodCardList';
import TextThemed from './TextThemed';
import React, { useReducer, useEffect, ChangeEvent } from 'react';
import Button from './Button';

interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType?: string;
}

interface MenuFieldProps {
  type: string;
  text?: string;
  favorites?: Recipe[];
  onAddToFavorites?: (recipe: Recipe) => void;
  onRemoveFromFavorites?: (recipeId: number) => void;
}

type State = {
  searchTerm: string;
  results: Recipe[];
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
  | { type: 'SET_RESULTS'; payload: Recipe[] }
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

const formStyle = {
  display: 'flex',
  minWidth: '500px',
  minHeight: '100%',
  padding: '16px 32px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  fontFamily: 'Nunito',
  fontSize: '24px',
  fontWeight: '700',
  color: 'black',
};

export default function MenuField({ type, text, favorites, onAddToFavorites, onRemoveFromFavorites }: MenuFieldProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'SET_LOADING', payload: true });
  };

  useEffect(() => {
    if (type === 'Add To Favorites' && state.searchTerm) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${state.searchTerm}&apiKey=7411df78ae79487680bfc16df267c75f`
          );
          if (!response.ok) throw new Error('Failed to fetch data');
          const data = await response.json();
          dispatch({ type: 'SET_RESULTS', payload: data.results });
        } catch (error) {
          dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Unknown error' });
        }
      };

      fetchData();
    } else if (type !== 'Add To Favorites') {
      // Use a predefined array for other types
      const defaultRecipes: Recipe[] = [
        {
          id: 1,
          title: 'Sample Dish 1',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          title: 'Sample Dish 2',
          image: 'https://via.placeholder.com/150',
        },
      ];
      dispatch({ type: 'SET_RESULTS', payload: favorites ? favorites : defaultRecipes });
      console.log(favorites);
    }
  }, [state.searchTerm, type]);

  const MenuFieldStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '40px',
    alignSelf: 'stretch',
  };

  return (
    <div style={MenuFieldStyle}>
      {text && <TextThemed text={text} />}
      {type === 'Add To Favorites' ? (
        <form className="flex flex-row gap-10" onSubmit={handleSubmit}>
          <input
            value={state.searchTerm}
            onChange={handleSearch}
            type="text"
            name="search"
            style={formStyle}
            className="search-field:focus search-field:valid search-field:not(:placeholder-shown)"
          />
          <Button text="Search" buttonType="search" />
        </form>
      ) : (
        <p>Showing default dishes</p>
      )}
      <FoodCardList
        type={type}
        data={state.results.map(recipe => ({ ...recipe, imageType: 'default' }))}
        onAddToFavorites={onAddToFavorites}
        onRemoveFromFavorites={onRemoveFromFavorites}
      />
    </div>
  );
}
