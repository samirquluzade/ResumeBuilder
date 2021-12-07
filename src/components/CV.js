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
       email:'',
       job:'',
       employer:'',
       startDate:'',
       endDate:'',
       city:'',
       desc:''
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
            {contact && <Contact handleChange={handleChange} goToExperience={goToExperience} data={data}/>}
            {experience && <Experience handleChange={handleChange} backTo={backTo} data={data}/>}
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
                                <Info>
                                    <i className="fas fa-map-marker-alt">&nbsp;</i>
                                    <span>{data.address}</span>
                                </Info>
                                }
                                {data.phone!=='' &&
                                <Info>
                                    <i className="fas fa-phone-square">&nbsp;</i>
                                    <span>{data.phone}</span>
                                </Info>
                                }
                                {data.phone2!=='' &&
                                <Info>
                                    <i className="fas fa-phone-square">&nbsp;</i>
                                    <span>{data.phone2}</span>
                                </Info>
                                }
                                {data.email!=='' &&
                                <Info>
                                    <i className="fas fa-envelope">&nbsp;</i>
                                    <span>{data.email}</span>
                                </Info>
                                }
                            </Contacts>
                        </Head>
                        <Right>
                            WORK EXPERIENCE
                        </Right>
                        <Experiences>
                            <ExperienceLeft>
                                <Job>
                                {data.job!=='' &&
                                    data.job
                                }
                                </Job>
                                <Employer>
                                {data.employer!=='' &&
                                    data.employer
                                }
                                </Employer>
                                <Date>
                                    {data.startDate!=='' &&
                                        data.startDate + ` / `
                                    }{  data.endDate!=='' &&
                                        data.endDate
                                    }
                                </Date>
                                <Description>
                                    {data.desc!=='' &&
                                        data.desc
                                    }
                                </Description>
                            </ExperienceLeft>
                            <ExperienceRight>
                                <City>
                                    {data.city!=='' &&
                                        data.city
                                    }
                                </City>
                            </ExperienceRight>
                        </Experiences>
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
    height: 722px;
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
    margin: 15% 10% 2% 5%;
    font-weight: 700;
    &:after{
      content: "";
      display: block;
      width: 400px;
      height: 1px;
      background-color: gray;
    }
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
  span:after{
    content: "";
    display: block;
    width: 135px;
    height: 1px;
    background-color: gray;
  }
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Info = styled.div`
  margin-top: 3%;
`;

const Experiences = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10% 4% 5%;
  font-weight: 500;
`;

const Job = styled.div`
  
`;

const Employer = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const Date = styled.div`
  
`;

const ExperienceLeft = styled.div``;

const ExperienceRight = styled.div``;

const City = styled.div`
  
`;

const Description = styled.div`
    font-size: 10px;
    color:#847C7C;
`;
export default CV;