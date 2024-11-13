import Link from "next/link"

export default function Navbar(props) {
  return(
    <nav className="flex justify-between items-center p-3 sticky top-0 bg-black">
      <Link href={props.back}>back</Link>
      <div className="flex items-center gap-3">
        <Link href={props.cart}>cart</Link>
      </div>
    </nav>
    )
}