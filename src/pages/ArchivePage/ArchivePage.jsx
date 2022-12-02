import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNavbarState } from '../../redux/slices/navbarStateSlice';
import Table from './Ui/Table';

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
