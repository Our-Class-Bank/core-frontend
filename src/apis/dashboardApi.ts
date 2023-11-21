import axios from "axios";

export async function getUserCount() {
  const response = await axios.get(
    `${import.meta.env.VITE_SERVER_IP}/util/api/v1/dashboard/user-count`
  );
  return response;
}

export async function getRoles() {
  const response = await axios.get(
    `${import.meta.env.VITE_SERVER_IP}/util/api/v1/dashboard/role`
  );
  return response;
}

export async function getCreditEvaluationCount() {
  const response = await axios.get(
    `${
      import.meta.env.VITE_SERVER_IP
    }/util/api/v1/dashboard/credit-evaluation-count`
  );
  return response;
}

export async function getAccountHistoryCount() {
  const response = await axios.get(
    `${
      import.meta.env.VITE_SERVER_IP
    }/util/api/v1/dashboard/account-history-count`
  );
  return response;
}
export async function postDemoLogin(demoUserType: string) {
  const requestData = {
    demoUserType: demoUserType,
  };

  const response = await axios.post(
    `${import.meta.env.VITE_SERVER_IP}/api/v1/auth/signin/demo`,
    requestData
  );

  return response;
}
