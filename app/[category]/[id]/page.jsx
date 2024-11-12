"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation"
import Navbar from "../../components/items/Navbar.jsx"
import ImageItems from "../../components/items/ImageItems.jsx"
import Description from "../../components/items/Description.jsx"
import Title from "../../components/items/Title.jsx"
import Button from "../../components/items/Button.jsx"

export default function Page() {
  let { id } = useParams()
  let [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setData(res.data));
  }, []);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div>
      <Navbar/>
      <ImageItems image={data?.image} />
      <Title title={data?.title} price={numberWithCommas(parseInt(data?.price)*16000)} />
      <Description description={data?.description} />
      <Button/>
    </div>
  );
}
