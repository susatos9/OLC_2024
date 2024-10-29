import Button from './Button.jsx';
import type { MainData } from '../app/page.tsx';
export default function SearchBar(props: MainData) {
  const { name, theme, text, image_url } = props;
  return (
    <>
      <div className=""></div>
      <Button theme={theme} text={text} />
    </>
  )
}
