/* eslint-disable object-curly-newline */
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function MyProfile() {
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
