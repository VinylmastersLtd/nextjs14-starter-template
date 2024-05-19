// pages/index.tsx
import React, { useState } from 'react';
import CreateSearchForm from '../components/CreateSearchForm';
import GenerateSerialNumbers from '../components/GenerateSerialNumbers';
import SearchForm from '../components/SearchForm';
import ManagePage from '../components/ManagePage';

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

const HomePage: React.FC = () => {
  const [serialNumbers, setSerialNumbers] = useState<SerialNumber[]>([]);
  const [formId] = useState(Date.now().toString());

  const addSerialNumber = (serialNumber: SerialNumber) => {
    setSerialNumbers([...serialNumbers, serialNumber]);
  };

  return (
    <div>
      <CreateSearchForm />
      <GenerateSerialNumbers />
      <SearchForm serialNumbers={serialNumbers} />
      <ManagePage formId={formId} />
    </div>
  );
};

export default HomePage;
