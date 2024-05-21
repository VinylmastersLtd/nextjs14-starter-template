"use client"

import React, { useState } from 'react';

interface MetaField {
  key: string;
  value: string;
}

interface SerialNumberFormProps {
  onSubmit: (formData: {
    serialNumber: string;
    orderNumber: string;
    shippedDate: string;
    expiryDate: string;
    metaFields: MetaField[];
  }) => void;
}

const SerialNumberForm: React.FC<SerialNumberFormProps> = ({ onSubmit }) => {
  const [serialNumber, setSerialNumber] = useState<string>('');
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [shippedDate, setShippedDate] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [metaFields, setMetaFields] = useState<MetaField[]>([]);

  const addMetaField = () => {
    setMetaFields([...metaFields, { key: '', value: '' }]);
  };

  const handleMetaFieldChange = (index: number, field: keyof MetaField, value: string) => {
    const newMetaFields = [...metaFields];
    newMetaFields[index][field] = value;
    setMetaFields(newMetaFields);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ serialNumber, orderNumber, shippedDate, expiryDate, metaFields });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Serial Number</label>
        <input type="text" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} required />
      </div>
      <div>
        <label>Order Number</label>
        <input type="text" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} required />
      </div>
      <div>
        <label>Shipped Date</label>
        <input type="date" value={shippedDate} onChange={(e) => setShippedDate(e.target.value)} required />
      </div>
      <div>
        <label>Expiry Date</label>
        <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
      </div>
      <div>
        <label>Meta Fields</label>
        {metaFields.map((metaField, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Key"
              value={metaField.key}
              onChange={(e) => handleMetaFieldChange(index, 'key', e.target.value)}
            />
            <input
              type="text"
              placeholder="Value"
              value={metaField.value}
              onChange={(e) => handleMetaFieldChange(index, 'value', e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={addMetaField}>Add Meta Field</button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SerialNumberForm;