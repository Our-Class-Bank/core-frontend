import FormBtn from "@/style/common/FormBtn";
import { useState } from "react";

function StudentBtn({ children, handleClick }) {
  const onClick = (children) => handleClick(children);

  return (
    <>
      <FormBtn onClick={onClick}>{children}</FormBtn>
    </>
  );
}

export default StudentBtn;
