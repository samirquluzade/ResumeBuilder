import React from 'react';
import styled from "styled-components";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import jsPDF from "jspdf";

const CV = ({data,education,skills,about,link,genPdf}) => {

    const generatePdf = (e) => {

        e.target.parentNode.parentNode.childNodes[0].style.height = '1050px';
        e.target.parentNode.parentNode.childNodes[0].style.paddingTop = 0;
        const html = e.target.parentNode.parentNode.childNodes[0];

        let pdf = new jsPDF('p','pt','a4',true);
        pdf.html(html,{
            html2canvas:{
                scale:0.8,
                height:500
            },
            callback:function(){
                pdf.save('CV.pdf');
                e.target.parentNode.parentNode.childNodes[0].style.height = '745px';
                e.target.parentNode.parentNode.childNodes[0].style.paddingTop = '1%';
            }
        });

    }

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
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAbxJREFUSEvNlv0xBEEQxX8XASJABIgAGRABIkAEiIAMEAEiQASIgBCIgHpVs2r19Uz37l3V6T93Zvq9fv21ExZkkwXhMgZ4DdgANgvpV+AN+BgSxBDgQ+AMELBnInAF3GYIZIAFdNeLMPIrAvuRAhGw5HwEliM0c/4J7AIi4VoLWGAvDWkjLsr5FiASU9YCvgEOKt6fgadytgNsV+4p36qNNLDy+u7cV/XKkZVQKbkHVp03616+axGflwru+/kqsrvSlTMRWjLgp6Xa/3yuAUtGK98RIPlbdgJcmgtKi9KRAlZUlrkrmfHnpUi+VrLA3wPqwV5Nva1JrVawhTI2YhVkN15/Sf67HGvmHhsNlStF3apqDRw75S4AdUmquCSNnFhTu6i6bR+raq8rU25QHwtQzrX+PFO79SfXVLuUR24r6aw1MvfKVgpat3msRdERTEndXfIGSZbIAyDyrkVrUQPBG4MReDReU78+YySvStwxjiLu7nlLoxa1uxSy7eQ5be3n7n51/84CrLct8DRo1E41KT3ZU/L2HWZzbEnoL0RjVaYdHO3pqSDGAstR/4c+aq+5Ag8Gm4fUM4Hq8Q94wVEfAvaQEgAAAABJRU5ErkJggg=="/>
                                    <span>{data[0].address}</span>
                                </Info>
                                }
                                {data[0].phone!=='' &&
                                <Info>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAe9JREFUSEvlluExBEEQhd9FgAjIABEgAkSADIgAEZABIkAEiAAZEAEZUN/VtGpzvTN7u6Puh6nacmd35+vX/ab7JlrQmiyIqxp4WdKBpFdJjy2DLIGBPkjaSMAjSdet4F3gHGq8ZvAInEPfJa06pU3gEfhO0m4CUdttSXuSrlrCczD1fM6gn+n7YUt4DkYdhmLtBE4+lnSR7hPQylCzlRTvSyLttvLaP6UyDGJHNf5KO51LOnO7co63OsowNzwCv0hal3SfTGWbWkC4HC9Y7eeG8kIEpknQrfL75vZRtbUoIzBH5zY94OvsXT36LHd1LlQtJVfjbltvqZnwd3NMurvAmOo0OFZeNV4gKF9rnE+28MBJqbeXevVHAgNAnS3vAZQT5I2kqL93lqQ0nbxqf7QAXDoDEhCqudYCi4fw2jy2o8V++QakneD8AOE5+jtZsQ4XvVv9IUCtaBwYLdxAEgFwEhgsdDM+o77Y22uKgfnBwXdUkvo+K4f/9P8+YIN75ZQA19Z+DuEHpp3VnnfwRzXVXhXKqR3t1BZg/oer85W73Gb79Pj1Vew3JdWMR6u73aOlkgkuNkeZ/V77BR0K5j3UAI8CyJXPQMeA/ea4mAt1vgw8w4TDYDOTbEiqa24mADJCV+MK11+Aa4FN7/8/8DdcP28f3yqwBQAAAABJRU5ErkJggg=="/>&nbsp;
                                    <span>{data[0].phone}</span>
                                </Info>
                                }
                                {data[0].phone2!=='' &&
                                <Info>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXhJREFUSEvtlu01Q0EQhp9UQAeoAB1QgahAVIAK0AEVoIJIBdFB6EAJVMB5HeusyezeuTd7Tn4w5+TPZnef+Xh35o5Yk43WxOUfnGd+AtwB98Bp65KUUi3YSQZrDvfAj8CRE+EFcNMqcgs+AOaVy5VyRb+y9QUL2ARuwXvAIhDODvAa2Ffc4tX4I3DhyvX2wM/AbgX+AkgLbwEHe0Vsn1J+uAlUF3oRj4Gp42ozaAmsdaVxw8D3AZWhiZU61xVwaQjXgNabWAm8/R1dHrWyoGdUEtUmcAbMIpmpjUUvaqX60IELqo6nPhBqMl3z2HtaWjvOGoiFplJUO1wX2Et5Ep8GhtKq0ZkitfVX1qSNJesC60C0jZZE547UCDjBn5wnFlX4LXCeb46CE1ze19ppyZF3QFr4sT7gdEh1k/e2wdSiXxLaELAA8l7wiAMPgL7fftlQcH6Jert+mlhb5n6pXv8NUnVUQGmfXkGqpwTpWouI+zr2tf/vgT8B2Ks8H3YQddoAAAAASUVORK5CYII="/>&nbsp;
                                    <span>{data[0].phone2}</span>
                                </Info>
                                }
                                {data[0].email!=='' &&
                                <Info>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAQRJREFUSEvtlu0RwUAQhp9UQCeoBB3QARWgAyqgAzpBRcyarNnJ3OU+4vgh+y+Z2332fbOXu4ofRfUjLj34a843rT4BU2BYoIM9sNa6FjwDzgWAtuQcuMgLC94Cm8LgHSAcL3gCiO2jjo3cgQVwresEwepEFxfeEOCRCpb140T1qvJm3IoGS9ISsMkx6q1KbfpYNy/PQau1WYHJYg2fepdKV6PRYAGG1IdU2vlMArep18bsmrYtmQX2qXd9S98uzAa71McMneZ1BluLZeBi4yPgWFjn4coBNXN6xS9HUqYz13an1XJ8yX+1ZDgvAgKUM1huIoMC9AOw0rr99baAw+6S/2f1E/vnSh8jOyXlAAAAAElFTkSuQmCC"/>&nbsp;
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
              {genPdf && (<Buttons>
                  <Button className="btn btn-success" onClick={generatePdf}>Download CV</Button>
                  <Link to="/about" className="btn btn-danger">Back to edit</Link>
              </Buttons>
              )}
          </>
    );
};

const ResumeExample = styled.div`
    display: flex;
    flex-direction: row;
    height: 745px;
    padding-top: 1%;
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
  img{
    height: 16px;
  }
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

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1%;
  a{
    margin: 5% 0;
  }
`;

export default CV;