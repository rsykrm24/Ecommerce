import Link from "next/link"

export default function Navbar() {
  return(
    <nav className="flex p-2 items-center justify-between">
      <h1 className="text-2xl font-bold">ECommerce</h1>
      <Link href="/cart">Cart</Link>
    </nav>
    )
}