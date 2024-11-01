import { defaultHead } from 'next/head';
import FoodCardList from './FoodCardList';
import SearchField from './SearchField';
import TextThemed from './TextThemed';

interface MenuFieldProps {
  type: string
  text?: string
}

export default function({ type, text }: MenuFieldProps) {

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
        <SearchField />
        <FoodCardList type={type} />
      </div>
    </>
  )
}
