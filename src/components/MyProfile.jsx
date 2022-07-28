/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-closing-bracket-location */
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function MyProfile() {
  const reservedMissions = useSelector((state) => {
    return state.missions.data.filter((mission) => {
      return mission.reserved;
    });
  });
  const reservedRockets = useSelector((state) => {
    return state.rockets.data.filter((rocket) => {
      return rocket.reserved;
    });
  });

  return (
    <div>
      <Container style={{ margin: '5rem auto 0 auto' }}>
        <Row>
          <Col className="mx-5">
            <h2
              className="text-muted"
              style={{ fontSize: '2.5rem', fontWeight: '600' }}>
              My Missions
            </h2>
            <ListGroup
              className="pt-3"
              as="ol"
              numbered
              style={{ fontSize: '1.7rem', fontWeight: '500' }}>
              {reservedMissions.map((mission) => (
                <ListGroup.Item
                  className="p-3"
                  as="li"
                  key={mission.mission_id}>
                  {mission.mission_name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col className="ml-3">
            <h2
              className="text-muted"
              style={{ fontSize: '2.5rem', fontWeight: '600' }}>
              My Rockets
            </h2>
            <ListGroup
              className="pt-3"
              as="ol"
              numbered
              style={{ fontSize: '1.7rem', fontWeight: '500' }}>
              {reservedRockets.map((rocket) => (
                <ListGroup.Item className="p-3" key={rocket.id}>
                  {rocket.rocket_name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyProfile;
