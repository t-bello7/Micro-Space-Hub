/* eslint-disable quotes */
/* eslint-disable arrow-body-style */

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { selectAllRockets, fetchRockets } from "../redux/rockets/rocketSlice";
import "./Rockets.css";

function Rockets() {
  const dispatch = useDispatch();
  const { data: rockets, status } = useSelector(selectAllRockets);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  return (
    <ListGroup variant="flush" className="rocket__container">
      {rockets.map((rocket) => {
        return (
          <ListGroup.Item key={rocket.id} className="rocket__item mt-5">
            <Image
              src={rocket.flickr_images[0]}
              alt="rocket-pic"
              className="rocket__image"
            />
            <div>
              <h2 className="h1">{rocket.rocket_name}</h2>
              <p className="mt-4 lead">{rocket.description}</p>

              {rocket.active ? (
                <Button variant="light" className="btn-lg">
                  Cancel Reservation
                </Button>
              ) : (
                <Button className="btn-lg"> Reserve Reservation </Button>
              )}
            </div>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default Rockets;
