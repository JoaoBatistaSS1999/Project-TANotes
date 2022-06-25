import styled from "styled-components";

export const Container = styled.div`
  max-height: calc(100vh - 60px);
  width: 100%;
  background-color: aliceblue;

  display: flex;
  flex-direction: row;

  .content-container {
    max-height: calc(100vh - 60px);
    width: 100%;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #616161;
    }

    ::-webkit-scrollbar-thumb {
      background: #2b2b2b;
    }
  }

  .contents {
    height: 500vh;
  }
`;
