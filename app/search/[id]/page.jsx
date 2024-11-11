"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Navbar from "../../components/search/Navbar.jsx";
import Card from "../../components/search/Card.jsx";

export default function Page() {
  let { id } = useParams();
  let [data, setData] = useState("loading");
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        const filteredData = res.data.filter(item => 
          new RegExp(`\\b${id}\\b`, 'i').test(item.title)
        );
        setData(filteredData);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setData([]); // Handle error case
      });
  }, [id]); // Add id as a dependency

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div>
      <Navbar />
      {/*list item*/}
      <div className="bg-white text-black mt-2 grid grid-cols-2 p-2 gap-2">
        {
        data == "loading" ? <div>Loading...</div> :
          data.length === 0 ? (
            <div>Data tidak ada</div>
          ) : (
            data.map((item, i) => (
              <Card 
                key={i} 
                image={item?.image} 
                title={item.title} 
                price={numberWithCommas(parseInt(item.price) * 16000)} 
                link={`/${item.category.replace(" ", "_")}/${item.id}`}
              />
            ))
          )
        }
      </div>
    </div>
  );
}