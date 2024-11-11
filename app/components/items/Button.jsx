export default function Button() {
  return(
    <div className="flex justify-evenly items-center p-3 sticky bottom-0 bg-black">
      <button className="border-2 border-white rounded w-2/5 p-2 font-bold">
          Buy Now
      </button>
      <button className="border-2 border-white text-black bg-white rounded w-2/5 p-2 font-bold">
          Cart
      </button>
    </div>
    )
}