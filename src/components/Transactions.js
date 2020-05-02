import React from 'react';

import { Transaction } from './Transaction';
const Transactions = ({ transactions, deleteTransaction }) => {
  return (
    <div>
      <h3 style={{ textAlign: 'center',color:'orange' }}>Transactions history</h3>
      <ul className='list'>
        {transactions.map((transaction) => (
          <Transaction
            deleteTransaction={deleteTransaction}
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </ul>
    </div>
  );
};
export default Transactions;
