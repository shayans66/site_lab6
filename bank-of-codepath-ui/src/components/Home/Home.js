import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"



export default function Home({ transactions, transfers, isFetching, filterInputValue, setFilterInputValue }) {
  // console.log('proptrans: ', transactions);

  let filteredTransactions = []
  if( filterInputValue === '' ){
    filteredTransactions = transactions
  }else{
    transactions.forEach(el => {
      if( el.description.toLowerCase().includes(filterInputValue.toLowerCase()) ){
        filteredTransactions.push(el)
      }
    });
  }
    
  

  return (
    <div className="Home">
      <AddTransaction />
      {/* <BankActivity transactions={transactions} transfers={transfers} isFetching={isFetching}/> */}
      <BankActivity transactions={filteredTransactions} transfers={transfers} isFetching={isFetching}/>
    </div>
  )
}
