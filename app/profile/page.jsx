"use client"
import { getSession } from "next-auth/react"
import { useState, useEffect } from "react"
import Navbar from "../components/profile/Navbar.jsx"
import Profile from "../components/profile/Profile.jsx"

export default function Page() {
  let [user, setUser] = useState("")
  useEffect(() => {
    getSession()
    .then(res => setUser(res.user))
  },[])
  return(
    <div className="h-screen">
      <Navbar/>
      {/*Profile*/}
      <div className="bg-white h-[92%] text-black flex justify-center items-center">
        <Profile image={user?.image} name={user?.name} email={user?.email}/>
      </div>
    </div>
    )
}