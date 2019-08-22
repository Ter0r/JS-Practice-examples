import React from "react";
import styled from "styled-components";

export const EmptyPage = () => (
  <EmptyWrapper>
    <div className="container-empty">
      <h1 className="title-empty">Nothing to show</h1>
      <p className="text-empty">Try searching for a different name</p>
    </div>
  </EmptyWrapper>
);

const EmptyWrapper = styled.div`
  .container-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: cadetblue;
    margin-top: 20vh;
  }
  .title-empty {
    color: #3faf62;
  }
`;
