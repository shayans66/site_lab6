import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import { useState,useEffect } from "react"

export default function App() {

  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState('')
  const [filterInputValue, setFilter] = useState('')
  const [transactions, setTransactions] = useState('')
  const [transfers, setTransfers] = useState('')

  useEffect(
    const func = async () => {
      
    }
  , [])



  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  )
}
