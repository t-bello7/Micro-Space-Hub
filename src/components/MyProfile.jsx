/* eslint-disable object-curly-newline */
import {
  Container,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";
import { useSelector } from "react-redux";

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
  console.log(reservedMissions);
  console.log(reservedRockets);

  return (
    <div>
      <Container className="profile-container">
        <Row>
          <Col>
            <h4>My Profile</h4>
            <ListGroup />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyProfile;
