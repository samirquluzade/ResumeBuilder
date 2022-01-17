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
                        <Info>
                            <i class="far fa-envelope-open"></i>&nbsp;&nbsp;
                            <span>smrquluzade@gmail.com</span>
                        </Info>
                        <Info>
                            <i class="fas fa-phone-alt"></i>&nbsp;&nbsp;
                            <span>09292019219</span>
                        </Info>
                        <Info>
                            <i class="fas fa-globe"></i>&nbsp;&nbsp;
                            <span>www.example.com</span>
                        </Info>
                        <Location>
                            <p>Baku,Azerbaijan</p>
                            <i class='bx bx-map bx-flip-horizontal' ></i>
                        </Location>
                    </LeftContact>
                    <LeftEducation>
                        <Rectangle />
                        <Contact>Education</Contact>
                        <Infos>
                            <School>
                                <i class='bx bxs-graduation'></i>&nbsp;&nbsp;
                                <span>BEU</span>
                            </School>
                            <p>BACHELOR</p>
                            <p>2021</p>
                        </Infos>
                        <Infos>
                            <School>
                                <i class='bx bxs-graduation'></i>&nbsp;&nbsp;
                                <span>BEU</span>
                            </School>
                            <p>BACHELOR</p>
                            <p>2021</p>
                        </Infos>
                        <Infos>
                            <School>
                                <i class='bx bxs-graduation'></i>&nbsp;&nbsp;
                                <span>BEU</span>
                            </School>
                            <p>BACHELOR</p>
                            <p>2021</p>
                        </Infos>
                    </LeftEducation>
                </LeftSec>
                <RightSec>
                    <Upper>
                        <FullName>Samir Guluzadeh</FullName>
                        <Spec>Front End Developer</Spec>
                    </Upper>
                    <Middle>
                        <Objective>
                            <Spec>Objective</Spec>
                            <Desc>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium architecto aspernatur aut culpa doloremque eaque eius eos esse est eveniet, impedit inventore ipsam iste itaque, laboriosam laborum nostrum nulla odit quaerat qui reiciendis sint soluta tempora tenetur. Asperiores, repudiandae!
                            </Desc>
                        </Objective>
                        <Experience>
                            <Spec>Experience</Spec>
                            <Job>
                                <LeftJob>
                                    <Title>Front End Developer</Title>
                                    <Date>02/2021 - 09/2021</Date>
                                    <Name>Google</Name>
                                </LeftJob>
                                <RightJob>
                                    Baku
                                </RightJob>
                            </Job>
                            <Job>
                                <LeftJob>
                                    <Title>Front End Developer</Title>
                                    <Date>02/2021 - 09/2021</Date>
                                    <Name>Google</Name>
                                </LeftJob>
                                <RightJob>
                                    Baku
                                </RightJob>
                            </Job>
                            <Job>
                                <LeftJob>
                                    <Title>Front End Developer</Title>
                                    <Date>02/2021 - 09/2021</Date>
                                    <Name>Google</Name>
                                </LeftJob>
                                <RightJob>
                                    Baku
                                </RightJob>
                            </Job>
                        </Experience>
                        <Skills>
                            <Spec>Skills</Spec>
                            <Skill>
                                <SkillPercent>
                                    <LevelPercent />
                                </SkillPercent>
                                <SkillName>Adobe Photoshop</SkillName>
                            </Skill>
                            <Skill>
                                <SkillPercent>
                                    <LevelPercent />
                                </SkillPercent>
                                <SkillName>Adobe Photoshop</SkillName>
                            </Skill>
                            <Skill>
                                <SkillPercent>
                                    <LevelPercent />
                                </SkillPercent>
                                <SkillName>Adobe Photoshop</SkillName>
                            </Skill>
                            <Skill>
                                <SkillPercent>
                                    <LevelPercent />
                                </SkillPercent>
                                <SkillName>Adobe Photoshop</SkillName>
                            </Skill>
                        </Skills>
                    </Middle>
                </RightSec>
            </Secs>
        </ResumeExample>
    )
}

const ResumeExample = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 750px;
  padding-top: 1%;
`;
const Secs = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
`;
const Objective = styled.div``;
const Skill = styled.div`
  padding-top: 1%;
  display: flex;
  align-items: center;
`;
const SkillPercent = styled.div`
  width: 50%;
  height: 13px;
  border:1px solid #9d32ad;
  position: relative;
  background: transparent;
`;

const LevelPercent = styled.div`
  position: absolute;
  background: #9d32ad;
  height: 12px;
  width: 50%;
  text-align: center;
  font-size: 10px;
  margin-top: -1px;
`;
const Skills = styled.div`
  
`;
const SkillName = styled.div`
  color:#6b6969;
  padding-left: 2%;
  font-size: 13px;
`;
const Name = styled.div`
  font-size: 14px;
  color:#6b6969;
`;
const Date = styled.div`
  font-size: 14px;
  color:#6b6969;
`;
const Job = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2%;
`;
const LeftJob = styled.div``;
const RightJob = styled.div`
  color:#6b6969;
  display: flex;
  align-items: center;
`;
const Experience = styled.div`
  padding-top: 3%;
`;
const Title = styled.div`
  font-size: 16px;
  color:#6b6969;
`;
const LeftSec = styled.div`
  width: 32%;
  background-color: #9d32ad;
  height: auto;
  display: flex;
  flex-direction: column;
`;
const RightSec = styled.div`
  width: 68%;
  background-color: #ffffff;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0 2%;
`;
const FullName = styled.div`
    padding-top: 3%;
    color:#6b6969;
    text-transform: uppercase;
    font-size: 44px;
    letter-spacing: 1px;
`;
const Upper = styled.div`
  &::after{
    content: "";
    margin-top: 2%;
    height: 1px;
    width: 100%;
    display: block;
    background-color: #6b6969;
  }
`;
const Desc = styled.div`
  color:#6b6969;
`;
const Spec = styled.div`
  text-transform: uppercase;
  font-size: 22px;
  color:#9d32ad;
`;
const Middle = styled.div`
    padding-top: 3%;
`;
const LeftImg = styled.div`
  img{
    height: 246px;
  }
  width: 100%;
`;
const LeftContact = styled.div`
    display: flex;
    flex-direction: column;
`;
const LeftEducation = styled.div`
  display: flex;
  flex-direction: column;
`;
const Contact = styled.h3`
    text-align: center;
    letter-spacing: 5px;
    color:#ffffff;
    text-transform: uppercase;
    font-weight: 400;
    &::after{
        content: "";
        width: 70%;
        background-color: #ffffff;
        height: 1px;
        display: block;
        margin: 1% auto;
    }
`;
const Info = styled.div`
  margin-left: 7%;
  i{
    color:white;
  }
  span{
    font-size: 12px;
    color:white;
  }
  padding-bottom: 4%;
`;
const Location = styled.div`
  border-left: 123px solid transparent;
  border-right: 123px solid transparent;
  border-top: 60px solid #9d32ad;
  width: 0;
  height: 0;
  background-color: white;
  color: white;
  text-align: center;
  i{
    font-size: 32px;
    margin-left: -15px;
  }
  p{
    font-size: 13px;
    margin-top: -60px;
    margin-left: -45px;
  }
`;
const Rectangle = styled.div`
  border-left: 124px solid transparent;
  border-right: 124px solid transparent;
  border-top: 50px solid #ffffff;
  width: 0;
  height: 0;
`;
const Infos = styled.div`
  margin-left: 7%;
  display: flex;
  flex-direction: column;
  i{
    color:white;
    font-size: 18px;
  }
  span{
    font-size: 12px;
    text-transform: uppercase;
    color:white;
  }
  p{
    color:white;
    margin-left: 11%;
    font-size: 10px;
  }
  padding-bottom: 2%;
`;
const School = styled.div`
  display: flex;
  flex-direction: row;
`;
export default CV3;