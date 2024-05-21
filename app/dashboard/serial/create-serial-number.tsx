import React from 'react';
import SerialNumberForm from '@/components/ui/SerialNumberForm'

SerialNumberForm
const CreateSerialNumber = () => {
  const handleFormSubmit = async (formData: {
    serialNumber: string;
    orderNumber: string;
    shippedDate: string;
    expiryDate: string;
    metaFields: { key: string; value: string }[];
  }) => {
    await fetch('/api/serial-number/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    alert('Serial number created successfully!');
  };

  return (
    <div>
      <h1>Create Serial Number</h1>
      <SerialNumberForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateSerialNumber;