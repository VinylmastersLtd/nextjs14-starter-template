"use client";

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

interface GenerateSerialNumbersProps {
  addSerialNumber: (serialNumber: SerialNumber) => void;
}

const GenerateSerialNumbers: React.FC<GenerateSerialNumbersProps> = ({ addSerialNumber }) => {
  const [metaFields, setMetaFields] = useState<MetaField[]>([]);
  const [newMetaField, setNewMetaField] = useState<MetaField>({ name: '', value: '' });

  const handleAddSerialNumber = () => {
    const expiryDate = new Date(); // Modify to add custom expiry date logic
    const newSerialNumber: SerialNumber = {
      id: Date.now().toString(),
      metaFields: metaFields,
      createdAt: new Date(),
      expiryDate: expiryDate,
    };
    addSerialNumber(newSerialNumber);
    setMetaFields([]);
  };

  const addMetaField = () => {
    setMetaFields([...metaFields, newMetaField]);
    setNewMetaField({ name: '', value: '' });
  };

  const handleMetaFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMetaField((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Generate Serial Numbers</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Meta Field Name"
          value={newMetaField.name}
          onChange={handleMetaFieldChange}
        />
        <input
          type="text"
          name="value"
          placeholder="Meta Field Value"
          value={newMetaField.value}
          onChange={handleMetaFieldChange}
        />
        <button onClick={addMetaField}>Add Meta Field</button>
      </div>
      <button onClick={handleAddSerialNumber}>Generate Serial Number</button>
    </div>
  );
};

export default GenerateSerialNumbers;
