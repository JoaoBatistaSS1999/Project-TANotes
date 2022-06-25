import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #2b2b2b;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 13px;

  .joke,
  h2 {
    cursor: pointer;
  }
  .joke {
    font-size: 12px;
  }
`;
