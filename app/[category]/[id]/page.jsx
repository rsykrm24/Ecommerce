"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation"
import Navbar from "../../components/items/Navbar.jsx"
import ImageItems from "../../components/items/ImageItems.jsx"
import Description from "../../components/items/Description.jsx"
import Title from "../../components/items/Title.jsx"
import Button from "../../components/items/Button.jsx"
import BuyNow from "../../components/items/BuyNow.jsx"

export default function Page() {
  let { id } = useParams()
  let [data, setData] = useState("");
  let [bottom,setBottom] = useState("bottom-[-1000px]")
  let [totalItem,setTotalItem] = useState(1)
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setData(res.data));
  }, []);
  function buyNowState() {
    if(bottom == "bottom-[-1000px]") {
      setBottom("bottom-0")
    }
    else {
      setBottom("bottom-[-1000px]")
    }
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div>
      <Navbar back={(bottom == "bottom-[-1000px]") ? "/" : ""} cart={(bottom == "bottom-[-1000px]") ? "/cart" : ""} />
      <ImageItems image={data?.image} />
      <Title title={data?.title} price={numberWithCommas(parseInt(data?.price)*16000)} />
      <Description description={data?.description} />
      <Button buyNow={() => buyNowState()}/>
      <BuyNow image={data.image} title={data.title} price={numberWithCommas(parseInt(data?.price)*16000*totalItem)} bottom={bottom} cancel={() => buyNowState()} totalItem={totalItem} incrementItem={() => setTotalItem(totalItem+=1)} decrementItem={() => (totalItem == 1) ? setTotalItem(1) : setTotalItem(totalItem-=1)}/>
    </div>
  );
}
