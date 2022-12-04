import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNavbarState } from '../redux/slices/uiSlices/navbarStateSlice';
import Table from '../components/UiArchivePage/Table';

function ArchivePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavbarState(2));
  }, []);

  return (
    <Table />
  );
}

export default ArchivePage;
