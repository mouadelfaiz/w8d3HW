import { useDebugValue } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data"


const Stocks = () => {
  const params = useParams();
  const symbol = params.symbol;
  console.log(symbol)
  const [stock, setStock] = useState("null");
  const selectStock = data.find((el) => {
    return el.symbol === symbol;
  })
  return (
    <div>
      <h1>Name: {selectStock.name}</h1>
      <h1>price: {selectStock.lastPrice}</h1>
    </div>
  )
};

export default Stocks;