import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TableHead from './TableHead';

const TableDiv = styled.div`
  width: 598px;
`;
const TableBody = styled.div`
  height: 450px;
  overflow-y: scroll;
`;
const TableItem = styled.div`
  display: flex;
  margin-top: 10px;
  padding-bottom: 4px;
  color: rgba(112, 112, 112, 0.8);
  border-bottom: 1px solid rgb(134, 134, 134, 0.3);
`;

function Table() {
  const { list } = useSelector((store) => store.archiveRequests);

  return (
    <TableDiv>
      <TableHead />
      <TableBody>
        {list.map((req) => (
          <TableItem key={req.timestamp}>
            <p style={{
              width: 60,
              textAlign: 'center',
              color: req.side === 'BUY' ? 'rgb(68, 255, 47)' : 'rgb(255, 64, 47)'
            }}
            >{req.side === 'BUY' ? 'Buy' : 'Sell'}
            </p>
            <p style={{ width: 80, textAlign: 'center', }}>{req.price}</p>

            <p style={{ width: 140, textAlign: 'center', }}>{req.instrument}</p>

            <p style={{ width: 120, textAlign: 'center', }}>{req.volume}</p>

            <p style={{ width: 200, textAlign: 'center', }}>{req.timestamp}</p>
          </TableItem>
        ))}
      </TableBody>
    </TableDiv>
  );
}

export default Table;
