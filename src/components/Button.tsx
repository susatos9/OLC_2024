export default function Button({ theme, text }: { theme: string, text: string }) {

  const orangeTheme = {
    display: `flex`,
    minWidth: `150px`,
    padding: `16px 32px`,
    justifyContent: `center`,
    alignItems: `center`,
    gap: '10px',
    backgroundColor: `#fa6400`,
    color: `#ffffff`,
  }

  const blueTheme = {
    display: `flex`,
    minWidth: `150px`,
    padding: `16px 32px`,
    justifyContent: `center`,
    alignItems: `center`,
    gap: '10px',
    backgroundColor: `#12333A`,
    color: `#12333A`,
  }

  const style = theme === 'orangeTheme' ? orangeTheme : blueTheme;

  return (
    <>
      <div className="" style={style}>{text}</div>
    </>
  )
}
