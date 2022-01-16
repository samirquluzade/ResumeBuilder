import React from 'react';
import styled from "styled-components";

const CV3 = () => {
    return(
        <ResumeExample>
            <Secs>
                <LeftSec>
                    <LeftImg>
                        <img src="/images/user.svg" alt=""/>
                    </LeftImg>
                    <LeftContact>
                        <Contact>Contact</Contact>
                    </LeftContact>
                </LeftSec>
            </Secs>
        </ResumeExample>
    )
}

const ResumeExample = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 745px;
  padding-top: 1%;
`;
const Secs = styled.div`
  display: flex;
  flex-direction: row;
`;
const LeftSec = styled.div`
  width: 34%;
  background-color: #9d32ad;
  height: 745px;
  display: flex;
  flex-direction: column;
`;
const LeftImg = styled.div`
  img{
    height: 258px;
  }
  width: 100%;
`;
const LeftContact = styled.div`
  
`;
const Contact = styled.h4`
    letter-spacing: 10px;
    color:#ffffff;
    text-transform: uppercase;
`;
export default CV3;