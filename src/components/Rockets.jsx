/* eslint-disable quotes */
/* eslint-disable arrow-body-style */

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
// import Badge from 'react-bootstrap/Badge';
import Image from "react-bootstrap/Image";
import { selectAllRockets, fetchRockets, updateActive } from "../redux/rockets/rocketSlice";
import "./Rockets.css";

function Rockets() {
  const dispatch = useDispatch();
  const { data: rockets, status } = useSelector(selectAllRockets);

  const handleReserveButton = (id) => {
    dispatch(updateActive(id));
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  return (
    <ListGroup variant="flush" className="rocket__container">
      {rockets.map((rocket) => {
        return (
          <ListGroup.Item key={rocket.id} className="rocket__item mt-5" variant="flush">
            <Image
              src={rocket.flickr_images[0]}
              alt="rocket-pic"
              className="rocket__image"
            />
            <div>
              <h2 className="h1">{rocket.rocket_name}</h2>
              <p className="mt-4 lead">{rocket.description}</p>

              {rocket.active ? (
                <Button
                  variant="light"
                  className="btn-lg"
                  onClick={() => handleReserveButton(rocket.id)}
                >
                  Cancel Reservation
                </Button>
              ) : (
                <Button
                  className="btn-lg"
                  onClick={() => handleReserveButton(rocket.id)}
                >
                  Reserve Reservation
                </Button>
              )}
            </div>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default Rockets;
