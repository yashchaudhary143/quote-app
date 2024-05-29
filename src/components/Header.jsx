import React from 'react';

function Header() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }); 

  return (
    
      
        <div className="flex justify-between items-center px-4 py-2 my-8 text-white"> 
          <h1 className="text-6xl font-bold text-blue-600">BOLTCARGO</h1>
          <p className="text-3xl bg-blue-600 p-4">{currentDate}</p> 
        </div>
      
    
  );
}

export default Header;