import React from 'react';

const Summary = ({ transactions }) => {
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4 style={{ textAlign: 'center', color: 'orange' }}>Your Budget</h4>
      <h1 style={{ textAlign: 'center' }}>${total}</h1>
    </>
  );
};
export default Summary;
