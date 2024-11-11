export default function Profile(props) {
  return(
    <div className="h-4/5 flex flex-col justify-evenly items-center">
      {/*image*/}
      <div>
        <img src={props.image} alt="Profile" className="rounded-full"/>
      </div>
      {/*name & email*/}
      <div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
      </div>
    </div>
    )
}