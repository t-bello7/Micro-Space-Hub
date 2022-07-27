import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectAllRockets, fetchRockets } from "../redux/rockets/rocketSlice";

function Rockets() {
  const dispatch = useDispatch();
  const { data, status } = useSelector(selectAllRockets);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRockets());
    }
  });
  return <div>{data}</div>;
}

export default Rockets;
