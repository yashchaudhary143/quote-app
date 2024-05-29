import React from 'react';

const formFields = [
  { label: 'From', name: 'from', placeholder: 'Origin' },
  { label: 'To', name: 'to', placeholder: 'Destination' },
  { label: 'Customer', name: 'customer', placeholder: 'Customer Name' },
  { label: 'Free time', name: 'freeTime', placeholder: 'Free Time' },
  { label: 'Customer ID', name: 'customerId', placeholder: 'Customer ID' },
  { label: 'Incoterms', name: 'incoterms', placeholder: 'Incoterms' },
  { label: 'Validity', name: 'validity', placeholder: 'Validity' },
  { label: 'Sailing', name: 'sailing', placeholder: 'Sailing' },
  { label: 'Transit Time', name: 'transitTime', placeholder: 'Transit Time' },
  { label: 'Commodity', name: 'commodity', placeholder: 'Commodity' },
];

function Form({ formData, onInputChange }) {
  return (
    <>
    <h1 className="text-3xl font-bold text-blue-600 my-4">Quote Details</h1>
    <div className="grid grid-cols-2 gap-6 ">
      {formFields.map((field, index) => (
        <div key={index} className="flex flex-row items-center">
          <label htmlFor={field.name} className="text-sm align-middle font-medium text-gray-700 w-2/12">
            {field.label}:
          </label>
      <input
        type="text"
        name={field.name}
        id={field.name}
        value={formData[field.name]}
        onChange={onInputChange}
        placeholder={field.placeholder}
        className="border rounded py-2 px-3 w-10/12 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
  ))}
</div>
  </>
  );
}

export default Form;