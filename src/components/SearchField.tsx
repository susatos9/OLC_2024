import Button from './Button';
import type { MainData } from '../context/ThemeContext';
import '../components/CSS/SearchField.css';


export default function SearchField() {
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
  let onSubmit = () => { }
  return (
    <>
      <form onSubmit={onSubmit} className='flex flex-row gap-10'>
        <input type="text" name="search" style={style} className='search-field:focus' />
        <Button text="Search" buttonType="search" />
      </form>
    </>
  )
}



