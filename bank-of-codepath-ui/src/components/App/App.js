import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import axios from 'axios'


import { useState, useEffect } from "react"

export default function App() {

  const [isFetching, setIsFetching] = useState(false)

  let transactions = {}
  useEffect( () => {
    const fetchData = (async () => {
      transactions = await axios.get('http://localhost:3001/bank/transactions')
      transactions = await transactions.data
      console.log('gettrans: ' , transactions);
    })()
  }, [])

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
    addTrans,
    transactions
  }
  console.log(props);

  return (
    <div className="App">
      <Navbar props={isFetching} props={setIsFetching} />
      <Home {...props} />
    </div>
  )
}
