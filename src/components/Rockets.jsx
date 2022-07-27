/* eslint-disable quotes */
/* eslint-disable arrow-body-style */

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import {
  selectAllRockets,
  fetchRockets,
  reserveRockets,
  cancelRockets,
} from "../redux/rockets/rocketSlice";
import "./Rockets.css";

function Rockets() {
  const dispatch = useDispatch();
  const { data: rockets, status } = useSelector(
    selectAllRockets
  );

  const handleReserveButton = (id) => {
    dispatch(reserveRockets(id));
  };

  const handleCancelButton = (id) => {
    dispatch(cancelRockets(id));
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  return (
    <ListGroup
      className="rocket__container"
      variant="flush"
    >
      {rockets.map((rocket) => {
        return (
          <ListGroup.Item
            key={rocket.id}
            className="mt-5 d-flex"
          >
            <Image
              src={rocket.flickr_images[0]}
              alt="rocket-pic"
              className="rocket__image"
            />
            <div className="mx-4">
              {rocket.reserved ? (
                <Badge bg="success"> Reserved </Badge>
              ) : (
                ""
              )}
              <h2 className="h1">{rocket.rocket_name}</h2>
              <p className="mt-4 lead">
                {rocket.description}
              </p>

              {rocket.reserved ? (
                <Button
                  variant="light"
                  className="btn-lg"
                  onClick={() =>
                    handleCancelButton(rocket.id)
                  }
                >
                  Cancel Reservation
                </Button>
              ) : (
                <Button
                  className="btn-lg"
                  onClick={() =>
                    handleReserveButton(rocket.id)
                  }
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
