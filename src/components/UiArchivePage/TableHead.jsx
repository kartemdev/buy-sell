import styled from 'styled-components';

const StyledTableHead = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 5px;
  width: 100%;
  border-bottom: 3px solid rgb(134, 134, 134, 0.25);
  color: rgba(112, 112, 112, 0.8);
`;

function TableHead() {
  return (
    <StyledTableHead>
      <h4 style={{ marginLeft: 16 }}>Side</h4>
      <h4 style={{ marginLeft: 37 }}>Price</h4>
      <h4 style={{ marginLeft: 54 }}>Instrument</h4>
      <h4 style={{ marginLeft: 64 }}>Volume</h4>
      <h4 style={{ marginLeft: 95 }}>Timestamp</h4>
    </StyledTableHead>
  );
}

export default TableHead;
