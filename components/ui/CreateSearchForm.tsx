"use client";

// components/CreateSearchForm.tsx
import React, { useState } from 'react';

interface Field {
  name: string;
  type: string;
}

const CreateSearchForm: React.FC = () => {
  const [fields, setFields] = useState<Field[]>([]);
  const [newField, setNewField] = useState<Field>({ name: '', type: 'text' });

  const addField = () => {
    setFields([...fields, newField]);
    setNewField({ name: '', type: 'text' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewField((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Create Search Form</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Field Name"
          value={newField.name}
          onChange={handleInputChange}
        />
        <select
          name="type"
          value={newField.type}
          onChange={handleInputChange}
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="date">Date</option>
        </select>
        <button onClick={addField}>Add Field</button>
      </div>
      <ul>
        {fields.map((field, index) => (
          <li key={index}>{`${field.name} (${field.type})`}</li>
        ))}
      </ul>
    </div>
  );
};

export default CreateSearchForm;
