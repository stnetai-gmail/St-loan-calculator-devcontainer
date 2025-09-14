import React, { useState } from 'react';

export default function App() {
  const [amount, setAmount] = useState(1000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(1);

  const monthlyRate = rate / 100 / 12;
  const months = years * 12;
  const monthlyPayment =
    (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months)) || 0;

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Loan Calculator</h1>
      <label>
        Amount: 
        <input type="number" value={amount} onChange={e => setAmount(+e.target.value)} />
      </label>
      <br />
      <label>
        Interest Rate (%): 
        <input type="number" value={rate} step="0.1" onChange={e => setRate(+e.target.value)} />
      </label>
      <br />
      <label>
        Years: 
        <input type="number" value={years} onChange={e => setYears(+e.target.value)} />
      </label>
      <br />
      <h2>Monthly Payment: {monthlyPayment.toFixed(2)}</h2>
    </div>
  );
}
