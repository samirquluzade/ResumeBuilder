import React,{useState} from 'react';
import styled from "styled-components";
import Contact from "./Contact";
import Experience from "./Experience";
import Education from "./Education";

const CV = ({data,education,skills,about,link}) => {

    return(
          <>
                <ResumeExample>
                    <ResumeLeft>
                        <About>
                            ABOUT ME
                        </About>
                        <LeftSide>
                            {about[0].about}
                        </LeftSide>
                        <About>
                            WEBSITES & SOCIAL LINKS
                        </About>
                            {link.map((item,i) => {
                                return(
                                    <LeftSide>
                                        {item.links!=='' && item.links}
                                    </LeftSide>
                                )
                            })}
                        <About>
                            LANGUAGES
                        </About>
                        {about.map((item) => {
                            return(
                                <>
                                    <LeftSide>
                                        {item.langName!=='' && item.langName}
                                    </LeftSide>
                                    {item.langName !== '' &&
                                        <LeftSide>
                                            <LevelPercent>
                                                <SkillPercent style={{width: item.langLevel + '%'}}/>
                                            </LevelPercent>
                                         </LeftSide>
                                    }
                                </>
                            )
                        })}
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
                        {education.map((item,i) => {
                            return(
                                    <Experiences>
                                        <ExperienceLeft>
                                        <Employer>
                                    {item.degree!=='' && item.degree!=='*' &&
                                        item.degree
                                    }
                                        </Employer>
                                        <Job>
                                    {item.school!=='' && item.school!=='*' &&
                                        item.school + ' - '
                                    } {item.speciality !== '' && item.speciality !== '*' &&
                                        item.speciality
                                    }
                                        </Job>
                                        <Date>
                                    {item.graduation!=='' && item.graduation!=='*' &&
                                        item.graduation
                                    }
                                        </Date>
                                        <Description>
                                    {item.description!=='' && item.description!=='*' &&
                                        item.description
                                    }
                                        </Description>
                                        </ExperienceLeft>
                                        <ExperienceRight>
                                        <City>
                                    {item.town!=='' && item.town!=='*' &&
                                        item.town
                                    }
                                        </City>
                                        </ExperienceRight>
                                    </Experiences>
                                    )
                        })}
                        <Right>
                            SKILLS
                        </Right>
                        {skills.map((item,i) => {
                            return(
                                <Experiences>
                                    <ExperienceLeft>
                                        <Employer>
                                            {item.skill!=='' &&
                                            item.skill
                                            }
                                        </Employer>
                                    </ExperienceLeft>
                                    <ExperienceRight>
                                        <City>
                                            {item.skill !== '' && (
                                            <LevelPercent>
                                                 <SkillPercent style={{width: item.level + '%'}}/>
                                            </LevelPercent>
                                            )}
                                        </City>
                                    </ExperienceRight>
                                </Experiences>
                            )
                        })}
                    </ResumeRight>
                </ResumeExample>
          </>
    );
};

const ResumeExample = styled.div`
    margin: 0.5% 5%;
    display: flex;
    flex-direction: row;
    height: 745px;
`;

const ResumeLeft = styled.div`
  width: 200px;
  background-color: #434244;
`;

const About = styled.div`
  color:white;  
  margin:40% 0 5% 10%;
  font-size: 12px;
  font-weight: 600;
`;

const Right = styled.div`
    color:#434244;
    margin: 3% 10% 2% 5%;
    font-weight: 700;
    &:after{
      content: "";
      display: block;
      width: 425px;
      height: 1px;
      background-color: gray;
    }
`;

const ResumeRight = styled.div`
  background-color: white;
  width: 500px;
`;

const FullName = styled.div`
  margin: 5% 25% 1% 5%;
  font-size: 26px;
  font-weight: 700;
`;

const Contacts = styled.div`
  margin: 5% 1% 5% 5%;
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
  align-items: center;
  margin: 0 10% 2% 5%;
  font-weight: 500;
`;

const Job = styled.div`
    font-size: 12px;
`;

const Employer = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

const Date = styled.div`
  font-size: 10px;
`;

const ExperienceLeft = styled.div``;

const ExperienceRight = styled.div``;

const City = styled.div`
    font-size: 12px;
`;

const Description = styled.div`
    font-size: 10px;
    color:#847C7C;
`;

const LevelPercent = styled.div`
  width: 135px;
  height: 5px;
  border:none;
  position: relative;
  background: #847C7C;
`;

const SkillPercent = styled.div`
  position: absolute;
  background: #000000;
  height: 5px;
`;

const LeftSide = styled.div`
  color:white;
  font-size: 10px;
  margin:1% 10%;
`;

export default CV;