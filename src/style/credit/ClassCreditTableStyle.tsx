import styled from "styled-components";
import { ReactComponent as DetailIcon } from "@/assets/images/DetailIcon.svg";

export const Table = styled.table`
  width: 100%;
  padding: 12px;
`;

export const Thead = styled.thead`
  height: 40px;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  tr {
    border-bottom: 1px solid #d9d9d9;
    th {
      padding: 10px;
      text-align: left;
    }
  }
`;
export const Tbody = styled.tbody`
  height: 40px;
  color: #000;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  tr {
    border-bottom: 1px solid #d9d9d9;

    td {
      text-align: left;
      padding: 10px;
    }
  }
`;

export const StyledDetailIcon = styled(DetailIcon)``;
