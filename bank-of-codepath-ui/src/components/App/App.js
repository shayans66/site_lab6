import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import { useState,useEffect } from "react"
import axios from 'axios'

import TransactionDetail from '../TransactionDetail/TransactionDetail'

import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom"

export default function App() {

  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState('')
  const [filterInputValue, setFilter] = useState('')
  const [transactions, setTransactions] = useState([])
  const [transfers, setTransfers] = useState([])

  function addTransaction(newTrans){
    setTransactions((oldT) => ({...oldT, newTrans}))
  }

  useEffect(
    () => {
      const func = async () => {
        
        try {
          let axTransactions = await axios.get('http://localhost:3001/bank/transactions')
          axTransactions = await axTransactions.data.transactions
          let axTransfers = await axios.get('http://localhost:3001/bank/transfers')
          axTransfers = await axTransfers.data.transfers

          setTransactions(axTransactions)
          setTransfers(axTransfers)

          console.log('axtrans: ',axTransactions);

        }catch(err){
          setError(err)
        }
        
      }
      setIsFetching(false)
      func()
    }
  , [])


  const props = {
    transactions,
    transfers,
    isFetching,
    error,
    filterInputValue,
    transactions,
    transfers,
    addTransaction
  }
  console.log('props: ',props);

  const test = [1,2,3]

  return (
    <BrowserRouter>
      <div className="App">

          <Navbar />
          <Routes>
            <Route path="/transactions/:transactionId" element={<TransactionDetail />} />
            <Route path="/" element={<Home {...props} />}  />
            {/* <Home {...props} /> */}

            {/* <Route path="/" element={<Home />} transactions={transactions} transfers={transfers} /> */}
          </Routes>

      </div>
    </BrowserRouter> 
    
  )
}



// import Navbar from "../Navbar/Navbar"
// import Home from "../Home/Home"
// import "./App.css"
// import axios from 'axios'


// import { useState, useEffect } from "react"

// export default function App() {

//   const [isFetching, setIsFetching] = useState(false)

//   const [transactions, setTransactions] = useState([])
  

  
//   useEffect( () => {
//     const fetchData = (async () => {

//       const t = await axios.get('http://localhost:3001/bank/transactions')
//       // t = await 
//       let tt = await t.data.transactions
//       console.log('tt: ',tt);
//       setTransactions(tt)
      

//       console.log('gettrans: ' , transactions);

//     })
//     fetchData()

//   }, [])

//   async function addTrans(description, category, amount){
//     let res
//     try{
//       res = await axios.post('http://localhost:3001/bank/transactions', 
//         {
//           "transaction" : 
//             {
//                 description,
//               category,
//               amount
//             }
//         }
//       )
//       const data = await res.data
//       console.log(data);
//     }
//     catch(err){
//       console.log(res);
//     }
//   }



//   const props = {
//     addTrans,
//     transactions
//   }
//   console.log('props: ',props);

//   return (
//     <div className="App">
//       <Navbar props={isFetching} props={setIsFetching} />
//       <Home {...props} />
//     </div>
//   )
// }
