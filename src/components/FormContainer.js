import React, { useState } from 'react';
import PdfForm from './PdfForm';
import MetadataForm from './JsonForm';

const FormContainer = () => {
  const [txId, setTxId] = useState('');

  const handleTransactionComplete = (newTxId) => {
    setTxId(newTxId);
  };

  return (
    <div>
      <PdfForm onTransactionComplete={handleTransactionComplete} />
      <MetadataForm txId={txId} />
    </div>
  );
};

export default FormContainer;

