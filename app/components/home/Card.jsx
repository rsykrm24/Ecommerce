import Link from "next/link"

export default function Card(props) {
  return(
    <Link href={props.link} className="border-2 border-black rounded p-2 flex flex-col gap-2">
      <img src={props.image} className="aspect-square object-contain"/>
      <h1 className="text-xl font-bold">Rp. {props.price}</h1>
      <h1 className="truncate text-lg">{props.title}</h1>
      <button className="bg-black font-bold text-white rounded">Add to cart</button>
    </Link>
    )
}