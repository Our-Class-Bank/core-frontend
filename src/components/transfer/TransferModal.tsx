import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import TransferForm from "./TransferForm";
import ConfirmMessage from "./ConfirmMessage";
import { getMyClassInfo } from "@/apis/infoApi";
import { StudentInfo } from "@/apis/infoApi";
import { postWithdraw, postDeposit } from "@/apis/transferApi";
import { SubmitData } from "@/components/transfer/TransferForm";

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
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: myClassData, isLoading: myClassLoading } = useQuery<
    Record<string, StudentInfo>
  >({
    queryKey: ["myClassData"],
    queryFn: getMyClassInfo,
  });
  const [showConfirmMessage, setShowConfirmMessage] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<SubmitData | null>(null);

  const onSubmit: SubmitHandler<SubmitData> = (data) => {
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
    const { type, amount, studentIds, description, withdrawOrDeposit } =
      submittedData;

    const postTransfer =
      withdrawOrDeposit === "지출" ? postWithdraw : postDeposit;

    //submittedData를 api에 보내기 적합한 transferData로 변경
    const makeTransferData = (studentId: string) => {
      const accountNo =
        myClassData && myClassData[studentId].pocketmoneyAccountNo;
      console.log(accountNo);
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
      for (let i = 0; i < studentIds.length; i++) {
        const data = makeTransferData(studentIds[i]);
        if (data) {
          await postTransfer(data);
        }
      }

      setShowConfirmMessage(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 422) {
          alert("Error");
        }
        if (error.response?.status === 401) {
          alert("");
        } else {
          alert("");
        }
      }
    } finally {
      setSubmittedData(null);
      queryClient.invalidateQueries({ queryKey: ["bankerLog"] });
      navigate("/transfer");
    }
  };

  if (myClassLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      {!showConfirmMessage && <TransferForm onSubmit={onSubmit} />}
      {showConfirmMessage && (
        <ConfirmMessage
          submittedData={submittedData as SubmitData}
          showForm={showForm}
          handleTransfer={handleTransfer}
        />
      )}
    </>
  );
}

export default TransferModal;
