export default function Page() {
  return(
    <div>
      {/*navbar*/}
      <nav className="flex p-2 items-center justify-between">
        <div>Back</div>
      </nav>
      {/*bg white*/}
      <div className="bg-white text-black">
        {/*card*/}
        <div className="flex justify-between items-center p-3">
          <div className='flex items-center gap-2'>
            <div>image</div>
            <div>
              <h1>title</h1>
              <p>1x Rp. harga</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button>-</button>
            <p>0</p>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
    )
}