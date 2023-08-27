import TransactionList from "@/components/transactionLog/TransactionList";
import { getBankerHistory } from "@/apis/transferApi";
import React, { useState, useEffect } from "react";
import axios from "axios";

function TransferTransactionList() {
  const [history, setHistory] = useState([]);

  const getHistoryData = async () => {
    try {
      const response = await getBankerHistory();
      if (response.status == 200) {
        setHistory(response.data);
      }
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
    } finally {
      console.log(history);
    }
  };

  useEffect(() => {
    getHistoryData;
  }, []);

  return (
    <>
      <TransactionList history={history} />
    </>
  );
}

export default TransferTransactionList;
