import React, { useState, useEffect } from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import Summary from './components/Summary';
import Performance from './components/Performance';
import Transactions from './components/Transactions';

function App() {
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    const initialState = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(initialState);
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };
  return (
    <>
      <h1 style={{ textAlign: 'center', paddingTop: '2rem' }}>
        Budget Controller
      </h1>
      <div className='container'>
        <Summary transactions={transactions} />
        <Performance transactions={transactions} />
        <Transactions
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
        <AddTransaction addTransaction={addTransaction} />
      </div>
    </>
  );
}

export default App;
