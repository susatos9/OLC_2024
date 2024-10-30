import type { MainData } from '../app/page.tsx';
import GetProperty from '../utility_function/GetProperty';

type ButtonProps = {
  props: {
    myInput: MainData
    setMyInput: (value: MainData) => void
  }
  width?: number
  height?: number
  buttonType?: string
}

export default function Button({ props: { myInput, setMyInput } }: ButtonProps, width?: number, height?: number, buttonType?: string) {
  const theme = GetProperty(myInput, 'theme');
  const text = GetProperty(myInput, 'text');

  let onClick = () => {
    let mutatedMyInput = { ...myInput, theme: myInput.theme === 'orangeTheme' ? 'blueTheme' : 'orangeTheme' }; //Create new Object using spread operator so react detect pointer change
    setMyInput(mutatedMyInput);
  };

  const ButtonStyle = {
    display: `flex`,
    minWidth: width ? `${width}px` : `100%`,
    minHeight: height ? `${height}px` : `100%`,
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
    color: `#12333A`,
  }

  const style = theme === 'orangeTheme' ? orangeTheme : blueTheme;

  return (
    <>
      <button className="" style={style} onClick={onClick}>{text}</button>
    </>
  )
}
