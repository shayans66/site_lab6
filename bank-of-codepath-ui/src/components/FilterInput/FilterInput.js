import "./FilterInput.css"

export default function FilterInput({ filterInputValue, setFilterInputValue }) {

  function handleOnChange(e){
    setFilterInputValue(e.target.value)
  }

  return (
    <div className="FilterInput">
      <i className="material-icons">search</i>
      <input type="text" placeholder={"Search transactions"} onChange={handleOnChange} />
    </div>
  )
}
