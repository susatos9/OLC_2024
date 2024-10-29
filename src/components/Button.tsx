export default function Button(theme: string, text: string) {

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
    backgroundColor: `#fa6400`,
    color: `#ffffff`,
  }

  const style = theme === 'orangeTheme' ? orangeTheme : blueTheme;

  return (
    <>
      <div className="" style={style}>{text}</div>
    </>
  )
}
