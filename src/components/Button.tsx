export default function Button({ theme, text }: { theme: string, text: string }) {

  const ButtonStyle = {
    display: `flex`,
    minWidth: `150px`,
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
      <div className="" style={style}>{text}</div>
    </>
  )
}
