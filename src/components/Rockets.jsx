import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectAllRockets, fetchRockets } from '../redux/rockets/rocketSlice';

function Rockets() {
  const dispatch = useDispatch();
  const { data, status } = useSelector(selectAllRockets);
  console.log(data);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, []);
  return (
    <div>
      <h1>Rockets</h1>
    </div>
  );
}

export default Rockets;
