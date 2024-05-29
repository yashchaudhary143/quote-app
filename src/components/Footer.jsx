import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-6 flex justify-between">
      <div className="w-1/2">
        <p className="text-gray-300 mb-2 w-full md:w-1/2 lg:w-1/3 mr-2">
          If you have any questions concerning this quotation, please contact Lakshya Singh at <a href="mailto:lakshya.singh@boltcargo.com" className="text-white hover:text-blue-300">lakshya.singh@boltcargo.com</a>
        </p>
        <p className="text-white font-bold">Thank you for your business!</p>
      </div>
      <div className="w-1/2 text-right">
        <h2 className="text-2xl font-bold">BOLTCARGO</h2>
        <p className="text-gray-300 mb-2">
          905, Atrium 2, Chakala, Hanuman Nagar,<br />
          Andheri Kurla Road, Andheri East, Mumbai,<br />
          Maharashtra 400059
        </p>
        <p className="text-gray-300 mb-2">
          Phone: <a href="tel:+1234567890" className="text-white hover:text-blue-300">+123-456-7890</a>
        </p>
        <p className="text-gray-300">
          Website: <a href="http://www.boltcargo.com" className="text-white hover:text-blue-300">www.boltcargo.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
