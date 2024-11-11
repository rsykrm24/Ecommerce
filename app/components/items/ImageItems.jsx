export default function ImageItems(props) {
  return(
    <div className="bg-white border-t-2 border-b-2 p-1">
      <img src={props.image} className="aspect-square object-contain" />
    </div>
    )
}