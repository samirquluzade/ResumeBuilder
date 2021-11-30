import React from 'react';
import styled from 'styled-components';

const MainSection = (props) => {
    return(
        <Section>
          <Inspiration>
              <p>Create the best Resume for yourself</p>
          </Inspiration>
        </Section>
    );
}

const Section = styled.div`
    margin: 6% 8%;
`;

const Inspiration = styled.div`
    text-align: center;
    p{
      font-size: 34px;
    }
`;

export default MainSection;