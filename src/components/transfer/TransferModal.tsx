import { useState, useContext } from "react";
import { Wrapper } from "@/style/transfer/TransferFormStyle";
import TransferForm from "./TransferForm";
import ConfirmMessage from "./ConfirmMessage";
import { SubmitHandler } from "react-hook-form";
import { postWithdraw, postDeposit } from "@/apis/transferApi";
import axios from "axios";
import { SubmitData } from "@/components/transfer/TransferForm";
import ClassStudentsContext from "@/store/ClassStudentsContext";

export type TransferData = {
  accountNo: string;
  type: "마켓" | "벌금" | "기타" | "월급" | "상금" | "기타";
  amount: number;
  description: string;
};

function TransferModal() {
  const { students } = useContext(ClassStudentsContext);
  const [showConfirmMessage, setShowConfirmMessage] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<SubmitData | null>(null);

  const onSubmit: SubmitHandler<SubmitData> = (data) => {
    console.log(data);
    setSubmittedData(data);
    setShowConfirmMessage(true);
  };

  const showForm = () => {
    setShowConfirmMessage(false);
    setSubmittedData(null);
  };

  const handleTransfer = async () => {
    if (!submittedData) {
      return;
    }
    const { type, amount, studentNumbers, description, withdrawOrDeposit } =
      submittedData;

    const transfer = withdrawOrDeposit === "지출" ? postWithdraw : postDeposit;

    const makeTransferData = (attendanceNumber: number) => {
      const accountNo = students[attendanceNumber].pocketmoneyAccountNo;
      const transferData: TransferData = {
        accountNo,
        type,
        amount,
        description,
      };
      return transferData;
    };
    try {
      for (let i = 0; i < studentNumbers.length; i++) {
        const data = makeTransferData(i);
        console.log(data);
        await transfer(data);
      }

      setShowConfirmMessage(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 422) {
          alert("");
        }
        if (error.response?.status === 401) {
          alert("");
        } else {
          alert("");
        }
      }
    }
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
