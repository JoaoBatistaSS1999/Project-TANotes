import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  .book-grid {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px 20px;
    flex-wrap: wrap;
  }
`;
