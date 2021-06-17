import "./FilterInput.css"

export default function FilterInput({ filterInputValue }) {

  

  return (
    <div className="FilterInput">
      <i className="material-icons">search</i>
      <input type="text" placeholder={"Search transactions"} />
    </div>
  )
}
