export default function FoodCard(props: Object) {
  const style = {};
  const image = {};

  return (<>
    <div className="w-full h-full flex px-[24px] py-[24px] flex-col-col justify-center items-center" style={style}>
      <div className="h-[278px] items-stretch" style={{ backgroundImage: `url(${image})` }}>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div >
  </>
  )
}
