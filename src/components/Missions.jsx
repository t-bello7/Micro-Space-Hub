import React, { useEffect, useState } from 'react';
import axios from 'axios';
/* eslint-disable object-curly-newline */
import { Badge, Button, Container, Table } from 'react-bootstrap';

function Missions() {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const fetchMissions = async () => {
      const { data } = await axios('https://api.spacexdata.com/v3/missions');

      setMissions(data);
      console.log(data);
    };
    fetchMissions();
  }, [setMissions]);

  /* eslint-disable jsx-a11y/control-has-associated-label */
  /* eslint-disable react/jsx-closing-bracket-location */
  return (
    <div>
      <Container>
        <Table
          striped
          bordered
          hover
          className="my-5"
          style={{ fontSize: '1.5rem' }}>
          <thead>
            <tr className="font-weight-bold">
              <th className="p-3">Mission</th>
              <th className="p-3">Description</th>
              <th className="p-3">Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td className="p-4" style={{ fontWeight: 'bold' }}>
                  {mission.mission_name}
                </td>
                <td className="align-middle py-4 px-3">
                  {mission.description}
                </td>
                <td
                  className="px-5 align-middle"
                  style={{ width: '200px', textAlign: 'center' }}>
                  <Badge
                    bg="secondary"
                    style={{
                      fontSize: '1.15rem',
                      padding: '0.75rem 1rem',
                    }}>
                    NOT A MEMBER
                  </Badge>
                </td>
                <td
                  className="px-5 align-middle"
                  style={{ width: '200px', textAlign: 'center' }}>
                  <Button
                    variant="outline-secondary btn-lg"
                    style={{
                      fontWeight: '600',
                      fontSize: '1.3rem',
                      padding: '0.75rem 1rem',
                    }}>
                    Join Mission
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Missions;
