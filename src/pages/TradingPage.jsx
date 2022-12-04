import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import CurrencyPairSelector from '../components/tradingUi/CurrencyPairSelector';
import ModalVolume from '../components/tradingUi/ModalVolume/ModalVolume';
import SideButtons from '../components/tradingUi/SideButtons/SideButtons';
import Watch from '../components/widgets/Watch';
import { setNavbarState } from '../redux/slices/uiSlices/navbarStateSlice';

const StyledTradingPage = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

function TradingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavbarState(1));
  }, []);

  return (
    <>
      <StyledTradingPage>
        <Watch fontSize="60px" color="rgb(58, 58, 58)" />
        <CurrencyPairSelector />
        <SideButtons />
      </StyledTradingPage>
      <ModalVolume />
    </>
  );
}

export default TradingPage;
