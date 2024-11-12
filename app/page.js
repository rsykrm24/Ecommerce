"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import Navbar from "./components/home/Navbar.jsx"
import Search from "./components/home/Search.jsx"
import Card from "./components/home/Card.jsx"
import AlertSearch from "./components/home/AlertSearch.jsx"

export default function Page() {
  let route = useRouter()
  let [data, setData] = useState("loading")
  let [search, setSearch] = useState("")
  let [alertSearch, setAlertSearch] = useState(false)
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setData(res.data))
  },[])
  function submitSearch(e) {
    e.preventDefault()
    if(search == "") {
      setAlertSearch(true)
    }
    else {
      route.push(`/search/${search.replace(" ")}`)
    }
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return(
    <div className="flex flex-col gap-5">
      <Navbar/>
      <Search value={search} change={(e) => setSearch(e.target.value)} submit={submitSearch}/>
      {alertSearch ? <AlertSearch/> : ""}
      <div className="bg-white text-black mt-2 grid grid-cols-2 p-2 gap-2">
        {
          data=="loading" ? <div>Loading...</div> : data.map((data,i)=> <Card key={i} image={data.image} link={`${data.category.replace(" ","_")}/${data.id}`} title={data.title} price={numberWithCommas(parseInt(data.price) * 16000)} />)
        }
      </div>
    </div>
    )
}