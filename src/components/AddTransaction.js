import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      text,
      amount: Number(amount),
    };
    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };
  return (
    <div>
      <h3 style={{textAlign:'center', color:'orange'}}>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text' style={{textAlign:'center'}}>
              Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'> <span className='amount'>
              Amount </span>
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </div>
  );
};
export default AddTransaction;
