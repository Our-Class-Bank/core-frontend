const isSameDay = (target1: Date, target2: Date) => {
  return (
    target1.getFullYear() === target2.getFullYear() &&
    target1.getMonth() === target2.getMonth() &&
    target1.getDate() === target2.getDate()
  );
};

export const getDate = (timeStamp: string) => {
  const dayList = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  const transactionDate = new Date(timeStamp);
  const month = transactionDate.getMonth() + 1;
  const date = transactionDate.getDate();
  const day = dayList[transactionDate.getDay()];
  const today = new Date();
  const fullDate = `${month}월 ${date}일 ${day}`;

  if (isSameDay(today, transactionDate)) return "오늘";

  return fullDate;
};
