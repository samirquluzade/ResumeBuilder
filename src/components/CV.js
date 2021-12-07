import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import Contact from "./Contact";
import Experience from "./Experience";

const CV = () => {

    const [data,setData] = useState({
       name:'',
       surname:'',
       address:'',
       phone:'',
       phone2:'',
       email:''
    });
    const [contact,setContact] = useState(true);
    const [experience,setExperience] = useState(false);

    const handleChange = e => {
        const {name,value} = e.target;
        setData({...data,[name]:value});
    }

    const goToExperience = () => {
        setExperience(true);
        setContact(false);
    }

    const backTo = e => {
        if(experience){
            setExperience(false);
            setContact(true);
        }
    }

    return(
      <Page>
        <LeftSide>
            {contact && <Contact handleChange={handleChange} goToExperience={goToExperience}/>}
            {experience && <Experience handleChange={handleChange} backTo={backTo}/>}
        </LeftSide>
          <RightSide>
                <ResumeExample>
                    <ResumeLeft>
                        <About>
                            ABOUT ME
                        </About>
                        <About>
                            WEBSITES & SOCIAL LINKS
                        </About>
                        <About>
                            LANGUAGES
                        </About>
                    </ResumeLeft>
                    <ResumeRight>
                        <Head>
                            <FullName>
                                {data.name} <br />
                                {data.surname}
                            </FullName>
                            <Contacts>
                                {data.address!=='' &&
                                <>
                                    <i className="fas fa-map-marker-alt">&nbsp;</i>
                                    <span>{data.address}</span>
                                </>
                                }
                                <br/>
                                {data.phone!=='' &&
                                    <>
                                        <i className="fas fa-phone-square">&nbsp;</i>
                                        <span>{data.phone}</span>
                                    </>
                                }
                                <br />
                                {data.phone2!=='' &&
                                <>
                                    <i className="fas fa-phone-square">&nbsp;</i>
                                    <span>{data.phone2}</span>
                                </>
                                }
                                <br />
                                {data.email!=='' &&
                                <>
                                    <i className="fas fa-envelope">&nbsp;</i>
                                    <span>{data.email}</span>
                                </>
                                }
                            </Contacts>
                        </Head>
                        <Right>
                            WORK EXPERIENCE
                        </Right>
                        <Right>
                            EDUCATION
                        </Right>
                        <Right>
                            SKILLS
                        </Right>
                    </ResumeRight>
                </ResumeExample>
          </RightSide>
      </Page>
    );
};

const Page = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 4%;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 700px;
`;

const RightSide = styled.div`
`;

const ResumeExample = styled.div`
    margin: 2% 5%;
    display: flex;
    flex-direction: row;
    height: 700px;
`;

const ResumeLeft = styled.div`
  width: 200px;
  background-color: #434244;
`;

const About = styled.div`
  color:white;
  margin:40% 0 40% 10%;
  font-size: 12px;
  font-weight: 600;
`;

const Right = styled.div`
    color:#434244;
    margin: 15% 10% 10% 5%;
    font-weight: 600;
`;

const ResumeRight = styled.div`
  background-color: white;
  width: 500px;
`;

const FullName = styled.div`
  margin: 10% 25% 5% 5%;
  font-size: 26px;
  font-weight: 700;
`;

const Contacts = styled.div`
  margin: 10% 1% 5% 5%;
  i{
    font-size: 16px;
  }
  span{
    font-size: 8px;
  }
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default CV;