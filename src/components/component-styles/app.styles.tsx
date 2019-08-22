import { createGlobalStyle } from "styled-components";

export const AppGlobalStyle = createGlobalStyle` 
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .page {
    margin: 20px;
  }
  .pageNumber {
    margin: 0 auto 15px auto;
    color: #5d9adc;
  }
  .interactions {
    text-align: center;
  }
  
  .table {
    margin: 20px 0;
  }
  
  .table-header {
    display:flex;
    line-height: 24px;
    font-size: 16px;
    padding: 0 16px;
    justify-content: space-between;
  }
  
  .table-empty {
    margin: 200px;
    text-align: center;
    font-size: 16px;
  }
  
  .table-row {
    display:flex;
    line-height: 24px;
    white-space: nowrap;
    margin: 10px 0;
    padding: 10px;
    background: #fff;
    border: 1px solid #e3e3e3;
  }
  
  .table-header > span {
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 5px;
  }
  
  .table-row > span {
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 5px;
  }
  
  .button-inline {
    border-width: 0;
    background: transparent;
    color: inherit;
    text-align: inherit;
    -webkit-font-smoothing: inherit;
    padding: 0;
    font-size: inherit;
    cursor: pointer;
  }
  
  .button-active {
    border-radius: 0;
    border-bottom: 1px solid #38BB6C;
  }
  .button-more {
    margin: 0 auto;
  }
  
  label {
    margin-right: 10px;
  }
`;
