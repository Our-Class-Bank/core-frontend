import { useState } from "react";
import { Wrapper } from "@/style/transfer/TransferFormStyle";
import TransferForm from "./TransferForm";
import ConfirmMessage from "./ConfirmMessage";
function TransferModal() {
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const [submittedData, setSubmittedData] = useState<TransferFormData | null>(
    null
  );

  const handleSubmit = (data) => {
    setSubmittedData(data);
    setShowConfirmMessage(true);
  };

  const showForm = () => {
    setShowConfirmMessage(false);
    console.log("show FOrm");
  };

  return (
    <Wrapper>
      {!showConfirmMessage && (
        <TransferForm onSubmit={handleSubmit} submittedData={submittedData} />
      )}
      {showConfirmMessage && (
        <ConfirmMessage submittedData={submittedData} showForm={showForm} />
      )}
    </Wrapper>
  );
}

export default TransferModal;
