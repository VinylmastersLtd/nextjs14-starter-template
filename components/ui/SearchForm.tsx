"use client";

// components/SearchForm.tsx
import React, { useState } from 'react';

interface MetaField {
  name: string;
  value: string;
}

interface SerialNumber {
  id: string;
  metaFields: MetaField[];
  createdAt: Date;
  expiryDate: Date;
}

interface SearchFormProps {
  serialNumbers: SerialNumber[];
}

const SearchForm: React.FC<SearchFormProps> = ({ serialNumbers }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState<SerialNumber | null>(null);

  const handleSearch = () => {
    const found = serialNumbers.find((serial) => serial.id === searchTerm);
    setResult(found || null);
  };

  return (
    <div>
      <h2>Search Form</h2>
      <input
        type="text"
        placeholder="Enter Serial Number"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {result ? (
        <div>
          <h3>Serial Number: {result.id}</h3>
          <ul>
            {result.metaFields.map((field, index) => (
              <li key={index}>{`${field.name}: ${field.value}`}</li>
            ))}
          </ul>
          <p>Expiry Date: {result.expiryDate.toDateString()}</p>
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchForm;
