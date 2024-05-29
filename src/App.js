import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import DescriptionTable from './components/DescriptionTable';
import TermsConditions from './components/TermsConditions';
import Footer from './components/Footer';

function App() {
  // State to hold all form data
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    validity: '',
    transitTime: '',
    customer: '',
    customerId: '',
    freeTime: '',
    incoterms: '',
    sailing: '',
    commodity: '',
  });

  // Function to handle form input changes
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  // ... other functions for calculations, etc.
  const [tableData, setTableData] = useState([
    { description: 'Ocean Freight', quantity: 5, price: 100, total: 500 },
    { description: 'THC', quantity: 5, price: 100, total: 500 },
    { description: 'Documentation Fee', quantity: 5, price: 100, total: 500 },
    // Add more initial rows if needed
  ]);
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col w-2/3 self-center">
      <Header /> 
      <Form formData={formData} onInputChange={handleInputChange} />
      <DescriptionTable tableData={tableData} setTableData={setTableData} formData={formData}/> 
      {/* <TermsConditions /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;