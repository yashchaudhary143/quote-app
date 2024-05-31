import React, { useState, useEffect } from 'react';
import "../App.css";
import TermsConditions from './TermsConditions';

function DescriptionTable({ tableData, setTableData, formData }) {
  const calculateTotalForRow = (row) => {
    return row.quantity * row.price;
  };

  useEffect(() => {
    const newTableData = tableData.map(row => ({
      ...row,
      total: calculateTotalForRow(row),
    }));
    setTableData(newTableData);
  }, []);

  const handleAddRow = () => {
    setTableData([...tableData, { description: '', quantity: 0, price: 0, total: 0 }]);
  };

  const handleDeleteRow = (index) => {
    const newTableData = tableData.filter((_, i) => i !== index);
    setTableData(newTableData);
  };

  const handleInputChange = (event, index, field) => {
    const newTableData = [...tableData];
    newTableData[index][field] = field === 'quantity' || field === 'price' ? parseFloat(event.target.value) : event.target.value;
    // Update total based on quantity and price if needed
    newTableData[index].total = calculateTotalForRow(newTableData[index]);
    setTableData(newTableData);
  };

  const handleSaveQuote = async () => {
  console.log('tableData:', tableData);

  try {
    const response = await fetch('https://13.127.201.87/quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({items: tableData, ...formData}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    alert('Quote saved successfully!');
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to save the quote.');
  }
};

  const calculateSubtotal = () => {
    return tableData.reduce((acc, row) => acc + row.total, 0);
  };

  return (
    <div className="mt-4">
      <div className="flex flex-col border-t border-l">
        <div className="flex bg-gray-100">
          <div className="flex-1 border-r border-b px-4 py-2">DESCRIPTION</div>
          <div className="flex-1 border-r border-b px-4 py-2">QUANTITY</div>
          <div className="flex-1 border-r border-b px-4 py-2">PRICE</div>
          <div className="flex-1 border-b px-4 py-2">TOTAL</div>
        </div>
        <div className='relative'>

        {tableData.map((row, index) => (
          <div className="flex relative" key={index}>
            <button
      className="absolute left-0 transform -translate-x-full px-2 py-1 text-gray-500"
      onClick={() => handleDeleteRow(index)}
    >
      &#10005; {/* This is a cross symbol */}
    </button>
            <div className="flex-1 border-r border-b px-4 py-2">
              <input
                type="text"
                className="w-full"
                value={row.description}
                onChange={(e) => handleInputChange(e, index, 'description')}
              />
            </div>
            <div className="flex-1 border-r border-b px-4 py-2">
              <input
                type="number"
                className="w-full"
                value={row.quantity}
                onChange={(e) => handleInputChange(e, index, 'quantity')}
              />
            </div>
            <div className="flex-1 border-r border-b px-4 py-2">
              <input
                type="number"
                className="w-full"
                value={row.price}
                onChange={(e) => handleInputChange(e, index, 'price')}
              />
            </div>
            <div className="flex-1 border-b px-4 py-2">{row.total}</div>
            {/* <div className="flex-1 border-b px-4 py-2">
              <button
                className="icon-button bg-red-500 hover:bg-red-700 text-white rounded"
                onClick={() => handleDeleteRow(index)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div> */}
          </div>
        ))}
        <button
    className="absolute left-0 -bottom-8 text-2xl transform -translate-x-full px-2 py-1 text-green-500"
    onClick={handleAddRow}
  >
    +
  </button>
      </div>
      </div>
      
      <div className='flex mt-2 justify-between'>
      <TermsConditions />

      <div className="totals mt-4 text-right">
        <p><strong>SUBTOTAL:</strong> ${calculateSubtotal()}</p>
        <p><strong>TOTAL IN NATIVE CURRENCY:</strong> ${(calculateSubtotal() * 0.2).toFixed(2)}</p>
        <p><strong>Total:</strong> ${(calculateSubtotal() + (calculateSubtotal() * 0.2)).toFixed(2)}</p>
      </div>

      </div>

      {/* <div className="text-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center mx-auto"
          onClick={handleAddRow}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add Row
        </button>
      </div> */}

      <div className="text-center mt-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center mx-auto"
          onClick={handleSaveQuote}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Save Quote
        </button>
      </div>
    </div>
  );
}

export default DescriptionTable;
