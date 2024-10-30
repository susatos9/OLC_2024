interface FoodCardProps {
  image_url: string
  menu_name: string
}
export default function FoodCard(props: FoodCardProps) {
  const style = {
    display: 'flex',
    padding: '24px',
    flexdirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '23px',
    flex: '1 0 0',
  }
  const image = {};

  return (<>
    <div className="w-full h-full flex px-[24px] py-[24px] flex-col-col justify-center items-center" style={style}>
      <div className="h-[278px] items-stretch" style={{}}>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div >
  </>
  )
}
