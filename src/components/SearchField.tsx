import Button from './Button';
import type { MainData } from '../context/ThemeContext';


export default function SearchField() {
  let onSubmit = () => { }
  return (
    <>
      <form onSubmit={onSubmit} className='flex flex-row'>
        <input type="text" name="search" />
        <Button text="Search" buttonType="search" />
      </form>
    </>
  )
}
