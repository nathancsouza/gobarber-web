import React, { useState } from 'react';
import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
  Section,
  Appointment,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Welcome,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Scheduled times</h1>
          <p>
            <span>Today</span>
            <span>Day 6</span>
            <span>Monday</span>
          </p>

          <NextAppointment>
            <strong>Next appointments</strong>
            <div>
              <img
                src="https://avatars1.githubusercontent.com/u/43788440?s=460&u=a551e3f8f46f7f2d2bdeea4e1e1e3d7fba8744e6&v=4"
                alt="Nathan Souza"
              />

              <strong>Nathan Souza</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Morning</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/43788440?s=460&u=a551e3f8f46f7f2d2bdeea4e1e1e3d7fba8744e6&v=4"
                  alt="Nathan Souza"
                />

                <strong>Nathan Souza</strong>
              </div>
            </Appointment>

            <strong>Afternoon</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/43788440?s=460&u=a551e3f8f46f7f2d2bdeea4e1e1e3d7fba8744e6&v=4"
                  alt="Nathan Souza"
                />

                <strong>Nathan Souza</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
