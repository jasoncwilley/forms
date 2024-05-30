import React, { useState } from 'react';
import PdfForm from './PdfForm';
import MetadataForm from './MetadataForm';

const FormWrapper = () => {
  const [txId, setTxId] = useState('');

  const handleTransactionComplete = (id) => {
    setTxId(id);
  };

  return (
    <div>
      <PdfForm onTransactionComplete={handleTransactionComplete} />
      <MetadataForm txId={txId} />
    </div>
  );
};

export default FormWrapper;
