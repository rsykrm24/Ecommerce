export default function Search(props) {
  return(
    <div className="flex justify-center">
      <form className="text-black bg-white rounded w-[90%] px-3 py-1 flex justify-between" onSubmit={props.submit}>
        <input type="text" value={props.value} onChange={props.change} className="outline-0"/>
        <button type="submit">Search</button>
      </form>
    </div>
    )
}