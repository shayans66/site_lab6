import "./AddTransaction.css"
import { useRef, useState } from "react"

export default function AddTransaction({addTrans}) {

  const [form, setForm] = useState({
    description: '',
    category : '',
    amount: '',

  })
  
  const handleChange = (evt) => {
    const value = evt.target.value
    const name = evt.target.name

    setForm(fData => ({
      ...fData, 
      [name] : value
    }))


    
  }
  
  

  return (
    <div className="AddTransaction">
      <h2>Add Transaction</h2>

      <div className="form">
        <div className="fields">
          <div className="field">
            <label>Description</label>
            <input onChange={handleChange} name="description" value={form.description} type="text" name="description" placeholder="Enter a description..." />
          </div>
          <div className="field">
            <label>Category</label>
            <input onChange={handleChange} name="category" value={form.category} type="text" name="category" placeholder="Enter a category..." />
          </div>
          <div className="field" style={{ flex: 0.5 }}>
            <label>Amount (cents)</label>
            <input onChange={handleChange} name="amount" value={form.amount} type="number" name="amount" />
          </div>

          <button className="btn add-transaction" type="submit" onClick={ () => {
            addTrans(form.description, form.category, form.amount)
          } }>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
