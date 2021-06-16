import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import axios from 'axios'

import { useState } from "react"

export default function App() {

  const [isFetching, setIsFetching] = useState(false)

  async function addTrans(description, category, amount){
    let res
    try{
      res = await axios.post('http://localhost:3001/bank/transactions', 
        {
          "transaction" : 
            {
                description,
              category,
              amount
            }
        }
      )
      const data = await res.data
      console.log(data);
    }
    catch(err){
      console.log(res);
    }
  }

  const props = {
    addTrans
  }

  return (
    <div className="App">
      <Navbar props={isFetching} props={setIsFetching} />
      <Home {...props} />
    </div>
  )
}
