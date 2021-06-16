import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"

import { useState } from "react"

export default function App() {

  const [isFetching, setIsFetching] = useState(false)

  return (
    <div className="App">
      <Navbar props={isFetching} props={setIsFetching} />
      <Home />
    </div>
  )
}
