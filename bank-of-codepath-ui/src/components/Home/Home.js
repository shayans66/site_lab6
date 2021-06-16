import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"

export default function Home({ addTrans, transactions }) {
  console.log(transactions);
  return (
    <div className="Home">
      <AddTransaction addTrans={addTrans} />
      <BankActivity transactions={transactions}/>
    </div>
  )
}
