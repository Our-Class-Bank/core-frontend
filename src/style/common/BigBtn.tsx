import Button from "./Button";

const WHITE_COLOR = "#FFF";
const BLUE_COLOR = "#2F3FD4";

const btnDefault = {
  height: "59px",
  width: "530px",
  fontWeight: "600",
  margin: "10px 0px",
};

const BigBtn: React.FC = ({ children, disabled, onClick }) => {
  const buttonStyle = {
    ...btnDefault,
    color: disabled ? BLUE_COLOR : WHITE_COLOR,
    backgroundcolor: disabled ? WHITE_COLOR : BLUE_COLOR,
    border: disabled ? `1px solid ${BLUE_COLOR}` : "none",
  };

  return (
    <Button {...buttonStyle} type="submit" onClick={onClick}>
      {children}
    </Button>
  );
};

export default BigBtn;