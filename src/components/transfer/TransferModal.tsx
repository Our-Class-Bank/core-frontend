import { useState } from "react";
import { Wrapper } from "@/style/transfer/TransferFormStyle";
import TransferForm from "./TransferForm";
import ConfirmMessage from "./ConfirmMessage";
import { SubmitHandler } from "react-hook-form";

export type FormValues = {
  type: "수입" | "지출";
  amount: number;
  students: string[];
};

function TransferModal() {
  const [showConfirmMessage, setShowConfirmMessage] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setSubmittedData(data);
    setShowConfirmMessage(true);
  };

  const showForm = () => {
    setShowConfirmMessage(false);
    console.log("show Form");
  };

  return (
    <Wrapper>
      {!showConfirmMessage && <TransferForm onSubmit={onSubmit} />}
      {showConfirmMessage && (
        <ConfirmMessage
          onSubmit={onSubmit}
          submittedData={submittedData as FormValues}
          showForm={showForm}
        />
      )}
    </Wrapper>
  );
}

export default TransferModal;
