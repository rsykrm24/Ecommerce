export default function Title(props) {
  return(
    <div className="p-3 bg-white text-black">
      <h1 className="text-xl font-bold">
          Rp. {props.price}</h1>
      <h1 className="text-lg mt-2">{props.title}</h1>
    </div>
    )
}