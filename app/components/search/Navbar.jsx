export default function Navbar() {
  return(
    <nav className="flex justify-between p-3 items-center">
      <div>back</div>
      <form className="flex bg-white w-[60%] rounded px-2 py-1">
        <input type="text" className="w-full"/>
        <button>search</button>
      </form>
      <div>cart</div>
      <div>profile</div>
    </nav>
    )
}