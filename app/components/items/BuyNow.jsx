export default function BuyNow(props) {
  return(
    <div className={`fixed ${props.bottom} bg-black p-3 flex flex-col gap-4 duration-300`}>
      <div className="flex gap-3">
        <div className="w-1/3">
          <img src={props.image} className="aspect-square"/>
        </div>
        <div className="w-1/2 flex flex-col gap-3">
          <p className="text-lg">{props.title}</p>
          <p className="text-lg font-bold">Rp {props.price}</p>
          <div className="flex justify-between">
            <button onClick={props.decrementItem}>-</button>
            <p>{props.totalItem}</p>
            <button onClick={props.incrementItem}>+</button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button className="border-2 border-white font-bold rounded py-1 w-2/5" onClick={props.cancel}>Cancel</button>
        <button className="bg-white font-bold text-black rounded py-1 w-2/5">Buy Now</button>
      </div>
    </div>
    )
}