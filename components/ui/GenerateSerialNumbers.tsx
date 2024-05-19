"use client";

// components/GenerateSerialNumbers.tsx
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

const GenerateSerialNumbers: React.FC = () => {
  const [serialNumbers, setSerialNumbers] = useState<SerialNumber[]>([]);
  const [metaFields, setMetaFields] = useState<MetaField[]>([]);
  const [newMetaField, setNewMetaField] = useState<MetaField>({ name: '', value: '' });

  const addSerialNumber = () => {
    const expiryDate = new Date(); // Modify to add custom expiry date logic
    const newSerialNumber: SerialNumber = {
      id: Date.now().toString(),
      metaFields: metaFields,
      createdAt: new Date(),
      expiryDate: expiryDate,
    };
    setSerialNumbers([...serialNumbers, newSerialNumber]);
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
      <button onClick={addSerialNumber}>Generate Serial Number</button>
      <ul>
        {serialNumbers.map((serial) => (
          <li key={serial.id}>
            Serial Number: {serial.id}
            <ul>
              {serial.metaFields.map((field, index) => (
                <li key={index}>{`${field.name}: ${field.value}`}</li>
              ))}
            </ul>
            <p>Expiry Date: {serial.expiryDate.toDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenerateSerialNumbers;
