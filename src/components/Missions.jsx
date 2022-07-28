import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Badge, Button, Container, Table } from 'react-bootstrap';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missionsSlice';

function Missions() {
  const { data: missions, status } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, []);

  /* eslint-disable jsx-a11y/control-has-associated-label */
  /* eslint-disable react/jsx-closing-bracket-location */
  return (
    <div>
      <Container style={{ marginTop: '11.5rem', paddingBottom: '2rem' }}>
        <Table
          striped
          bordered
          hover
          className="my-5"
          style={{ fontSize: '1.5rem' }}>
          <thead>
            <tr className="font-weight-bold">
              <th className="p-3" style={{ fontSize: '1.6rem' }}>
                Mission
              </th>
              <th className="p-3" style={{ fontSize: '1.6rem' }}>
                Description
              </th>
              <th className="p-3" style={{ fontSize: '1.6rem' }}>
                Status
              </th>
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
                  style={{
                    width: '200px',
                    textAlign: 'center',
                  }}>
                  {!mission.reserved ? (
                    <Badge
                      bg="secondary"
                      style={{
                        fontSize: '1.15rem',
                        padding: '0.75rem 1rem',
                      }}>
                      NOT A MEMBER
                    </Badge>
                  ) : (
                    <Badge
                      bg="success"
                      style={{
                        fontSize: '1.15rem',
                        padding: '0.75rem 1rem',
                      }}>
                      ACTIVE MEMBER
                    </Badge>
                  )}
                </td>
                <td
                  className="px-5 align-middle"
                  style={{
                    width: '200px',
                    textAlign: 'center',
                  }}>
                  {!mission.reserved ? (
                    <Button
                      variant="outline-secondary btn-lg"
                      style={{
                        fontWeight: '600',
                        fontSize: '1.3rem',
                        padding: '0.75rem 1rem',
                        '&:active, &:focus': {
                          outline: 'none',
                          border: 'none',
                          backgroundColor: 'none',
                        },
                      }}
                      onClick={() => {
                        dispatch(joinMission(mission.mission_id));
                      }}>
                      Join Mission
                    </Button>
                  ) : (
                    <Button
                      variant="outline-danger btn-lg"
                      style={{
                        fontWeight: '600',
                        fontSize: '1.3rem',
                        padding: '0.75rem 1rem',
                      }}
                      onClick={() => {
                        dispatch(leaveMission(mission.mission_id));
                      }}>
                      Leave Mission
                    </Button>
                  )}
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
