import { useState } from 'react';
import styled from 'styled-components';

const StyledWatch = styled.div`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color || 'black'};
  font-family: ${(props) => props.fontFamily || 'Arial, Helvetica, sans-serif'}
`;

function Watch(props) {
  const [actualDate, setActualDate] = useState(`
    ${new Date().toLocaleTimeString()}
  `);

  setInterval(() => {
    const date = new Date();

    setActualDate(`
      ${date.toLocaleTimeString()}
    `);
  }, 1000);

  return (
    <StyledWatch {...props}>
      {actualDate}
    </StyledWatch>
  );
}

export default Watch;
