/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-closing-bracket-location */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import {
  selectAllRockets,
  fetchRockets,
  reserveRockets,
  cancelRockets,
} from '../redux/rockets/rocketSlice';
import './Rockets.css';

function Rockets() {
  const dispatch = useDispatch();
  const { data: rockets, status } = useSelector(selectAllRockets);

  const handleReserveButton = (id) => {
    dispatch(reserveRockets(id));
  };

  const handleCancelButton = (id) => {
    dispatch(cancelRockets(id));
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  return (
    <ListGroup className="rocket__container" variant="flush">
      {rockets.map((rocket) => {
        return (
          <ListGroup.Item key={rocket.id} className="mt-5 py-4 d-flex">
            <Image
              src={rocket.flickr_images[0]}
              alt="rocket-pic"
              className="rocket__image"
            />
            <div className="mx-4">
              {rocket.reserved ? (
                <Badge
                  bg="success"
                  style={{
                    fontSize: '1.15rem',
                    padding: '0.5rem 1rem',
                    marginBottom: '0.5rem',
                  }}>
                  Reserved
                </Badge>
              ) : (
                ''
              )}
              <h2 className="h1">{rocket.rocket_name}</h2>
              <p
                className="mt-4 lead"
                style={{ fontSize: '1.4rem', fontWeight: '400' }}>
                {rocket.description}
              </p>

              {rocket.reserved ? (
                <Button
                  variant="outline-danger btn-lg"
                  onClick={() => handleCancelButton(rocket.id)}
                  style={{
                    fontWeight: '600',
                    fontSize: '1.3rem',
                    padding: '0.75rem 1rem',
                  }}>
                  Cancel Reservation
                </Button>
              ) : (
                <Button
                  className="btn-lg"
                  onClick={() => handleReserveButton(rocket.id)}
                  style={{
                    fontWeight: '600',
                    fontSize: '1.3rem',
                    padding: '0.75rem 1rem',
                  }}>
                  Reserve Rocket
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
