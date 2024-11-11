import Link from "next/link"

export default function Navbar() {
  return(
    <nav className="flex justify-between items-center p-3 sticky top-0 bg-black">
      <Link href="/">back</Link>
      <div className="flex items-center gap-3">
        <div>cart</div>
        <Link href="/profile">profile</Link>
      </div>
    </nav>
    )
}