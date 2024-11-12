import Link from "next/link"

export default function Navbar(props) {
  return(
    <nav className="flex justify-between p-3 items-center h-[10%] bg-black text-white">
      <Link href="/">back</Link>
      <form className="flex bg-white w-[75%] rounded px-2 py-1 text-black" onSubmit={props.submit}>
        <input type="text" className="w-full outline-0" value={props.search} onChange={props.change}/>
        <button type="submit">search</button>
      </form>
      <Link href="/cart">cart</Link>
    </nav>
    )
}