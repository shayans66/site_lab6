import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import { useState,useEffect } from "react"
import axios from 'axios'

export default function App() {

  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState('')
  const [filterInputValue, setFilter] = useState('')
  const [transactions, setTransactions] = useState('')
  const [transfers, setTransfers] = useState('')

  useEffect(
    () => {
      const func = async () => {
        
        try {
          let axTransactions = await axios.get('http://localhost:3001/bank/transactions')
          axTransactions = await axTransactions.data
          let axTransfers = await axios.get('http://localhost:3001/bank/transfers')
          axTransfers = await axTransfers.data

          setTransactions(axTransactions)
          setTransfers(axTransfers)

          console.log(axTransactions);

        }catch(err){
          setError(err)
        }
        
      }
      setIsFetching(false)
      func()
    }
  , [])



  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
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
