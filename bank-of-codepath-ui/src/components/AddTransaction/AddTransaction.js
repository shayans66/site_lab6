import "./AddTransaction.css"
import { useState } from "react"
import axios from 'axios'

export default function AddTransaction() {

  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    "description": '',
    "category": '',
    "amount": ''
  })

  function handleFormInput(e){
    // console.log('stuph:',({...form}, [e.target.name] , e.target.value));
    setForm( fd => ({ ...fd, [e.target.name] : e.target.value}) )
    console.log(form);
  }
  async function handleFormSubmit(e){
    // console.log('dfjsflksjflksjfslkfd');
    setIsProcessing(true)

    e.preventDefault()
    console.log('form:', {"transcaction" : form});
    
    try{
      let res = await axios.post('http://localhost:3001/bank/transactions', {"transaction" : form})

      res = res.data

      
      setForm({
        "description": '',
        "category": '',
        "amount": ''
      })

    }catch(err){
      setError(err)
    }
    setIsProcessing(false)

  }

  return (
    <div className="AddTransaction">
      <h2>Add Transaction</h2>

      <div className="form">
        <div className="fields">
          <div className="field">
            <label>Description</label>
            <input  value={form.description} onChange={handleFormInput} type="text" name="description" placeholder="Enter a description..." />
          </div>
          <div className="field">
            <label>Category</label>
            <input  value={form.category} onChange={handleFormInput} type="text" name="category" placeholder="Enter a category..." />
          </div>
          <div className="field" style={{ flex: 0.5 }}>
            <label>Amount (cents)</label>
            <input value={form.amount} onChange={handleFormInput} type="number" name="amount" />
          </div>

          <button onClick={handleFormSubmit} className="btn add-transaction" type="submit">
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
