import styled from "styled-components";

const StyledTh = styled.th`
  background: #eff4f5;
  padding: 8px;
  font-size: 12px;
  color: #8f80ba;

  &:first-child {
    border-top-left-radius: 0px;
    border-bottom-right-radius: 0px;
    padding-left: 16px;
  }

  &:last-child {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    padding-right: 16px;
  }
`;

export default StyledTh;
