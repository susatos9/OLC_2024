import type { MainData } from '../app/page.tsx';
import GetProperty from '../utility_function/GetProperty';

type TextThemedPropsInput = {
  myInput: MainData
  text: string
}
export default function TextThemed({ myInput, text }: TextThemedPropsInput) {
  const theme = GetProperty(myInput, 'theme');
  const textThemeStyle = {
    TextAlign: 'center',
    /* Display lg/Bold */
    fontFamily: 'Nunito',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '60px', /* 125% */
    letterSpacing: '-0.96px',
    color: theme === 'orangeTheme' ? '#fa6400' : '#12333A',
  }
  return (
    <>
      <div className="" style={textThemeStyle}>
        <p className="" style={{}}>{text}</p>
      </div >
    </>
  )
}
