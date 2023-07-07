import React, { useState } from "react";
import { Wrapper } from "@/style/transfer/TransferFormStyle";
import TransferForm from "./TransferForm";
import ConfirmMessage from "./ConfirmMessage";

function TransferModal() {
  const [submittedData, setSubmittedData] = useState<TransferFormData | null>(
    null
  );

  const handleSubmit = (data) => {
    console.log(data);
    setSubmittedData(data);
  };

  return (
    <Wrapper>
      {!submittedData && <TransferForm onSubmit={handleSubmit} />}
      {submittedData && <ConfirmMessage submittedData={submittedData} />}
    </Wrapper>
  );
}

export default TransferModal;
