export default function Description(props) {
  return(
    <div className="p-3 bg-white text-black">
      <h1 className="text-xl font-bold">Description</h1>
      <p className="mt-1">{props.description}</p>
    </div>
    )
}