import React from 'react';
import styled from 'styled-components';

// Styled components
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const StyledTh = styled.th`
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Table = ({ headers, data }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <StyledTh key={index}>{header.label}</StyledTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => (
              <StyledTd key={colIndex}>{row[header.key]}</StyledTd>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
