import Button from './Button';
import type { MainData } from '../context/ThemeContext';


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
  }
  let onSubmit = () => { }
  return (
    <>
      <form onSubmit={onSubmit} className='flex flex-row gap-10'>
        <input type="text" name="search" style={style} />
        <Button text="Search" buttonType="search" />
      </form>
    </>
  )
}
