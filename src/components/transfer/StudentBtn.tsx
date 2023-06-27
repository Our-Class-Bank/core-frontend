import SmallBtn from "@/style/common/SmallBtn";
import { useState } from "react";

function StudentBtn({ children }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    console.log(children);
    setIsActive(!isActive);
  };
  return (
    <>
      <SmallBtn onClick={handleClick} isActive={isActive}>
        {children}
      </SmallBtn>
    </>
  );
}

export default StudentBtn;
