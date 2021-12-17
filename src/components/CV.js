import React,{useState} from 'react';
import styled from "styled-components";
import Contact from "./Contact";
import Experience from "./Experience";
import Education from "./Education";

const CV = ({data}) => {

    return(
          <>
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
                                {data[0].name} <br />
                                {data[0].surname}
                            </FullName>
                            <Contacts>
                                {data[0].address!=='' &&
                                <Info>
                                    <i className="fas fa-map-marker-alt">&nbsp;</i>
                                    <span>{data[0].address}</span>
                                </Info>
                                }
                                {data[0].phone!=='' &&
                                <Info>
                                    <i className="fas fa-phone-square">&nbsp;</i>
                                    <span>{data[0].phone}</span>
                                </Info>
                                }
                                {data[0].phone2!=='' &&
                                <Info>
                                    <i className="fas fa-phone-square">&nbsp;</i>
                                    <span>{data[0].phone2}</span>
                                </Info>
                                }
                                {data[0].email!=='' &&
                                <Info>
                                    <i className="fas fa-envelope">&nbsp;</i>
                                    <span>{data[0].email}</span>
                                </Info>
                                }
                            </Contacts>
                        </Head>
                        <Right>
                            WORK EXPERIENCE
                        </Right>
                        {data.map((item,i) => {
                            // console.log(item[i]);
                            return(
                                <Experiences>
                                    <ExperienceLeft>
                                        <Job>
                                            {item.job !== '' && item.job !== '*' &&
                                            item.job
                                            }
                                        </Job>
                                        <Employer>
                                            {item.employer !== '' && item.employer !== '*' &&
                                            item.employer
                                            }
                                        </Employer>
                                        <Date>
                                            {item.startDate !== '' && item.startDate !== '*' &&
                                            item.startDate + ` / `
                                            }{item.endDate !== '' && item.endDate !== '*' &&
                                        item.endDate
                                        }
                                        </Date>
                                        <Description>
                                            {item.desc !== '' && item.desc !== '*' &&
                                            item.desc
                                            }
                                        </Description>
                                    </ExperienceLeft>
                                    <ExperienceRight>
                                        <City>
                                            {item.city !== '' && item.city !== '*' &&
                                            item.city
                                            }
                                        </City>
                                    </ExperienceRight>
                                </Experiences>
                                )})}
                            <Right>
                                EDUCATION
                            </Right>
                            <Experiences>
                            <ExperienceLeft>
                                <Employer>
                                    {data.degree!=='' && data.degree!=='*' &&
                                    data.degree
                                    }
                                </Employer>
                                <Job>
                                    {data.school!=='' && data.school!=='*' &&
                                    data.school + ' - '
                                    } {data.speciality !== '' && data.speciality !== '*' &&
                                data.speciality
                                }
                                </Job>
                                <Date>
                                    {data.graduation!=='' && data.graduation!=='*' &&
                                    data.graduation
                                    }
                                </Date>
                                <Description>
                                    {data.description!=='' && data.description!=='*' &&
                                    data.description
                                    }
                                </Description>
                            </ExperienceLeft>
                            <ExperienceRight>
                                <City>
                                    {data.town!=='' && data.town!=='*' &&
                                    data.town
                                    }
                                </City>
                            </ExperienceRight>
                        </Experiences>
                        <Right>
                            SKILLS
                        </Right>
                    </ResumeRight>
                </ResumeExample>
          </>
    );
};

const ResumeExample = styled.div`
    margin: 2% 5%;
    display: flex;
    flex-direction: row;
    height: 738px;
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