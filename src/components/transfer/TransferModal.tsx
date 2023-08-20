import { useState, useContext } from "react";
import { Wrapper } from "@/style/transfer/TransferFormStyle";
import TransferForm from "./TransferForm";
import ConfirmMessage from "./ConfirmMessage";
import { SubmitHandler } from "react-hook-form";

export type TransferData = {
  accountNo: string;
  type: "마켓" | "벌금" | "기타" | "월급" | "상금" | "기타";
  amount: number;
  description: string;
};

function TransferModal() {
  const [showConfirmMessage, setShowConfirmMessage] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<SubmitData | null>(null);

  const onSubmit: SubmitHandler<SubmitData> = (data) => {
    console.log(data);
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
          submittedData={submittedData as SubmitData}
          showForm={showForm}
          handleTransfer={handleTransfer}
        />
      )}
    </Wrapper>
  );
}

export default TransferModal;
