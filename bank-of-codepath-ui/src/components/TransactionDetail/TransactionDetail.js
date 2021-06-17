import { formatAmount, formatDate } from "../../utils/format"
import "./TransactionDetail.css"

import { useParams } from "react-router"
import { useState,useEffect } from "react"
import axios from 'axios'



export default function TransactionDetail() {

  const {transactionId} = useParams()

  console.log('transactionId: ',transactionId);


  const [transaction, setTransaction] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const func = async () => {
      setIsLoading(true)


      try{
        let axTransfers = await axios.get('https://localhost:3001/bank/transactions/' + transactionId)
        setTransaction(await axTransfers.data)
        
        console.log('transsss:, ', transaction);

      }catch(err){
        setError(true)
      }

      
      setIsLoading(false)
    }
    func()
  }, transactionId)

  const renderTransactionContent = () => {
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <p className="description">No transaction found</p>

    return (
      <>
        <p className="description">{transaction?.description}</p>
        <div className="meta">
          <p className={`amount ${transaction?.amount < 0 ? "minus" : ""}`}>{formatAmount(transaction?.amount)}</p>
          <p className="date">{formatDate(transaction?.postedAt)}</p>
        </div>
      </>
    )
  }

  return (
    <div className="TransactionDetail">
      <div className="card">
        <div className="title">
          <h3>Transaction #{transactionId}</h3>
          <p className="category">{transaction?.category}</p>
        </div>

        {renderTransactionContent()}
      </div>
    </div>
  )
}
