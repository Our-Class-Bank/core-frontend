import { useState } from "react";
import { Wrapper } from "@/style/transfer/TransferFormStyle";
import TransferForm from "./TransferForm";
import ConfirmMessage from "./ConfirmMessage";
import { SubmitHandler } from "react-hook-form";
import { postWithdraw, postDeposit } from "@/apis/transferApi";
import axios from "axios";
import { SubmitData } from "@/components/transfer/TransferForm";
import { useQuery } from "@tanstack/react-query";
import { getMyClassInfo } from "@/apis/infoApi";

export type TransferData = {
  accountNo: string;
  type:
    | "INCOME_SALARY"
    | "INCOME_PRIZE_MONEY"
    | "INCOME_ETC"
    | "EXPENSE_MARKET"
    | "EXPENSE_FINE"
    | "EXPENSE_ETC";
  amount: number;
  description: string;
};

function TransferModal() {
  const { data: myClassData, isLoading: myClassLoading } = useQuery({
    queryKey: ["myClassData"],
    queryFn: getMyClassInfo,
  });
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

    const postTransfer =
      withdrawOrDeposit === "지출" ? postWithdraw : postDeposit;

    const makeTransferData = (attendanceNumber: number) => {
      const accountNo =
        myClassData && myClassData[attendanceNumber].pocketmoneyAccountNo;
      if (!accountNo) {
        return null;
      }
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
        if (data) {
          await postTransfer(data);
        }
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

  if (myClassLoading) {
    return <>Loading...</>;
  }

  return (
    <Wrapper>
      {!showConfirmMessage && <TransferForm onSubmit={onSubmit} />}
      {showConfirmMessage && (
        <ConfirmMessage
          submittedData={submittedData as SubmitData}
          showForm={showForm}
          handleTransfer={handleTransfer}
        />
      )}
    </Wrapper>
  );
}

export default TransferModal;
