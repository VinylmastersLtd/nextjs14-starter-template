"use client";

// components/ManagePage.tsx
import React, { useState } from 'react';

interface ManagePageProps {
  formId: string;
}

const ManagePage: React.FC<ManagePageProps> = ({ formId }) => {
  const [isPublic, setIsPublic] = useState(false);

  const togglePublic = () => {
    setIsPublic(!isPublic);
  };

  const shareLink = isPublic ? `https://yourapp.com/form/${formId}` : 'Private';

  return (
    <div>
      <button onClick={togglePublic}>
        {isPublic ? 'Set to Private' : 'Set to Public'}
      </button>
      <p>Share Link: {shareLink}</p>
    </div>
  );
};

export default ManagePage;
