import React, { useState } from 'react';

const Converter = () => {
  const [usdValue, setUsdValue] = useState('');
  const [cedisValue, setCedisValue] = useState('');
  const exchangeRate = 12;

  const handleUsdChange = (event) => {
    const value = event.target.value;
    setUsdValue(value);
    setCedisValue((parseFloat(value) * exchangeRate).toFixed(2));
  };

  const handleCedisChange = (event) => {
    const value = event.target.value;
    setCedisValue(value);
    setUsdValue((parseFloat(value) / exchangeRate).toFixed(2));
  };

  return (
    <div className="Converter">
      <h1>Currency Converter</h1>
      <div>
        <label>USD:</label>
        <input type="number" value={usdValue} onChange={handleUsdChange} />
      </div>
      <div>
        <label>Cedis:</label>
        <input type="number" value={cedisValue} onChange={handleCedisChange} />
      </div>
    </div>
  );
};

export default Converter;
