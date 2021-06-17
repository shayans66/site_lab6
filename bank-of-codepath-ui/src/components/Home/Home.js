import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"

// export default function Home(props) {
//   console.log('homeprops: ',props);
//   return (
//     <div className="Home">
//       <AddTransaction />
//       <BankActivity />
//     </div>
//   )
// }

export default function Home({ transactions, transfers, isFetching }) {
  console.log('proptrans: ', transactions);
  return (
    <div className="Home">
      <AddTransaction />
      <BankActivity transactions={transactions} transfers={transfers} isFetching={isFetching}/>
    </div>
  )
}
