import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TableHead from './TableHead';

const TableBody = styled.div`
  display: flex;
  margin-top: 8px;
  color: rgba(112, 112, 112, 0.8);
`;

function Table() {
  const { list } = useSelector((store) => store.archiveRequests);

  return (
    <div style={{ width: 600 }}>
      <TableHead />
      <div>
        {list.map((req) => (
          <TableBody key={req.timestamp}>
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
          </TableBody>
        ))}
      </div>
    </div>
  );
}

export default Table;
